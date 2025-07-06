import React from 'react'
import { FAQCard } from '../components'

function FAQ({faqRef}) {
  return (
    <div ref={faqRef} className="pt-[4.5rem] md:pt-[7rem] w-[85%] mx-auto">
      <div className='flex flex-col gap-10'>
        <h3 className='font-bold text-xl'>_______ F A Q S</h3>
        <h1 className='text-3xl sm:text-6xl font-bold'>Frequently Asked Questions</h1>
        <div className='flex flex-col gap-16 sm:gap-8 w-full justify-end items-end'>
          <FAQCard id="01" ques="Are you open for new projects?" sol="Yes, we are always excited to take on new projects! At Techentia, we thrive on innovation and collaboration. Whether you need web development, mobile app development, digital marketing, video editing or any other tech solution, our team of experts is ready to help bring your vision to life. Feel free to contact us with your project details, and we'll get back to you promptly to discuss how we can assist you." />
          <FAQCard id="02" ques="How long has the agency been running for?" sol="Techentia has been providing top-notch tech solutions for over a year. Founded in 2024, we have accumulated extensive experience and expertise in web development, mobile app development, and digital marketing. Our journey has been marked by a commitment to excellence, innovation, and customer satisfaction. We look forward to many more years of helping our clients achieve their goals with cutting-edge technology." />
          <FAQCard id="03" ques="Do you currently have careers openings?" sol="Yes, Techentia is always on the lookout for talented individuals to join our dynamic team. We believe in fostering a creative and collaborative work environment where innovation thrives. Whether you're a developer, designer, marketer, or tech enthusiast, we may have the perfect opportunity for you. We look forward to potentially welcoming you to the Techentia family!" />
          <FAQCard id="04" ques="Do you offer discounts for nonprofit companies?" sol="Yes, Techentia is proud to support nonprofit organizations by offering special discounts on our services. We understand the unique challenges nonprofits face and are committed to helping them achieve their missions through affordable technology solutions. Please contact us with details about your nonprofit organization and the services you need, and we'll be happy to discuss how we can provide you with the best possible rates." />
        </div>
      </div>
    </div>
  )
}

export default FAQ
