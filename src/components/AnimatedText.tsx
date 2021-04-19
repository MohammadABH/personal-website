import React from "react";
import TextLoop from "react-text-loop";

interface Props {
  text: string[];
}

const AnimatedText = ({ text }: Props) => {
  return (
    <TextLoop>
      {text.map((el, index) => (
        <span key={index}>{el}</span>
      ))}
    </TextLoop>
  );
};

export default AnimatedText;
