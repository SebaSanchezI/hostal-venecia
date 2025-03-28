import React, { useRef } from "react";
import { SECTION_IDS } from "@global/constants";
import SectionComponent from "@components/article/SectionComponent";
import heroImage from "@assets/heroVenecia.jpg";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface HeroProps {}

const Hero: React.FC<HeroProps> = () => {
  const homeRef = useRef();

  return (
    <SectionComponent
      sectionId={SECTION_IDS.HOME}
      ref={homeRef}
      fullscreen
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    />
  );
};

export default Hero;
