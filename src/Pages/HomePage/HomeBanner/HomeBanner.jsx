import React from "react";
import HeroImage from "../../../assets/home/home-banner.jpg";
import Electrician from "../../../assets/home/electrician.jpg";
import Plumber from "../../../assets/home/plumber.jpg";

export default function HomeBanner() {
  const carouselItems = [
    {
      id: "slide1",
      image: HeroImage,
      prev: "#slide3",
      next: "#slide2",
    },
    {
      id: "slide2",
      image: Electrician,
      prev: "#slide1",
      next: "#slide3",
    },
    {
      id: "slide3",
      image: Plumber,
      prev: "#slide2",
      next: "#slide1",
    },
  ];
  return (
    <div className="carousel w-full ">
      {carouselItems.map((item) => (
        <div
          id={item.id}
          className="carousel-item relative w-full"
          key={item.id}
        >
          <img src={item.image} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href={item.prev} className="btn btn-circle">
              ❮
            </a>
            <a href={item.next} className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
