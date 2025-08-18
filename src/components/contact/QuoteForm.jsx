import React, { useState } from "react";
import Button from "../shared/Button";
import { FaPalette, FaPaperPlane } from "react-icons/fa";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  tattooType: "",
  placement: "",
  size: "",
  style: "",
  message: "",
  terms: false,
};

const tattooTypeOptions = [
  { value: "", label: "Choose one..." },
  { value: "custom", label: "Custom Design" },
  { value: "flash", label: "Flash Art" },
  { value: "coverup", label: "Cover-up" },
  { value: "touchup", label: "Touch-up" },
  { value: "other", label: "Other" },
];

const placementOptions = [
  { value: "", label: "Choose one..." },
  { value: "arm", label: "Arm" },
  { value: "leg", label: "Leg" },
  { value: "back", label: "Back" },
  { value: "chest", label: "Chest" },
  { value: "shoulder", label: "Shoulder" },
  { value: "ankle", label: "Ankle" },
  { value: "wrist", label: "Wrist" },
  { value: "other", label: "Other" },
];

const sizeOptions = [
  { value: "", label: "Choose one..." },
  { value: "small", label: "Small (1-3 inches)" },
  { value: "medium", label: "Medium (3-6 inches)" },
  { value: "large", label: "Large (6+ inches)" },
  { value: "sleeve", label: "Sleeve" },
  { value: "backpiece", label: "Back Piece" },
];

const styleOptions = [
  { value: "", label: "Choose one..." },
  { value: "gothic", label: "Gothic" },
  { value: "dark-cute", label: "Dark & Cute" },
  { value: "victorian", label: "Victorian" },
  { value: "traditional", label: "Traditional" },
  { value: "realistic", label: "Realistic" },
  { value: "other", label: "Other" },
];

