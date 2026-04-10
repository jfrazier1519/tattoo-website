import React, { useState } from "react";
import Button from "../shared/Button";
import { useSiteContent } from "../../hooks/useSiteContent.js";

const labelCls =
  "mb-2 block text-[11px] font-medium uppercase tracking-[0.14em] text-stone-500";

const fieldCls =
  "w-full rounded-none border border-white/[0.08] bg-stone-950/80 px-3 py-2.5 text-sm text-stone-200 placeholder:text-stone-600 transition-colors focus:border-cottage-green-primary/45 focus:outline-none focus:ring-2 focus:ring-cottage-green-primary/20";

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
        className="flex w-full flex-col gap-4 md:gap-5"
        onSubmit={handleSubmit}
      >
        <div className="border-b border-white/10 pb-5">
          <h3 className="text-lg font-medium tracking-tight text-stone-100 md:text-xl">
            {fq.title}
          </h3>
          <p className="mt-1.5 text-sm leading-relaxed text-stone-500">
            {fq.subtitle}
          </p>
        </div>

        {status ? (
          <div
            className="rounded-none border border-cottage-green-primary/25 bg-cottage-green-primary/10 px-4 py-3 text-center text-sm text-stone-200"
            role="status"
          >
            {message}
          </div>
        ) : null}

        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4">
          <div>
            <label className={labelCls} htmlFor="qf-firstName">
              {fq.fields.firstName}
            </label>
            <input
              id="qf-firstName"
              type="text"
              name="firstName"
              value={values.firstName}
              onChange={handleChange}
              placeholder={fq.placeholders.firstName}
              required
              autoComplete="given-name"
              className={fieldCls}
            />
          </div>
          <div>
            <label className={labelCls} htmlFor="qf-lastName">
              {fq.fields.lastName}
            </label>
            <input
              id="qf-lastName"
              type="text"
              name="lastName"
              value={values.lastName}
              onChange={handleChange}
              placeholder={fq.placeholders.lastName}
              required
              autoComplete="family-name"
              className={fieldCls}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4">
          <div>
            <label className={labelCls} htmlFor="qf-email">
              {fq.fields.email}
            </label>
            <input
              id="qf-email"
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              placeholder={fq.placeholders.email}
              required
              autoComplete="email"
              className={fieldCls}
            />
          </div>
          <div>
            <label className={labelCls} htmlFor="qf-phone">
              {fq.fields.phone}
            </label>
            <input
              id="qf-phone"
              type="tel"
              name="phone"
              value={values.phone}
              onChange={handleChange}
              placeholder={fq.placeholders.phone}
              autoComplete="tel"
              className={fieldCls}
            />
          </div>
        </div>

        <div>
          <label className={labelCls} htmlFor="qf-tattooType">
            {fq.fields.tattooType}
          </label>
          <select
            id="qf-tattooType"
            name="tattooType"
            value={values.tattooType}
            onChange={handleChange}
            required
            className={`${fieldCls} appearance-none bg-stone-950/80`}
          >
            {tattooTypeOptions.map((opt) => (
              <option
                key={opt.value || "empty"}
                value={opt.value}
                className="bg-stone-900 text-stone-200"
              >
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4">
          <div>
            <label className={labelCls} htmlFor="qf-placement">
              {fq.fields.placement}
            </label>
            <select
              id="qf-placement"
              name="placement"
              value={values.placement}
              onChange={handleChange}
              required
              className={`${fieldCls} appearance-none bg-stone-950/80`}
            >
              {placementOptions.map((opt) => (
                <option
                  key={opt.value || "empty-p"}
                  value={opt.value}
                  className="bg-stone-900 text-stone-200"
                >
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className={labelCls} htmlFor="qf-size">
              {fq.fields.size}
            </label>
            <select
              id="qf-size"
              name="size"
              value={values.size}
              onChange={handleChange}
              required
              className={`${fieldCls} appearance-none bg-stone-950/80`}
            >
              {sizeOptions.map((opt) => (
                <option
                  key={opt.value || "empty-s"}
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
          <label className={labelCls} htmlFor="qf-style">
            {fq.fields.style}
          </label>
          <select
            id="qf-style"
            name="style"
            value={values.style}
            onChange={handleChange}
            required
            className={`${fieldCls} appearance-none bg-stone-950/80`}
          >
            {styleOptions.map((opt) => (
              <option
                key={opt.value || "empty-st"}
                value={opt.value}
                className="bg-stone-900 text-stone-200"
              >
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className={labelCls} htmlFor="qf-message">
            {fq.fields.message}
          </label>
          <textarea
            id="qf-message"
            name="message"
            value={values.message}
            onChange={handleChange}
            rows={4}
            placeholder={fq.placeholders.message}
            required
            className={`${fieldCls} resize-y min-h-[6rem]`}
          />
        </div>

        <div className="flex items-start gap-3 pt-1">
          <input
            type="checkbox"
            name="terms"
            id="qf-terms"
            checked={values.terms}
            onChange={handleChange}
            required
            className="mt-0.5 h-4 w-4 shrink-0 rounded border-white/20 bg-stone-950 accent-cottage-green-primary focus:ring-2 focus:ring-cottage-green-primary/40"
          />
          <label htmlFor="qf-terms" className="text-sm leading-snug text-stone-500">
            {fq.terms}
          </label>
        </div>

        <Button
          type="submit"
          variant="primary"
          size="lg"
          className="mt-1 w-full justify-center"
        >
          {fq.submit}
        </Button>
      </form>
    </div>
  );
};

export default QuoteForm;
