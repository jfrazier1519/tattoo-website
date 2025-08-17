import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../state/cartSlice";

const Success = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);

  useEffect(() => {
    if (items.length > 0) {
      console.log("🧹 Clearing cart on success page...");
      dispatch(clearCart());
    } else {
      console.log("✅ Cart already empty on success page.");
    }
  }, [dispatch, items]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-center px-6">
      <h1 className="text-4xl md:text-5xl font-serif text-green-600 mb-4 uppercase tracking-wide">
        Order Confirmed
      </h1>
      <p className="text-lg text-gray-700 mb-6 max-w-xl">
        Thank you for customizing your bat! We've received your order and will
        begin crafting it shortly. A confirmation email will be sent soon.
      </p>
      <Link
        to="/"
        className="bg-[#0f0c1d] text-white px-6 py-3 font-serif uppercase tracking-wide rounded shadow hover:bg-black transition"
      >
        Return Home
      </Link>
    </div>
  );
};

export default Success;
