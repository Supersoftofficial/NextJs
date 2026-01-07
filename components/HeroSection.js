// import React from "react";
// import { Button } from "../components/ui/Button";
// import { Star } from "lucide-react";
// import Image from "next/image";

// const HeroSection = () => {
//   return (
//     <section className="  min-h-screen gradient-bg  pb-20 px-4 md:px-6 relative overflow-hidden">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
//           {/* Left Content */}
//           <div className="space-y-6 lg:space-y-8 order-2 lg:order-1 relative z-20">
//             {/* Badge */}
//             <div className="flex justify-center lg:justify-start z-10">
//               <div className="relative w-64 sm:w-72 md:w-80 lg:w-full max-w-md h-auto ">
//                 <Image
//                   src="/aipower.png"
//                   alt="AI Powered"
//                   width={400}
//                   height={120}
//                   className="relative w-full h-auto object-contain z-10"
//                   priority
//                 />
//               </div>
//             </div>

//             {/* Title */}
//             <div className="text-center lg:text-left">
//               <h1 className="font-jakarta font-bold text-[80px] leading-[96px] tracking-[-0.02em] text-white">
//                 Custom Apps
//                 <br />
//                 That Turn Ideas
//                 <br />
//                 Into{" "}
//                 <span className="font-jakarta font-bold text-[80px] leading-[96px] tracking-[-0.02em] text-[#0088FF]">
//                   Revenue
//                 </span>
//               </h1>
//             </div>

//             {/* Description */}
//             <p className="text-white text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed text-center lg:text-left mx-auto lg:mx-0">
//               Hawk Horizon builds scalable, user-loved apps across industries —
//               from dating to delivery, healthcare to social media. We don't just
//               code; we create digital growth engines.
//             </p>

//             {/* Stats Section */}
//             <div className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-6 sm:gap-8 pt-4">
//               {/* Apps Built */}
//               <div className="flex flex-col items-center sm:items-start space-y-3 min-w-[120px]">
//                 <div className="flex items-center justify-center gap-3">
//                   <div className="relative w-8 h-8 sm:w-10 sm:h-10">
//                     <Image
//                       src="/air.png"
//                       alt="App Store"
//                       width={40}
//                       height={40}
//                       className="w-full h-full object-contain"
//                     />
//                   </div>
//                   <div className="relative w-8 h-8 sm:w-10 sm:h-10">
//                     <Image
//                       src="/playstore.png"
//                       alt="Play Store"
//                       width={40}
//                       height={40}
//                       className="w-full h-full object-contain"
//                     />
//                   </div>
//                 </div>
//                 <div className="space-y-1 text-center sm:text-left">
//                   <div className="text-2xl sm:text-3xl font-bold text-white">
//                     200+
//                   </div>
//                   <div className="text-sm sm:text-base text-[#1E88E5] font-medium">
//                     Apps Built
//                   </div>
//                 </div>
//               </div>

//               {/* Success Rate */}
//               <div className="flex flex-col items-center sm:items-start space-y-3 min-w-[120px] mt-4">
//                 <div className="flex items-center gap-1">
//                   {[1, 2, 3, 4, 5].map((i) => (
//                     <Star
//                       key={i}
//                       className="h-5 w-5 sm:h-6 sm:w-6 fill-yellow-400 text-yellow-400"
//                     />
//                   ))}
//                 </div>
//                 <div className="space-y-1 text-center sm:text-left">
//                   <div className="text-2xl sm:text-3xl font-bold text-white">
//                     99%
//                   </div>
//                   <div className="text-sm sm:text-base text-[#1E88E5] font-medium">
//                     Success Rate
//                   </div>
//                 </div>
//               </div>

