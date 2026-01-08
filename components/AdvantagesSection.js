// export default AdvantagesSection;
'use client';
import React, { useState } from 'react';
import { Button } from '../components/ui/Button';
import Image from 'next/image';

const features = [
  {
    icon: '/p1.png',
    title: 'Lightning-Fast Development',
    description:
      'Our proven methodologies and experienced team deliver your app 3x faster than traditional agencies',
  },
  {
    icon: '/p2.png',
    title: 'Enterprise-Grade Security',
    description:
      "Bank-level security protocols protect your users' data and ensure compliance with global standards",
  },
  {
    icon: '/p3.png',
    title: 'Dedicated Support Services',
    description:
      'End-to-end technical assistance for uninterrupted performance',
  },
  {
    icon: '/p4.png',
    title: 'Scalable Architecture Solution',
    description:
      'Built to grow with your business, our apps handle millions of users without breaking a sweat.',
  },
];

const comparisonData = [
  {
    factor: 'Experience & Portfolio',
    hawkHorizon: '10+ years, 300+ apps delivered, 95% client satisfaction',
    others: 'Limited portfolio or inconsistent track record',
  },
  {
    factor: 'Technology Stack',
    hawkHorizon:
      'iOS, Android, React Native, Flutter, modern web frameworks (React, Node.js)',
    others: 'Single platform or outdated technologies',
  },
  {
    factor: 'Team Location',
    hawkHorizon:
      'US-based senior developers, same timezone, realtime collaboration',
    others: 'Offshore teams with communication delays and time zone gaps',
  },
  {
    factor: 'Pricing Transparency',
    hawkHorizon:
      'Clear pricing: $40k-$200k, detailed breakdown, no hidden costs',
    others: 'Unclear estimates or unexpected budget overruns',
  },
  {
    factor: 'Development Approach',
    hawkHorizon:
      'Agile methodology, 2-week sprints, flexible to changes, 90% on-time delivery',
    others: 'Rigid process with missed deadlines',
  },
  {
    factor: 'Communication',
    hawkHorizon: 'Daily updates, dedicated project manager, weekly demos',
    others: 'Poor communication or sporadic updates',
  },
  {
    factor: 'Full-Service Solutions',
    hawkHorizon:
      'Strategy, design, development, testing, deployment, maintenance included',
    others: 'Development only, limited post-launch support',
  },
  {
    factor: 'Quality & Security',
    hawkHorizon: 'Dedicated QA team, enterprise-grade security, GDPR compliant',
    others: 'Basic testing with post-launch bugs',
  },
  {
    factor: 'Post-Launch Support',
    hawkHorizon: 'Comprehensive maintenance, OS updates, 24/7 monitoring',
    others: 'Pay-per-incident or limited support hours',
  },
  {
    factor: 'Results',
    hawkHorizon: '80% repeat clients, 99% project completion rate',
    others: 'Low client retention, abandoned projects',
  },
];

