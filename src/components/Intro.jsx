import React from "react";

export function Intro() {
  return (
    <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
      <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold">
        Donovan Castaneda
      </h1>
      <p className="text-base md:text-xl mb-3 font-medium">Software Engineer Student</p>
      <p className="text-sm max-w-xl mb-6 font-bold">
        Hello! My name is Donovan and I am a computer science major with a strong
        interest in web development and technology. I have always been
        fascinated by the power of the internet and the ways in which it has
        transformed our world. I am eager to learn more about the latest
        technologies and to use my skills and knowledge to create innovative and
        useful products.
      </p>
    </div>
  );
}

export default Intro;
