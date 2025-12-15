'use client';
import React from 'react';
import { Button } from '../components/ui/Button';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

const navigationLinks = [
  { label: 'Home' },
  { label: 'About' },
  { label: 'Product' },
  { label: 'Feature' },
  { label: 'Pricing' },
];

const supportLinks = [
  { label: "FAQ's" },
  { label: 'Contact Us' },
  { label: 'Support Center' },
  { label: 'Security' },
];

const resourceLinks = [
  { label: 'Community' },
  { label: 'Contact' },
  { label: 'Terms of Service' },
];

const socialIcons = [
  { src: '/twitter.png', alt: 'Twitter', width: 30, height: 25 },
  { src: '/facebook.png', alt: 'Facebook', width: 29, height: 29 },
  { src: '/linkedin.png', alt: 'LinkedIn', width: 26, height: 26 },
  { src: '/youtube.png', alt: 'YouTube', width: 32, height: 22 },
];

const Footer = () => {
  return (
    <footer className='w-full bg-black relative'>
      <div className='max-w-full mx-auto px-6 lg:px-24 py-16 lg:py-20'>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8'>
          {/* Left Section */}
          <div
            className='lg:col-span-5 flex flex-col gap-8 
                items-center justify-center 
                lg:items-start lg:justify-start'
          >
            <h2 className='font-semibold text-[#1e88e5] text-[55px] leading-[58px]'>
              Want to Start
              <br /> a Project?
            </h2>

            <Button className='w-[150px] h-[55px] bg-[#ffffff66] !rounded-full border border-white hover:bg-[#ffffff80] transition'>
              <span className='font-normal text-white text-[16px]'>
                Let’s Talk
              </span>
              <ArrowRight className='!w-6 !h-6 ml-2  rounded-full bg-[#1e88e5] text-white' />
            </Button>

            {/* Logo */}
            <Image
              src='/hwaklogo.png'
              alt='Hawk Logo'
              width={295}
              height={79}
              className='object-contain'
            />

            <p className='font-normal text-white text-base leading-7 max-w-[340px]'>
              Lorem ipsum dolor sit amet consectetur. Elit diam viverra sit
              mattis quisque molestie semper quis. Eget interdum.
            </p>

            {/* Social Icons */}
            <div className='flex gap-5 items-center'>
              {socialIcons.map((icon, index) => (
                <Image
                  key={index}
                  src={icon.src}
                  alt={icon.alt}
                  width={icon.width}
                  height={icon.height}
                  className='object-contain cursor-pointer hover:opacity-80 transition'
                />
              ))}
            </div>
          </div>

          {/* Right Section */}
          <div className='lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-12 lg:pl-12'>
            {/* Navigation */}
            <nav className='flex flex-col gap-4'>
              <h3 className='font-bold text-white'>Navigate</h3>
              <ul className='font-normal text-white leading-[60px]'>
                {navigationLinks.map((link, index) => (
                  <li
                    key={index}
                    className='cursor-pointer hover:text-[#1e88e5] transition'
                  >
                    {link.label}
                  </li>
                ))}
              </ul>
            </nav>

            {/* Support */}
            <nav className='flex flex-col gap-4'>
              <h3 className='font-bold text-white'>Support Us</h3>
              <ul className='font-normal text-white leading-[60px]'>
                {supportLinks.map((link, index) => (
                  <li
                    key={index}
                    className='cursor-pointer hover:text-[#1e88e5] transition'
                  >
                    {link.label}
                  </li>
                ))}
              </ul>
            </nav>

            {/* Resources */}
            <nav className='flex flex-col gap-4'>
              <h3 className='font-bold text-white'>Resources</h3>
              <ul className='font-normal text-white leading-[60px]'>
                {resourceLinks.map((link, index) => (
                  <li
                    key={index}
                    className='cursor-pointer hover:text-[#1e88e5] transition'
                  >
                    {link.label}
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>

      {/* Bottom Shadow Image */}
      <Image
        src='/shadow.png'
        alt='Shadow'
        width={657}
        height={544}
        className='absolute bottom-0 right-0 hidden lg:block pointer-events-none'
      />
    </footer>
  );
};

export default Footer;
