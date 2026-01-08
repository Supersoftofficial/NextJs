// import React from 'react'
// import { Button } from "../components/ui/Button";
// import Image from 'next/image';

// const features = [
//   "Advanced matching algorithms",
//   "Real-time messaging & video calls",
//   "Secure payment integration",
// ];

// const smallPhones = [
//   {
//     containerClass: "top-[253px] left-[233px] rotate-[-5.08deg]",
//     wallpaperClass:
//       "mt-[-0.4px] w-[189.73px] h-[431.29px] ml-[0.4px] rotate-[-0.08deg]",
//     wallpaperSrc: "/immg.png",
//   },
//   {
//     containerClass: "top-[272px] left-[825px] rotate-[5.08deg]",
//     wallpaperClass:
//       "mt-[-0.4px] w-[189.73px] h-[431.29px] ml-[0.4px] rotate-[-0.08deg]",
//     wallpaperSrc: "/immg.png",
//   },
//   {
//     containerClass: "top-[326px] left-[1056px] rotate-[10.08deg]",
//     wallpaperClass:
//       "mt-[-0.7px] w-[187.54px] h-[447.76px] ml-[1.5px] rotate-[-0.08deg]",
//     wallpaperSrc: "/immg.png",
//   },
//   {
//     containerClass: "top-[296px] -left-0.5 rotate-[-10.08deg]",
//     wallpaperClass:
//       "mt-[-0.7px] w-[187.54px] h-[447.76px] ml-[1.5px] rotate-[0.08deg]",
//     wallpaperSrc: "/immg.png",
//   },
// ];

// const AppBuiltSection = () => {
//   return (
//     <div className="overflow-x-hidden py-16">

//       {/* Hero Section */}
//       <section className="relative w-full py-10 lg:py-20">
//         <div className="relative w-full flex flex-col lg:flex-row items-center justify-center gap-4 mt-10 px-4">
//           <h2 className="bg-[linear-gradient(0deg,rgba(102,102,102,1)_0%,rgba(255,255,255,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] font-semibold text-transparent text-4xl md:text-6xl lg:text-[80px] tracking-[-1.60px] leading-tight text-center lg:text-left">
//             Apps Built for
//           </h2>
//           <h2 className="bg-[linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(0,136,255,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] font-semibold text-transparent text-4xl md:text-6xl lg:text-[80px] tracking-[-1.60px] leading-tight text-center lg:text-left">
//             Every Industry
//           </h2>
//         </div>
//       </section>

//       {/* Main Content Section */}
//       <section className="relative w-full py-10 lg:py-20 px-4 lg:px-0">
//             {/* Left side gradient */}
// <div
//   className="absolute -left-52 sm:-left-72 md:-left-96 w-[2186px] h-[968px] rounded-[1093px/484px] blur-[124px]
//              bg-[linear-gradient(212deg,rgba(1,114,202,0.34)_0%,rgba(0,0,0,0.34)_100%)]"
// />

// {/* Right side gradient */}
// <div
//   className="absolute -right-52 sm:-right-72 md:-right-96 w-[2186px] h-[968px] rounded-[1093px/484px] rotate-180 blur-[124px]
//              bg-[linear-gradient(212deg,rgba(1,114,202,0.34)_0%,rgba(0,0,0,0.34)_100%)]"
// />
//         {/* Mobile View - Grid Layout */}
//         <div className="block lg:hidden">
//           {/* Main Phone - Mobile View */}
//           <div className="relative mx-auto max-w-md mb-12">
//             <div className="relative w-[311px] h-[641px] mx-auto">
//               <div className="absolute top-0 left-0 w-[311px] h-[641px] bg-[#3b3c40] rounded-[51.73px] overflow-hidden">
//                 <div className="w-[311px] h-[641px] rounded-[51.73px] border-[2.28px] border-solid border-black blur-[1.52px] absolute top-0 left-0" />
//                 <div className="w-[311px] h-[641px] rounded-[51.73px] border-[0.76px] border-solid border-[#1f2321] blur-[0.76px] absolute top-0 left-0" />
//                 <div className="absolute top-1 left-1 w-[304px] h-[633px] rounded-[47.93px] border-[0.76px] border-solid border-[#212225] blur-[0.76px]" />
//                 <div className="absolute top-1 left-1 w-[303px] h-[632px] rounded-[47.17px] border-[0.3px] border-solid border-[#1d1f22]" />
//               </div>

//               <div className="absolute top-[5px] left-[5px] w-[302px] h-[631px] bg-[#000100] rounded-[47.17px]" />

//               <div className="absolute top-3.5 left-3.5 w-[281px] h-[612px] rounded-[38.04px] overflow-hidden">
//                 <Image
//                   src="/immg.png"
//                   alt="Dating App Interface"
//                   width={281}
//                   height={612}
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//             </div>

//             <div className="mt-6 text-center">
//               <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
//                 DATING APP
//               </h3>
//               <ul className="space-y-2">
//                 {features.map((feature, index) => (
//                   <li
//                     key={index}
//                     className="text-white text-sm md:text-base text-center"
//                   >
//                     {feature}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>

