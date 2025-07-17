import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { logo, logo2 } from '../../assets';

function Footer({ homeRef, aboutRef, servicesRef, portfolioRef, contactRef, faqRef }) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const scrollToSection = (ref) => {
    if (ref.current) {
      window.scrollTo({ top: ref.current.offsetTop, left: 0, behavior: 'smooth' });
    }
  };

  const submit = async () => {
    if (!email || !email.includes("@")) {
      setError("Please enter a valid email address.");
      setTimeout(() => setError(null), 2000);
      return;
    }

    setLoading(true);

    try {
      const formBody = new URLSearchParams({ email });
      const response = await axios.post(
        'https://script.google.com/macros/s/AKfycbyfrC2AyEkMP63zGWmySgHW43nTkhS_GnSCUuGmjUBEfv7b1CoojcmhgzPX9ILvjig4/exec',
        formBody
      );
      console.log("Response:", response);
      setError("Email sent successfully!");
      setEmail('');
    } catch (err) {
      console.error("Request failed:", err);
      setError("An error occurred. Try again later.");
    } finally {
      setTimeout(() => setError(null), 2000);
      setLoading(false);
    }
  };

  return (
    <footer className="text-black w-[85%] mx-auto py-12 flex flex-col gap-12">
      <div className="mx-auto grid grid-cols-2 lg:grid-cols-3 gap-y-6 md:gap-6 w-full">
        <div className="flex flex-col items-center">
          <div className="flex flex-col">
            <h3 className="text-2xl sm:text-3xl font-semibold mb-4">Useful Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" onClick={() => scrollToSection(homeRef)}>Home</Link></li>
              <li><Link to="/" onClick={() => scrollToSection(aboutRef)}>About</Link></li>
              <li><Link to="/" onClick={() => scrollToSection(servicesRef)}>Services</Link></li>
              <li><Link to="/" onClick={() => scrollToSection(portfolioRef)}>Portfolio</Link></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="flex flex-col">
            <h3 className="text-2xl sm:text-3xl font-semibold mb-4">Pricing</h3>
            <ul className="space-y-2">
              <li><Link to="/" onClick={() => scrollToSection(servicesRef)}>Packages</Link></li>
              <li><Link to="/" onClick={() => scrollToSection(faqRef)}>FAQ</Link></li>
              <li><Link to="/" onClick={() => scrollToSection(contactRef)}>Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center col-span-2 lg:col-span-1">
          <div className="flex flex-col gap-4 relative">
            <h3 className="text-2xl sm:text-3xl font-semibold">Contact Us Now</h3>
            <input
              type="email"
              value={email}
              placeholder="Enter your Email Address"
              className="bg-transparent border-b-2 focus:border-b-black text-black px-4 py-2 focus:outline-none border-gray-400"
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              className={`w-max bg-black py-3 px-7 rounded-3xl text-white font-semibold transition-all ease-in duration-300 hover:-translate-y-[2px] ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
              onClick={submit}
              disabled={loading}
            >
              {loading ? "Sending..." : "Contact"}
            </button>
            {error && <p className="text-Green-500 font-medium absolute -bottom-8 whitespace-nowrap">{error}</p>}
          </div>
        </div>
      </div>

      <div className="mx-auto text-center flex flex-col gap-4">
        <Link to="/" className="flex items-center gap-0 md:gap-2">
          <div className="w-8 md:w-10">
            <img src={logo} alt="Logo" className="w-full h-full object-cover" />
          </div>
          <div className="w-40 md:w-72">
            <img src={logo2} alt="Logo" className="w-full h-full object-cover" />
          </div>
        </Link>
        <p className="text-gray-400 text-sm sm:text-base">Copyright © Techentia 2024</p>
      </div>
    </footer>
  );
}

export default Footer;
