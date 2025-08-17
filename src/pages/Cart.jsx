import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, updateQuantity, clearCart } from "../state/cartSlice";
import { Link } from "react-router-dom";
import { hasInsurance } from "../utils/cartUtils";

const INSURANCE_PRICE = 69.99;
const BASE_PRICE = 199.99;

const Cart = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [modalImages, setModalImages] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const getItemTotal = (item) => {
    const insurance = hasInsurance(item.customOptions) ? INSURANCE_PRICE : 0;
    return (BASE_PRICE + insurance) * item.quantity;
  };

  const subtotal = items.reduce((total, item) => total + getItemTotal(item), 0);

  const handleQuantityChange = (index, value) => {
    const qty = parseInt(value);
    if (!isNaN(qty) && qty > 0) {
      dispatch(updateQuantity({ index, quantity: qty }));
    }
  };

  const renderOption = (key, val) => {
    if (typeof val === "object" && val !== null) {
      const isHexColor =
        typeof val.value === "string" && /^#[0-9A-F]{6}$/i.test(val.value);

      if (isHexColor) {
        return (
          <div className="flex items-center gap-2">
            <strong>{key}:</strong>
            <div
              className="w-4 h-4 rounded-full border border-gray-400"
              style={{ backgroundColor: val.value }}
            />
            <span>{val.value}</span>
          </div>
        );
      }

      if (val.imageUrl && !val.value) {
        return (
          <>
            <strong>{key}:</strong>{" "}
            <img
              src={val.imageUrl}
              alt={val.label || "Uploaded"}
              className="w-12 h-12 object-contain inline-block border rounded ml-2"
            />
          </>
        );
      }

      if (val.textColor || val.font) {
        return (
          <div className="flex items-center gap-2">
            <strong>{key}:</strong>
            <span className="font-semibold">{val.value || "—"}</span>
            {val.textColor && (
              <>
                <div
                  className="w-4 h-4 rounded-full border border-gray-400"
                  style={{ backgroundColor: val.textColor }}
                />
                <span className="text-xs text-gray-600">{val.textColor}</span>
              </>
            )}
            {val.font && (
              <span className="text-xs text-gray-600 italic ml-2">
                {val.font}
              </span>
            )}
          </div>
        );
      }

      if (val.label || val.value) {
        return (
          <>
            <strong>{key}:</strong> {val.label || val.value}
          </>
        );
      }

      return (
        <>
          <strong>{key}:</strong> {JSON.stringify(val)}
        </>
      );
    }

    return (
      <>
        <strong>{key}:</strong> {val}
      </>
    );
  };

  return (
    <>
      <main className="bg-accent text-secondary pt-32 pb-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-serif uppercase tracking-wide mb-10 text-center">
            Your Cart
          </h1>

          {items.length === 0 ? (
            <p className="text-center text-textPrimary">Your cart is empty.</p>
          ) : (
            <>
              <div className="grid gap-6">
                {items.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col md:flex-row items-center bg-white border-[2px] border-secondary/50 shadow p-4 gap-4"
                  >
                    <img
                      src={item.batImages?.[0]?.src || ""}
                      alt={`Bat Preview - ${
                        item.batImages?.[0]?.view || "Front"
                      }`}
                      className="w-32 h-32 object-contain border rounded cursor-pointer"
                      onClick={() => {
                        setModalImages(item.batImages || []);
                        setShowModal(true);
                      }}
                    />
                    <p className="text-xs text-center text-textSecondary mt-1">
                      {item.batImages?.[0]?.view || "Front"} View
                    </p>

                    <div className="flex-1 w-full">
                      <h3 className="text-xl font-serif uppercase">
                        {item.name || "Custom Bat"}
                      </h3>

                      {item.customOptions && (
                        <div className="text-sm text-textSecondary mt-2">
                          {expandedIndex === index ? (
                            <>
                              <ul className="space-y-1 mt-2">
                                {Object.entries(item.customOptions).map(
                                  ([key, val], i) => (
                                    <li key={i}>{renderOption(key, val)}</li>
                                  )
                                )}
                              </ul>
                              <button
                                className="text-sm text-blue-600 underline mt-2"
                                onClick={() => setExpandedIndex(null)}
                              >
                                Show Less
                              </button>
                            </>
                          ) : (
                            <button
                              className="text-sm underline mt-1"
                              onClick={() => setExpandedIndex(index)}
                            >
                              Show Details
                            </button>
                          )}
                        </div>
                      )}

                      <p className="mt-2 font-bold">
                        ${getItemTotal(item).toFixed(2)}
                      </p>
                      {hasInsurance(item.customOptions) && (
                        <p className="text-sm text-green-600 mt-1">
                          + Insurance Coverage: ${INSURANCE_PRICE.toFixed(2)}
                        </p>
                      )}
                    </div>

                    <div className="flex items-center gap-2">
                      <input
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={(e) =>
                          handleQuantityChange(index, e.target.value)
                        }
                        className="w-16 border px-2 py-1 text-center"
                      />
                      <button
                        onClick={() => dispatch(removeFromCart(index))}
                        className="text-red-600 hover:underline text-sm"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Summary */}
              <div className="mt-12 text-right">
                <p className="text-lg font-serif mb-4">
                  Subtotal:{" "}
                  <span className="font-bold">${subtotal.toFixed(2)}</span>
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-end">
                  <button
                    onClick={() => dispatch(clearCart())}
                    className="border-2 border-secondary px-6 py-2 uppercase font-serif text-sm hover:bg-secondary hover:text-white transition"
                  >
                    Clear Cart
                  </button>
                  <Link
                    to="/checkout"
                    className="bg-secondary text-white px-6 py-2 uppercase font-serif text-sm hover:bg-black transition text-center"
                  >
                    Proceed to Checkout
                  </Link>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Modal */}
        {showModal && modalImages.length > 0 && (
          <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center overflow-y-auto px-4 py-8">
            <div className="bg-white rounded shadow-lg w-full max-w-4xl max-h-full overflow-y-auto">
              <div className="flex justify-end p-4">
                <button
                  onClick={() => setShowModal(false)}
                  className="text-sm text-gray-500 hover:text-black"
                >
                  Close ✕
                </button>
              </div>
              <div className="flex flex-col gap-6 px-6 pb-10">
                {modalImages.map((img, i) => (
                  <div key={i} className="text-center">
                    <img
                      src={img.src}
                      alt={img.view || `View ${i + 1}`}
                      className="w-full h-[600px] object-contain border rounded shadow"
                    />
                    <p className="text-sm mt-2 text-textSecondary font-medium">
                      {img.view || `View ${i + 1}`}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>
      <div className="h-[2px] w-full bg-secondary" />
    </>
  );
};

export default Cart;
