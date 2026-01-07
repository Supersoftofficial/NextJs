import React from 'react'
import { Button } from "../components/ui/Button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const AdvisorSection = () => {
  return (
    <div className="w-full overflow-hidden py-16">
      <section className="relative flex justify-center gradient-bg py-12 sm:py-16 md:py-20 px-4 sm:px-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Background Blur Effect - Responsive */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
            w-[300px] h-[92px] 
            sm:w-[500px] sm:h-[154px]
            md:w-[700px] md:h-[215px]
            lg:w-[900px] lg:h-[277px]
            xl:w-[1300px] xl:h-[400px] 
            bg-[#176AB2A3] rounded-full 
            blur-[40px] sm:blur-[60px] md:blur-[80px] lg:blur-[100px] xl:blur-[120px] z-0" />
          
          {/* Heading - Responsive */}
          <div className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-18">
            <h2 className="
              bg-gradient-to-r from-white to-[#6E6E6E]
              bg-clip-text text-transparent
              font-semibold font-['Plus_Jakarta_Sans']
              text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[80px]
              tracking-tight
              leading-tight sm:leading-normal
            ">
              Guidance from Our{" "}
              <span className="
                bg-gradient-to-r from-[#1E88E5] to-[#EDF7FF]
                bg-clip-text text-transparent
                font-semibold font-['Plus_Jakarta_Sans']
                block sm:inline
              ">
                AI App Advisor
              </span>
            </h2>
          </div>

          {/* Chat Interface - Responsive */}
          <div className="bg-[#363636] relative rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-12 space-y-6 md:space-y-8 z-10">
            {/* AI Message */}
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
              {/* AI Avatar */}
              <div className="flex justify-center sm:justify-start">
                <div className="relative w-12 h-12 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-gradient-blue flex items-center justify-center flex-shrink-0">
                  <Image
                    src="/chat.png"
                    alt="AI Assistant"
                    width={24}
                    height={24}
                    className="w-[70%] h-[70%] object-contain"
                  />
                </div>
              </div>

              {/* Message Content */}
              <div className="flex-1 space-y-4 md:space-y-6">
                <div className="text-white leading-relaxed text-sm sm:text-base">
                  <p className="mb-3 md:mb-4">
                    hi! i'm your apex, trained on 12+ years of app development
                    expertise with 200+ successful projects across industries.
                  </p>
                  <p className="mb-3 md:mb-4">
                    in just a few minutes, i can help you explore the perfect
                    solution for your next mobile or web app — from e-commerce
                    and finance to health, lifestyle, and business.
                  </p>
                  <p className="font-medium">
                    what are you planning to build today?
                  </p>
                </div>

                {/* Option Buttons - Responsive Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3">
                  <Button
                    variant="secondary"
                    className="rounded-full px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm bg-secondary/80 hover:bg-secondary text-white border-white border border-border/50 justify-center sm:justify-start"
                  >
                    → Mobile App
                  </Button>
                  <Button
                    variant="secondary"
                    className="rounded-full px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm bg-secondary/80 hover:bg-secondary text-white border-white border border-border/50 justify-center sm:justify-start"
                  >
                    → Web App
                  </Button>
                  <Button
                    variant="secondary"
                    className="rounded-full px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm bg-secondary/80 hover:bg-secondary  text-white border-white border border-border/50 justify-center sm:justify-start"
                  >
                    → Something Custom
                  </Button>
                  <Button
                    variant="secondary"
                    className="rounded-full px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm bg-secondary/80 hover:bg-secondary text-white border-white border border-border/50 justify-center sm:justify-start"
                  >
                    → Just Exploring Ideas
                  </Button>
                </div>
              </div>
            </div>

            {/* Input Field - Responsive */}
            <div className="relative">
              <input
                placeholder="Ask about project"
                className="
                  w-full 
                  bg-secondary/50  text-white 
                  border border-gray-300
                  focus:border-gray-400
                  focus:ring-0
                  rounded-xl sm:rounded-2xl
                  pl-4 sm:pl-6 pr-10 sm:pr-14
                  py-2.5 sm:py-3 md:py-4
                  text-sm sm:text-base
                  text-foreground 
                  placeholder:text-muted-foreground
                "
              />

              <Button
                size="icon"
                className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 !rounded-full w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 !bg-[#D9D9D9] hover:!bg-[#c9c9c9]"
              >
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 text-black" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AdvisorSection