const AdvantagesSection = () => {
  const [hoveredColumn, setHoveredColumn] = useState(null);
  const [hoveredMobileCard, setHoveredMobileCard] = useState(null);

  const getColumnBgColor = (columnName) => {
    if (hoveredColumn === columnName) {
      return 'bg-[#0088FF]';
    }

    return 'bg-background';
  };

  const getBorderClass = (columnName) => {
    if (hoveredColumn === columnName) {
      return 'border-b-gray-700 border-border';
    }
    return 'border-b-gray-700 border-border';
  };

  // Mobile card hover background
  const getMobileCardSectionBg = (cardIndex, section) => {
    if (hoveredMobileCard === cardIndex) {
      return 'bg-[#0088FF]';
    }
    return section === 'factor' ? 'bg-gray-900' : 'bg-[#131313]';
  };

  return (
    <div className='min-h-screen'>
      {/* Hero Section */}
      <div className='w-full flex flex-col items-center px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-8'>
        {/* Headings Row - Responsive Layout */}
        <div className='flex flex-col lg:flex-row items-center justify-center gap-3 sm:gap-4 lg:gap-6 w-full'>
          <h2
            className="bg-[linear-gradient(0deg,rgba(102,102,102,1)_0%,rgba(255,255,255,1)_100%)]
        [-webkit-background-clip:text] bg-clip-text 
        [-webkit-text-fill-color:transparent] [text-fill-color:transparent]
        [font-family:'Plus_Jakarta_Sans',Helvetica]
        font-bold text-transparent 
        text-[32px] sm:text-[48px] lg:text-[64px] xl:text-[78.5px] 
        tracking-[-0.64px] sm:tracking-[-0.96px] lg:tracking-[-1.28px] xl:tracking-[-1.57px]
        leading-[35px] sm:leading-[52px] lg:leading-[68px] xl:leading-[77.8px]
        text-center lg:text-left whitespace-nowrap"
          >
            The Hawk Horizon
          </h2>

          <h2
            className="bg-[linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(0,136,255,1)_100%)]
        [-webkit-background-clip:text] bg-clip-text 
        [-webkit-text-fill-color:transparent] [text-fill-color:transparent]
        [font-family:'Plus_Jakarta_Sans',Helvetica]
        font-bold text-transparent
        text-[32px] sm:text-[48px] lg:text-[64px] xl:text-[78.5px]
        tracking-[-0.64px] sm:tracking-[-0.96px] lg:tracking-[-1.28px] xl:tracking-[-1.57px]
        leading-[35px] sm:leading-[52px] lg:leading-[68px] xl:leading-[77.8px]
        text-center lg:text-left whitespace-nowrap"
          >
            Advantage
          </h2>
        </div>

        {/* Subtext - Responsive */}
        <p
          className="w-full max-w-[90vw] sm:max-w-[80vw] lg:max-w-[1112px] mt-4 sm:mt-6 lg:mt-8 
      [font-family:'Plus_Jakarta_Sans',Helvetica] 
      font-normal text-white 
      text-[16px] sm:text-[20px] lg:text-[26px] xl:text-[32px]
      tracking-[2.40px] sm:tracking-[3.20px] lg:tracking-[4.00px] xl:tracking-[4.80px]
      leading-relaxed text-center px-2"
        >
          See How We Outperform Other App Development Companies
        </p>
      </div>

      {/* Comparison Table Section */}
      <div className='w-full max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 py-6 sm:py-8 lg:py-10 text-white'>
        {/* Desktop/Tablet View - Horizontal Table */}
        <div className='hidden md:block overflow-x-auto rounded-2xl'>
          <div className='min-w-[800px] sm:min-w-full'>
            <div className='grid grid-cols-3 gap-0'>
              {/* Header Row */}
              <div
                className={`p-4 sm:p-6 border-b-2 ${getBorderClass(
                  'factor',
                )} flex items-center justify-center transition-all duration-300 ${getColumnBgColor(
                  'factor',
                )}`}
                onMouseEnter={() => setHoveredColumn('factor')}
                onMouseLeave={() => setHoveredColumn(null)}
              >
                <h2 className='font-bold text-[20px] sm:text-[26px] lg:text-[30px] xl:text-[34.3px] leading-[100%] tracking-[-0.02em] text-center'>
                  Factor
                </h2>
              </div>

              <div
                className={`p-4 sm:p-6 border-b-2 ${getBorderClass(
                  'hawkHorizon',
                )} flex items-center justify-center rounded-t-xl transition-all duration-300 ${getColumnBgColor(
                  'hawkHorizon',
                )}`}
                onMouseEnter={() => setHoveredColumn('hawkHorizon')}
                onMouseLeave={() => setHoveredColumn(null)}
              >
                <h2 className='font-bold text-[20px] sm:text-[26px] lg:text-[30px] xl:text-[34.3px] leading-[100%] tracking-[-0.02em] text-center'>
                  Hawk Horizon
                </h2>
              </div>

              <div
                className={`p-4 sm:p-6 border-b-2 ${getBorderClass(
                  'others',
                )} flex items-center justify-center transition-all duration-300 ${getColumnBgColor(
                  'others',
                )}`}
                onMouseEnter={() => setHoveredColumn('others')}
                onMouseLeave={() => setHoveredColumn(null)}
              >
                <h2 className='font-bold text-[20px] sm:text-[26px] lg:text-[30px] xl:text-[34.3px] leading-[100%] tracking-[-0.02em] text-center'>
                  Others
                </h2>
              </div>

              {/* Data Rows */}
              {comparisonData.map((row, index) => (
                <React.Fragment key={index}>
                  <div
                    className={`p-4 sm:p-6 border-b-2 ${getBorderClass(
                      'factor',
                    )} flex items-center justify-center transition-all duration-300 ${getColumnBgColor(
                      'factor',
                    )}`}
                    onMouseEnter={() => setHoveredColumn('factor')}
                    onMouseLeave={() => setHoveredColumn(null)}
                  >
                    <h3 className='font-medium text-[26.68px] sm:text-[16px] lg:text-[18px] xl:text-[22.11px] leading-[120%] sm:leading-[115%] tracking-[-0.02em] text-center'>
                      {row.factor}
                    </h3>
                  </div>

                  <div
                    className={`p-4 sm:p-6 border-b-2 ${getBorderClass(
                      'hawkHorizon',
                    )} flex items-center gap-2 sm:gap-3 transition-all duration-300 ${getColumnBgColor(
                      'hawkHorizon',
                    )}`}
                    onMouseEnter={() => setHoveredColumn('hawkHorizon')}
                    onMouseLeave={() => setHoveredColumn(null)}
                  >
                    <div className='flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-success/20 flex items-center justify-center'>
                      <div className='relative w-20 h-20 flex items-center justify-center'>
                        <Image
                          src='/correct.png'
                          alt='Correct'
                          width={80}
                          height={80}
                          className='object-contain'
                        />
                      </div>
                    </div>
                    <p className='font-medium text-[14px] sm:text-[16px] lg:text-[18px] xl:text-[22.11px] leading-[120%] sm:leading-[115%] tracking-[-0.02em] font-plus-jakarta-sans'>
                      {row.hawkHorizon}
                    </p>
                  </div>

                  <div
                    className={`p-4 sm:p-6 border-b-2 ${getBorderClass(
                      'others',
                    )} flex items-center gap-2 sm:gap-3 transition-all duration-300 ${getColumnBgColor(
                      'others',
                    )}`}
                    onMouseEnter={() => setHoveredColumn('others')}
                    onMouseLeave={() => setHoveredColumn(null)}
                  >
                    <div className='flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-error/20 flex items-center justify-center'>
                      <div className='relative w-20 h-20 flex items-center justify-center'>
                        <Image
                          src='/x.png'
                          alt='Incorrect'
                          width={80}
                          height={80}
                          className='object-contain'
                        />
                      </div>
                    </div>
                    <p className='font-medium text-[14px] sm:text-[16px] lg:text-[18px] xl:text-[22.11px] leading-[120%] sm:leading-[115%] tracking-[-0.02em] font-plus-jakarta-sans'>
                      {row.others}
                    </p>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile View - Vertical Stack with Whole Card Hover */}
        <div className='md:hidden space-y-6'>
          {comparisonData.map((row, index) => (
            <div
              key={index}
              className='rounded-xl border border-gray-700 overflow-hidden transition-all duration-300 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/20'
              onMouseEnter={() => setHoveredMobileCard(index)}
              onMouseLeave={() => setHoveredMobileCard(null)}
              onTouchStart={() => setHoveredMobileCard(index)}
              onTouchEnd={() => setHoveredMobileCard(null)}
            >
              {/* Factor Card */}
              <div
                className={`p-4 border-b border-gray-700 transition-all duration-300 ${getMobileCardSectionBg(
                  index,
                  'factor',
                )}`}
              >
                <h3 className='font-bold text-lg text-center text-white'>
                  {row.factor}
                </h3>
              </div>

              {/* Hawk Horizon Card */}
              <div
                className={`p-4 border-b border-gray-700 transition-all duration-300 ${getMobileCardSectionBg(
                  index,
                  'hawkHorizon',
                )}`}
              >
                <div className='flex items-center gap-3 mb-2'>
                  <div className='flex-shrink-0 w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center'>
                    <div className='relative w-4 h-4'>
                      <Image
                        src='/correct.png'
                        alt='Correct'
                        width={16}
                        height={16}
                        className='object-contain'
                      />
                    </div>
                  </div>
                  <h4 className='font-bold text-white'>Hawk Horizon</h4>
                </div>
                <p className='text-gray-300 text-sm pl-9'>{row.hawkHorizon}</p>
              </div>

              {/* Others Card */}
              <div
                className={`p-4 transition-all duration-300 ${getMobileCardSectionBg(
                  index,
                  'others',
                )}`}
              >
                <div className='flex items-center gap-3 mb-2'>
                  <div className='flex-shrink-0 w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center'>
                    <div className='relative w-4 h-4'>
                      <Image
                        src='/x.png'
                        alt='Incorrect'
                        width={16}
                        height={16}
                        className='object-contain'
                      />
                    </div>
                  </div>
                  <h4 className='font-bold text-white'>Others</h4>
                </div>
                <p className='text-gray-300 text-sm pl-9'>{row.others}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className='w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 text-center'>
          {features.map((feature, index) => (
            <div
              key={index}
              className='flex flex-col items-center gap-3 sm:gap-4'
            >
              <div className='relative w-16 h-16 sm:w-20 sm:h-20 lg:w-[76px] lg:h-[76px]'>
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={76}
                  height={76}
                  className='w-full h-full object-contain'
                />
              </div>

              <h3 className='font-bold text-[#e7f4ff] text-[18px] sm:text-[20px] lg:text-[22px] xl:text-[24px] px-2'>
                {feature.title}
              </h3>

              <p className='font-normal text-[#d2d2d2] text-[12px] sm:text-[13px] leading-relaxed px-2 sm:px-0'>
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Button - Responsive */}
        <div className='flex justify-center mt-8 sm:mt-10 lg:mt-12'>
          <Button
            className='
              h-[44px] sm:h-[48px] lg:h-[53px] 
              w-[200px] sm:w-[230px] lg:w-[266px] 
              bg-[#1e88e5] hover:bg-[#1976d2] 
              !rounded-full 
              font-medium text-white 
              text-sm sm:text-base
              transition-all duration-300
              transform hover:scale-105
            '
          >
            Talk To An Expert
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AdvantagesSection;
