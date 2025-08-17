/**
 * Submits form data to your serverless function (Brevo email handler)
 * @param {string} formType - Type of form (e.g. "general", "machine", etc.)
 * @param {Object} formData - The collected form data
 * @returns {Promise} API response
 */
export const submitForm = async (formType, formData) => {
  const endpoint = import.meta.env.VITE_CONTACT_FUNCTION_URL;

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        formType,
        ...formData,
      }),
    });

    const result = await response.json();
    return result;
  } catch (err) {
    console.error("❌ Form submission error:", err);
    return {
      success: false,
      message: "An error occurred. Please try again later.",
    };
  }
};
