import React, { useState } from "react";
import Button from "../shared/Button";
import { FaPalette, FaPaperPlane } from "react-icons/fa";
import { useSiteContent } from "../../hooks/useSiteContent.js";

const QuoteForm = () => {
  const { forms } = useSiteContent();
  const fq = forms.quote;

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

  const [values, setValues] = useState(initialState);
  const [status, setStatus] = useState(null);
  const [message, setMessage] = useState("");

  const tattooTypeOptions = [
    { value: "", label: fq.chooseOne },
    ...fq.tattooTypeOptions,
  ];
  const placementOptions = [
    { value: "", label: fq.chooseOne },
    ...fq.placementOptions,
  ];
  const sizeOptions = [{ value: "", label: fq.chooseOne }, ...fq.sizeOptions];
  const styleOptions = [{ value: "", label: fq.chooseOne }, ...fq.styleOptions];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setValues((v) => ({ ...v, [name]: type === "checkbox" ? checked : value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("success");
    setMessage(fq.success);
    setValues(initialState);
    setTimeout(() => {
      setStatus(null);
      setMessage("");
    }, 5000);
  };

  return (
    <div className="w-full">
      <form
        className="w-full flex flex-col gap-3 md:gap-4"
        onSubmit={handleSubmit}
      >
        <div className="text-center mb-3 md:mb-4">
          <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-cottage-green-hover/80 to-cottage-sage-primary/80 rounded-full flex items-center justify-center mx-auto mb-2 md:mb-3 shadow-victorian">
            <FaPalette className="w-5 h-5 md:w-6 md:h-6 text-cottage-cream-primary" />
          </div>
          <h3 className="text-xl md:text-2xl font-gothic font-bold text-cottage-cream-primary">
            {fq.title}
          </h3>
          <p className="text-sm md:text-base text-cottage-cream-secondary font-elegant">
            {fq.subtitle}
          </p>
        </div>

        {status && (
          <div
            className={`mb-2 md:mb-3 px-3 py-2 md:px-4 md:py-3 rounded-lg text-center font-elegant text-sm ${
              status === "success"
                ? "bg-cottage-green-primary/15 text-cottage-green-light/90 border border-cottage-green-primary/20"
                : "bg-cottage-green-hover/15 text-cottage-green-light/90 border border-cottage-green-hover/20"
            }`}
          >
            {message}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div>
            <label className="block text-xs md:text-sm font-medium mb-1.5 text-cottage-cream-primary font-elegant">
              {fq.fields.firstName}
            </label>
            <input
              type="text"
              name="firstName"
              value={values.firstName}
              onChange={handleChange}
              placeholder={fq.placeholders.firstName}
              required
              className="w-full rounded-lg border border-white/10 bg-cottage-bg-card/60 px-3 py-2 md:px-4 md:py-2.5 focus:ring-1 focus:ring-white/20 focus:border-white/20 text-cottage-cream-secondary placeholder-cottage-text-subtle/60 transition-all duration-300 font-elegant text-sm"
            />
          </div>
          <div>
            <label className="block text-xs md:text-sm font-medium mb-1.5 text-cottage-cream-primary font-elegant">
              {fq.fields.lastName}
            </label>
            <input
              type="text"
              name="lastName"
              value={values.lastName}
              onChange={handleChange}
              placeholder={fq.placeholders.lastName}
              required
              className="w-full rounded-lg border border-white/10 bg-cottage-bg-card/60 px-3 py-2 md:px-4 md:py-2.5 focus:ring-1 focus:ring-white/20 focus:border-white/20 text-cottage-cream-secondary placeholder-cottage-text-subtle/60 transition-all duration-300 font-elegant text-sm"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div>
            <label className="block text-xs md:text-sm font-medium mb-1.5 text-cottage-cream-primary font-elegant">
              {fq.fields.email}
            </label>
            <input
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              placeholder={fq.placeholders.email}
              required
              className="w-full rounded-lg border border-white/10 bg-cottage-bg-card/60 px-3 py-2 md:px-4 md:py-2.5 focus:ring-1 focus:ring-white/20 focus:border-white/20 text-cottage-cream-secondary placeholder-cottage-text-subtle/60 transition-all duration-300 font-elegant text-sm"
            />
          </div>
          <div>
            <label className="block text-xs md:text-sm font-medium mb-1.5 text-cottage-cream-primary font-elegant">
              {fq.fields.phone}
            </label>
            <input
              type="tel"
              name="phone"
              value={values.phone}
              onChange={handleChange}
              placeholder={fq.placeholders.phone}
              className="w-full rounded-lg border border-white/10 bg-cottage-bg-card/60 px-3 py-2 md:px-4 md:py-2.5 focus:ring-1 focus:ring-white/20 focus:border-white/20 text-cottage-cream-secondary placeholder-cottage-text-subtle/60 transition-all duration-300 font-elegant text-sm"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs md:text-sm font-medium mb-1.5 text-cottage-cream-primary font-elegant">
            {fq.fields.tattooType}
          </label>
          <select
            name="tattooType"
            value={values.tattooType}
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-white/10 bg-cottage-bg-card/60 px-3 py-2 md:px-4 md:py-2.5 focus:ring-1 focus:ring-white/20 focus:border-white/20 text-cottage-cream-secondary transition-all duration-300 font-elegant appearance-none text-sm"
          >
            {tattooTypeOptions.map((opt) => (
              <option
                key={opt.value}
                value={opt.value}
                className="bg-cottage-bg-card text-cottage-cream-secondary"
              >
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div>
            <label className="block text-xs md:text-sm font-medium mb-1.5 text-cottage-cream-primary font-elegant">
              {fq.fields.placement}
            </label>
            <select
              name="placement"
              value={values.placement}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-white/10 bg-cottage-bg-card/60 px-3 py-2 md:px-4 md:py-2.5 focus:ring-1 focus:ring-white/20 focus:border-white/20 text-cottage-cream-secondary transition-all duration-300 font-elegant appearance-none text-sm"
            >
              {placementOptions.map((opt) => (
                <option
                  key={opt.value}
                  value={opt.value}
                  className="bg-cottage-bg-card text-cottage-cream-secondary"
                >
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-xs md:text-sm font-medium mb-1.5 text-cottage-cream-primary font-elegant">
              {fq.fields.size}
            </label>
            <select
              name="size"
              value={values.size}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-white/10 bg-cottage-bg-card/60 px-3 py-2 md:px-4 md:py-2.5 focus:ring-1 focus:ring-white/20 focus:border-white/20 text-cottage-cream-secondary transition-all duration-300 font-elegant appearance-none text-sm"
            >
              {sizeOptions.map((opt) => (
                <option
                  key={opt.value}
                  value={opt.value}
                  className="bg-cottage-bg-card text-cottage-cream-secondary"
                >
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label className="block text-xs md:text-sm font-medium mb-1.5 text-cottage-cream-primary font-elegant">
            {fq.fields.style}
          </label>
          <select
            name="style"
            value={values.style}
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-white/10 bg-cottage-bg-card/60 px-3 py-2 md:px-4 md:py-2.5 focus:ring-1 focus:ring-white/20 focus:border-white/20 text-cottage-cream-secondary transition-all duration-300 font-elegant appearance-none text-sm"
          >
            {styleOptions.map((opt) => (
              <option
                key={opt.value}
                value={opt.value}
                className="bg-cottage-bg-card text-cottage-cream-secondary"
              >
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-xs md:text-sm font-medium mb-1.5 text-cottage-cream-primary font-elegant">
            {fq.fields.message}
          </label>
          <textarea
            name="message"
            value={values.message}
            onChange={handleChange}
            rows={3}
            placeholder={fq.placeholders.message}
            className="w-full rounded-lg border border-white/10 bg-cottage-bg-card/60 px-3 py-2 md:px-4 md:py-2.5 focus:ring-1 focus:ring-white/20 focus:border-white/20 text-cottage-cream-secondary placeholder-cottage-text-subtle/60 transition-all duration-300 font-elegant resize-none text-sm"
            required
          />
        </div>

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            name="terms"
            checked={values.terms}
            onChange={handleChange}
            className="accent-white/50 rounded border-white/20 w-4 h-4"
            required
          />
          <span className="text-xs md:text-sm text-cottage-cream-secondary font-elegant">
            {fq.terms}
          </span>
        </div>

        <Button
          type="submit"
          size="xl"
          className="mt-2 md:mt-3 bg-gradient-to-r from-cottage-green-hover/90 to-cottage-sage-primary/90 hover:from-cottage-green-hover hover:to-cottage-sage-primary text-white font-bold shadow-victorian border border-cottage-teal-primary/20 py-2.5 md:py-3 text-sm md:text-base"
        >
          <FaPaperPlane className="w-4 h-4 md:w-5 md:h-5 mr-2" />
          {fq.submit}
        </Button>
      </form>
    </div>
  );
};

export default QuoteForm;
