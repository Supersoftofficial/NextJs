"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";

const techLogos = [
  {
    src: "/misrosoft.png",
    alt: "Microsoft",
    className: "h-10 sm:h-12 md:h-16 lg:h-[60px] w-auto",
    width: 100,
    height: 40,
  },
  {
    src: "/github.png",
    alt: "GitHub",
    className: "h-12 sm:h-16 md:h-20 lg:h-[80px] w-auto",
    width: 100,
    height: 40,
  },
  {
    src: "/paypal.png",
    alt: "PayPal",
    className: "h-12 sm:h-16 md:h-24 lg:h-[100px] w-auto",
    width: 120,
    height: 48,
  },
  {
    src: "/visa.png",
    alt: "Visa",
    className: "h-12 sm:h-16 md:h-24 lg:h-[100px] w-auto",
    width: 120,
    height: 48,
  },
  {
    src: "/misrosoft.png",
    alt: "Microsoft",
    className: "h-10 sm:h-12 md:h-16 lg:h-[60px] w-auto",
    width: 100,
    height: 40,
  },
  {
    src: "/github.png",
    alt: "GitHub",
    className: "h-12 sm:h-16 md:h-20 lg:h-[80px] w-auto",
    width: 100,
    height: 40,
  },
  {
    src: "/paypal.png",
    alt: "PayPal",
    className: "h-12 sm:h-16 md:h-24 lg:h-[100px] w-auto",
    width: 120,
    height: 48,
  },
];

// Create a duplicated array for seamless infinite scroll
const duplicatedLogos = [...techLogos, ...techLogos];

const appTypes = [
  { name: "Custom Web App", hasIcon: true },
  { name: "Native App", hasIcon: true },
  { name: "Cross-Platform App", hasIcon: true },
  { name: "IoT Apps", hasIcon: true },
];

const TechnologySection = () => {
  const scrollContainerRef = useRef(null);
  const animationRef = useRef(null);

  // Auto-scroll animation
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    let scrollPosition = 0;
    const scrollSpeed = 1; // Adjust speed here (pixels per frame)

    const animate = () => {
      scrollPosition += scrollSpeed;

      // Reset scroll position when we've scrolled through one set of logos
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0;
      }

      scrollContainer.style.transform = `translateX(-${scrollPosition}px)`;
      animationRef.current = requestAnimationFrame(animate);
    };

    // Start animation
    animationRef.current = requestAnimationFrame(animate);

    // Cleanup on unmount
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <div className="w-full overflow-hidden">
      <section className="">
        {/* Technology Providers Section */}
        <div className="w-full h-auto min-h-[120px] sm:min-h-[140px] md:min-h-[175px] bg-[#23252c] shadow-[0px_35px_34.8px_-31px_#00000040] flex flex-col lg:flex-row items-center justify-center lg:justify-start py-6 lg:py-0 px-4">
          {/* Title Section */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left mb-6 lg:mb-0 lg:ml-12 xl:ml-48">
            <div className="w-auto bg-gradient-to-r from-[#e0f1ff] to-[#1E88E5] bg-clip-text text-transparent font-bold text-xl sm:text-2xl md:text-[25.1px] tracking-tight leading-tight">
              OUR TECHNOLOGY
            </div>
            <div className="w-auto bg-gradient-to-r from-[#0095ff] to-white bg-clip-text text-transparent font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[41.6px] tracking-tight leading-tight whitespace-nowrap">
              PROVIDERS
            </div>
          </div>

          {/* Auto-scrolling Logos Container */}
          <div className="relative overflow-hidden w-full lg:w-auto lg:ml-8 xl:ml-16 py-4">
            <div
              ref={scrollContainerRef}
              className="flex items-center justify-start gap-4 sm:gap-6 md:gap-8 lg:gap-12 xl:gap-18"
              style={{ width: "fit-content" }}
            >
              {duplicatedLogos.map((logo, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 flex items-center justify-center px-2 sm:px-4"
                >
                  <Image
                    className={`${logo.className} object-contain filter grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110`}
                    alt={logo.alt}
                    src={logo.src}
                    width={logo.width}
                    height={logo.height}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* App Types Section */}
        <div className="w-full bg-black rounded-b-[20px] py-6 sm:py-8 px-4 sm:px-8 lg:px-16 flex flex-wrap justify-center items-center gap-6 sm:gap-10 lg:gap-16">
          {appTypes.map((appType, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 flex-shrink-0 transition-transform duration-300 hover:scale-105 hover:shadow-lg"
            >
              {/* Icon (only if hasIcon=true) */}
              {appType.hasIcon && (
                <Image
                  src="/star.png"
                  alt="Star"
                  width={55}
                  height={55}
                  className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-[55px] object-contain mb-2 sm:mb-0 sm:mr-3"
                />
              )}

              {/* App Name */}
              <span
                className="font-[Plus_Jakarta_Sans] font-semibold text-white text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-[37px] tracking-tight leading-tight text-center sm:text-left
              font-semibold text-[37.1px] leading-[44.51px] tracking-[-0.02em] "
              >
                {appType.name}
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default TechnologySection;
