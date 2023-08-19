import { FC } from "react";
import Header from "./components/header";
import Heading from "./components/heading";

interface HeroSectionProps {}

const HeroSection: FC<HeroSectionProps> = ({}) => {

  return (
    <>
      <div className="hero h-screen w-screen overflow-hidden">
        <Header />
        <div className="grid lg:grid-cols-2 gap-5 px-0 md:px-32 md:py-10">
          <Heading />
          <img
            src="https://static.vecteezy.com/system/resources/previews/002/816/671/non_2x/woman-choosing-between-healthy-meal-and-unhealthy-food-lifestyle-and-nutrition-concept-illustration-for-good-vs-bad-diet-lifestyle-eating-concepts-flat-illustration-vector.jpg"
            alt=""
            className="hidden xl:block w-[800px] rounded-xl  bg-blend-screen"
          />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
