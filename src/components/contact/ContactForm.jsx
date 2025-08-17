import React, { useState } from "react";
import Button from "../shared/Button";

const topics = [
  "General Inquiry",
  "Partnership",
  "Support",
  "Feedback",
  "Other",
];

const roles = [
  "Startup Founder",
  "Investor",
  "Service Provider",
  "Consultant",
  "Other Interest",
  "Other",
];

const ContactForm = ({ cardMode = false }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    topic: "",
    roles: [],
    message: "",
    agree: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox" && name === "roles") {
      setForm((prev) => ({
        ...prev,
        roles: checked
          ? [...prev.roles, value]
          : prev.roles.filter((r) => r !== value),
      }));
    } else if (type === "checkbox") {
      setForm((prev) => ({ ...prev, [name]: checked }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Add form submission logic
    setSubmitted(true);
  };

  // Conditional classes for card mode
  const formClass = cardMode
    ? "text-black"
    : "bg-gradient-to-b from-black to-[#214045] text-white";
  const inputClass = cardMode
    ? "w-full p-2 rounded bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-400 text-black"
    : "w-full p-2 rounded bg-[#1a2a2e] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-400 text-white";
  const textareaClass = cardMode
    ? "w-full p-2 rounded bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-400 text-black"
    : "w-full p-2 rounded bg-[#1a2a2e] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-400 text-white";

  return (
    <form
      onSubmit={handleSubmit}
      className={`${formClass} rounded-xl p-0 md:p-0 shadow-none`}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
        <div>
          <label className="block mb-1 font-semibold">Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className={inputClass}
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className={inputClass}
            required
          />
        </div>
      </div>
      <div className="mb-4">
        <label className="block mb-1 font-semibold">Select a Topic</label>
        <select
          name="topic"
          value={form.topic}
          onChange={handleChange}
          className={inputClass}
          required
        >
          <option value="">Choose one...</option>
          {topics.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label className="block mb-1 font-semibold">
          Your Role or Interest
        </label>
        <div className="flex flex-wrap gap-4">
          {roles.map((role) => (
            <label key={role} className="flex items-center gap-2">
              <input
                type="checkbox"
                name="roles"
                value={role}
                checked={form.roles.includes(role)}
                onChange={handleChange}
                className="accent-teal-500"
              />
              <span>{role}</span>
            </label>
          ))}
        </div>
      </div>
      <div className="mb-4">
        <label className="block mb-1 font-semibold">Message</label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={5}
          className={textareaClass}
          required
        />
      </div>
      <div className="flex items-center mb-4">
        <input
          type="checkbox"
          name="agree"
          checked={form.agree}
          onChange={handleChange}
          className="accent-teal-500 mr-2"
          required
        />
        <span>I agree to Terms</span>
      </div>
      <Button type="submit" size="sm">
        Submit
      </Button>
      {submitted && (
        <div className="mt-4 text-green-600 font-semibold">
          Thank you for contacting us!
        </div>
      )}
    </form>
  );
};

export default ContactForm;
