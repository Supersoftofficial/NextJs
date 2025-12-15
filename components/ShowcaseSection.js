import React from 'react';
import { Button } from "@/components/ui/Button";
import Image from 'next/image';

const combineClasses = (...classes) => classes.filter(Boolean).join(" ");

const ShowcaseSection = () => {
  return (
    <section className="relative min-h-screen py-12 md:py-20 px-4 md:px-8 overflow-hidden ">
      {/* Heading */}
      <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center mb-16 gap-3 sm:gap-4 text-center px-2">
        <h2 className="bg-[linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(0,136,255,1)_100%)] bg-clip-text text-transparent font-bold text-[40px] leading-[42px] sm:text-[55px] sm:leading-[56px] md:text-[78px] md:leading-[78px] tracking-[-1px] md:tracking-[-1.57px] [font-family:'Plus_Jakarta_Sans',Helvetica]">
          Apps
        </h2>
        <h2 className="bg-[linear-gradient(0deg,rgba(102,102,102,1)_0%,rgba(255,255,255,1)_100%)] bg-clip-text text-transparent font-bold text-[40px] leading-[42px] sm:text-[55px] sm:leading-[56px] md:text-[78px] md:leading-[78px] tracking-[-1px] md:tracking-[-1.57px] [font-family:'Plus_Jakarta_Sans',Helvetica]">
          That Speak for Themselves
        </h2>
      </div>

      {/* Decorative Background Blurs (responsive) */}
    <div className=''>
          <div className="absolute  -left-1/4 w-[150%] h-[500px] sm:h-[700px] md:h-[968px] rounded-full blur-[124px] bg-[linear-gradient(212deg,rgba(1,114,202,0.34)_0%,rgba(0,0,0,0.34)_100%)] " />
      {/* <div className="absolute   -right-1/4 top-0 w-[150%] h-[500px] sm:h-[700px] md:h-[968px] rounded-full blur-[124px] rotate-180 bg-[linear-gradient(212deg,rgba(1,114,202,0.34)_0%,rgba(0,0,0,0.34)_100%)]" /> */}
    </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {/* Card 1 */}
        <div className={combineClasses(
          "relative bg-[#131313] rounded-2xl pt-14 px-6 sm:px-8 md:px-12 overflow-hidden group transition-all duration-300 hover:border-primary/30 lg:row-span-2"
        )}>
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative z-10">
            <h3 className="text-2xl md:text-4xl font-semibold text-foreground">HealthConnect Pro</h3>
            <p className="text-muted-foreground text-md md:text-lg leading-relaxed mt-2">
              Revolutionary healthcare platform connecting patients and providers
            </p>
            <div className="flex items-baseline gap-2 pt-2">
              <span className="text-4xl md:text-5xl font-bold text-[#40B2FF]">+300%</span>
              <span className="text-muted-foreground text-sm md:text-md">User Growth in 6 Months</span>
            </div>
            <Button className="!rounded-full bg-[#1E88E5] text-white font-semibold px-6 sm:px-8 md:px-12 py-3 sm:py-4 md:py-6 mt-6 text-sm sm:text-base md:text-lg hover:opacity-90 transition-opacity">
              View Case Study
            </Button>
            <div className=" mt-28 w-full">
              <Image src="/so1.png" width={500} height={500} className="w-full h-auto object-contain" alt="HealthConnect Pro" />
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className={combineClasses(
          "relative bg-[#131313] rounded-2xl pt-14 px-6 sm:px-8 md:px-12 overflow-hidden group transition-all duration-300 hover:border-primary/30 mx-auto"
        )}>
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative z-10 flex flex-col items-center justify-between text-center space-y-6">
            <h3 className="text-2xl md:text-4xl font-semibold text-foreground">HealthConnect</h3>
            <p className="text-muted-foreground text-md md:text-lg leading-relaxed max-w-full mx-auto">
              Revolutionary healthcare platform connecting patients and providers
            </p>
            <Button className="!rounded-full bg-[#1E88E5] text-white font-semibold px-6 sm:px-8 md:px-12 py-3 sm:py-4 md:py-6 text-sm sm:text-base md:text-lg hover:opacity-90 transition-opacity">
              View Case Study
            </Button>
           <div className="flex-shrink-0 mt-28 order-1 lg:order-2 w-full max-w-[380px]">
              <Image src="/r3.png" width={380} height={300} className="w-full h-auto object-contain" alt="HealthConnect Pro" />
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className={combineClasses(
          "relative bg-[#131313] rounded-2xl pb-4 px-6 sm:px-8 md:px-12 overflow-hidden group transition-all duration-300 hover:border-primary/30 mx-auto"
        )}>
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative z-10 flex flex-col items-center text-center space-y-6">
            <Image src="/ss3.png" width={500} height={250} className="max-w-full h-auto object-contain" alt="HealthConnect" />
            <h3 className="text-2xl md:text-4xl font-semibold text-foreground">HealthConnect</h3>
            <p className="text-muted-foreground text-md md:text-lg leading-relaxed max-w-full mx-auto">
              Revolutionary healthcare platform connecting patients and providers
            </p>
            <Button className="!rounded-full bg-[#1E88E5] text-white font-semibold px-6 sm:px-8 md:px-12 py-3 sm:py-4 md:py-6 text-sm sm:text-base md:text-lg hover:opacity-90 transition-opacity">
              View Case Study
            </Button>
          </div>
        </div>

        {/* Card 4 */}
        <div className="relative bg-[#131313] rounded-2xl p-4 md:p-6 group transition-all duration-300 hover:border-primary/30 lg:col-span-2">
          <div className="flex flex-col lg:flex-row gap-6 items-center">
            <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
              <h3 className="text-2xl md:text-4xl font-semibold text-foreground mb-2">HealthConnect Pro</h3>
              <p className="text-muted-foreground text-md md:text-lg leading-relaxed max-w-full mb-6">
                Revolutionary healthcare platform connecting patients and providers
              </p>
              <div className="flex items-baseline gap-2 justify-center lg:justify-start mb-8">
                <span className="text-4xl md:text-5xl font-bold text-[#40B2FF]">+300%</span>
                <span className="text-muted-foreground text-sm md:text-md">User Growth in 6 Months</span>
              </div>
              <Button className="!rounded-full bg-[#1E88E5] text-white font-semibold px-6 sm:px-8 md:px-12 py-3 sm:py-4 md:py-6 text-sm sm:text-base md:text-lg hover:opacity-90 transition-opacity">
                View Case Study
              </Button>
            </div>
            <div className="flex-shrink-0 order-1 lg:order-2 w-full max-w-[380px]">
              <Image src="/r3.png" width={380} height={300} className="w-full h-auto object-contain" alt="HealthConnect Pro" />
            </div>
          </div>
        </div>
      </div>

      {/* View All Button */}
      <div className="flex justify-center mt-10 md:mt-16">
        <Button className="!rounded-full bg-[#1E88E5] text-white font-semibold px-6 sm:px-8 md:px-12 py-3 sm:py-4 md:py-6 text-sm sm:text-base md:text-lg hover:opacity-90 transition-opacity">
          View All Case Study
        </Button>
      </div>
    </section>
  );
};

export default ShowcaseSection;
