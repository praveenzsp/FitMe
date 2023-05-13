import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";

function Carousel() {
  return (
    <div>
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        // pagination={{
        //   clickable: true,
        // }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="lg:flex lg:items-center lg:px-40 py-10">
            <img
              className="object-contain w-[200px] h-[210px] lg:w-auto lg:h-auto mx-auto"
              src="https://fit-me-zeta.vercel.app/images/client3.png"
            />
            <div>
              <h1 className="font-sora text-xl py-3 lg:text-left mx-6 text-center">
                Austin Green
              </h1>
              <p className="text-md text-gray-500 font-sora text-[12px] lg:text-[14px] text-left mb-10 mx-6 border-l border-purple-500 pl-1">
                "When I was stuck at home during pandemic I wanted to workout
                from home one of my friends introduced me to FitMe and man I
                loved every bit of it. I chose Yearly Plan they have amazing
                trainers who know what they’re doing."
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="lg:flex lg:items-center lg:px-40 py-10">
            <img
              className="object-contain w-[200px] h-[210px] lg:w-auto lg:h-auto mx-auto"
              src="https://fit-me-zeta.vercel.app/images/client3.png"
            />
            <div>
              <h1 className="font-sora text-xl py-3 lg:text-left mx-6 text-center">
                Austin Green
              </h1>
              <p className="text-md text-gray-500 font-sora text-[12px] lg:text-[14px] text-left mb-10 mx-6 border-l border-purple-500 pl-1">
                "When I was stuck at home during pandemic I wanted to workout
                from home one of my friends introduced me to FitMe and man I
                loved every bit of it. I chose Yearly Plan they have amazing
                trainers who know what they’re doing."
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="lg:flex lg:items-center lg:px-40 py-10">
            <img
              className="object-contain w-[200px] h-[210px] lg:w-auto lg:h-auto mx-auto"
              src="https://fit-me-zeta.vercel.app/images/client3.png"
            />
            <div>
              <h1 className="font-sora text-xl py-3 lg:text-left mx-6 text-center">
                Austin Green
              </h1>
              <p className="text-md text-gray-500 font-sora text-[12px] lg:text-[14px] text-left mb-10 mx-6 border-l border-purple-500 pl-1">
                "When I was stuck at home during pandemic I wanted to workout
                from home one of my friends introduced me to FitMe and man I
                loved every bit of it. I chose Yearly Plan they have amazing
                trainers who know what they’re doing."
              </p>
            </div>
          </div>
        </SwiperSlide>


      </Swiper>
    </div>
  );
}

export default Carousel;
