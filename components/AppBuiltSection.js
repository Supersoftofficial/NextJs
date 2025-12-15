import React from 'react'
import { Button } from "../components/ui/Button";
import Image from 'next/image';

const features = [
  "Advanced matching algorithms",
  "Real-time messaging & video calls",
  "Secure payment integration",
];

const smallPhones = [
  {
    containerClass: "top-[253px] left-[233px] rotate-[-5.08deg]",
    wallpaperClass:
      "mt-[-0.4px] w-[189.73px] h-[431.29px] ml-[0.4px] rotate-[-0.08deg]",
    wallpaperSrc: "/immg.png",
  },
  {
    containerClass: "top-[272px] left-[825px] rotate-[5.08deg]",
    wallpaperClass:
      "mt-[-0.4px] w-[189.73px] h-[431.29px] ml-[0.4px] rotate-[-0.08deg]",
    wallpaperSrc: "/immg.png",
  },
  {
    containerClass: "top-[326px] left-[1056px] rotate-[10.08deg]",
    wallpaperClass:
      "mt-[-0.7px] w-[187.54px] h-[447.76px] ml-[1.5px] rotate-[-0.08deg]",
    wallpaperSrc: "/immg.png",
  },
  {
    containerClass: "top-[296px] -left-0.5 rotate-[-10.08deg]",
    wallpaperClass:
      "mt-[-0.7px] w-[187.54px] h-[447.76px] ml-[1.5px] rotate-[0.08deg]",
    wallpaperSrc: "/immg.png",
  },
];

