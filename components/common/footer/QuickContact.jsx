"use client";

import axiosInstance from "@/helper/axiosInstance";
import React, { useState } from "react";
import toast from "react-hot-toast";

const postForm = async (endpoint, formData) => {
  try {
    const res = await axiosInstance.post(endpoint, formData);
    return {
      success: true,
      message: res.data.message || "Submitted successfully",
    };
  } catch (error) {
    const message = error.response?.data?.message || "Submission failed";
    return { success: false, message };
  }
};

const QuickContact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // ✅ Prevent page reload

    const payload = {
      subject: "No Subject",
      product_id: "",
      product_name: "",
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      comment: formData.message,
    };

    const result = await postForm("/contacts/create", payload);

    console.log("response from", result);

    if (result.success) {
      toast.success("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } else {
      toast.error(`Error: ${result.message}`);
    }
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Quick Contact</h2>

      {/* ✅ Set onSubmit on the form, not the button */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded p-2 mb-3"
        />
        <input
          type="text"
          name="phone"
          placeholder="Your Phone"
          value={formData.phone}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded p-2 mb-3"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded p-2 mb-3"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded p-2 mb-3"
        ></textarea>
        <button
          type="submit" // ✅ This is essential
          className="bg-green-900 text-white py-2 px-4 rounded w-full hover:bg-green-800 transition-colors"
        >
          SUBMIT NOW
        </button>
      </form>
    </div>
  );
};

export default QuickContact;
