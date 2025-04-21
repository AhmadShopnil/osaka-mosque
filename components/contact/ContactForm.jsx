import React from 'react';
import { useState } from "react";


const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
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
        e.preventDefault();
        // Here you would typically send the form data to your backend
        console.log("Form submitted:", formData);
    
        // For demo purposes, just reset the form
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
    
        alert("Form submitted successfully!");
      };

    return (
       
          <div className="py-16 flex flex-col items-center  ">
        <div className="text-center mb-10">
          <h2 className="text-orange-500 font-medium mb-2">Contact us</h2>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
            Get In Touch
          </h1>
        </div>

        <form onSubmit={handleSubmit} className="w-full max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-300"
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-300"
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-300"
            />
          </div>

          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="8"
            className="w-full p-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-300 mb-6"
          ></textarea>

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-4 px-8 rounded transition-colors duration-300 w-full max-w-xs"
            >
              SUBMIT NOW
            </button>
          </div>
        </form>
      </div>
       
    );
}

export default ContactForm;