//           {/* Small Phones Grid - Mobile View */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
//             {smallPhones.map((phone, index) => (
//               <div
//                 key={index}
//                 className="flex flex-col items-center justify-center"
//               >
//                 <div className="relative w-[211px] h-[513px]">
//                   <div className="absolute top-0 left-0 w-[211px] h-[434px] bg-[#3b3c40] rounded-[35.01px] overflow-hidden">
//                     <div className="absolute top-0 left-0 w-[211px] h-[434px] rounded-[35.01px] border-[1.54px] border-solid border-black blur-[1.03px]" />
//                     <div className="w-[211px] h-[434px] rounded-[35.01px] border-[0.51px] border-solid border-[#1f2321] blur-[0.51px] absolute top-0 left-0" />
//                     <div className="absolute top-[3px] left-[3px] w-[205px] h-[428px] rounded-[32.43px] border-[0.51px] border-solid border-[#212225] blur-[0.51px]" />
//                     <div className="absolute top-[3px] left-[3px] w-[205px] h-[428px] rounded-[31.92px] border-[0.21px] border-solid border-[#1d1f22]" />
//                   </div>

//                   <div className="absolute top-[3px] left-[3px] w-[204px] h-[427px] bg-[#000100] rounded-[31.92px]" />

//                   <div className="absolute top-2.5 left-2.5 w-[190px] h-[414px] rounded-[25.74px] overflow-hidden">
//                     <Image
//                       src="/immg.png"
//                       alt="Dating App Interface"
//                       width={190}
//                       height={414}
//                       className="w-full h-full object-cover"
//                     />
//                   </div>

//                   <div className="absolute top-[15px] left-[75px] w-[61px] h-[18px] bg-[#030303] rounded-[9.08px]">
//                     <div className="absolute top-1 left-[45px] w-2.5 h-2.5 bg-[#0e0b0f] rounded-[4.95px]" />
//                     <div className="top-1.5 left-[47px] w-1.5 h-1.5 rounded-[2.75px] absolute bg-[#161424]" />
//                     <div className="absolute top-[7px] left-12 w-[3px] h-[3px] bg-[#0f0f2a] rounded-[1.65px]" />
//                     <div className="absolute top-2 left-[50px] w-px h-px bg-[#393752] rounded-[0.55px]" />
//                     <div className="absolute top-2 left-[39px] w-0.5 h-0.5 bg-[#30b94d] rounded-[1.1px]" />
//                   </div>
//                 </div>

//                 <div className="mt-6 text-center">
//                   <h4 className="text-lg font-bold text-white mb-2">
//                     DATING APP
//                   </h4>
//                   <ul className="space-y-1">
//                     {features.map((feature, featureIndex) => (
//                       <li
//                         key={featureIndex}
//                         className="text-white text-xs text-center"
//                       >
//                         {feature}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Desktop View - Original Layout */}
//         <div className="hidden lg:block relative mx-auto max-w-[1273px] h-[869px]">
//           <div className="absolute top-11 left-[466px] w-[338px] h-[825px] rounded-[29px_29px_48px_48px] bg-[linear-gradient(180deg,#1E88E5_0%,#000000_100%)]" />

//           <article className="absolute top-[206px] left-[calc(50.00%_-_157px)] w-[311px] h-[641px]">
//             <div className="absolute top-0 left-0 w-[311px] h-[641px] bg-[#3b3c40] rounded-[51.73px] overflow-hidden">
//               <div className="w-[311px] h-[641px] rounded-[51.73px] border-[2.28px] border-solid border-black blur-[1.52px] absolute top-0 left-0" />
//               <div className="w-[311px] h-[641px] rounded-[51.73px] border-[0.76px] border-solid border-[#1f2321] blur-[0.76px] absolute top-0 left-0" />
//               <div className="absolute top-1 left-1 w-[304px] h-[633px] rounded-[47.93px] border-[0.76px] border-solid border-[#212225] blur-[0.76px]" />
//               <div className="absolute top-1 left-1 w-[303px] h-[632px] rounded-[47.17px] border-[0.3px] border-solid border-[#1d1f22]" />
//             </div>

//             <div className="absolute top-[5px] left-[5px] w-[302px] h-[631px] bg-[#000100] rounded-[47.17px]" />

//             <div className="absolute top-3.5 left-3.5 w-[281px] h-[612px] rounded-[38.04px] overflow-hidden">
//               <Image
//                 src="/immg.png"
//                 alt="Dating App Interface"
//                 width={281}
//                 height={612}
//                 className="w-full h-full object-cover"
//               />
//             </div>
//           </article>

//           <div className="top-0 left-[525px] h-[178px] text-[38.6px] tracking-[-0.77px] leading-[177.8px] absolute flex items-center justify-center font-bold text-white whitespace-nowrap">
//             DATING APP
//           </div>

//           {features.map((feature, index) => (
//             <div
//               key={index}
//               className={`absolute ${
//                 index === 0
//                   ? "top-[117px] left-[498px] w-[278px]"
//                   : index === 1
//                   ? "top-[138px] left-[484px] w-[305px]"
//                   : "top-[158px] left-[512px] w-[249px]"
//               } text-[11.2px] text-center leading-[20.0px] font-normal text-white tracking-[0]`}
//             >
//               {feature}
//             </div>
//           ))}

//           {smallPhones.map((phone, index) => (
//             <article
//               key={index}
//               className={`absolute w-[211px] h-[513px] flex flex-col ${
//                 index === 2 ? "gap-[14.8px]" : "gap-3"
//               } ${phone.containerClass}`}
//             >
//               <div className="ml-[19.8px] w-[179.64px] h-[67.14px] relative mt-0">
//                 <h3
//                   className={`absolute ${
//                     index === 0 || index === 3 ? "top-px" : "top-0"
//                   } left-[30px] w-[111px] h-[29px] flex items-center justify-center font-bold text-white text-[19.2px] tracking-[-0.38px] leading-[88.4px] whitespace-nowrap`}
//                 >
//                   DATING APP
//                 </h3>

