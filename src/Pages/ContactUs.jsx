import React, { useState } from 'react';
import axios from 'axios';

function ContactUs({ contactRef }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    setErrors({
      ...errors,
      [name]: ''
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name || formData.name.trim().length < 3) {
      newErrors.name = 'Name must be at least 3 characters';
    }

    const phoneRegex = /^[679]\d{9}$/;
    if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Phone must start with 6, 7, or 9 and be 10 digits';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Email format is invalid';
    }

    const wordCount = formData.message.trim().split(/\s+/).filter(word => word !== '').length;
    if (wordCount > 20) {
      newErrors.message = 'Message cannot exceed 20 words';
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const formBody = new URLSearchParams(formData);
      await axios.post('https://script.google.com/macros/s/AKfycbyfrC2AyEkMP63zGWmySgHW43nTkhS_GnSCUuGmjUBEfv7b1CoojcmhgzPX9ILvjig4/exec', formBody);
      setSubmitted(true);
      setFormData({
        name: '',
        phone: '',
        email: '',
        message: ''
      });
      setTimeout(() => setSubmitted(false), 3000);
    } catch (err) {
      alert('Submission failed. Check your connection or try again.');
    }
  };

  return (
    <div className='pt-[4.5rem] md:pt-[7rem] w-[85%] mx-auto' ref={contactRef}>
      <div className='flex flex-col gap-10'>
        <h3 className='font-bold text-xl'>_______ C O N T A C T &nbsp;U S</h3>

        <form onSubmit={handleSubmit} className='md:w-[55%]'>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded-md block w-full" />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Phone</label>
            <input type="text" name="phone" value={formData.phone} onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded-md block w-full" />
            {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded-md block w-full" />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea name="message" value={formData.message} onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded-md block w-full"></textarea>
            {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
          </div>

          <button type="submit" className="px-4 py-2 bg-black text-white rounded-md">Submit</button>
        </form>

        {submitted && (
          <div className="mt-6 p-4 bg-green-500 text-white text-center rounded-md">
            Submitted successfully!
          </div>
        )}
      </div>
    </div>
  );
}

export default ContactUs;
