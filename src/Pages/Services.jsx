import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { video, product, app, webdesign, blockchain, seo, ai, solana} from "../assets";

function Services({servicesRef}) {
  const [slides, setSlides] = useState([
    {
      id: 1,
      image: webdesign,
      heading: "Web Development",
      desc: "Mobile Responsive, SEO friendly site, Lifetime Support",
      price: '15K-150K',
      time:'3-4 weeks',
      deliverables:'8-10 Pages',
      discount: 20,
    },
    {
      id: 2,
      image: app,
      heading: "App Development",
      desc: "Cross platform, Intuitive UI/UX, Lifetime Support",
      price: '30K-200K',
      time:'5-6 weeks',
      deliverables:'5 screens',
      discount: 20,
    },
    {
      id: 3,
      image: video,
      heading: "Video Editing",
      desc: "Transform your raw footage into stunning visual stories.",
      price: '300-10K',
      time:'1-7 days',
      deliverables:'HD video',
      discount: 20,
    },
    {
      id: 4,
      image: product,
      heading: "Combo (Web & App)",
      desc: "Cross platform App & Responsive Website",
      price: '50K-300K',
      time:'7-8 weeks',
      deliverables:'Web & App',
      discount: 20,
    },
    {
      id: 5,
      image: blockchain,
      heading: "Blockchain Developer",
      desc: "Cross-Platform Brilliance, Blockchain Backbone",
      price: '100K-400K',
      time:'8-10 weeks',
      deliverables:'Web & App',
      discount: 20,
    },{
      id: 6,
      image: seo,
      heading: "Search Engine Optimization",
      desc:"Rank Higher. Reach Farther. Grow Faster.",
      price: '10K-100K',
      time:'8-10 weeks',
      deliverables:'Seo Optimization',
      discount: 20,
    },
    {
      id: 7,
      image: ai,
      heading: "AI Chatbots Developer",
      desc: "Next-Gen AI Chatbot Solutions for Cross-Platform Apps & Sites",
      price: '150k-900k',
      time:'10-12 weeks',
      deliverables:'Web & App',
      discount: 20,
    },
    {
      id: 8,
      image: solana,
      heading: "Blockchain Wallet Development",
      desc: "Power Your App with Solana – Fast, Secure, Scalable.",
      price: '400K-1100K',
      time:'11-13 weeks',
      deliverables:'Web,App & Chrome Extension',
      discount: 20,
    },
    
  ])

  return (
    <div ref={servicesRef} className='pt-[4.5rem] md:pt-[7rem] w-[85%] mx-auto'>

      <div className='flex flex-col gap-10'>
        <h3 className='font-bold text-xl'>_______ S E R V I C E S</h3>
        <h1 className='text-3xl sm:text-6xl font-bold '>We offer a wide range of services</h1>
        {
          slides.map((slice) => (
            <div className="flex flex-col lg:flex-row items-center sm:gap-4 lg:gap-2 text-black shadow-lg rounded-sm p-0 sm:p-12 lg:p-0" key={slice.id}>
              <div className="lg:w-[50%] h-full">
                <img src={slice.image} className="w-full h-full object-cover" alt="" />
              </div>
              <div className="flex flex-col gap-7 mx-auto w-full md:w-[90%] lg:w-[50%] p-6 lg:p-6 2xl:p-20">
                <p className="text-center lg:text-start text-2xl sm:text-4xl font-semibold">{slice.heading}</p>
                <p className="text-center lg:text-start text-xl text-[#877E7E] ">{slice.desc}</p>
                <div className="flex justify-around sm:justify-between gap-0">
                  <div className="flex flex-col items-center lg:items-start gap-1 lg:gap-1">
                    <p className="text-lg sm:text-xl ">Price</p>
                    <p className="text-xl sm:text-2xl font-semibold">₹{slice.price}</p>
                  </div>
                  <div className="hidden xs:flex flex-col items-center lg:items-start gap-1 lg:gap-1">
                    <p className="text-lg sm:text-xl ">Deliverable</p>
                    <p className="text-xl sm:text-2xl font-semibold">{slice.deliverables}</p>
                  </div>
                  <div className="flex flex-col items-center lg:items-start gap-1 lg:gap-1">
                    <p className="text-lg sm:text-xl ">Duration</p>
                    <p className="text-xl sm:text-2xl font-semibold">{slice.time}</p>
                  </div>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default Services;