//                 {features.map((feature, featureIndex) => (
//                   <p
//                     key={featureIndex}
//                     className={`absolute ${
//                       featureIndex === 0
//                         ? "top-8 left-[7px] w-[156px]"
//                         : featureIndex === 1
//                         ? "top-[43px] left-0 w-[172px]"
//                         : "top-[55px] left-4 w-[140px]"
//                     } font-normal text-white text-[6.3px] text-center tracking-[0] leading-[11.3px]`}
//                   >
//                     {feature}
//                   </p>
//                 ))}
//               </div>

//               <div className="ml-0 h-[433.99px] w-[210.56px] self-center relative">
//                 <div className="absolute top-0 left-0 w-[211px] h-[434px] bg-[#3b3c40] rounded-[35.01px] overflow-hidden">
//                   <div className="absolute top-0 left-0 w-[211px] h-[434px] rounded-[35.01px] border-[1.54px] border-solid border-black blur-[1.03px]" />
//                   <div className="w-[211px] h-[434px] rounded-[35.01px] border-[0.51px] border-solid border-[#1f2321] blur-[0.51px] absolute top-0 left-0" />
//                   <div className="absolute top-[3px] left-[3px] w-[205px] h-[428px] rounded-[32.43px] border-[0.51px] border-solid border-[#212225] blur-[0.51px]" />
//                   <div className="absolute top-[3px] left-[3px] w-[205px] h-[428px] rounded-[31.92px] border-[0.21px] border-solid border-[#1d1f22]" />
//                 </div>

//                 <div className="absolute top-[3px] left-[3px] w-[204px] h-[427px] bg-[#000100] rounded-[31.92px]" />

//                 <div className="absolute top-2.5 left-2.5 w-[190px] h-[414px] rounded-[25.74px] overflow-hidden">
//                   <Image
//                     src="/immg.png"
//                     alt="Dating App Interface"
//                     width={190}
//                     height={414}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//               </div>
//             </article>
//           ))}
//         </div>

//         {/* Button */}
//         <div className="w-full flex justify-center mt-10 lg:mt-20">
//           <Button className="w-[266px] h-[53px] bg-[#1e88e5] hover:bg-[#1976d2] !rounded-full font-medium text-white text-base tracking-[-0.32px]">
//             Talk To An Expert
//           </Button>
//         </div>
//       </section>
//     </div>
//   )
// }

// export default AppBuiltSection
'use client';
// import React, { useState, useEffect } from 'react'
// import { Button } from "../components/ui/Button";
// import Image from 'next/image';

// const features = [
//   "Advanced matching algorithms",
//   "Real-time messaging & video calls",
//   "Secure payment integration",
// ];

// // Different images for each slide
// const slideImages = [
//   "/immg.png",
//   "/imm.png", // Replace with your different images
//   "/immg.png",
//   "/imm.png",
//   "/immg.png"
// ];

// // Different titles for each slide
// const slideTitles = [
//   "DATING APP",
//   "FITNESS APP",
//   "E-COMMERCE APP",
//   "SOCIAL MEDIA APP",
//   "EDUCATION APP"
// ];

// // Different features for each slide (keep first 3 same for all)
// const slideFeatures = [
//   ["Advanced matching algorithms", "Real-time messaging & video calls", "Secure payment integration"],
//   ["Advanced matching algorithms", "Real-time messaging & video calls", "Secure payment integration"],
//   ["Advanced matching algorithms", "Real-time messaging & video calls", "Secure payment integration"],
//   ["Advanced matching algorithms", "Real-time messaging & video calls", "Secure payment integration"],
//   ["Advanced matching algorithms", "Real-time messaging & video calls", "Secure payment integration"]
// ];

// // Phone positions array
// const smallPhones = [
//   {
//     containerClass: "top-[253px] left-[233px] rotate-[-5.08deg]",
//     wallpaperClass: "mt-[-0.4px] w-[189.73px] h-[431.29px] ml-[0.4px] rotate-[-0.08deg]",
//     wallpaperSrc: "/immg.png",
//   },
//   {
//     containerClass: "top-[272px] left-[825px] rotate-[5.08deg]",
//     wallpaperClass: "mt-[-0.4px] w-[189.73px] h-[431.29px] ml-[0.4px] rotate-[-0.08deg]",
//     wallpaperSrc: "/immg.png",
//   },
//   {
//     containerClass: "top-[326px] left-[1056px] rotate-[10.08deg]",
//     wallpaperClass: "mt-[-0.7px] w-[187.54px] h-[447.76px] ml-[1.5px] rotate-[-0.08deg]",
//     wallpaperSrc: "/immg.png",
//   },
//   {
//     containerClass: "top-[296px] -left-0.5 rotate-[-10.08deg]",
//     wallpaperClass: "mt-[-0.7px] w-[187.54px] h-[447.76px] ml-[1.5px] rotate-[0.08deg]",
//     wallpaperSrc: "/immg.png",
//   },
// ];

// const AppBuiltSection = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const totalSlides = 5;

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % totalSlides);
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
//   };

//   const goToSlide = (index) => {
//     setCurrentSlide(index);
//   };

//   // Auto slide functionality
//   useEffect(() => {
//     const interval = setInterval(() => {
//       nextSlide();
//     }, 5000);

//     return () => clearInterval(interval);
//   }, [currentSlide]);

