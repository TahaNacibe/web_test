import { useState, useEffect } from "react";

const RotatingText = () => {
  const textList = [
    "Innovative Technology",
    "Efficient Performance",
    "Cutting-Edge Design",
    "High-End Experience"
];

  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isClearing, setIsClearing] = useState(false);
  const [letterIndex, setLetterIndex] = useState(0);

  useEffect(() => {
    const text = textList[currentIndex];

    // Animation for typing the letters
    if (!isClearing && letterIndex < text.length) {
      const interval = setInterval(() => {
        setCurrentText((prev) => prev + text[letterIndex]);
        setLetterIndex((prev) => prev + 1);
      }, 100); // Typing speed

      return () => clearInterval(interval);
    }

    // Wait for 3 seconds after the full text is displayed
    if (!isClearing && letterIndex === text.length) {
      const timeout = setTimeout(() => {
        setIsClearing(true);
      }, 1000); // Wait time before clearing

      return () => clearTimeout(timeout);
    }

    // Animation for clearing the letters
    if (isClearing && letterIndex > 0) {
      const interval = setInterval(() => {
        setCurrentText((prev) => prev.slice(0, -1)); // Remove last letter
        setLetterIndex((prev) => prev - 1);
      }, 100); // Clearing speed

      return () => clearInterval(interval);
    }

    // Reset for next word
    if (isClearing && letterIndex === 0) {
      setIsClearing(false);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % textList.length);
      setLetterIndex(0);
    }

  }, [isClearing, letterIndex, currentIndex, textList]);

  return (
    <div className="relative md:h-12 h-24 overflow-hidden">
      <div className="absolute transition-all duration-500 flex justify-start justify-items-start justify-self-start">
        <h1 className="text-4xl text-left">
          {currentText}
        </h1>
      </div>
    </div>
  );
};

export default RotatingText;
