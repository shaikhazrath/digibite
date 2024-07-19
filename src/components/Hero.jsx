import { curve, heroBackground, robot } from "../assets";
import Button from "./Button";
import Section from "./Section";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import { heroIcons } from "../constants";
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";
import Generating from "./Generating";
import Notification from "./Notification";
import CompanyLogos from "./CompanyLogos";
import TypingEffectComponent from "./TypeEffect";

const Hero = () => {
  const parallaxRef = useRef(null);

  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative  " ref={parallaxRef}>
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
        <TypingEffectComponent/>
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
          We specialize in digital-marketing, website development, custom software solutions, CMS integration, mobile applications, and AI solutions
          </p> 
        </div>
        <div className=" h-max relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
          <div className="relative z-1 p-0.5 rounded-2xl ">
            <div className="relative bg-n-8 rounded-[1rem]">
              <div className="h-[1.4rem]   rounded-t-[0.9rem]" />
        <BackgroundCircles/>

              <div className="  rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                <img
                  src={robot}
                  className="w-full md:h-full"
                  width={1024}
                  height={490}
                  alt="AI"
                />
              </div>
            </div>
          </div>
          <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
          </div>
        </div>
      </div>

    </Section>
  );
};

export default Hero;