const QuoteForm = () => {
  const [values, setValues] = useState(initialState);
  const [status, setStatus] = useState(null);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setValues((v) => ({ ...v, [name]: type === "checkbox" ? checked : value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // TODO: Add validation and submission logic
    setStatus("success");
    setMessage("Your quote request has been sent! I'll get back to you soon.");
    setValues(initialState);
    setTimeout(() => {
      setStatus(null);
      setMessage("");
    }, 5000);
  };

  return (
    <div className="w-full">
      <form className="w-full flex flex-col gap-6" onSubmit={handleSubmit}>
        {/* Title */}
        <div className="text-center mb-6">
          <div className="w-12 h-12 bg-gradient-to-r from-cottage-green-hover to-cottage-sage-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-victorian">
            <FaPalette className="w-6 h-6 text-cottage-cream-primary" />
          </div>
          <h3 className="text-2xl font-gothic font-bold text-cottage-cream-primary">
            Request Your Quote
          </h3>
          <p className="text-cottage-cream-secondary font-elegant">
            Let's discuss your tattoo vision
          </p>
        </div>

        {status && (
          <div
            className={`mb-4 px-4 py-3 rounded-lg text-center font-elegant ${
              status === "success"
                ? "bg-cottage-green-primary/20 text-cottage-green-light border border-cottage-green-primary/30"
                : "bg-cottage-green-hover/20 text-cottage-green-light border border-cottage-green-hover/30"
            }`}
          >
            {message}
          </div>
        )}

        {/* First/Last Name */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2 text-cottage-cream-primary font-elegant">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              value={values.firstName}
              onChange={handleChange}
              placeholder="First Name"
              required
              className="w-full rounded-lg border border-cottage-sage-primary/30 bg-cottage-bg-paper/50 px-4 py-3 focus:ring-2 focus:ring-cottage-teal-primary focus:border-cottage-teal-primary text-cottage-cream-secondary placeholder-cottage-text-subtle transition-all duration-300 font-elegant"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2 text-cottage-cream-primary font-elegant">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              value={values.lastName}
              onChange={handleChange}
              placeholder="Last Name"
              required
              className="w-full rounded-lg border border-cottage-sage-primary/30 bg-cottage-bg-paper/50 px-4 py-3 focus:ring-2 focus:ring-cottage-teal-primary focus:border-cottage-teal-primary text-cottage-cream-secondary placeholder-cottage-text-subtle transition-all duration-300 font-elegant"
            />
          </div>
        </div>

        {/* Email/Phone */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2 text-cottage-cream-primary font-elegant">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              placeholder="Email"
              required
              className="w-full rounded-lg border border-cottage-sage-primary/30 bg-cottage-bg-paper/50 px-4 py-3 focus:ring-2 focus:ring-cottage-teal-primary focus:border-cottage-teal-primary text-cottage-cream-secondary placeholder-cottage-text-subtle transition-all duration-300 font-elegant"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2 text-cottage-cream-primary font-elegant">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={values.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="w-full rounded-lg border border-cottage-sage-primary/30 bg-cottage-bg-paper/50 px-4 py-3 focus:ring-2 focus:ring-cottage-teal-primary focus:border-cottage-teal-primary text-cottage-cream-secondary placeholder-cottage-text-subtle transition-all duration-300 font-elegant"
            />
          </div>
        </div>

        {/* Tattoo Type */}
        <div>
          <label className="block text-sm font-medium mb-2 text-cottage-cream-primary font-elegant">
            Tattoo Type
          </label>
          <select
            name="tattooType"
            value={values.tattooType}
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-cottage-sage-primary/30 bg-cottage-bg-paper/50 px-4 py-3 focus:ring-2 focus:ring-cottage-teal-primary focus:border-cottage-teal-primary text-cottage-cream-secondary transition-all duration-300 font-elegant appearance-none"
          >
            {tattooTypeOptions.map((opt) => (
              <option
                key={opt.value}
                value={opt.value}
                className="bg-cottage-bg-paper text-cottage-cream-secondary"
              >
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        {/* Placement and Size */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2 text-cottage-cream-primary font-elegant">
              Placement
            </label>
            <select
              name="placement"
              value={values.placement}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-cottage-sage-primary/30 bg-cottage-bg-paper/50 px-4 py-3 focus:ring-2 focus:ring-cottage-teal-primary focus:border-cottage-teal-primary text-cottage-cream-secondary transition-all duration-300 font-elegant appearance-none"
            >
              {placementOptions.map((opt) => (
                <option
                  key={opt.value}
                  value={opt.value}
                  className="bg-cottage-bg-paper text-cottage-cream-secondary"
                >
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2 text-cottage-cream-primary font-elegant">
              Size
            </label>
            <select
              name="size"
              value={values.size}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-cottage-sage-primary/30 bg-cottage-bg-paper/50 px-4 py-3 focus:ring-2 focus:ring-cottage-teal-primary focus:border-cottage-teal-primary text-cottage-cream-secondary transition-all duration-300 font-elegant appearance-none"
            >
              {sizeOptions.map((opt) => (
                <option
                  key={opt.value}
                  value={opt.value}
                  className="bg-cottage-bg-paper text-cottage-cream-secondary"
                >
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Style */}
        <div>
          <label className="block text-sm font-medium mb-2 text-cottage-cream-primary font-elegant">
            Preferred Style
          </label>
          <select
            name="style"
            value={values.style}
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-cottage-sage-primary/30 bg-cottage-bg-paper/50 px-4 py-3 focus:ring-2 focus:ring-cottage-teal-primary focus:border-cottage-teal-primary text-cottage-cream-secondary transition-all duration-300 font-elegant appearance-none"
          >
            {styleOptions.map((opt) => (
              <option
                key={opt.value}
                value={opt.value}
                className="bg-cottage-bg-paper text-cottage-cream-secondary"
              >
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-medium mb-2 text-cottage-cream-primary font-elegant">
            Tell me about your vision
          </label>
          <textarea
            name="message"
            value={values.message}
            onChange={handleChange}
            rows={4}
            placeholder="Describe your tattoo idea, any specific elements you want, colors, or inspiration..."
            className="w-full rounded-lg border border-cottage-sage-primary/30 bg-cottage-bg-paper/50 px-4 py-3 focus:ring-2 focus:ring-cottage-teal-primary focus:border-cottage-teal-primary text-cottage-cream-secondary placeholder-cottage-text-subtle transition-all duration-300 font-elegant resize-none"
            required
          />
        </div>

        {/* Terms */}
        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            name="terms"
            checked={values.terms}
            onChange={handleChange}
            className="accent-cottage-teal-primary rounded border-cottage-sage-primary/30"
            required
          />
          <span className="text-sm text-cottage-cream-secondary font-elegant">
            I agree to the terms and conditions
          </span>
        </div>

        {/* Submit */}
        <Button
          type="submit"
          size="xl"
          className="mt-4 bg-gradient-to-r from-cottage-green-hover to-cottage-sage-primary hover:from-cottage-burgundy-hover hover:to-cottage-sage-secondary text-white font-bold shadow-victorian border border-cottage-teal-primary/30"
        >
          <FaPaperPlane className="w-5 h-5 mr-2" />
          Send Quote Request
        </Button>
      </form>
    </div>
  );
};

export default QuoteForm;
