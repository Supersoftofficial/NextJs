import React from "react";
import { Button } from "../components/ui/Button";
import { Card, CardContent } from "../components/ui/Card";
import Image from "next/image";

const FeatureSection = () => {
  const featureCards = [
    {
      id: 1,
      title: "Execution Brings Vision to Life",
      description:
        "Innovative ideas need expert mobile and web app development to become real solutions",
      titleColor: "text-[#e7f1ff]",
      // bgColor: "bg-[#131313]",
    },
    {
      id: 2,
      title: "Innovation Maintains Relevance",
      description:
        "Regular updates and app maintenance keep products competitive",
      titleColor: "text-[#e7f1ff]",
      // bgColor: "bg-[#131313]",
    },
    {
      id: 3,
      title: "Accessibility Expands Reach",
      description:
        "Seamless mobile and web apps keep users connected anytime, anywhere",
      titleColor: "text-[#e7f1ff]",
      // bgColor: "bg-[#131313]",
    },
    {
      id: 4,
      title: "Performance Builds Credibility",
      description:
        "Reliable web architecture ensures speed, security, and stability",
      titleColor: "text-[#e7f1ff]",
      // bgColor: "bg-[#131313]",
    },
    {
      id: 5,
      title: "Custom Solutions Add Value",
      description:
        "Tailored app development delivers measurable results beyond off-the-shelf products",
      titleColor: "text-white",
      // bgColor: "bg-[#131313]",
    },
    {
      id: 6,
      title: "Scalability Fuels Growth",
      description:
        "Future-ready cross-platform apps grow with your business and users",
      titleColor: "text-[#e7f1ff]",
      // bgColor: "bg-[#131313]",
    },
    {
      id: 7,
      title: "Technology Delivers Impact",
      description:
        "Smart mobile and web app development turns ideas into real business outcomes",
      titleColor: "text-[#e7f1ff]",
      // bgColor: "bg-[#131313]",
    },
    {
      id: 8,
      title: "Design Builds Trust",
      description: "Strong UI/UX design enhances usability and user confidence",
      titleColor: "text-[#e7f1ff]",
      // bgColor: "bg-[#131313]",
    },
  ];

  return (
    <div className="w-full overflow-hidden">
      <section className="w-full py-12 sm:py-16 md:py-20 px-4 sm:px-6">
        <div className="container mx-auto px-4">
          {/* Heading Section */}
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2
              className="
              bg-gradient-to-b from-[#666666] to-white
              bg-clip-text text-transparent
              font-bold font-['Plus_Jakarta_Sans']
              text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[78.5px]
              tracking-tight
              leading-tight sm:leading-normal
            "
            >
              Great Ideas Fail Without
            </h2>

            <h2
              className="
              bg-gradient-to-t from-white to-[#0088FF]
              bg-clip-text text-transparent
              font-bold font-['Plus_Jakarta_Sans']
              text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[78.5px]
              tracking-tight
              leading-tight sm:leading-normal
              mt-2 sm:mt-4
            "
            >
              Great Apps.
            </h2>
          </div>

          {/* Main Content - Mobile: Vertical, Desktop: Original Layout */}
          <div className="relative w-full">
            <div
              className="
    absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
    w-[300px] h-[150px]
    sm:w-[450px] sm:h-[225px]
    md:w-[600px] md:h-[300px]
    lg:w-[800px] lg:h-[400px]
    xl:w-[1000px] xl:h-[500px]
    bg-[#176ab2a3] rounded-full
    blur-[60px] sm:blur-[90px] md:blur-[120px] lg:blur-[160px] xl:blur-[200px]
    z-0
  "
            />

            {/* Desktop Layout - Original Positioning (hidden on mobile) */}
            <div className="hidden lg:block relative h-[800px] xl:h-[1096px] w-full max-w-[1375px] mx-auto">
              {/* Laptop Image - Desktop */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="relative w-[300px] md:w-[400px] lg:w-[539px]">
                  <Image
                    src="/Laptop.png"
                    alt="Laptop"
                    width={539}
                    height={300}
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>

              {/* Desktop Cards with Original Positioning */}
              <div className="relative h-full w-full">
                {[
                  { id: 1, className: "top-0 left-1/2 -translate-x-1/2" },
                  { id: 2, className: "top-[103px] left-[110px]" },
                  { id: 3, className: "top-[103px] right-[110px]" },
                  { id: 4, className: "top-[372px] left-0" },
                  { id: 5, className: "top-[372px] right-0" },
                  { id: 6, className: "bottom-[250px] left-[50px]" },
                  { id: 7, className: "bottom-[239px] right-[50px]" },
                  {
                    id: 8,
                    className: "bottom-[50px] left-1/2 -translate-x-1/2",
                  },
                ].map((pos) => {
                  const card = featureCards.find((c) => c.id === pos.id);
                  return (
                    <div
                      key={card.id}
                      className={`absolute ${pos.className} w-[280px] lg:w-[323px]`}
                    >
                      <Card className=" backdrop-blur-sm border border-gray-700/50 rounded-2xl">
                        <CardContent className="p-4 lg:p-6">
                          <h3
                            className={`${card.titleColor} font-bold text-lg lg:text-xl xl:text-2xl text-center mb-3 lg:mb-4     `}
                          >
                            {card.title}
                          </h3>
                          <p className="text-gray-300 text-sm lg:text-base text-center">
                            {card.description}
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Mobile & Tablet Layout - Vertical Cards Grid */}
            <div className="lg:hidden">
              {/* Laptop Image - Mobile */}
              <div className="flex justify-center mb-8 sm:mb-12">
                <div className="relative w-64 sm:w-80 md:w-96">
                  <Image
                    src="/Laptop.png"
                    alt="Laptop"
                    width={384}
                    height={214}
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>

              {/* Cards Grid for Mobile/Tablet */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {featureCards.map((card) => (
                  <Card
                    key={card.id}
                    className={`${card.bgColor} backdrop-blur-sm border border-gray-700/50 rounded-2xl hover:scale-[1.02] transition-transform duration-300`}
                  >
                    <CardContent className="p-4 sm:p-6">
                      <h3
                        className={`${card.titleColor} font-bold text-lg sm:text-xl text-center mb-3`}
                      >
                        {card.title}
                      </h3>
                      <p className="text-gray-300 text-sm sm:text-base text-center">
                        {card.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center mt-8 sm:mt-12 md:mt-16">
            <Button className="w-[266px] h-[53px] bg-[#1e88e5] hover:bg-[#1976d2] !rounded-full font-medium text-white text-base tracking-[-0.32px]">
              Start Building Your App Today
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeatureSection;
