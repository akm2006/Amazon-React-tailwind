import React from "react";

const Hero = () => {
  return (
    <div>
      <div id="heroImg" className="w-full h-150 border px-4 mask-image-[linear-gradient(to_bottom,black,transparent)]">
        <img
          src="/Amazon-React-tailwind/images/main.jpg"
          alt="this is image"
          className="object-cover h-150 w-full"
        />
      </div>
    </div>
  );
};

export default Hero;
