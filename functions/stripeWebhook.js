const functions = require("firebase-functions");
const stripe = require("stripe")(
  "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"
);
const { sendOrderEmail } = require("./sendOrderEmail");

const endpointSecret = "whsec_u3Eu04sHf5yfc28IqNZKp8sRsOcUpaG6";

exports.stripeWebhook = functions.https.onRequest((req, res) => {
  let event;

  try {
    const sig = req.headers["stripe-signature"];
    event = stripe.webhooks.constructEvent(req.rawBody, sig, endpointSecret);
  } catch (err) {
    console.error(
      "❌ Stripe webhook signature verification failed:",
      err.message
    );
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object;

    try {
      const email =
        session.customer_details?.email || session.customer_email || null;
      const shipping = session.shipping || null;

      const grouped = {};

      Object.entries(session.metadata || {}).forEach(([key, value]) => {
        const match = key.match(/^item_(\d+)_(.+)$/);
        if (!match) return;

        const [, index, field] = match;
        if (!grouped[index]) grouped[index] = {};

        if (field.startsWith("image_")) {
          const parts = field.split("_"); // e.g., image_0_src
          if (parts.length === 3) {
            const [, imgIndex, subField] = parts;
            const imgIdx = parseInt(imgIndex);
            grouped[index].images = grouped[index].images || [];
            grouped[index].images[imgIdx] = grouped[index].images[imgIdx] || {};
            grouped[index].images[imgIdx][subField] = value;
          }
        } else if (field.startsWith("option_")) {
          const optionKey = field.slice(7);
          grouped[index].customOptions = grouped[index].customOptions || {};
          grouped[index].customOptions[optionKey] = value;
        } else {
          grouped[index][field] = value;
        }
      });

      const items = Object.values(grouped).map((item) => ({
        ...item,
        quantity: parseInt(item.quantity) || 1,
        price: parseFloat(item.price) || 0,
      }));

      console.log(
        "📦 Parsed Items from Metadata:",
        JSON.stringify(items, null, 2)
      );

      sendOrderEmail(items, email, shipping)
        .then(() => {
          console.log("✅ Order email sent from webhook.");
          res.status(200).send("Success");
        })
        .catch((err) => {
          console.error("❌ Failed to send order email from webhook:", err);
          res.status(500).send("Failed");
        });
    } catch (err) {
      console.error("❌ Failed to parse metadata:", err);
      res.status(400).send("Invalid cart data");
    }
  } else {
    res.status(200).send("Event ignored");
  }
});
