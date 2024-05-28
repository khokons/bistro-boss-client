import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../Shared/cover/Cover';
import contactImg from '../../assets/contact/banner.jpg';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';
import Swal from 'sweetalert2';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission
    try {
      const response = await fetch('https://formspree.io/f/mkndayko', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        // Reset form after successful submission
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        });
        Swal.fire({
            title: "Good job!",
            text: "Message send successfully!",
            icon: "success"
          });
      } else {
        Swal.fire({
            title: "Good job!",
            text: "Send to failed! Please try again",
            icon: "error"
          });
      }
    } catch (error) {
        Swal.fire({
            title: "Good job!",
            text: "Send to failed! Please try again",
            icon: "error"
          });
    }
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover img={contactImg} title="Contact us" />
      <SectionTitle subHeading="---Visit Us---" heading="OUR LOCATION" />
      <div className="flex flex-col md:flex-row justify-around items-center bg-gray-100 p-10 space-y-6 md:space-y-0 md:space-x-6 text-black">
        <div className="bg-white p-6 text-center rounded-lg shadow-md w-64 h-64">
          <div className="bg-[#D1A054] text-white text-4xl flex items-center justify-center h-16 w-full rounded-t-lg">
            📞
          </div>
          <div className="py-8">
            <h3 className="text-lg font-semibold mb-2">PHONE</h3>
            <p className="text-sm">+88 01633-347597</p>
          </div>
        </div>
        <div className="bg-white p-6 text-center rounded-lg shadow-md w-64 h-64">
          <div className="bg-[#D1A054] text-white text-4xl flex items-center justify-center h-16 w-full rounded-t-lg">
            📍
          </div>
          <div className="py-8">
            <h3 className="text-lg font-semibold mb-2">ADDRESS</h3>
            <p className="text-sm">Uttara, Sector 7, Road 9, House 480</p>
          </div>
        </div>
        <div className="bg-white p-6 text-center rounded-lg shadow-md w-64 h-64">
          <div className="bg-[#D1A054] text-white text-4xl flex items-center justify-center h-16 w-full rounded-t-lg">
            ⏰
          </div>
          <div className="py-8">
            <h3 className="text-lg font-semibold mb-2">WORKING HOURS</h3>
            <p className="text-sm">
              Mon - Fri: 08:00 - 22:00<br />
              Sat - Sun: 10:00 - 23:00
            </p>
          </div>
        </div>
      </div>

      <SectionTitle subHeading="---Send Us a Message---" heading="CONTACT FORM" />

      <form onSubmit={handleSubmit} onReset={handleReset} className="flex flex-col items-center space-y-4">
        <div className="w-1/2">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
            required
          />
        </div>
        <div className="w-1/2">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="yourname@email.com"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
            required
          />
        </div>
        <div className="w-1/2">
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="Enter your phone number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
            required
          />
        </div>
        <div className="w-1/2">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            placeholder="Write your message here"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
            required
          ></textarea>
        </div>
        <div className="flex items-center">
          <input
            id="captcha"
            name="captcha"
            type="checkbox"
            className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500 focus:ring-2"
            required
          />
          <label htmlFor="captcha" className="ml-2 text-sm font-medium text-gray-700">
            I'm not a robot
          </label>
        </div>
        <div className="flex flex-col lg:flex-row gap-4">
          <button
            type="submit"
            className="inline-flex items-center px-4 py-2 rounded-md bg-blue-500 text-white font-bold shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Submit
          </button>
          <button
            type="reset"
            className="inline-flex items-center px-4 py-2 rounded-md bg-gray-300 text-black font-bold shadow-sm hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
