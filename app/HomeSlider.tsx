"use client";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import { SliderData } from "@/components/SliderData";
import "@/styles/slider.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useRouter } from "next/navigation";

function HomeSlider() {
  const router = useRouter();
  return (
    <div className="relative">
      <div className="w-full h-auto bg-gradient-to-t from-gray-100 to-transparent z-20">
        <Carousel
          className="carousel-slider-container"
          showArrows={true}
          //   autoPlay
          //   interval={5000}
          infiniteLoop
          showStatus={false}
          emulateTouch={true}
          thumbWidth={70}
          stopOnHover={false}
          //   showThumbs={false}
          //   onChange={onChnage}
          //   onClickItem={onClickItem}
          //   onClickThumb={onClickThumb}
        >
          {SliderData.map((item) => (
            <div
              onClick={() => router.push(item.href)}
              className="slider-page-single"
              key={item.id}
            >
              {/* <Link href={item.href}> */}
              <img
                className="max-h-[650px]"
                loading="lazy"
                src={item.image}
                alt={item.title}
              />
              <p>{item.desc}</p>
              {/* </Link> */}
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default HomeSlider;