//   return (
//     <div className="overflow-x-hidden py-16">
//       {/* Hero Section - UNCHANGED */}
//       <section className="relative w-full py-10 lg:py-20">
//         <div className="relative w-full flex flex-col lg:flex-row items-center justify-center gap-4 mt-10 px-4">
//           <h2 className="bg-[linear-gradient(0deg,rgba(102,102,102,1)_0%,rgba(255,255,255,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] font-semibold text-transparent text-4xl md:text-6xl lg:text-[80px] tracking-[-1.60px] leading-tight text-center lg:text-left">
//             Apps Built for
//           </h2>
//           <h2 className="bg-[linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(0,136,255,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] font-semibold text-transparent text-4xl md:text-6xl lg:text-[80px] tracking-[-1.60px] leading-tight text-center lg:text-left">
//             Every Industry
//           </h2>
//         </div>
//       </section>

//       {/* Main Content Section - ONLY SLIDER ADDED, UI EXACTLY SAME */}
//       <section className="relative w-full py-10 lg:py-20 px-4 lg:px-0">
//         {/* Left side gradient */}
//         <div
//           className="absolute -left-52 sm:-left-72 md:-left-96 w-[2186px] h-[968px] rounded-[1093px/484px] blur-[124px]
//                      bg-[linear-gradient(212deg,rgba(1,114,202,0.34)_0%,rgba(0,0,0,0.34)_100%)]"
//         />

//         {/* Right side gradient */}
//         <div
//           className="absolute -right-52 sm:-right-72 md:-right-96 w-[2186px] h-[968px] rounded-[1093px/484px] rotate-180 blur-[124px]
//                      bg-[linear-gradient(212deg,rgba(1,114,202,0.34)_0%,rgba(0,0,0,0.34)_100%)]"
//         />

//         {/* Mobile View - Grid Layout - UNCHANGED */}
//         <div className="block lg:hidden">
//           {/* Main Phone - Mobile View */}
//           <div className="relative mx-auto max-w-md mb-12">
//             <div className="relative w-[311px] h-[641px] mx-auto">
//               <div className="absolute top-0 left-0 w-[311px] h-[641px] bg-[#3b3c40] rounded-[51.73px] overflow-hidden">
//                 <div className="w-[311px] h-[641px] rounded-[51.73px] border-[2.28px] border-solid border-black blur-[1.52px] absolute top-0 left-0" />
//                 <div className="w-[311px] h-[641px] rounded-[51.73px] border-[0.76px] border-solid border-[#1f2321] blur-[0.76px] absolute top-0 left-0" />
//                 <div className="absolute top-1 left-1 w-[304px] h-[633px] rounded-[47.93px] border-[0.76px] border-solid border-[#212225] blur-[0.76px]" />
//                 <div className="absolute top-1 left-1 w-[303px] h-[632px] rounded-[47.17px] border-[0.3px] border-solid border-[#1d1f22]" />
//               </div>

//               <div className="absolute top-[5px] left-[5px] w-[302px] h-[631px] bg-[#000100] rounded-[47.17px]" />

//               <div className="absolute top-3.5 left-3.5 w-[281px] h-[612px] rounded-[38.04px] overflow-hidden">
//                 <Image
//                   src={slideImages[currentSlide]}
//                   alt={`${slideTitles[currentSlide]} Interface`}
//                   width={281}
//                   height={612}
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//             </div>

//             <div className="mt-6 text-center">
//               <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
//                 {slideTitles[currentSlide]}
//               </h3>
//               <ul className="space-y-2">
//                 {slideFeatures[currentSlide].map((feature, index) => (
//                   <li
//                     key={index}
//                     className="text-white text-sm md:text-base text-center"
//                   >
//                     {feature}
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             {/* Mobile Slider Controls */}
//             <div className="flex justify-center mt-6 space-x-4">
//               <button
//                 onClick={prevSlide}
//                 className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center"
//               >
//                 <span className="text-white text-lg">‹</span>
//               </button>

//               <div className="flex space-x-2 items-center">
//                 {slideImages.map((_, index) => (
//                   <button
//                     key={index}
//                     onClick={() => goToSlide(index)}
//                     className={`w-2 h-2 rounded-full transition-all duration-300 ${
//                       currentSlide === index ? 'bg-blue-500 w-8' : 'bg-gray-600'
//                     }`}
//                   />
//                 ))}
//               </div>

//               <button
//                 onClick={nextSlide}
//                 className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center"
//               >
//                 <span className="text-white text-lg">›</span>
//               </button>
//             </div>
//           </div>

//           {/* Small Phones Grid - Mobile View */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
//             {smallPhones.map((phone, index) => {
//               const slideIndex = (currentSlide + index + 1) % totalSlides;
//               return (
//                 <div
//                   key={index}
//                   className="flex flex-col items-center justify-center"
//                 >
//                   <div className="relative w-[211px] h-[513px]">
//                     <div className="absolute top-0 left-0 w-[211px] h-[434px] bg-[#3b3c40] rounded-[35.01px] overflow-hidden">
//                       <div className="absolute top-0 left-0 w-[211px] h-[434px] rounded-[35.01px] border-[1.54px] border-solid border-black blur-[1.03px]" />
//                       <div className="w-[211px] h-[434px] rounded-[35.01px] border-[0.51px] border-solid border-[#1f2321] blur-[0.51px] absolute top-0 left-0" />
//                       <div className="absolute top-[3px] left-[3px] w-[205px] h-[428px] rounded-[32.43px] border-[0.51px] border-solid border-[#212225] blur-[0.51px]" />
//                       <div className="absolute top-[3px] left-[3px] w-[205px] h-[428px] rounded-[31.92px] border-[0.21px] border-solid border-[#1d1f22]" />
//                     </div>

//                     <div className="absolute top-[3px] left-[3px] w-[204px] h-[427px] bg-[#000100] rounded-[31.92px]" />

