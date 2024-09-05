"use client";
import { useEffect, useState } from "react";
import CarouselCard from "../CarouselCard";
import NavigationButton from "../NavigationButton";
import { carousel } from "@/utils/carousel";
import styles from "./style.module.css";
export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    if (currentSlide === 3) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };
  const previousSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(3);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, [currentSlide]);
  // useEffect(() => {
  //   console.log(currentSlide);
  // }, [currentSlide]);

  return (
    <>
      <div className="fixed top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%] max-w-[800px] w-full h-[450px] overflow-hidden">
        <div className="w-full h-full relative flex items-center">
          <div
            style={{ left: currentSlide * -100 + "%" }}
            className={`${styles.cubicBezier} relative w-full h-full flex items-center`}
          >
            {carousel.map((item, index) => {
              return (
                <CarouselCard key={index} person={item} index={currentSlide} />
              );
            })}
          </div>
          <NavigationButton direction={"prev"} ability={previousSlide} />
          <NavigationButton direction={"next"} ability={nextSlide} />
        </div>
      </div>
    </>
  );
}
