import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { logo, logo2 } from '../../assets';

const Navbar = ({ homeRef, aboutRef, servicesRef, portfolioRef, contactRef }) => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  const handleClickOutside = (event) => {
    if (!event.target.closest('.navbar-toggler') && isToggled) {
      setIsToggled(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isToggled]);

  const scrollToSection = (ref) => {
    if (ref.current) {
      window.scrollTo({ top: ref.current.offsetTop, left: 0, behavior: 'smooth' });
    } else {
      console.error(ref);
    }
  };

  return (
    <nav className='fixed w-full z-[100]'>
      <div className="flex items-center justify-between py-3 md:py-5 mx-auto z-50 relative w-[85%]">
        <Link to="/" className="flex items-center gap-0 md:gap-2" onClick={() => scrollToSection(homeRef)}>
          <div className="w-8 md:w-10">
            <img src={logo} alt="Logo" className="w-full h-full object-cover" />
          </div>
          <div className="w-40 md:w-72">
            <img src={logo2} alt="Logo" className="w-full h-full object-cover" />
          </div>
        </Link>

        <div className={`fixed lg:static top-0 left-0 h-screen w-screen lg:h-auto lg:w-auto lg:bg-transparent transition-all ease-in duration-300 items-center z-40 ${isToggled ? 'translate-x-0' : 'translate-x-[100%]'} lg:translate-x-0 justify-center gap-8 text-4xl bg-black text-[#f6ede7] lg:text-black font-bold lg:text-xl lg:font-medium flex flex-col lg:flex-row lg:gap-8`}>
          <Link to="#" onClick={() => scrollToSection(homeRef)}>Home</Link>
          <Link to="#" onClick={() => scrollToSection(aboutRef)}>About</Link>
          <Link to="#" onClick={() => scrollToSection(servicesRef)}>Services</Link>
          <Link to="#" onClick={() => scrollToSection(portfolioRef)}>Portfolio</Link>
          <Link to="#" onClick={() => scrollToSection(contactRef)}>Contact</Link>
        </div>

        <button className={`navbar-toggler flex lg:hidden z-50 text-2xl ${isToggled ? 'text-[#f6ede7] fixed right-8 top-6' : ''}`} onClick={handleToggle} >
          ☰
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
