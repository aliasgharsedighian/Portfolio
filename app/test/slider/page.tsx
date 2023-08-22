"use client";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import { SliderData } from "@/components/SliderData";
import "../../../styles/slider.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function SliderPage() {
  //   function onChnage() {}
  //   function onClickItem() {}
  //   function onClickThumb() {}
  return (
    <div className="relative">
      <div className="w-full h-32 bg-gradient-to-t from-gray-100 to-transparent top-0 z-20">
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
            <div className="slider-page-single" key={item.id}>
              <img loading="lazy" src={item.image} alt={item.title} />
              <p>{item.desc}</p>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default SliderPage;
