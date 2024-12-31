import React from "react";

interface ParallaxSectionProps {
  backgroundImage: string;
  height?: string;
}

const ParallaxSection: React.FC<ParallaxSectionProps> = ({ backgroundImage, height = "500px" }) => {
  return (
    <div
      className="parallax"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        minHeight: height,
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    ></div>
  );
};

export default ParallaxSection;
