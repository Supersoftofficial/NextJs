import React from 'react'
import { Card, CardContent } from "../components/ui/Card";
export const Avatar = ({ src, alt, fallback, className }) => {
  return (
    <div
      className={`relative flex h-10 w-10 overflow-hidden rounded-full bg-gray-200 ${className}`}
    >
      {src ? (
        <img src={src} alt={alt} className="h-full w-full object-cover" />
      ) : (
        <div className="flex h-full w-full items-center justify-center text-black text-sm font-medium">
          {fallback || "?"}
        </div>
      )}
    </div>
  );
};

const reviewWidgets = [
  { src: "/googlereview.png", alt: "Square widget" },
  { src: "/trustreview.png", alt: "Trustpilot" },
  { src: "/hwakreview.png", alt: "Reviews" },
];

const reviewsData = [
  {
    id: 1,
    name: "Britney Gooch",
    avatar: "/b.png",
    type: "google",
    icon: "/g.png",
    rating: "/mms.png",
    text: "I'm very pleased with all the things I had All Things Residential do for me. They hung up a reef on my brick fireplace mantel and it looks amazing! Will definitely have th...",
  },
  {
    id: 2,
    name: "Britney Gooch",
    avatar: "/b.png",
    type: "google",
    icon: "/s.png",
    rating: "/ms.png",
    text: "I'm very pleased with all the things I had All Things Residential do for me. They hung up a reef on my brick fireplace mantel and it looks amazing! Will definitely have th...",
  },
  {
    id: 3,
    name: "Britney Gooch",
    avatar: "/b.png",
    type: "stars",
    icon: "/sss.png",
    rating: "/mms.png",
    text: "I'm very pleased with all the things I had All Things Residential do for me. They hung up a reef on my brick fireplace mantel and it looks amazing! Will definitely have th...",
  },
  {
    id: 4,
    name: "Britney Gooch",
    avatar: "/b.png",
    type: "google",
    icon: "/g.png",
    rating: "/mms.png",
    text: "I'm very pleased with all the things I had All Things Residential do for me. They hung up a reef on my brick fireplace mantel and it looks amazing! Will definitely have th...",
  },
  {
    id: 5,
    name: "Britney Gooch",
    avatar: "/b.png",
    type: "google",
    icon: "/s.png",
    rating: "/ms.png",
    text: "I'm very pleased with all the things I had All Things Residential do for me. They hung up a reef on my brick fireplace mantel and it looks amazing! Will definitely have th...",
  },
  {
    id: 6,
    name: "Britney Gooch",
    avatar: "/b.png",
    type: "stars",
    icon: "/sss.png",
    rating: "/mms.png",
    text: "I'm very pleased with all the things I had All Things Residential do for me. They hung up a reef on my brick fireplace mantel and it looks amazing! Will definitely have th...",
  },
];

const TestimonialSection = () => {
  return (
 <div className="px-4 sm:px-6 lg:px-8">
      <section className="py-8 sm:py-10 lg:py-12">
        <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[54.6px] text-center">
          <span className="text-white">Clients</span>
          <span className="text-[#1e88e5]">&nbsp;Testimonials</span>
        </h2>

        {/* TOP WIDGETS */}
        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 lg:gap-8 xl:gap-10 mt-12 sm:mt-16 lg:mt-20 xl:mt-24">
          {reviewWidgets.map((widget, index) => (
            <div
              key={index}
              className="bg-white rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-[17.14px] w-full max-w-[280px] sm:max-w-[320px] md:max-w-[350px] lg:w-[379px] h-[160px] sm:h-[180px] md:h-[200px] lg:h-[212px] flex items-center justify-center p-3 sm:p-4"
            >
              <img
                className="w-full h-full object-contain"
                alt={widget.alt}
                src={widget.src}
              />
            </div>
          ))}
        </div>
      </section>

      {/* ⭐ ALL REVIEWS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 xl:gap-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {reviewsData.map((review) => (
          <Card
            key={review.id}
            className="bg-[#2e2e2e] border-none rounded-lg sm:rounded-xl lg:rounded-[12.36px]"
          >
            <CardContent className="pt-4 sm:pt-6 lg:pt-[12.15px] pb-8 sm:pb-10 lg:pb-[50.55px] px-4 sm:px-6 lg:px-[27.87px]">
              <div className="flex items-center justify-between mb-4 sm:mb-5 lg:mb-[6.74px]">
                <div className="flex items-center gap-3 sm:gap-4 lg:gap-[16.86px]">
                  <Avatar
                    src={review.avatar}
                    alt={review.name}
                    className="w-8 h-8 sm:w-10 sm:h-10 lg:w-[42.32px] lg:h-[42.32px]"
                    fallback="BG"
                  />

                  <div className="font-bold text-white text-base sm:text-lg lg:text-[20.2px] leading-normal sm:leading-relaxed lg:leading-[38.4px]">
                    {review.name}
                  </div>
                </div>

                {/* ICON TYPE HANDLING */}
                <div className="flex items-center justify-center">
                  {review.type === "google" && (
                    <img
                      src={review.icon}
                      alt="Google"
                      className="w-5 h-5 sm:w-6 sm:h-6 lg:w-[24.65px] lg:h-auto"
                    />
                  )}

                  {review.type === "stars" && (
                    <img
                      src={review.icon}
                      alt="Star"
                      className="w-10 h-9 sm:w-12 sm:h-11 lg:w-[47px] lg:h-[43px]"
                    />
                  )}

                  {review.type === "container" && (
                    <img
                      src={review.icon}
                      alt="Container"
                      className="w-12 h-14 sm:w-14 sm:h-16 lg:w-[58.36px] lg:h-[72.63px]"
                    />
                  )}

                  {review.type === "badge" && (
                    <div className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 bg-[#48b969] rounded-2xl flex items-center justify-center">
                      <img
                        src={review.icon}
                        alt="Star"
                        className="w-6 h-4 sm:w-7 sm:h-5 lg:w-[38.04px] lg:h-[27.21px]"
                      />
                    </div>
                  )}
                </div>
              </div>

              {/* RATING IF EXISTS */}
              {review.rating && (
                <img
                  className="w-40 h-7 sm:w-48 sm:h-8 lg:w-[182.19px] lg:h-[33px] mb-3 sm:mb-4 lg:mb-[11.24px]"
                  alt="Rating"
                  src={review.rating}
                />
              )}

              <p className="text-white text-sm sm:text-base lg:text-[15.7px] leading-relaxed mb-3 sm:mb-4 lg:mb-[11.24px]">
                {review.text}
              </p>

              <button className="text-white text-sm sm:text-base lg:text-[15.3px] hover:underline">
                Read more
              </button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default TestimonialSection
