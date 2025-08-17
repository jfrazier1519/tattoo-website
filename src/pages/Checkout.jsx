// Checkout.jsx
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { loadStripe } from "@stripe/stripe-js";
import { hasInsurance } from "../utils/cartUtils";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

const Checkout = () => {
  const items = useSelector((state) => state.cart.items);

  useEffect(() => {
    const redirectToStripe = async () => {
      const stripe = await stripePromise;
      const endpoint = import.meta.env.VITE_STRIPE_FUNCTION_URL;

      console.log("📦 Sending cart items to checkout:", items);

      const simplifiedItems = items.map((item) => {
        const basePrice = 199.99;
        const insurance = hasInsurance(item.customOptions);
        const totalPrice =
          (basePrice + (insurance ? 69.99 : 0)) * item.quantity;

        return {
          name: item.name || "Custom Bat",
          price: totalPrice,
          quantity: item.quantity,
          insurance,
          images: (item.batImages || [])
            .filter((img) => img?.fullRes)
            .map((img) => ({
              view: img.view || "Unknown",
              src: img.fullRes,
            })),
          customOptions: Object.entries(item.customOptions || {}).reduce(
            (acc, [key, val]) => {
              acc[key] =
                typeof val === "object" ? val.label || val.value || "" : val;
              return acc;
            },
            {}
          ),
        };
      });

      try {
        const response = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            items: simplifiedItems,
          }),
        });

        const text = await response.text();

        try {
          const data = JSON.parse(text);
          if (data.id) {
            const result = await stripe.redirectToCheckout({
              sessionId: data.id,
            });
            if (result.error) {
              console.error("Stripe redirect error:", result.error.message);
            }
          } else {
            console.error(
              "Checkout session creation failed:",
              data.error || data
            );
          }
        } catch (err) {
          console.error("❌ Failed to parse JSON response:", err);
          console.error(text);
        }
      } catch (err) {
        console.error("❌ Network error:", err);
      }
    };

    redirectToStripe();
  }, [items]);

  return (
    <main className="pt-40 text-center text-textPrimary px-6">
      <h1 className="text-2xl font-bold mb-4">Redirecting to checkout...</h1>
      <p className="text-sm">Please wait while we transfer you to Stripe.</p>
    </main>
  );
};

export default Checkout;
