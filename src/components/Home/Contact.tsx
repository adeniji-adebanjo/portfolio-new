"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const isValidEmail = (email: string) => /\S+@\S+\.\S+/.test(email);
  const isFormValid = () =>
    formData.name.trim() &&
    isValidEmail(formData.email) &&
    formData.message.trim();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!isValidEmail(formData.email)) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    setLoading(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/send-email`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const result = await response.text();

      if (response.ok) {
        setSuccessMessage("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setErrorMessage(result || "Failed to send the message.");
      }
    } catch (error) {
      setErrorMessage("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-form text-white text-left">
      <h1 className="text-2xl font-bold mb-4">Reach out to me</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block mb-1 font-medium">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 rounded-md bg-gray-900 text-white border border-gray-600 focus:ring-2 focus:ring-purple-500 focus:outline-none"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block mb-1 font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 rounded-md bg-gray-900 text-white border border-gray-600 focus:ring-2 focus:ring-purple-500 focus:outline-none"
          />
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block mb-1 font-medium">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={3}
            placeholder="Enter your message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 rounded-md bg-gray-900 text-white border border-gray-600 focus:ring-2 focus:ring-purple-500 focus:outline-none"
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          disabled={loading || !isFormValid()}
          className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-md font-semibold disabled:opacity-50 transition"
        >
          {loading ? "Sending..." : "Send"}
        </button>
      </form>

      {/* Messages */}
      {successMessage && (
        <p className="text-green-400 mt-2">{successMessage}</p>
      )}
      {errorMessage && <p className="text-red-400 mt-2">{errorMessage}</p>}
    </div>
  );
};

export default Contact;