const AppBuiltSection = () => {
  return (
    <div className="overflow-x-hidden py-16">




      {/* Hero Section */}
      <section className="relative w-full py-10 lg:py-20">
        <div className="relative w-full flex flex-col lg:flex-row items-center justify-center gap-4 mt-10 px-4">
          <h2 className="bg-[linear-gradient(0deg,rgba(102,102,102,1)_0%,rgba(255,255,255,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] font-semibold text-transparent text-4xl md:text-6xl lg:text-[80px] tracking-[-1.60px] leading-tight text-center lg:text-left">
            Apps Built for
          </h2>
          <h2 className="bg-[linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(0,136,255,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] font-semibold text-transparent text-4xl md:text-6xl lg:text-[80px] tracking-[-1.60px] leading-tight text-center lg:text-left">
            Every Industry
          </h2>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="relative w-full py-10 lg:py-20 px-4 lg:px-0">
            {/* Left side gradient */}
<div
  className="absolute -left-52 sm:-left-72 md:-left-96 w-[2186px] h-[968px] rounded-[1093px/484px] blur-[124px] 
             bg-[linear-gradient(212deg,rgba(1,114,202,0.34)_0%,rgba(0,0,0,0.34)_100%)]"
/>

{/* Right side gradient */}
<div
  className="absolute -right-52 sm:-right-72 md:-right-96 w-[2186px] h-[968px] rounded-[1093px/484px] rotate-180 blur-[124px] 
             bg-[linear-gradient(212deg,rgba(1,114,202,0.34)_0%,rgba(0,0,0,0.34)_100%)]"
/>
        {/* Mobile View - Grid Layout */}
        <div className="block lg:hidden">
          {/* Main Phone - Mobile View */}
          <div className="relative mx-auto max-w-md mb-12">
            <div className="relative w-[311px] h-[641px] mx-auto">
              <div className="absolute top-0 left-0 w-[311px] h-[641px] bg-[#3b3c40] rounded-[51.73px] overflow-hidden">
                <div className="w-[311px] h-[641px] rounded-[51.73px] border-[2.28px] border-solid border-black blur-[1.52px] absolute top-0 left-0" />
                <div className="w-[311px] h-[641px] rounded-[51.73px] border-[0.76px] border-solid border-[#1f2321] blur-[0.76px] absolute top-0 left-0" />
                <div className="absolute top-1 left-1 w-[304px] h-[633px] rounded-[47.93px] border-[0.76px] border-solid border-[#212225] blur-[0.76px]" />
                <div className="absolute top-1 left-1 w-[303px] h-[632px] rounded-[47.17px] border-[0.3px] border-solid border-[#1d1f22]" />
              </div>

              <div className="absolute top-[5px] left-[5px] w-[302px] h-[631px] bg-[#000100] rounded-[47.17px]" />

              <div className="absolute top-3.5 left-3.5 w-[281px] h-[612px] rounded-[38.04px] overflow-hidden">
                <Image
                  src="/immg.png"
                  alt="Dating App Interface"
                  width={281}
                  height={612}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="mt-6 text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                DATING APP
              </h3>
              <ul className="space-y-2">
                {features.map((feature, index) => (
                  <li
                    key={index}
                    className="text-white text-sm md:text-base text-center"
                  >
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Small Phones Grid - Mobile View */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {smallPhones.map((phone, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center"
              >
                <div className="relative w-[211px] h-[513px]">
                  <div className="absolute top-0 left-0 w-[211px] h-[434px] bg-[#3b3c40] rounded-[35.01px] overflow-hidden">
                    <div className="absolute top-0 left-0 w-[211px] h-[434px] rounded-[35.01px] border-[1.54px] border-solid border-black blur-[1.03px]" />
                    <div className="w-[211px] h-[434px] rounded-[35.01px] border-[0.51px] border-solid border-[#1f2321] blur-[0.51px] absolute top-0 left-0" />
                    <div className="absolute top-[3px] left-[3px] w-[205px] h-[428px] rounded-[32.43px] border-[0.51px] border-solid border-[#212225] blur-[0.51px]" />
                    <div className="absolute top-[3px] left-[3px] w-[205px] h-[428px] rounded-[31.92px] border-[0.21px] border-solid border-[#1d1f22]" />
                  </div>

                  <div className="absolute top-[3px] left-[3px] w-[204px] h-[427px] bg-[#000100] rounded-[31.92px]" />

                  <div className="absolute top-2.5 left-2.5 w-[190px] h-[414px] rounded-[25.74px] overflow-hidden">
                    <Image
                      src="/immg.png"
                      alt="Dating App Interface"
                      width={190}
                      height={414}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="absolute top-[15px] left-[75px] w-[61px] h-[18px] bg-[#030303] rounded-[9.08px]">
                    <div className="absolute top-1 left-[45px] w-2.5 h-2.5 bg-[#0e0b0f] rounded-[4.95px]" />
                    <div className="top-1.5 left-[47px] w-1.5 h-1.5 rounded-[2.75px] absolute bg-[#161424]" />
                    <div className="absolute top-[7px] left-12 w-[3px] h-[3px] bg-[#0f0f2a] rounded-[1.65px]" />
                    <div className="absolute top-2 left-[50px] w-px h-px bg-[#393752] rounded-[0.55px]" />
                    <div className="absolute top-2 left-[39px] w-0.5 h-0.5 bg-[#30b94d] rounded-[1.1px]" />
                  </div>
                </div>

                <div className="mt-6 text-center">
                  <h4 className="text-lg font-bold text-white mb-2">
                    DATING APP
                  </h4>
                  <ul className="space-y-1">
                    {features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="text-white text-xs text-center"
                      >
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop View - Original Layout */}
        <div className="hidden lg:block relative mx-auto max-w-[1273px] h-[869px]">
          <div className="absolute top-11 left-[466px] w-[338px] h-[825px] rounded-[29px_29px_48px_48px] bg-[linear-gradient(180deg,#1E88E5_0%,#000000_100%)]" />
          

          <article className="absolute top-[206px] left-[calc(50.00%_-_157px)] w-[311px] h-[641px]">
            <div className="absolute top-0 left-0 w-[311px] h-[641px] bg-[#3b3c40] rounded-[51.73px] overflow-hidden">
              <div className="w-[311px] h-[641px] rounded-[51.73px] border-[2.28px] border-solid border-black blur-[1.52px] absolute top-0 left-0" />
              <div className="w-[311px] h-[641px] rounded-[51.73px] border-[0.76px] border-solid border-[#1f2321] blur-[0.76px] absolute top-0 left-0" />
              <div className="absolute top-1 left-1 w-[304px] h-[633px] rounded-[47.93px] border-[0.76px] border-solid border-[#212225] blur-[0.76px]" />
              <div className="absolute top-1 left-1 w-[303px] h-[632px] rounded-[47.17px] border-[0.3px] border-solid border-[#1d1f22]" />
            </div>

            <div className="absolute top-[5px] left-[5px] w-[302px] h-[631px] bg-[#000100] rounded-[47.17px]" />

            <div className="absolute top-3.5 left-3.5 w-[281px] h-[612px] rounded-[38.04px] overflow-hidden">
              <Image
                src="/immg.png"
                alt="Dating App Interface"
                width={281}
                height={612}
                className="w-full h-full object-cover"
              />
            </div>
          </article>

          <div className="top-0 left-[525px] h-[178px] text-[38.6px] tracking-[-0.77px] leading-[177.8px] absolute flex items-center justify-center font-bold text-white whitespace-nowrap">
            DATING APP
          </div>

          {features.map((feature, index) => (
            <div
              key={index}
              className={`absolute ${
                index === 0
                  ? "top-[117px] left-[498px] w-[278px]"
                  : index === 1
                  ? "top-[138px] left-[484px] w-[305px]"
                  : "top-[158px] left-[512px] w-[249px]"
              } text-[11.2px] text-center leading-[20.0px] font-normal text-white tracking-[0]`}
            >
              {feature}
            </div>
          ))}

          {smallPhones.map((phone, index) => (
            <article
              key={index}
              className={`absolute w-[211px] h-[513px] flex flex-col ${
                index === 2 ? "gap-[14.8px]" : "gap-3"
              } ${phone.containerClass}`}
            >
              <div className="ml-[19.8px] w-[179.64px] h-[67.14px] relative mt-0">
                <h3
                  className={`absolute ${
                    index === 0 || index === 3 ? "top-px" : "top-0"
                  } left-[30px] w-[111px] h-[29px] flex items-center justify-center font-bold text-white text-[19.2px] tracking-[-0.38px] leading-[88.4px] whitespace-nowrap`}
                >
                  DATING APP
                </h3>

                {features.map((feature, featureIndex) => (
                  <p
                    key={featureIndex}
                    className={`absolute ${
                      featureIndex === 0
                        ? "top-8 left-[7px] w-[156px]"
                        : featureIndex === 1
                        ? "top-[43px] left-0 w-[172px]"
                        : "top-[55px] left-4 w-[140px]"
                    } font-normal text-white text-[6.3px] text-center tracking-[0] leading-[11.3px]`}
                  >
                    {feature}
                  </p>
                ))}
              </div>

              <div className="ml-0 h-[433.99px] w-[210.56px] self-center relative">
                <div className="absolute top-0 left-0 w-[211px] h-[434px] bg-[#3b3c40] rounded-[35.01px] overflow-hidden">
                  <div className="absolute top-0 left-0 w-[211px] h-[434px] rounded-[35.01px] border-[1.54px] border-solid border-black blur-[1.03px]" />
                  <div className="w-[211px] h-[434px] rounded-[35.01px] border-[0.51px] border-solid border-[#1f2321] blur-[0.51px] absolute top-0 left-0" />
                  <div className="absolute top-[3px] left-[3px] w-[205px] h-[428px] rounded-[32.43px] border-[0.51px] border-solid border-[#212225] blur-[0.51px]" />
                  <div className="absolute top-[3px] left-[3px] w-[205px] h-[428px] rounded-[31.92px] border-[0.21px] border-solid border-[#1d1f22]" />
                </div>

                <div className="absolute top-[3px] left-[3px] w-[204px] h-[427px] bg-[#000100] rounded-[31.92px]" />

                <div className="absolute top-2.5 left-2.5 w-[190px] h-[414px] rounded-[25.74px] overflow-hidden">
                  <Image
                    src="/immg.png"
                    alt="Dating App Interface"
                    width={190}
                    height={414}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Button */}
        <div className="w-full flex justify-center mt-10 lg:mt-20">
          <Button className="w-[266px] h-[53px] bg-[#1e88e5] hover:bg-[#1976d2] !rounded-full font-medium text-white text-base tracking-[-0.32px]">
            Talk To An Expert
          </Button>
        </div>
      </section>
    </div>
  )
}

export default AppBuiltSection