import React, { useRef } from "react";
import { SECTION_IDS } from "@global/constants";
import SectionComponent from "@components/article/SectionComponent";

const Hero: React.FC = () => {
  const homeRef = useRef();

  return (
    <SectionComponent
      sectionId={SECTION_IDS.HOME}
      ref={homeRef}
      fullscreen
      style={{
        backgroundImage: "url('src/assets/heroVenecia.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    />
  );
};

export default Hero;
