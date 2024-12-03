import { useEffect, useState } from "react";

export const useSlider = (movies) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const setIndex = setInterval(() => {
      console.log("Use slider re-render");
      setCurrentIndex((prevIndex) => (prevIndex + 1) % movies.length);
    }, 3000);
    return () => clearInterval(setIndex);
  }, [movies]);
  return currentIndex;
};
