import React from "react";
import { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

export const Carousel = ({ images }) => {
  /* You will need to  use  state to mnage the current image */
  const [curImage, setCurImage] = useState(0);

  /* You will need to hanle the click on left and right button */
  function handleClickRight(){
    setCurImage((prev) => {
      if (prev === images.length - 1) {
        return 0;
      }
      return prev + 1;
    });
  }

  function handleClickLeft(e){
    setCurImage((prev) => {
      if (prev === 0) {
        return images.length - 1;
      }
      return prev - 1;
    });
  }

  /* You will need to manage the cases when we are on the last image or first image*/

  return (
    <div className="carousel">
      <BsArrowLeftCircleFill className="arrow arrow-left" onClick={handleClickLeft}/>

      {/* YOu will need to display the current image, not the first one.. */}
      <img src={images[curImage].src} alt={images[curImage].alt} className="slide" />

      <BsArrowRightCircleFill className="arrow arrow-right" onClick={handleClickRight}/>
    </div>
  );
};
