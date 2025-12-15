import React from 'react';
import { Button } from '../components/ui/Button';
import { Card, CardContent } from '../components/ui/Card';
import Image from 'next/image';

const PlanSection = () => {
  const pricingPlans = [
    {
      name: 'Startup',
      price: '$7,500',
      subtitle: 'Perfect for MVP and early-stage startups',
      icon: '/a1.png',
      bgClass:
        'bg-[linear-gradient(0deg,rgba(20,19,19,1)_0%,rgba(20,19,19,1)_100%),linear-gradient(180deg,rgba(47,47,47,1)_0%,rgba(149,149,149,1)_100%)]',
      buttonClass: 'bg-[#008efe]',
      iconBgClass: 'bg-[#868686]',
      features: [
        { text: 'Native iOS & Android app', icon: '/tick.png' },
        { text: 'Basic backend infrastructure', icon: '/tick.png' },
        {
          text: 'User authentication & profiles',
          icon: '/tick.png',
        },
        { text: '1 month post-launch support', icon: '/tick.png' },
        {
          text: 'App store submission assistance',
          icon: '/tick.png',
        },
      ],
      decorativeElements: {
        ellipse1: { top: 'top-[27px]', left: 'left-[250px]' },
        ellipse2: { top: 'top-[27px]', left: 'left-[290px]' },
        star: { top: 'top-8', left: 'left-[41px]' },
        ellipse3: { top: 'top-[18px]', left: 'left-[75px]' },
        rectangle1: { top: 'top-[62px]', left: 'left-[154px]' },
        rectangle2: { top: 'top-[27px]', left: 'left-[154px]' },
        ellipse4: { top: 'top-[106px]', left: 'left-[277px]' },
        iconBox: { top: 'top-[20px]', left: 'left-0' },
      },
    },
    {
      name: 'Growth',
      price: '$7,500',
      subtitle: 'Perfect for MVP and early-stage startups',
      icon: '/a2.png',
      bgClass:
        'bg-[linear-gradient(180deg,rgba(0,136,255,1)_0%,rgba(4,38,68,1)_100%)]',
      buttonClass: 'bg-[#050505]',
      iconBgClass: 'bg-[#ffffff69]',
      isFeatured: true,
      features: [
        { text: 'Native iOS & Android app', icon: '/tick.png' },
        { text: 'Basic backend infrastructure', icon: '/tick.png' },
        { text: 'User authentication & profiles', icon: '/tick.png' },
        { text: '1 month post-launch support', icon: '/tick.png' },
        {
          text: 'App store submission assistance',
          icon: '/tick.png',
        },
        { text: 'Native iOS & Android app', icon: '/tick.png' },
        { text: 'Basic backend infrastructure', icon: '/tick.png' },
        { text: 'User authentication & profiles', icon: '/tick.png' },
      ],
      decorativeElements: {
        ellipse1: { top: 'top-[26px]', left: 'left-[611px]' },
        ellipse2: { top: 'top-[26px]', left: 'left-[651px]' },
        star: { top: 'top-[61px]', left: 'left-[537px]' },
        ellipse3: { top: 'top-[17px]', left: 'left-[449px]' },
        rectangle1: { top: 'top-[26px]', left: 'left-[528px]' },
        ellipse4: { top: 'top-[105px]', left: 'left-[638px]' },
        iconBox: { top: 'top-8', left: 'left-[5px]' },
        burst: { top: 'top-0', left: 'left-[509px]' },
      },
    },
    {
      name: 'Enterprise',
      price: '$7,500',
      subtitle: 'Perfect for MVP and early-stage startups',
      icon: '/a3.png',
      bgClass: 'bg-[#131313]',
      buttonClass: 'bg-[#008efe]',
      iconBgClass: 'bg-[#868686]',
      features: [
        { text: 'Native iOS & Android app', icon: '/tick.png' },
        { text: 'Basic backend infrastructure', icon: '/tick.png' },
        { text: 'User authentication & profiles', icon: '/tick.png' },
        { text: '1 month post-launch support', icon: '/tick.png' },
        { text: '1 month post-launch support', icon: '/tick.png' },
      ],
      decorativeElements: {
        ellipse1: { top: 'top-[99px]', left: 'left-[72px]' },
        ellipse2: { top: 'top-[99px]', left: 'left-[12px]' },
        star: { top: 'top-[104px]', left: 'left-[63px]' },
        ellipse3: { top: 'top-[90px]', left: 'left-[97px]' },
        rectangle1: { top: 'top-[134px]', left: 'left-[76px]' },
        rectangle2: { top: 'top-[99px]', left: 'left-[76px]' },
        ellipse4: { top: 'top-[178px]', left: 'left-[99px]' },
        iconBox: { top: 'top-[29px]', left: 'left-[4px]' },
      },
    },
  ];
  return (
    <div>
      {/* Section Header */}
      <section className='relative w-full '>
        <div className='max-w-7xl mx-auto flex flex-col items-center gap-4 text-center'>
          <h2 className='text-[54.6px] font-bold text-transparent  mt-2 bg-clip-text bg-gradient-to-r from-white to-gray-400 leading-tight'>
            <span className='text-white'>
              Flexible Plans for Every Stage of
            </span>
            <span className='text-[#1e88e5]'> Growth</span>
          </h2>
          <p className='text-2xl text-white max-w-4xl mb-36'>
            From startup MVP to enterprise solution, we have the perfect package
            to bring your vision to life.
          </p>
        </div>

        <div className='container mx-auto px-4 mt-12'>
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 items-start'>
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative ${plan.isFeatured ? 'lg:-mt-16' : ''}`}
              >
                <Card
                  className={`relative ${
                    plan.bgClass
                  } rounded-[25px] border-0 overflow-visible ${
                    plan.isFeatured ? 'min-h-[720px]' : 'min-h-[575px]'
                  }`}
                >
                  <CardContent className='p-0'>
                    <div className='relative  pt-20 pb-8'>
                      {/* Icon Box */}
                      <div
                        className={`absolute ${plan.decorativeElements.iconBox.top} ${plan.decorativeElements.iconBox.left} w-[76px] h-[76px] ${plan.iconBgClass} rounded-[17px] flex items-center justify-center`}
                      >
                        <Image
                          src={plan.icon}
                          alt={`${plan.name} icon`}
                          width={64}
                          height={64}
                          className='w-16 h-16'
                        />
                      </div>

                      {/* Plan Name */}
                      <h3
                        className={`mt-6 text-left text-white text-[62px] font-semibold whitespace-nowrap`}
                      >
                        {plan.name}
                      </h3>

                      {/* Subtitle */}
                      <p className='mt-0 text-white text-base font-light text-left'>
                        {plan.subtitle}
                      </p>

                      {/* Price */}
                      <div className='mt-0 text-left text-[50px] font-normal text-white'>
                        {plan.price}
                      </div>

                      {/* Button */}
                      <div className='flex justify-center mt-4'>
                        <Button
                          className={`w-[284px] h-[49px] ${plan.buttonClass} rounded-xl hover:opacity-90 transition-opacity`}
                        >
                          <span className='text-white font-medium text-xl'>
                            Get Started
                          </span>
                        </Button>
                      </div>

                      {/* Features */}
                      <div className='mt-10 space-y-4'>
                        {plan.features.map((feature, idx) => (
                          <div key={idx} className='flex items-center gap-4'>
                            <Image
                              src={feature.icon}
                              alt='Feature'
                              width={24}
                              height={24}
                              className='w-6 h-6 flex-shrink-0'
                            />

                            <span className='text-white text-base font-light'>
                              {feature.text}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PlanSection;
