import { useState, useEffect } from "react";

const ImageSlider = ({ slides, isCaption, timer = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const sliderStyles = {
    width: "100%",
    height: "100%",
    // borderRadius: "10px",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundImage: `url(${slides[currentIndex].url})`,
  };

  const sliderParent = {
    height: "100%",
    position: "relative",
  };

  const handleChangeSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide
      ? currentIndex + 1
      : currentIndex < slides.length - 1
      ? currentIndex + 1
      : 0;

    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleChangeSlide();
    }, timer);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div style={sliderParent}>
      <div style={sliderStyles}></div>
      {isCaption && (
        <p className="text-white absolute bottom-4 font-alkatra bg-slate-950 opacity-75 p-2 font-bold text-lg">
          {slides[currentIndex].caption}
        </p>
      )}
    </div>
  );
};

export default ImageSlider;
