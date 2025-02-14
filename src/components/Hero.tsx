"use client";

import React from 'react';
import Link from 'next/link';
import AOS from 'aos';
import { useEffect } from 'react';
import 'aos/dist/aos.css';

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true,     
    });
  }, []);
  return (
    <section className="hero h-screen flex items-center bg-cover bg-center" style={{ backgroundImage: "url('bg image.jpeg')" }}>
      <div className="pl-0 md:pl-16 text-black text-center">
        <h1 className="text-6xl font-bold drop-shadow-md" data-aos="fade-up">M&M CLOTHING,<br/>
        look stunning with our variety of clothes</h1>
        <p className="text-2xl mt-4">Discover our exclusive collection of outfits,<br/>
        best winter collection.</p>
        <button className="mt-6 px-6 py-3 bg-[#e46e00] hover:bg-[#8daac7] rounded-md font-bold"><Link href="/clothes">Shop Now</Link></button>
      </div>
    </section>
  );
};

export default Hero;