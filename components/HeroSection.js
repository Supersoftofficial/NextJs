import React from "react";
import { Button } from "../components/ui/Button";
import { Star } from "lucide-react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="  min-h-screen gradient-bg  pb-20 px-4 md:px-6 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 lg:space-y-8 order-2 lg:order-1 relative z-20">
            {/* Badge */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative w-64 sm:w-72 md:w-80 lg:w-full max-w-md h-auto">
                <Image
                  src="/aipower.png"
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
              <h1 className="font-jakarta font-bold text-[80px] leading-[96px] tracking-[-0.02em] text-white">
                Custom Apps
                <br />
                That Turn Ideas
                <br />
                Into{" "}
                <span className="font-jakarta font-bold text-[80px] leading-[96px] tracking-[-0.02em] text-[#0088FF]">
                  Revenue
                </span>
              </h1>
            </div>

            {/* Description */}
            <p className="text-white text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed text-center lg:text-left mx-auto lg:mx-0">
              Hawk Horizon builds scalable, user-loved apps across industries —
              from dating to delivery, healthcare to social media. We don't just
              code; we create digital growth engines.
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
                      width={40}
                      height={40}
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

            {/* CTA Button */}
            <div className="pt-4 flex justify-center lg:justify-start">
              <Button className="!rounded-full gradient-blue bg-[#1E88E5] text-white font-medium font-jakarta text-[16px] leading-[100%] tracking-[-0.02em] px-8 py-6 sm:px-12 sm:py-7 md:px-16 md:py-7 hover:opacity-90 transition-opacity w-full sm:w-auto">
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
    z-[1]      /* <-- ADD THIS */
  "
          />
          {/* Right Content - Phone Mockups */}
          <div className="relative w-full h-full order-1 lg:order-2 mb-8 lg:mb-0 z-20">
            <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] z-20">
              <Image
                src="/mobile.png"
                alt="Mobile App Mockup"
                width={600}
                height={800}
                className="w-full h-full object-contain z-20"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Live Chat Widget - Responsive */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 lg:bottom-8 lg:right-8 z-50">
        <Button className="!rounded-full !bg-gray-100 text-gray-800 hover:bg-gray-200 px-4 py-4 sm:px-6 sm:py-6 shadow-2xl font-semibold gap-2 text-sm sm:text-base">
          Live <span className="text-gray-600">Chat</span>
          <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full animate-pulse"></div>
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
