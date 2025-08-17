import React, { useState } from "react";
import Button from "../shared/Button";

const ContactForm = ({ cardMode = false }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    tattooType: "",
    bodyLocation: "",
    size: "",
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
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    setSubmitted(true);

    // Reset form after submission
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        tattooType: "",
        bodyLocation: "",
        size: "",
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
      {/* Personal Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block mb-2 font-semibold text-cottage-green-primary">
            Name *
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className={inputClass}
            placeholder="Your full name"
          />
        </div>
        <div>
          <label className="block mb-2 font-semibold text-cottage-green-primary">
            Email *
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className={inputClass}
            placeholder="your.email@example.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block mb-2 font-semibold text-cottage-green-primary">
            Phone
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={inputClass}
            placeholder="(555) 123-4567"
          />
        </div>
        <div>
          <label className="block mb-2 font-semibold text-cottage-green-primary">
            Preferred Date
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

      {/* Tattoo Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block mb-2 font-semibold text-cottage-green-primary">
            Tattoo Type *
          </label>
          <select
            name="tattooType"
            value={formData.tattooType}
            onChange={handleChange}
            required
            className={inputClass}
          >
            <option value="">Select tattoo type</option>
            <option value="custom">Custom Design</option>
            <option value="flash">Flash Art</option>
            <option value="coverup">Cover-up</option>
            <option value="touchup">Touch-up</option>
          </select>
        </div>
        <div>
          <label className="block mb-2 font-semibold text-cottage-green-primary">
            Body Location
          </label>
          <select
            name="bodyLocation"
            value={formData.bodyLocation}
            onChange={handleChange}
            className={inputClass}
          >
            <option value="">Select location</option>
            <option value="arm">Arm</option>
            <option value="leg">Leg</option>
            <option value="back">Back</option>
            <option value="chest">Chest</option>
            <option value="shoulder">Shoulder</option>
            <option value="ankle">Ankle</option>
            <option value="wrist">Wrist</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block mb-2 font-semibold text-cottage-green-primary">
            Size
          </label>
          <select
            name="size"
            value={formData.size}
            onChange={handleChange}
            className={inputClass}
          >
            <option value="">Select size</option>
            <option value="small">Small (1-3 inches)</option>
            <option value="medium">Medium (3-6 inches)</option>
            <option value="large">Large (6+ inches)</option>
            <option value="sleeve">Sleeve</option>
            <option value="full-back">Full Back</option>
          </select>
        </div>
        <div>
          <label className="block mb-2 font-semibold text-cottage-green-primary">
            Budget Range
          </label>
          <select
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className={inputClass}
          >
            <option value="">Select budget range</option>
            <option value="100-300">$100 - $300</option>
            <option value="300-500">$300 - $500</option>
            <option value="500-800">$500 - $800</option>
            <option value="800-1200">$800 - $1,200</option>
            <option value="1200+">$1,200+</option>
          </select>
        </div>
      </div>

      {/* Description */}
      <div>
        <label className="block mb-2 font-semibold text-cottage-green-primary">
          Tattoo Description *
        </label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
          rows={4}
          className={textareaClass}
          placeholder="Describe your tattoo idea, style preferences, colors, and any specific elements you'd like included..."
        />
      </div>

      {/* Additional Message */}
      <div>
        <label className="block mb-2 font-semibold text-cottage-green-primary">
          Additional Message
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={3}
          className={textareaClass}
          placeholder="Any other details, questions, or special requests..."
        />
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        size="lg"
        className="w-full bg-cottage-gradient from-cottage-green-secondary to-cottage-green-accent hover:from-cottage-green-hover hover:to-cottage-emerald-hover text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 shadow-cottage"
      >
        Send Message
      </Button>

      {/* Success Message */}
      {submitted && (
        <div className="mt-4 p-4 bg-cottage-green-primary/20 border border-cottage-green-primary/30 rounded-lg text-cottage-green-primary font-semibold text-center">
          Thank you for your message! I'll get back to you within 24-48 hours to
          discuss your tattoo idea.
        </div>
      )}

      {/* Note */}
      <p className="text-sm text-cottage-text-subtle text-center">
        * Required fields. I'll respond within 24-48 hours to discuss your
        tattoo idea and schedule a consultation.
      </p>
    </form>
  );
};

export default ContactForm;
