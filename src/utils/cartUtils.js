export const hasInsurance = (customOptions = {}) => {
  for (const [key, val] of Object.entries(customOptions)) {
    if (!key.toLowerCase().includes("insurance")) continue;

    const raw = typeof val === "object" ? val.label || val.value : val;
    const value = (raw || "").toLowerCase().trim();

    // ✅ Reject obvious negative selections
    if (value.includes("no") || value.includes("none")) return false;

    // ✅ Accept anything that positively includes "insurance"
    if (value.includes("insurance")) return true;
  }

  return false;
};
