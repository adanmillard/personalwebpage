import { useState } from "react";
import "./projectsCarousel.css";

type Slides = {
  url: string;
  title: string;
  description: string;
};

type Props = {
  slide: Slides[];
};

const slideStyles = {
  width: "100%",
  height: "100%",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

export const ProjectsCarousel: React.FC<Props> = ({ slide }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    const isLastSlide = currentIndex === slide.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slide.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const slideStyleWidthBackground = {
    ...slideStyles,
    backgroundImage: `url(${slide[currentIndex].url})`,
    outline: "0.5px solid black",
  };
  return (
    <div className="sliderStyles">
      <div>
        <div onClick={goToPrevious} className="leftArrowStyles">
          ❰
        </div>
        <div onClick={goToNext} className="rightArrowStyles">
          ❱
        </div>
      </div>
      <h2>{slide[currentIndex].title}</h2>
      <div style={slideStyleWidthBackground}></div>
      <h4>{slide[currentIndex].description}</h4>
    </div>
  );
};