//               {/* Support */}
//               <div className="flex flex-col items-center sm:items-start space-y-3 min-w-[120px]">
//                 <div className="flex gap-2 items-center justify-center">
//                   <div className="relative w-10 h-10 sm:w-12 sm:h-12">
//                     <Image
//                       src="/person.png"
//                       alt="Dedicated Support"
//                       width={40}
//                       height={40}
//                       className="w-full h-full object-contain"
//                     />
//                   </div>
//                 </div>
//                 <div className="space-y-1 text-center sm:text-left">
//                   <div className="text-xl sm:text-2xl font-bold text-white">
//                     Support
//                   </div>
//                   <div className="text-sm sm:text-base text-[#1E88E5] font-medium">
//                     Dedicated Services
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* CTA Button */}
//             <div className="pt-4 flex justify-center lg:justify-start">
//               <Button className="!rounded-full gradient-blue bg-[#1E88E5] text-white font-medium font-jakarta text-[16px] leading-[100%] tracking-[-0.02em] px-8 py-6 sm:px-12 sm:py-7 md:px-16 md:py-7 hover:opacity-90 transition-opacity w-full sm:w-auto">
//                 Start Your Empire Today
//               </Button>
//             </div>
//           </div>
//           {/* Background Blur Effect - Responsive */}
//           <div
//             className="
//     absolute top-1/2 left-1/2
//     -translate-x-1/2 -translate-y-1/2
//     w-[300px] h-[184px]
//     sm:w-[500px] sm:h-[306px]
//     md:w-[700px] md:h-[428px]
//     lg:w-[983px] lg:h-[602px]
//     bg-[#176AB2A3]
//     rounded-full
//     blur-[80px] sm:blur-[100px] lg:blur-[129.04px]
//     -z-10
//     z-[1]      /* <-- ADD THIS */
//   "
//           />
//           {/* Right Content - Phone Mockups */}
//           <div className="relative w-full h-full order-1 lg:order-2 mb-8 lg:mb-0 z-20">
//             <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] z-20">
//               <Image
//                 src="/mobile.png"
//                 alt="Mobile App Mockup"
//                 width={600}
//                 height={800}
//                 className="w-full h-full object-contain z-20"
//                 priority
//               />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Live Chat Widget - Responsive */}
//       <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 lg:bottom-8 lg:right-8 z-50">
//         <Button className="!rounded-full !bg-gray-100 text-gray-800 hover:bg-gray-200 px-4 py-4 sm:px-6 sm:py-6 shadow-2xl font-semibold gap-2 text-sm sm:text-base">
//           Live <span className="text-gray-600">Chat</span>
//           <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full animate-pulse"></div>
//         </Button>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

// "use client";
// import React, { useEffect, useRef, useState } from "react";
// import { Button } from "../components/ui/Button";
// import { Star } from "lucide-react";
// import Image from "next/image";

// const slides = [
//   {
//     badge: "/aipower.png",
//     title: "Custom Apps",
//     highlight: "Revenue",
//     description:
//       "We build scalable and intuitive custom applications tailored to your business needs. " +
//       "Our apps are designed to optimize workflows, enhance user experience, and drive higher revenue. " +
//       "From ideation to deployment, we ensure each app aligns with your goals and growth strategy. " +
//       "Our team leverages modern technologies to create reliable, high-performance solutions that evolve with your business.",
//     // image: "/mobile.png",
//     image: "/Native.png",
//   },
//   {
//     badge: "/aipower.png",
//     title: "Cross Platform",
//     highlight: "Solutions",
//     description:
//       "We develop smart AI-driven cross-platform solutions that empower your business to operate seamlessly across devices. " +
//       "Our solutions aim to automate processes, improve efficiency, and reduce operational costs. " +
//       "They provide a consistent experience for users, whether on mobile, desktop, or web. " +
//       "With scalability in mind, these platforms grow alongside your business without compromise.",
//     image: "/CrossPlatform.png",
//   },
//   {
//     badge: "/aipower.png",
//     title: "Custom Web App",
//     highlight: "Platforms",
//     description:
//       "We create enterprise-grade web applications built for speed, security, and superior performance. " +
//       "Each platform is customized to fit complex business workflows while remaining intuitive for end-users. " +
//       "Our web apps integrate seamlessly with existing systems, ensuring smooth operations. " +
//       "We focus on scalable architecture so your platform can handle growth without limitations.",
//     image: "/CustomWebApp.png",
//   },
//   {
//     badge: "/aipower.png",
//     title: "IoT Apps",
//     highlight: "Unicorn",
//     description:
//       "We design innovative IoT applications that connect devices, gather insights, and drive smarter decisions. " +
//       "Our solutions help startups and enterprises transform into industry leaders by leveraging connected technology. " +
//       "From sensor data collection to actionable analytics, we cover the entire IoT ecosystem. " +
//       "These apps enhance automation, improve efficiency, and unlock new business opportunities for rapid growth.",
//     image: "/IoTApps.png",
//   },
// ];

// const HeroSection = () => {
//   const [activeSlide, setActiveSlide] = useState(0);
//   const intervalRef = useRef(null);

//   const startSlider = () => {
//     stopSlider();
//     intervalRef.current = setInterval(() => {
//       setActiveSlide((prev) => (prev + 1) % slides.length);
//     }, 4000);
//   };

//   const stopSlider = () => {
//     if (intervalRef.current) clearInterval(intervalRef.current);
//   };

