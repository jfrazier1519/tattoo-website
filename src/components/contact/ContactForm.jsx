import React, { useState } from "react";
import Button from "../shared/Button";
import { useSiteContent } from "../../hooks/useSiteContent.js";

const labelCls =
  "mb-2 block text-[11px] font-medium uppercase tracking-[0.14em] text-stone-500";

const fieldCls =
  "w-full rounded-none border border-white/[0.08] bg-stone-950/80 px-3 py-2.5 text-sm text-stone-200 placeholder:text-stone-600 transition-colors focus:border-cottage-green-primary/45 focus:outline-none focus:ring-2 focus:ring-cottage-green-primary/20";

const ContactForm = () => {
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

  const inputClass = fieldCls;
  const textareaClass = `${fieldCls} min-h-[6rem] resize-y`;

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <label className={labelCls} htmlFor="cf-name">
            {fc.labels.name}
          </label>
          <input
            id="cf-name"
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
          <label className={labelCls} htmlFor="cf-email">
            {fc.labels.email}
          </label>
          <input
            id="cf-email"
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

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <label className={labelCls} htmlFor="cf-phone">
            {fc.labels.phone}
          </label>
          <input
            id="cf-phone"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={inputClass}
            placeholder={fc.placeholders.phone}
          />
        </div>
        <div>
          <label className={labelCls} htmlFor="cf-date">
            {fc.labels.preferredDate}
          </label>
          <input
            id="cf-date"
            type="date"
            name="preferredDate"
            value={formData.preferredDate}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <label className={labelCls} htmlFor="cf-tattooType">
            {fc.labels.tattooType}
          </label>
          <select
            id="cf-tattooType"
            name="tattooType"
            value={formData.tattooType}
            onChange={handleChange}
            required
            className={`${inputClass} appearance-none bg-stone-950/80`}
          >
            <option value="">{fc.selectPlaceholder.tattooType}</option>
            {fc.tattooTypeOptions.map((opt) => (
              <option
                key={opt.value}
                value={opt.value}
                className="bg-stone-900 text-stone-200"
              >
                {opt.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className={labelCls} htmlFor="cf-bodyLocation">
            {fc.labels.bodyLocation}
          </label>
          <select
            id="cf-bodyLocation"
            name="bodyLocation"
            value={formData.bodyLocation}
            onChange={handleChange}
            className={`${inputClass} appearance-none bg-stone-950/80`}
          >
            <option value="">{fc.selectPlaceholder.bodyLocation}</option>
            {fc.bodyLocationOptions.map((opt) => (
              <option
                key={opt.value}
                value={opt.value}
                className="bg-stone-900 text-stone-200"
              >
                {opt.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <label className={labelCls} htmlFor="cf-size">
            {fc.labels.size}
          </label>
          <select
            id="cf-size"
            name="size"
            value={formData.size}
            onChange={handleChange}
            className={`${inputClass} appearance-none bg-stone-950/80`}
          >
            <option value="">{fc.selectPlaceholder.size}</option>
            {fc.sizeOptions.map((opt) => (
              <option
                key={opt.value}
                value={opt.value}
                className="bg-stone-900 text-stone-200"
              >
                {opt.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className={labelCls} htmlFor="cf-budget">
            {fc.labels.budget}
          </label>
          <select
            id="cf-budget"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className={`${inputClass} appearance-none bg-stone-950/80`}
          >
            <option value="">{fc.selectPlaceholder.budget}</option>
            {fc.budgetOptions.map((opt) => (
              <option
                key={opt.value}
                value={opt.value}
                className="bg-stone-900 text-stone-200"
              >
                {opt.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className={labelCls} htmlFor="cf-description">
          {fc.labels.description}
        </label>
        <textarea
          id="cf-description"
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
        <label className={labelCls} htmlFor="cf-message">
          {fc.labels.message}
        </label>
        <textarea
          id="cf-message"
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

      {submitted ? (
        <div
          className="mt-4 rounded-none border border-cottage-green-primary/25 bg-cottage-green-primary/10 px-4 py-3 text-center text-sm text-stone-200"
          role="status"
        >
          {fc.success}
        </div>
      ) : null}

      <p className="text-center text-sm text-stone-500">{fc.footerNote}</p>
    </form>
  );
};

export default ContactForm;
