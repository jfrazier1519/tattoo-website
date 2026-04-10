import React, { useState } from "react";
import Button from "../shared/Button";
import { useSiteContent } from "../../hooks/useSiteContent.js";

const ContactForm = ({ cardMode = false }) => {
  const { forms } = useSiteContent();
  const fc = forms.contact;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    tattooType: "",
    bodyLocation: "",
    size: "",
    budget: "",
    preferredDate: "",
    description: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        tattooType: "",
        bodyLocation: "",
        size: "",
        budget: "",
        preferredDate: "",
        description: "",
        message: "",
      });
    }, 5000);
  };

  const inputClass = cardMode
    ? "w-full p-3 rounded-lg bg-cottage-bg-card border border-cottage-bg-border focus:outline-none focus:ring-2 focus:ring-cottage-green-primary text-white placeholder-cottage-text-subtle"
    : "w-full p-3 rounded-lg bg-cottage-bg-card border border-cottage-bg-border focus:outline-none focus:ring-2 focus:ring-cottage-green-primary text-white placeholder-cottage-text-subtle";
  const textareaClass = cardMode
    ? "w-full p-3 rounded-lg bg-cottage-bg-card border border-cottage-bg-border focus:outline-none focus:ring-2 focus:ring-cottage-green-primary text-white placeholder-cottage-text-subtle"
    : "w-full p-3 rounded-lg bg-cottage-bg-card border border-cottage-bg-border focus:outline-none focus:ring-2 focus:ring-cottage-green-primary text-white placeholder-cottage-text-subtle";

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block mb-2 font-semibold text-cottage-green-primary">
            {fc.labels.name}
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className={inputClass}
            placeholder={fc.placeholders.name}
          />
        </div>
        <div>
          <label className="block mb-2 font-semibold text-cottage-green-primary">
            {fc.labels.email}
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className={inputClass}
            placeholder={fc.placeholders.email}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block mb-2 font-semibold text-cottage-green-primary">
            {fc.labels.phone}
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={inputClass}
            placeholder={fc.placeholders.phone}
          />
        </div>
        <div>
          <label className="block mb-2 font-semibold text-cottage-green-primary">
            {fc.labels.preferredDate}
          </label>
          <input
            type="date"
            name="preferredDate"
            value={formData.preferredDate}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block mb-2 font-semibold text-cottage-green-primary">
            {fc.labels.tattooType}
          </label>
          <select
            name="tattooType"
            value={formData.tattooType}
            onChange={handleChange}
            required
            className={inputClass}
          >
            <option value="">{fc.selectPlaceholder.tattooType}</option>
            {fc.tattooTypeOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block mb-2 font-semibold text-cottage-green-primary">
            {fc.labels.bodyLocation}
          </label>
          <select
            name="bodyLocation"
            value={formData.bodyLocation}
            onChange={handleChange}
            className={inputClass}
          >
            <option value="">{fc.selectPlaceholder.bodyLocation}</option>
            {fc.bodyLocationOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block mb-2 font-semibold text-cottage-green-primary">
            {fc.labels.size}
          </label>
          <select
            name="size"
            value={formData.size}
            onChange={handleChange}
            className={inputClass}
          >
            <option value="">{fc.selectPlaceholder.size}</option>
            {fc.sizeOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block mb-2 font-semibold text-cottage-green-primary">
            {fc.labels.budget}
          </label>
          <select
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className={inputClass}
          >
            <option value="">{fc.selectPlaceholder.budget}</option>
            {fc.budgetOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className="block mb-2 font-semibold text-cottage-green-primary">
          {fc.labels.description}
        </label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
          rows={4}
          className={textareaClass}
          placeholder={fc.placeholders.description}
        />
      </div>

      <div>
        <label className="block mb-2 font-semibold text-cottage-green-primary">
          {fc.labels.message}
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={3}
          className={textareaClass}
          placeholder={fc.placeholders.message}
        />
      </div>

      <Button
        type="submit"
        variant="primary"
        size="lg"
        className="w-full"
      >
        {fc.submit}
      </Button>

      {submitted && (
        <div className="mt-4 p-4 bg-cottage-green-primary/20 border border-cottage-green-primary/30 rounded-lg text-cottage-green-primary font-semibold text-center">
          {fc.success}
        </div>
      )}

      <p className="text-sm text-cottage-text-subtle text-center">
        {fc.footerNote}
      </p>
    </form>
  );
};

export default ContactForm;
