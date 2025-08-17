const functions = require("firebase-functions");
const admin = require("firebase-admin");
const cors = require("cors");
const stripe = require("stripe")(
  "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"
);

admin.initializeApp();

const corsHandler = cors({
  origin: "https://authenticbaseballequipment.com",
  methods: ["POST"],
  allowedHeaders: ["Content-Type"],
  optionsSuccessStatus: 204,
});

const PRICE_ID_BAT = "price_1RWmXRDuV3Gnd5FXwwUdth1S";
const PRICE_ID_INSURANCE = "price_1RWmXODuV3Gnd5FX0PdFPAnt";

exports.createCheckoutSession = functions.https.onRequest((req, res) => {
  corsHandler(req, res, async () => {
    if (req.method !== "POST") {
      return res.status(405).send("Method Not Allowed");
    }

    try {
      const { items, includeInsurance } = req.body;
      if (!items || !Array.isArray(items) || items.length === 0) {
        return res.status(400).json({ error: "Invalid or missing items" });
      }

      const lineItems = [];

      items.forEach((item) => {
        lineItems.push({
          price: PRICE_ID_BAT,
          quantity: item.quantity || 1,
        });

        if (item.insurance) {
          lineItems.push({
            price: PRICE_ID_INSURANCE,
            quantity: item.quantity || 1,
          });
        }
      });

      const metadata = {};
      items.forEach((item, i) => {
        metadata[`item_${i}_name`] = item.name || "Custom Bat";
        metadata[`item_${i}_quantity`] = item.quantity?.toString();
        metadata[`item_${i}_price`] = item.price?.toString();

        (item.images || []).forEach((img, j) => {
          metadata[`item_${i}_image_${j}_view`] = img.view || `View ${j + 1}`;
          metadata[`item_${i}_image_${j}_src`] = img.src;
        });

        Object.entries(item.customOptions || {}).forEach(([key, val]) => {
          const value =
            typeof val === "object" ? val.label || val.value || "" : val;
          metadata[`item_${i}_option_${key}`] = value.toString().slice(0, 400);
        });
      });

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: lineItems,
        mode: "payment",
        automatic_tax: { enabled: true },
        shipping_address_collection: {
          allowed_countries: ["US"],
        },
        success_url: `${req.headers.origin}/success`,
        cancel_url: `${req.headers.origin}/cart`,
        metadata,
      });

      res.status(200).json({ id: session.id });
    } catch (err) {
      console.error("❌ Stripe checkout error:", err);
      res.status(500).json({ error: err.message || "Stripe error" });
    }
  });
});
