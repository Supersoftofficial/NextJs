// import React from "react";
// import { Button } from "../components/ui/Button";
// import { Card, CardContent } from "../components/ui/Card";
// import Image from "next/image";

// const CardSection = () => {
//   const packageData = [
//     {
//       title: "Advanced AI/ML Features",
//       description:
//         "Enhance your app with advanced AI and machine learning capabilities",
//       price: "$500+",
//       features: [
//         "Advanced matching algorithms",
//         "Real-time messaging & video calls",
//         "Secure payment integration",
//       ],
//       bgColor: "bg-[#2e2e2e]",
//       iconSrc: "/setting.png",
//       rotated: false,
//     },
//     {
//       title: "Advanced AI/ML Features",
//       description:
//         "Enhance your app with advanced AI and machine learning capabilities",
//       price: "$500+",
//       features: [
//         "Advanced matching algorithms",
//         "Real-time messaging & video calls",
//         "Secure payment integration",
//       ],
//       bgColor: "bg-[#0093ff]",
//       iconSrc: "/setting.png",
//       rotated: false,
//     },
//     {
//       title: "Advanced AI/ML Features",
//       description:
//         "Enhance your app with advanced AI and machine learning capabilities",
//       price: "$500+",
//       features: [
//         "Advanced matching algorithms",
//         "Real-time messaging & video calls",
//         "Secure payment integration",
//       ],
//       bgColor: "bg-[#2e2e2e]",
//       iconSrc: "/setting.png",
//       rotated: true,
//     },
//     {
//       title: "Advanced AI/ML Features",
//       description:
//         "Enhance your app with advanced AI and machine learning capabilities",
//       price: "$500+",
//       features: [
//         "Advanced matching algorithms",
//         "Real-time messaging & video calls",
//         "Secure payment integration",
//       ],
//       bgColor: "bg-[#2e2e2e]",
//       iconSrc: "/setting.png",
//       rotated: true,
//     },
//     {
//       title: "Advanced AI/ML Features",
//       description:
//         "Enhance your app with advanced AI and machine learning capabilities",
//       price: "$500+",
//       features: [
//         "Advanced matching algorithms",
//         "Real-time messaging & video calls",
//         "Secure payment integration",
//       ],
//       bgColor: "bg-[#2e2e2e]",
//       iconSrc: "/setting.png",
//       rotated: true,
//     },
//   ];

//   return (
//     <div className="overflow-x-hidden">
//       <section className="relative w-full py-16 md:py-20 px-4 sm:px-6">
//         {/* Addons Header */}
//         <h2 className="text-[54.6px] font-bold text-transparent bg-clip-text text-center mt-20 mb-10">
//           <span className="text-white">The Hawk Horizon</span>
//           <span className="text-[#1e88e5]"> &nbsp;&nbsp;Addons</span>
//         </h2>

//         <div className="relative mx-auto w-full max-w-7xl">
//           {/* Grid */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
//             {packageData.map((pkg, index) => (
//               <Card
//                 key={index}
//                 className={`${pkg.bgColor} rounded-xl border border-white/10 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1`}
//               >
//                 <CardContent className="p-6 flex flex-col h-full">
//                   {/* Icon */}
//                   <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center mt-4 justify-center mx-auto">
//                     <div className="relative w-6 h-6">
//                       <Image
//                         src={pkg.iconSrc}
//                         alt="Package Icon"
//                         width={24}
//                         height={24}
//                         className="w-full h-full object-contain"
//                       />
//                     </div>
//                   </div>

//                   {/* Title */}
//                   <h3 className="text-center text-white text-lg sm:text-xl font-bold mt-4">
//                     {pkg.title}
//                   </h3>

//                   {/* Description */}
//                   <p className="text-center text-white/80 text-sm mt-2">
//                     {pkg.description}
//                   </p>

//                   {/* Features */}
//                   <div className="mt-5 space-y-2">
//                     {pkg.features.map((feature, i) => (
//                       <div key={i} className="flex items-start gap-2">
//                         <div className="w-2 h-2 bg-white rounded mt-1.5 flex-shrink-0" />
//                         <p className="text-white/90 text-sm">{feature}</p>
//                       </div>
//                     ))}
//                   </div>

//                   {/* Price & Button */}
//                   <div className="flex items-center justify-between mt-auto pt-6">
//                     <p className="text-white text-2xl font-bold">{pkg.price}</p>

//                     <Button className="bg-black/60 hover:bg-black text-white rounded-full px-4 py-2 text-xs border border-white/10">
//                       Add Package
//                     </Button>
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//             <div
//               className="
//     absolute left-1/2 -translate-x-1/2
//     w-[120vw] sm:w-[100vw] md:w-[1500px]
//     h-[600px] sm:h-[700px] md:h-[900px]
//     blur-[150px]
//     rounded-full
//     bg-[linear-gradient(212deg,rgba(1,114,202,0.34)_0%,rgba(0,0,0,0.34)_100%)]
//     -z-10
//   "
//             />
//           </div>
//         </div>

//         {/* Mobile Image */}
//         <div className="flex items-center justify-center mt-16">
//           <div className="relative w-full max-w-[90%] sm:w-[70%] md:w-[60%]">
//             <Image
//               // src="/mobile2.png"
//               src="/lmobile.png"
//               alt="Mobile App Preview"
//               width={600}
//               height={400}
//               className="w-full h-auto object-contain"
//             />
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default CardSection;
'use client';
import React, { useState } from 'react';
import { Button } from '../components/ui/Button';
import { Card, CardContent } from '../components/ui/Card';
import Image from 'next/image';

const CardSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const packageData = [
    {
      title: 'Advanced AI/ML Features',
      description:
        'Enhance your app with advanced AI and machine learning capabilities',
      price: '$500+',
      features: [
        'Advanced matching algorithms',
        'Real-time messaging & video calls',
        'Secure payment integration',
      ],
      defaultBgColor: 'bg-[#2e2e2e]',
      hoverBgColor: 'bg-[#0093ff]',
      iconSrc: '/setting.png',
      rotated: false,
    },
    {
      title: 'Advanced AI/ML Features',
      description:
        'Enhance your app with advanced AI and machine learning capabilities',
      price: '$500+',
      features: [
        'Advanced matching algorithms',
        'Real-time messaging & video calls',
        'Secure payment integration',
      ],
      defaultBgColor: 'bg-[#2e2e2e]',
      hoverBgColor: 'bg-[#0093ff]',
      iconSrc: '/setting.png',
      rotated: false,
    },
    {
      title: 'Advanced AI/ML Features',
      description:
        'Enhance your app with advanced AI and machine learning capabilities',
      price: '$500+',
      features: [
        'Advanced matching algorithms',
        'Real-time messaging & video calls',
        'Secure payment integration',
      ],
      defaultBgColor: 'bg-[#2e2e2e]',
      hoverBgColor: 'bg-[#0093ff]',
      iconSrc: '/setting.png',
      rotated: true,
    },
    {
      title: 'Advanced AI/ML Features',
      description:
        'Enhance your app with advanced AI and machine learning capabilities',
      price: '$500+',
      features: [
        'Advanced matching algorithms',
        'Real-time messaging & video calls',
        'Secure payment integration',
      ],
      defaultBgColor: 'bg-[#2e2e2e]',
      hoverBgColor: 'bg-[#0093ff]',
      iconSrc: '/setting.png',
      rotated: true,
    },
    {
      title: 'Advanced AI/ML Features',
      description:
        'Enhance your app with advanced AI and machine learning capabilities',
      price: '$500+',
      features: [
        'Advanced matching algorithms',
        'Real-time messaging & video calls',
        'Secure payment integration',
      ],
      defaultBgColor: 'bg-[#2e2e2e]',
      hoverBgColor: 'bg-[#0093ff]',
      iconSrc: '/setting.png',
      rotated: true,
    },
  ];

  return (
    <div className='overflow-x-hidden'>
      <section className='relative w-full py-2 md:py-2 px-4 sm:px-6'>
        {/* Addons Header */}
        <h2 className='text-[54.6px] font-bold text-transparent bg-clip-text text-center mt-20 mb-10'>
          <span className='text-white'>The Hawk Horizon</span>
          <span className='text-[#1e88e5]'> &nbsp;&nbsp;Addons</span>
        </h2>

        <div className='relative mx-auto w-full max-w-7xl'>
          {/* Grid */}
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8'>
            {packageData.map((pkg, index) => {
              const isHovered = hoveredIndex === index;

              return (
                <div
                  key={index}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <Card
                    className={`rounded-xl border border-white/10 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 ${
                      isHovered ? pkg.hoverBgColor : pkg.defaultBgColor
                    }`}
                  >
                    <CardContent className='p-6 flex flex-col h-full'>
                      {/* Icon */}
                      <div className='w-12 h-12 rounded-xl bg-white/20 flex items-center mt-4 justify-center mx-auto'>
                        <div className='relative w-6 h-6'>
                          <Image
                            src={pkg.iconSrc}
                            alt='Package Icon'
                            width={24}
                            height={24}
                            className='w-full h-full object-contain'
                          />
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className='text-center text-white text-lg sm:text-xl font-bold mt-4'>
                        {pkg.title}
                      </h3>

                      {/* Description */}
                      <p className='text-center text-white/80 text-sm mt-2'>
                        {pkg.description}
                      </p>

                      {/* Features */}
                      <div className='mt-5 space-y-2'>
                        {pkg.features.map((feature, i) => (
                          <div key={i} className='flex items-start gap-2'>
                            <div className='w-2 h-2 bg-white rounded mt-1.5 flex-shrink-0' />
                            <p className='text-white/90 text-sm'>{feature}</p>
                          </div>
                        ))}
                      </div>

                      {/* Price & Button */}
                      <div className='flex items-center justify-between mt-auto pt-6'>
                        <p className='text-white text-2xl font-bold'>
                          {pkg.price}
                        </p>

                        <Button
                          className={`${
                            isHovered
                              ? 'bg-white/20 hover:bg-white/30'
                              : 'bg-black/60 hover:bg-black'
                          } text-white rounded-full px-4 py-2 text-xs border border-white/10 transition-colors duration-300`}
                        >
                          Add Package
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
            <div
              className='
                absolute left-1/2 -translate-x-1/2 
                w-[120vw] sm:w-[100vw] md:w-[1500px] 
                h-[600px] sm:h-[700px] md:h-[900px] 
                blur-[150px] 
                rounded-full 
                bg-[linear-gradient(212deg,rgba(1,114,202,0.34)_0%,rgba(0,0,0,0.34)_100%)]
                -z-10
              '
            />
          </div>
        </div>

        {/* Mobile Image */}
        <div className='flex items-center justify-center mt-16'>
          <div className='relative w-full max-w-[90%] sm:w-[70%] md:w-[60%]'>
            <Image
              src='/lmobile.png'
              alt='Mobile App Preview'
              width={600}
              height={400}
              className='w-full h-auto object-contain'
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default CardSection;
