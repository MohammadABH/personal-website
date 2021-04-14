import React from "react";
import TextLoop from "react-text-loop";

const AnimatedText = ({ text }) => {
  return (
    <TextLoop>
      {text.map((el, index) => (
        <span key={index}>{el}</span>
      ))}
    </TextLoop>
  );
};

export default AnimatedText;