//                     <div className="absolute top-2.5 left-2.5 w-[190px] h-[414px] rounded-[25.74px] overflow-hidden">
//                       <Image
//                         src={slideImages[slideIndex]}
//                         alt={`${slideTitles[slideIndex]} Interface`}
//                         width={190}
//                         height={414}
//                         className="w-full h-full object-cover"
//                       />
//                     </div>

//                     <div className="absolute top-[15px] left-[75px] w-[61px] h-[18px] bg-[#030303] rounded-[9.08px]">
//                       <div className="absolute top-1 left-[45px] w-2.5 h-2.5 bg-[#0e0b0f] rounded-[4.95px]" />
//                       <div className="top-1.5 left-[47px] w-1.5 h-1.5 rounded-[2.75px] absolute bg-[#161424]" />
//                       <div className="absolute top-[7px] left-12 w-[3px] h-[3px] bg-[#0f0f2a] rounded-[1.65px]" />
//                       <div className="absolute top-2 left-[50px] w-px h-px bg-[#393752] rounded-[0.55px]" />
//                       <div className="absolute top-2 left-[39px] w-0.5 h-0.5 bg-[#30b94d] rounded-[1.1px]" />
//                     </div>
//                   </div>

//                   <div className="mt-6 text-center">
//                     <h4 className="text-lg font-bold text-white mb-2">
//                       {slideTitles[slideIndex]}
//                     </h4>
//                     <ul className="space-y-1">
//                       {slideFeatures[slideIndex].map((feature, featureIndex) => (
//                         <li
//                           key={featureIndex}
//                           className="text-white text-xs text-center"
//                         >
//                           {feature}
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>

//         {/* Desktop View - Original Layout with Slider */}
//         <div className="hidden lg:block relative mx-auto max-w-[1273px] h-[869px]">
//           <div className="absolute top-11 left-[466px] w-[338px] h-[825px] rounded-[29px_29px_48px_48px] bg-[linear-gradient(180deg,#1E88E5_0%,#000000_100%)]" />

//           {/* Center Phone - Shows current slide */}
//           <article className="absolute top-[206px] left-[calc(50.00%_-_157px)] w-[311px] h-[641px]">
//             <div className="absolute top-0 left-0 w-[311px] h-[641px] bg-[#3b3c40] rounded-[51.73px] overflow-hidden">
//               <div className="w-[311px] h-[641px] rounded-[51.73px] border-[2.28px] border-solid border-black blur-[1.52px] absolute top-0 left-0" />
//               <div className="w-[311px] h-[641px] rounded-[51.73px] border-[0.76px] border-solid border-[#1f2321] blur-[0.76px] absolute top-0 left-0" />
//               <div className="absolute top-1 left-1 w-[304px] h-[633px] rounded-[47.93px] border-[0.76px] border-solid border-[#212225] blur-[0.76px]" />
//               <div className="absolute top-1 left-1 w-[303px] h-[632px] rounded-[47.17px] border-[0.3px] border-solid border-[#1d1f22]" />
//             </div>

//             <div className="absolute top-[5px] left-[5px] w-[302px] h-[631px] bg-[#000100] rounded-[47.17px]" />

//             <div className="absolute top-3.5 left-3.5 w-[281px] h-[612px] rounded-[38.04px] overflow-hidden">
//               <Image
//                 src={slideImages[currentSlide]}
//                 alt={`${slideTitles[currentSlide]} Interface`}
//                 width={281}
//                 height={612}
//                 className="w-full h-full object-cover"
//               />
//             </div>
//           </article>

//           {/* Center Title - Changes with slide */}
//           <div className="top-0 left-[525px] h-[178px] text-[38.6px] tracking-[-0.77px] leading-[177.8px] absolute flex items-center justify-center font-bold text-white whitespace-nowrap">
//             {slideTitles[currentSlide]}
//           </div>

//           {/* Center Features - Changes with slide */}
//           {slideFeatures[currentSlide].map((feature, index) => (
//             <div
//               key={index}
//               className={`absolute ${
//                 index === 0
//                   ? "top-[117px] left-[498px] w-[278px]"
//                   : index === 1
//                   ? "top-[138px] left-[484px] w-[305px]"
//                   : "top-[158px] left-[512px] w-[249px]"
//               } text-[11.2px] text-center leading-[20.0px] font-normal text-white tracking-[0]`}
//             >
//               {feature}
//             </div>
//           ))}

//           {/* Small Phones - Show different slides */}
//           {smallPhones.map((phone, index) => {
//             // Calculate which slide to show on each small phone
//             const slideIndex = (currentSlide + index + 1) % totalSlides;

//             return (
//               <article
//                 key={index}
//                 className={`absolute w-[211px] h-[513px] flex flex-col ${
//                   index === 2 ? "gap-[14.8px]" : "gap-3"
//                 } ${phone.containerClass}`}
//               >
//                 <div className="ml-[19.8px] w-[179.64px] h-[67.14px] relative mt-0">
//                   <h3
//                     className={`absolute ${
//                       index === 0 || index === 3 ? "top-px" : "top-0"
//                     } left-[30px] w-[111px] h-[29px] flex items-center justify-center font-bold text-white text-[19.2px] tracking-[-0.38px] leading-[88.4px] whitespace-nowrap`}
//                   >
//                     {slideTitles[slideIndex]}
//                   </h3>

//                   {slideFeatures[slideIndex].map((feature, featureIndex) => (
//                     <p
//                       key={featureIndex}
//                       className={`absolute ${
//                         featureIndex === 0
//                           ? "top-8 left-[7px] w-[156px]"
//                           : featureIndex === 1
//                           ? "top-[43px] left-0 w-[172px]"
//                           : "top-[55px] left-4 w-[140px]"
//                       } font-normal text-white text-[6.3px] text-center tracking-[0] leading-[11.3px]`}
//                     >
//                       {feature}
//                     </p>
//                   ))}
//                 </div>

