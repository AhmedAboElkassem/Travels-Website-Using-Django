"use client";
import React from "react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectFade,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";
import Image from "next/image";

import Reviewgif from "../../../public/illustrator.png";

export default function Reviews() {
  const Reviews = [
    {
      text: "“A real sense of community, nurtured”",
      desc: "Really appreciate the help and support from the staff during",
    },
    {
      text: "“A real sense of community, nurtured”",
      desc: `Really appreciate the help and support from the staff during
                  these tough times. Shoutout to Katie for helping me always,
                  even when I was out of the country. And always available when
                  needed.`,
    },
    {
      text: "“A real sense of ”",
      desc: "Really appreciate the help and support from the staff during",
    },
    {
      text: "“A real sense of ”",
      desc: "Really appreciate the help and these tough times. Shoutout to Katie for helping me always even when I was out of the country. And always  support from the staff during",
    },
    {
      text: "“A real sense of ”",
      desc: "Really appreciate the help and support from the staff during",
    },
  ];
  return (
    <>
      <div className="container">
        <h1 className="cata+h3 text-center">Reviews</h1>
        <p className="cata text-center">What people say about Us</p>
        <div className="row">
          <div className="col-lg-6 col-md-10 col-sm-12 col-12 ">
            <Swiper
              modules={[
                Navigation,
                Pagination,
                Scrollbar,
                A11y,
                EffectFade,
                Autoplay,
              ]}
              spaceBetween={50}
              slidesPerView={3}
              navigation
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              effect="fade"
              fadeEffect={{ crossFade: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
            >
              {Reviews.map((review, index) => (
                <SwiperSlide className="p-5" key={index}>
                  <h2>{review.text}</h2>
                  <p className="cata text-start" style={{ fontSize: "14px" }}>
                    {review.desc}
                  </p>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="col-lg-6  d-flex justify-content-end">
            <Image
              src={Reviewgif}
              alt="luggage"
              width={400}
              height={300}
            ></Image>
          </div>
        </div>
      </div>
    </>
  );
}
