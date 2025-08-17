import React, { useState } from "react";
import Button from "../shared/Button";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

// Removed unused contactInfo

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  topic: "",
  role: "",
  message: "",
  terms: false,
};

const roleOptions = [
  { value: "founder", label: "Startup Founder" },
  { value: "provider", label: "Service Provider" },
  { value: "other-interest", label: "Other Interest" },
  { value: "investor", label: "Investor" },
  { value: "consultant", label: "Consultant" },
  { value: "other", label: "Other" },
];

const topicOptions = [
  { value: "", label: "Choose one..." },
  { value: "website", label: "Website" },
  { value: "branding", label: "Branding" },
  { value: "marketing", label: "Marketing" },
  { value: "app", label: "MVP / App Build" },
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
    setMessage("Message sent!");
    setValues(initialState);
    setTimeout(() => {
      setStatus(null);
      setMessage("");
    }, 3000);
  };

  return (
    <div className="bg-white/90 p-0 shadow-2xl border-0 rounded-3xl font-sans w-full">
      <form
        className="w-full p-8 md:p-10 flex flex-col gap-7"
        onSubmit={handleSubmit}
      >
        {/* Title with teal dot */}

        {status && (
          <div
            className={`mb-2 px-4 py-2 rounded text-center ${
              status === "success"
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            {message}
          </div>
        )}
        {/* First/Last Name */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium mb-1">First Name</label>
            <input
              type="text"
              name="firstName"
              value={values.firstName}
              onChange={handleChange}
              placeholder="First Name"
              required
              className="w-full rounded-xl border border-gray-300 bg-white px-4 py-2 focus:ring-2 focus:ring-teal-400 focus:border-teal-400 text-base transition"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={values.lastName}
              onChange={handleChange}
              placeholder="Last Name"
              required
              className="w-full rounded-xl border border-gray-300 bg-white px-4 py-2 focus:ring-2 focus:ring-teal-400 focus:border-teal-400 text-base transition"
            />
          </div>
        </div>
        {/* Email/Phone */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              placeholder="Email"
              required
              className="w-full rounded-xl border border-gray-300 bg-white px-4 py-2 focus:ring-2 focus:ring-teal-400 focus:border-teal-400 text-base transition"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={values.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="w-full rounded-xl border border-gray-300 bg-white px-4 py-2 focus:ring-2 focus:ring-teal-400 focus:border-teal-400 text-base transition"
            />
          </div>
        </div>
        {/* Select a Topic */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Select a Topic
          </label>
          <select
            name="topic"
            value={values.topic}
            onChange={handleChange}
            required
            className="w-full rounded-xl border border-gray-300 bg-white px-4 py-2 focus:ring-2 focus:ring-teal-400 focus:border-teal-400 text-base transition appearance-none"
          >
            {topicOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
        {/* Role radio group: 2 columns */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Your Role or Interest
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
            {roleOptions.map((opt) => (
              <label
                key={opt.value}
                className="flex items-center gap-2 text-base"
              >
                <input
                  type="radio"
                  name="role"
                  value={opt.value}
                  checked={values.role === opt.value}
                  onChange={handleChange}
                  className="accent-teal-500 rounded-full"
                  required
                />
                <span>{opt.label}</span>
              </label>
            ))}
          </div>
        </div>
        {/* Message */}
        <div>
          <label className="block text-sm font-medium mb-1">Message</label>
          <textarea
            name="message"
            value={values.message}
            onChange={handleChange}
            rows={5}
            placeholder="Write your message..."
            className="w-full rounded-xl border border-gray-300 bg-white px-4 py-2 focus:ring-2 focus:ring-teal-400 focus:border-teal-400 text-base transition"
            required
          />
        </div>
        {/* Terms */}
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            name="terms"
            checked={values.terms}
            onChange={handleChange}
            className="accent-teal-500 rounded"
            required
          />
          <span className="text-sm">I agree to Terms</span>
        </div>
        {/* Submit */}
        <Button type="submit" size="xl" className="mt-2">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default QuoteForm;