//   useEffect(() => {
//     startSlider();
//     return stopSlider;
//   }, []);

//   return (
//     <section className="min-h-screen gradient-bg pb-20 px-4 md:px-6 relative overflow-hidden">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
//           {/* LEFT CONTENT */}
//           <div className="space-y-6 lg:space-y-8 order-2 lg:order-1 relative z-20">
//             {/* Badge */}
//             <div className="flex justify-center lg:justify-start">
//               <div className="relative w-64 sm:w-72 md:w-80 max-w-md">
//                 <Image
//                   src={slides[activeSlide].badge}
//                   alt="AI Powered"
//                   width={400}
//                   height={120}
//                   className="w-full h-auto object-contain"
//                   priority
//                 />
//               </div>
//             </div>

//             {/* Title */}
//             <div className="text-center lg:text-left">
//               <h1 className="font-jakarta font-bold text-[80px] leading-[96px] text-white">
//                 {slides[activeSlide].title}
//                 <br />
//                 That Turn Ideas
//                 <br />
//                 Into{" "}
//                 <span className="text-[#0088FF]">
//                   {slides[activeSlide].highlight}
//                 </span>
//               </h1>
//             </div>

//             {/* Description */}
//             <p className="text-white text-lg max-w-2xl leading-relaxed text-center lg:text-left mx-auto lg:mx-0 transition-all duration-700">
//               {slides[activeSlide].description}
//             </p>

//             {/* Stats Section */}
//             <div className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-6 sm:gap-8 pt-4">
//               {/* Apps Built */}
//               <div className="flex flex-col items-center sm:items-start space-y-3 min-w-[120px]">
//                 <div className="flex items-center justify-center gap-3">
//                   <div className="relative w-8 h-8 sm:w-10 sm:h-10">
//                     <Image
//                       src="/air.png"
//                       alt="App Store"
//                       width={40}
//                       height={40}
//                       className="w-full h-full object-contain"
//                     />
//                   </div>
//                   <div className="relative w-8 h-8 sm:w-10 sm:h-10">
//                     <Image
//                       src="/playstore.png"
//                       alt="Play Store"
//                       width={40}
//                       height={40}
//                       className="w-full h-full object-contain"
//                     />
//                   </div>
//                 </div>
//                 <div className="space-y-1 text-center sm:text-left">
//                   <div className="text-2xl sm:text-3xl font-bold text-white">
//                     200+
//                   </div>
//                   <div className="text-sm sm:text-base text-[#1E88E5] font-medium">
//                     Apps Built
//                   </div>
//                 </div>
//               </div>

//               {/* Success Rate */}
//               <div className="flex flex-col items-center sm:items-start space-y-3 min-w-[120px] mt-4">
//                 <div className="flex items-center gap-1">
//                   {[1, 2, 3, 4, 5].map((i) => (
//                     <Star
//                       key={i}
//                       className="h-5 w-5 sm:h-6 sm:w-6 fill-yellow-400 text-yellow-400"
//                     />
//                   ))}
//                 </div>
//                 <div className="space-y-1 text-center sm:text-left">
//                   <div className="text-2xl sm:text-3xl font-bold text-white">
//                     99%
//                   </div>
//                   <div className="text-sm sm:text-base text-[#1E88E5] font-medium">
//                     Success Rate
//                   </div>
//                 </div>
//               </div>

//               {/* Support */}
//               <div className="flex flex-col items-center sm:items-start space-y-3 min-w-[120px]">
//                 <div className="flex gap-2 items-center justify-center">
//                   <div className="relative w-10 h-10 sm:w-12 sm:h-12">
//                     <Image
//                       src="/person.png"
//                       alt="Dedicated Support"
//                       width={40}
//                       height={40}
//                       className="w-full h-full object-contain"
//                     />
//                   </div>
//                 </div>
//                 <div className="space-y-1 text-center sm:text-left">
//                   <div className="text-xl sm:text-2xl font-bold text-white">
//                     Support
//                   </div>
//                   <div className="text-sm sm:text-base text-[#1E88E5] font-medium">
//                     Dedicated Services
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* CTA */}
//             <div className="pt-4 flex justify-center lg:justify-start">
//               <Button className="rounded-full bg-[#1E88E5] text-white px-10 py-6 text-lg">
//                 Start Your Empire Today
//               </Button>
//             </div>
//           </div>
//           {/* Background Blur Effect - Responsive */}
//           <div
//             className="
//     absolute top-1/2 left-1/2
//     -translate-x-1/2 -translate-y-1/2
//     w-[300px] h-[184px]
//     sm:w-[500px] sm:h-[306px]
//     md:w-[700px] md:h-[428px]
//     lg:w-[983px] lg:h-[602px]
//     bg-[#176AB2A3]
//     rounded-full
//     blur-[80px] sm:blur-[100px] lg:blur-[129.04px]
//     -z-10
//     z-[1]      /* <-- ADD THIS */
//   "
//           />
//           {/* RIGHT IMAGE SLIDER */}
//           <div
//             className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] order-1 lg:order-2 z-20"
//             onMouseEnter={stopSlider}
//             onMouseLeave={startSlider}
//           >
//             <Image
//               key={activeSlide}
//               src={slides[activeSlide].image}
//               alt="Hero Slide"
//               width={600}
//               height={800}
//               className="w-full h-full object-contain transition-all duration-700 ease-in-out"
//               priority
//             />
//           </div>
//         </div>
//       </div>

