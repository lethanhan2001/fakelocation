import React from "react";
import { review1 } from "../utils/data";
import { SwiperSlide, Swiper } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css/thumbs";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const Review = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        slidesPerView={3}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        loop={true}
        style={{
          padding: "0 20px",
        }}
      >
        <SwiperSlide>
          <div className="w-[373px] h-[148px] mt-2 rounded-3xl bg-white">
            <div className="flex justify-center items-center">
              <div className="w-3/5">
                <div className="mt-3 font-semibold">Username</div>
                <div className="text-[12px]">Good experience - Good app</div>
                <div className="text-[12px] mt-3 text-[#8c8c8c]">
                  Lorem ipsum dolor sit amet consectetur. Gravida sodales tortor
                  facilisis etiam. Duis ullamcorper augue mauris aliquet.
                </div>
              </div>
              <div className="mt-6">
                <img src={review1} alt="" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[373px] h-[148px] mt-2 rounded-3xl bg-white">
            <div className="flex justify-center items-center">
              <div className="w-3/5">
                <div className="mt-3 font-semibold">Username</div>
                <div className="text-[12px]">Good experience - Good app</div>
                <div className="text-[12px] mt-3 text-[#8c8c8c]">
                  Lorem ipsum dolor sit amet consectetur. Gravida sodales tortor
                  facilisis etiam. Duis ullamcorper augue mauris aliquet.
                </div>
              </div>
              <div className="mt-6">
                <img src={review1} alt="" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[373px] h-[148px] mt-2 rounded-3xl bg-white">
            <div className="flex justify-center items-center">
              <div className="w-3/5">
                <div className="mt-3 font-semibold">Username</div>
                <div className="text-[12px]">Good experience - Good app</div>
                <div className="text-[12px] mt-3 text-[#8c8c8c]">
                  Lorem ipsum dolor sit amet consectetur. Gravida sodales tortor
                  facilisis etiam. Duis ullamcorper augue mauris aliquet.
                </div>
              </div>
              <div className="mt-6">
                <img src={review1} alt="" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[373px] h-[148px] mt-2 rounded-3xl bg-white">
            <div className="flex justify-center items-center">
              <div className="w-3/5">
                <div className="mt-3 font-semibold">Username</div>
                <div className="text-[12px]">Good experience - Good app</div>
                <div className="text-[12px] mt-3 text-[#8c8c8c]">
                  Lorem ipsum dolor sit amet consectetur. Gravida sodales tortor
                  facilisis etiam. Duis ullamcorper augue mauris aliquet.
                </div>
              </div>
              <div className="mt-6">
                <img src={review1} alt="" />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Review;