//                 <div className="ml-0 h-[433.99px] w-[210.56px] self-center relative">
//                   <div className="absolute top-0 left-0 w-[211px] h-[434px] bg-[#3b3c40] rounded-[35.01px] overflow-hidden">
//                     <div className="absolute top-0 left-0 w-[211px] h-[434px] rounded-[35.01px] border-[1.54px] border-solid border-black blur-[1.03px]" />
//                     <div className="w-[211px] h-[434px] rounded-[35.01px] border-[0.51px] border-solid border-[#1f2321] blur-[0.51px] absolute top-0 left-0" />
//                     <div className="absolute top-[3px] left-[3px] w-[205px] h-[428px] rounded-[32.43px] border-[0.51px] border-solid border-[#212225] blur-[0.51px]" />
//                     <div className="absolute top-[3px] left-[3px] w-[205px] h-[428px] rounded-[31.92px] border-[0.21px] border-solid border-[#1d1f22]" />
//                   </div>

//                   <div className="absolute top-[3px] left-[3px] w-[204px] h-[427px] bg-[#000100] rounded-[31.92px]" />

//                   <div className="absolute top-2.5 left-2.5 w-[190px] h-[414px] rounded-[25.74px] overflow-hidden">
//                     <Image
//                       src={slideImages[slideIndex]}
//                       alt={`${slideTitles[slideIndex]} Interface`}
//                       width={190}
//                       height={414}
//                       className="w-full h-full object-cover"
//                     />
//                   </div>
//                 </div>
//               </article>
//             );
//           })}

//           {/* Slider Controls */}
//           <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex items-center space-x-4">
//             <button
//               onClick={prevSlide}
//               className="w-8 h-8 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center"
//             >
//               <span className="text-white text-sm">‹</span>
//             </button>

//             <div className="flex space-x-2">
//               {slideImages.map((_, index) => (
//                 <button
//                   key={index}
//                   onClick={() => goToSlide(index)}
//                   className={`w-2 h-2 rounded-full transition-all duration-300 ${
//                     currentSlide === index ? 'bg-blue-500' : 'bg-gray-600'
//                   }`}
//                 />
//               ))}
//             </div>

//             <button
//               onClick={nextSlide}
//               className="w-8 h-8 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center"
//             >
//               <span className="text-white text-sm">›</span>
//             </button>
//           </div>
//         </div>

//         {/* Button - UNCHANGED */}
//         <div className="w-full flex justify-center mt-10 lg:mt-20">
//           <Button className="w-[266px] h-[53px] bg-[#1e88e5] hover:bg-[#1976d2] !rounded-full font-medium text-white text-base tracking-[-0.32px]">
//             Talk To An Expert
//           </Button>
//         </div>
//       </section>
//     </div>
//   )
// }

// export default AppBuiltSection

import React, { useState, useEffect } from 'react';
import { Button } from '../components/ui/Button';
import Image from 'next/image';

const features = [
  'Advanced matching algorithms',
  'Real-time messaging & video calls',
  'Secure payment integration',
];

// Different images for each slide
const slideImages = [
  '/immg.png',
  '/immg.png',
  '/immg.png',
  '/immg.png',
  '/immg.png',
];

// Different titles for each slide
const slideTitles = [
  'DATING APP',
  'FITNESS APP',
  'ECOMMERCE APP',
  'SOCIAL APP',
  'EDUCATION APP',
];

// Phone positions array (for desktop only)
const phonePositions = [
  { class: 'top-[296px] -left-0.5 rotate-[-10.08deg]' },
  { class: 'top-[253px] left-[233px] rotate-[-5.08deg]' },
  { class: 'top-[206px] left-[calc(50.00%_-_157px)]' }, // Center
  { class: 'top-[272px] left-[825px] rotate-[5.08deg]' },
  { class: 'top-[326px] left-[1056px] rotate-[10.08deg]' },
];