//       {/* Blur Background */}
//       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-[#176AB2A3] rounded-full blur-[120px] -z-10" />
//     </section>
//   );
// };

// export default HeroSection;

"use client";
import React, { useEffect, useRef, useState } from "react";
import { Button } from "../components/ui/Button";
import { Star } from "lucide-react";
import Image from "next/image";

const slides = [
  {
    badge: "/aipower.png",
    title: "Custom Apps",
    highlight: "Revenue",
    description:
      "We build scalable and intuitive custom applications tailored to your business needs. " +
      "Our apps are designed to optimize workflows, enhance user experience, and drive higher revenue. " +
      "From ideation to deployment, we ensure each app aligns with your goals and growth strategy. " +
      "Our team leverages modern technologies to create reliable, high-performance solutions that evolve with your business.",
    image: "/Native.png",
    imageDimensions: { width: 600, height: 800 },
    specialClass: "scale-110",
  },
  {
    badge: "/aipower.png",
    title: "Cross Platform",
    highlight: "Solutions",
    description:
      "We develop smart AI-driven cross-platform solutions that empower your business to operate seamlessly across devices. " +
      "Our solutions aim to automate processes, improve efficiency, and reduce operational costs. " +
      "They provide a consistent experience for users, whether on mobile, desktop, or web. " +
      "With scalability in mind, these platforms grow alongside your business without compromise.",
    image: "/CrossPlatform.png",
    imageDimensions: { width: 650, height: 750 },
    specialClass: "scale-110",
  },
  {
    badge: "/aipower.png",
    title: "Custom Web App",
    highlight: "Platforms",
    description:
      "We create enterprise-grade web applications built for speed, security, and superior performance. " +
      "Each platform is customized to fit complex business workflows while remaining intuitive for end-users. " +
      "Our web apps integrate seamlessly with existing systems, ensuring smooth operations. " +
      "We focus on scalable architecture so your platform can handle growth without limitations.",
    image: "/CustomWebApp.png",
    imageDimensions: { width: 700, height: 800 },
    specialClass: "scale-110",
  },
  {
    badge: "/aipower.png",
    title: "IoT Apps",
    highlight: "Unicorn",
    description:
      "We design innovative IoT applications that connect devices, gather insights, and drive smarter decisions. " +
      "Our solutions help startups and enterprises transform into industry leaders by leveraging connected technology. " +
      "From sensor data collection to actionable analytics, we cover the entire IoT ecosystem. " +
      "These apps enhance automation, improve efficiency, and unlock new business opportunities for rapid growth.",
    image: "/IoTApps.png",
    imageDimensions: { width: 700, height: 800 }, // IOT APPS - BIGGEST SIZE
    specialClass: "scale-110", // Added special class for scaling
  },
];

const HeroSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const intervalRef = useRef(null);

  const startSlider = () => {
    stopSlider();
    intervalRef.current = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
  };

  const stopSlider = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  useEffect(() => {
    startSlider();
    return stopSlider;
  }, []);

  return (
    <section className="min-h-screen gradient-bg pb-20 px-4 md:px-6 relative overflow-hidden ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* LEFT CONTENT */}
          <div className="space-y-6 lg:space-y-8 order-2 lg:order-1 relative z-20">
            {/* Badge */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative w-64 sm:w-72 md:w-80 max-w-md">
                <Image
                  src={slides[activeSlide].badge}
                  alt="AI Powered"
                  width={400}
                  height={120}
                  className="w-full h-auto object-contain"
                  priority
                />
              </div>
            </div>

            {/* Title */}
            <div className="text-center lg:text-left">
              <h1 className="font-jakarta font-bold text-4xl sm:text-5xl md:text-6xl lg:text-[80px] leading-tight sm:leading-snug md:leading-[96px] text-white">
                {slides[activeSlide].title}
                <br />
                That Turn Ideas
                <br />
                Into{" "}
                <span className="text-[#0088FF]">
                  {slides[activeSlide].highlight}
                </span>
              </h1>
            </div>

            {/* Description */}
            <p className="text-white text-base sm:text-lg max-w-2xl leading-relaxed text-center lg:text-left mx-auto lg:mx-0 transition-all duration-700">
              {slides[activeSlide].description}
            </p>

            {/* Stats Section */}
            <div className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-6 sm:gap-8 pt-4">
              {/* Apps Built */}
              <div className="flex flex-col items-center sm:items-start space-y-3 min-w-[120px]">
                <div className="flex items-center justify-center gap-3">
                  <div className="relative w-8 h-8 sm:w-10 sm:h-10">
                    <Image
                      src="/air.png"
                      alt="App Store"
                      width={40}
                      height={40}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="relative w-8 h-8 sm:w-10 sm:h-10">
                    <Image
                      src="/playstore.png"
                      alt="Play Store"
                      width={40}
                      height={40}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
                <div className="space-y-1 text-center sm:text-left">
                  <div className="text-2xl sm:text-3xl font-bold text-white">
                    200+
                  </div>
                  <div className="text-sm sm:text-base text-[#1E88E5] font-medium">
                    Apps Built
                  </div>
                </div>
              </div>

              {/* Success Rate */}
              <div className="flex flex-col items-center sm:items-start space-y-3 min-w-[120px] mt-4">
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 sm:h-6 sm:w-6 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <div className="space-y-1 text-center sm:text-left">
                  <div className="text-2xl sm:text-3xl font-bold text-white">
                    99%
                  </div>
                  <div className="text-sm sm:text-base text-[#1E88E5] font-medium">
                    Success Rate
                  </div>
                </div>
              </div>

              {/* Support */}
              <div className="flex flex-col items-center sm:items-start space-y-3 min-w-[120px]">
                <div className="flex gap-2 items-center justify-center">
                  <div className="relative w-10 h-10 sm:w-12 sm:h-12">
                    <Image
                      src="/person.png"
                      alt="Dedicated Support"
                      width={48}
                      height={48}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
                <div className="space-y-1 text-center sm:text-left">
                  <div className="text-xl sm:text-2xl font-bold text-white">
                    Support
                  </div>
                  <div className="text-sm sm:text-base text-[#1E88E5] font-medium">
                    Dedicated Services
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4 flex justify-center lg:justify-start">
              <Button className="rounded-full bg-[#1E88E5] text-white px-8 sm:px-10 py-4 sm:py-6 text-base sm:text-lg hover:bg-[#0d7bd4] transition-colors">
                Start Your Empire Today
              </Button>
            </div>
          </div>

          {/* Background Blur Effect - Responsive */}
          <div
            className="
    absolute top-1/2 left-1/2
    -translate-x-1/2 -translate-y-1/2
    w-[300px] h-[184px]
    sm:w-[500px] sm:h-[306px]
    md:w-[700px] md:h-[428px]
    lg:w-[983px] lg:h-[602px]
    bg-[#176AB2A3]
    rounded-full
    blur-[80px] sm:blur-[100px] lg:blur-[129.04px]
    -z-10
    z-[1]
  "
          />

          {/* RIGHT IMAGE SLIDER */}
          <div
            className="relative w-full h-[350px] sm:h-[450px] md:h-[550px] lg:h-[750px] order-1 lg:order-2 z-20 flex items-center justify-center"
            onMouseEnter={stopSlider}
            onMouseLeave={startSlider}
          >
            <div className="relative w-full h-full flex items-center justify-center">
              {slides.map((slide, index) => (
                <Image
                  key={index}
                  src={slide.image}
                  alt={`${slide.title} Slide`}
                  width={slide.imageDimensions.width}
                  height={slide.imageDimensions.height}
                  className={`absolute w-auto h-auto max-w-full max-h-full object-contain transition-all duration-700 ease-in-out transform ${
                    index === activeSlide
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-95"
                  } ${slide.specialClass || ""}`} 
                  priority={index === 0}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Additional Blur Background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] sm:w-[900px] sm:h-[600px] bg-[#176AB2A3] rounded-full blur-[120px] -z-10" />
      </div>
    </section>
  );
};

export default HeroSection;
