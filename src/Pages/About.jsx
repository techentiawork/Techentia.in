import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCodeCompare, faCartShopping, faServer, faBook, faVideo, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { about } from '../assets';


function About({aboutRef}) {
  return (
    <div className='pt-[4.5rem] md:pt-[7rem] w-[85%] mx-auto' ref={aboutRef} >
      <div className='flex flex-col gap-10'>
        <h3 className='font-bold text-xl'>_______ A B O U T &nbsp;U S </h3>
        <h1 className='text-3xl sm:text-6xl font-bold '>We are an extension of your creative team</h1>
        <img src={about} alt="" />
        
      </div>
    </div>
  )
}

export default About;