const AppBuiltSection = () => {
  const [currentSlide, setCurrentSlide] = useState(2); // Start at center slide
  const [isAnimating, setIsAnimating] = useState(false);
  const [isHovered, setIsHovered] = useState(false); // NEW
  const totalSlides = 5;

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToSlide = (index) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  // Auto slide functionality
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     nextSlide();
  //   }, 2000);

  //   return () => clearInterval(interval);
  // }, [currentSlide, isAnimating]);

  useEffect(() => {
    if (isHovered) return; // pause while hovered
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentSlide, isAnimating, isHovered]);

  // Calculate which slide should be in each position
  const getVisibleSlides = () => {
    const slides = [];

    for (let i = -2; i <= 2; i++) {
      let slideIndex = currentSlide + i;

      // Handle wrap-around for slide indices
      if (slideIndex < 0) slideIndex = totalSlides + slideIndex;
      if (slideIndex >= totalSlides) slideIndex = slideIndex - totalSlides;

      slides.push({
        slideIndex,
        positionIndex: i + 2, // Convert from -2,-1,0,1,2 to 0,1,2,3,4
        isCenter: i === 0,
      });
    }

    return slides;
  };

  const visibleSlides = getVisibleSlides();

  return (
    <div className='overflow-x-hidden py-2'>
      {/* Hero Section - UNCHANGED */}
      <section className='relative w-full '>
        <div className='relative w-full flex flex-col lg:flex-row items-center justify-center gap-4 mt-10 px-4'>
          <h2 className='bg-[linear-gradient(0deg,rgba(102,102,102,1)_0%,rgba(255,255,255,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] font-semibold text-transparent text-4xl md:text-6xl lg:text-[80px] tracking-[-1.60px] leading-tight text-center lg:text-left'>
            Apps Built for
          </h2>
          <h2 className='bg-[linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(0,136,255,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] font-semibold text-transparent text-4xl md:text-6xl lg:text-[80px] tracking-[-1.60px] leading-tight text-center lg:text-left'>
            Every Industry
          </h2>
        </div>
      </section>

      {/* Main Content Section */}
      <section className='relative w-full py-10 lg:py-20 px-4 lg:px-0'>
        {/* Left side gradient */}
        <div
          className='absolute -left-52 sm:-left-72 md:-left-96 w-[2186px] h-[968px] rounded-[1093px/484px] blur-[124px] 
                     bg-[linear-gradient(212deg,rgba(1,114,202,0.34)_0%,rgba(0,0,0,0.34)_100%)]'
        />

        {/* Right side gradient */}
        <div
          className='absolute -right-52 sm:-right-72 md:-right-96 w-[2186px] h-[968px] rounded-[1093px/484px] rotate-180 blur-[124px] 
                     bg-[linear-gradient(212deg,rgba(1,114,202,0.34)_0%,rgba(0,0,0,0.34)_100%)]'
        />

        {/* Mobile View - Horizontal Slider */}
        <div className='block lg:hidden'>
          <div className='relative overflow-hidden'>
            {/* Main Phone Slider */}
            <div className='relative h-[800px]'>
              {slideImages.map((image, index) => (
                <div
                  key={index}
                  className={`absolute top-0 left-0 w-full transition-all duration-500 ${
                    index === currentSlide
                      ? 'opacity-100 translate-x-0'
                      : index < currentSlide
                      ? 'opacity-0 -translate-x-full'
                      : 'opacity-0 translate-x-full'
                  }`}
                >
                  <div className='relative mx-auto max-w-md mb-12'>
                    <div className='relative w-[311px] h-[641px] mx-auto'>
                      <div className='absolute top-0 left-0 w-[311px] h-[641px] bg-[#3b3c40] rounded-[51.73px] overflow-hidden'>
                        <div className='w-[311px] h-[641px] rounded-[51.73px] border-[2.28px] border-solid border-black blur-[1.52px] absolute top-0 left-0' />
                        <div className='w-[311px] h-[641px] rounded-[51.73px] border-[0.76px] border-solid border-[#1f2321] blur-[0.76px] absolute top-0 left-0' />
                        <div className='absolute top-1 left-1 w-[304px] h-[633px] rounded-[47.93px] border-[0.76px] border-solid border-[#212225] blur-[0.76px]' />
                        <div className='absolute top-1 left-1 w-[303px] h-[632px] rounded-[47.17px] border-[0.3px] border-solid border-[#1d1f22]' />
                      </div>

                      <div className='absolute top-[5px] left-[5px] w-[302px] h-[631px] bg-[#000100] rounded-[47.17px]' />

                      <div className='absolute top-3.5 left-3.5 w-[281px] h-[612px] rounded-[38.04px] overflow-hidden'>
                        <Image
                          src={image}
                          alt={`${slideTitles[index]} Interface`}
                          width={281}
                          height={612}
                          className='w-full h-full object-cover'
                        />
                      </div>
                    </div>

                    <div className='mt-6 text-center'>
                      <h3 className='text-2xl md:text-3xl font-bold text-white mb-4'>
                        {slideTitles[index]}
                      </h3>
                      <ul className='space-y-2'>
                        {features.map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className='text-white text-sm md:text-base text-center'
                          >
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile Slider Controls */}
            {/* <div className="flex justify-center mt-6 space-x-4">
              <button
                onClick={prevSlide}
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center"
              >
                <span className="text-white text-lg">‹</span>
              </button>
              
              <div className="flex space-x-2 items-center">
                {slideImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      currentSlide === index ? 'bg-blue-500 w-8' : 'bg-gray-600'
                    }`}
                  />
                ))}
              </div>
              
              <button
                onClick={nextSlide}
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center"
              >
                <span className="text-white text-xl">›</span>
              </button>
            </div> */}
          </div>
        </div>

        {/* Desktop View - Horizontal Slider */}
        <div className='hidden lg:block relative mx-auto max-w-[1273px] h-[869px]'>
          <div className='absolute top-11 left-[466px] w-[338px] h-[825px] rounded-[29px_29px_48px_48px] bg-[linear-gradient(180deg,#1E88E5_0%,#000000_100%)]' />

          {/* All 5 phones in a row - only one is fully visible at center */}
          {visibleSlides.map((slide) => (
            <div
              onMouseEnter={() => setIsHovered(true)} // PAUSE on hover
              onMouseLeave={() => setIsHovered(false)} // RESUME on leave
              onTouchStart={() => setIsHovered(true)}
              onTouchEnd={() => setIsHovered(false)}
              key={slide.slideIndex}
              className={`absolute ${
                phonePositions[slide.positionIndex].class
              } transition-all duration-500 ${
                slide.isCenter
                  ? 'opacity-100 scale-100 z-30'
                  : 'opacity-70 scale-90 z-20'
              } ${slide.positionIndex < 2 ? 'translate-x-[-50px]' : ''} ${
                slide.positionIndex > 2 ? 'translate-x-[50px]' : ''
              }`}
            >
              {slide.isCenter ? (
                // Center Phone (Large)
                <>
                  <article className='w-[311px] h-[641px]'>
                    <div className='absolute top-0 left-0 w-[311px] h-[641px] bg-[#3b3c40] rounded-[51.73px] overflow-hidden'>
                      <div className='w-[311px] h-[641px] rounded-[51.73px] border-[2.28px] border-solid border-black blur-[1.52px] absolute top-0 left-0' />
                      <div className='w-[311px] h-[641px] rounded-[51.73px] border-[0.76px] border-solid border-[#1f2321] blur-[0.76px] absolute top-0 left-0' />
                      <div className='absolute top-1 left-1 w-[304px] h-[633px] rounded-[47.93px] border-[0.76px] border-solid border-[#212225] blur-[0.76px]' />
                      <div className='absolute top-1 left-1 w-[303px] h-[632px] rounded-[47.17px] border-[0.3px] border-solid border-[#1d1f22]' />
                    </div>

                    <div className='absolute top-[5px] left-[5px] w-[302px] h-[631px] bg-[#000100] rounded-[47.17px]' />

                    <div className='absolute top-3.5 left-3.5 w-[281px] h-[612px] rounded-[38.04px] overflow-hidden'>
                      <Image
                        src={slideImages[slide.slideIndex]}
                        alt={`${slideTitles[slide.slideIndex]} Interface`}
                        width={281}
                        height={612}
                        className='w-full h-full object-cover'
                      />
                    </div>
                  </article>

                  <div className='absolute top-[-200px] left-0 w-full'>
                    <div className='h-[178px] text-[38.6px] tracking-[-0.77px] leading-[177.8px] absolute flex items-center justify-center font-bold text-white whitespace-nowrap w-full'>
                      {slideTitles[slide.slideIndex]}
                    </div>

                    {features.map((feature, index) => (
                      <div
                        key={index}
                        className={`absolute ${
                          index === 0
                            ? 'top-[117px] left-0 w-full text-center'
                            : index === 1
                            ? 'top-[138px] left-0 w-full text-center'
                            : 'top-[158px] left-0 w-full text-center'
                        } text-[11.2px] text-center leading-[20.0px] font-normal text-white tracking-[0]`}
                      >
                        {feature}
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                // Side Phones (Small)
                <article className='w-[211px] h-[513px]'>
                  <div className='ml-[19.8px] w-[179.64px] h-[67.14px] relative mt-0'>
                    <h3
                      className={`absolute ${
                        slide.positionIndex === 0 || slide.positionIndex === 3
                          ? 'top-px'
                          : 'top-0'
                      } left-[30px] w-[111px] h-[29px] flex items-center justify-center font-bold text-white text-[19.2px] tracking-[-0.38px] leading-[88.4px] whitespace-nowrap`}
                    >
                      {slideTitles[slide.slideIndex]}
                    </h3>

                    {features.map((feature, featureIndex) => (
                      <p
                        key={featureIndex}
                        className={`absolute ${
                          featureIndex === 0
                            ? 'top-8 left-[7px] w-[156px]'
                            : featureIndex === 1
                            ? 'top-[43px] left-0 w-[172px]'
                            : 'top-[55px] left-4 w-[140px]'
                        } font-normal text-white text-[6.3px] text-center tracking-[0] leading-[11.3px]`}
                      >
                        {feature}
                      </p>
                    ))}
                  </div>

                  <div className='ml-0 h-[433.99px] w-[210.56px] self-center relative'>
                    <div className='absolute top-0 left-0 w-[211px] h-[434px] bg-[#3b3c40] rounded-[35.01px] overflow-hidden'>
                      <div className='absolute top-0 left-0 w-[211px] h-[434px] rounded-[35.01px] border-[1.54px] border-solid border-black blur-[1.03px]' />
                      <div className='w-[211px] h-[434px] rounded-[35.01px] border-[0.51px] border-solid border-[#1f2321] blur-[0.51px] absolute top-0 left-0' />
                      <div className='absolute top-[3px] left-[3px] w-[205px] h-[428px] rounded-[32.43px] border-[0.51px] border-solid border-[#212225] blur-[0.51px]' />
                      <div className='absolute top-[3px] left-[3px] w-[205px] h-[428px] rounded-[31.92px] border-[0.21px] border-solid border-[#1d1f22]' />
                    </div>

                    <div className='absolute top-[3px] left-[3px] w-[204px] h-[427px] bg-[#000100] rounded-[31.92px]' />

                    <div className='absolute top-2.5 left-2.5 w-[190px] h-[414px] rounded-[25.74px] overflow-hidden'>
                      <Image
                        src={slideImages[slide.slideIndex]}
                        alt={`${slideTitles[slide.slideIndex]} Interface`}
                        width={190}
                        height={414}
                        className='w-full h-full object-cover'
                      />
                    </div>
                  </div>
                </article>
              )}
            </div>
          ))}

          {/* Desktop Slider Controls */}
          {/* <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex items-center space-x-4">
            <button
              onClick={prevSlide}
              className="w-8 h-8 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-all duration-300"
            >
              <span className="text-white text-sm">‹</span>
            </button>
            
            <div className="flex space-x-2">
              {slideImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentSlide === index ? 'bg-blue-500' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={nextSlide}
              className="w-8 h-8 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-all duration-300"
            >
              <span className="text-white text-sm">›</span>
            </button>
          </div> */}
        </div>

        {/* Button - UNCHANGED */}
        <div className='w-full flex justify-center mt-10 lg:mt-20'>
          <Button className='w-[266px] h-[53px] bg-[#1e88e5] hover:bg-[#1976d2] !rounded-full font-medium text-white text-base tracking-[-0.32px]'>
            Talk To An Expert
          </Button>
        </div>
      </section>
    </div>
  );
};

export default AppBuiltSection;
