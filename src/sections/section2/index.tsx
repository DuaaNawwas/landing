import { FC, useCallback, useEffect, useRef, useState } from "react";
import { FaCrown, FaShieldHeart } from "react-icons/fa6";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

import { GiChefToque, GiHotMeal, GiMeal } from "react-icons/gi";
import SlideCard from "./components/slideCard";

const ProgramsSection: FC = ({}) => {
  const [active, setActive] = useState(0);
  const [moveSlides, setMoveSlides] = useState(true);
  const [disableNext, setDisableNext] = useState(false);
  const [disablePrev, setDisablePrev] = useState(false);

  const handleNext = useCallback(() => {
    setMoveSlides(true);
    setActive((prev) => (prev + 1) % cards.length);
  }, []);

  const handlePrev = useCallback(() => {
    setMoveSlides(true);
    setActive((prev) => (prev - 1) % cards.length);
  }, []);

  useEffect(() => {
    const autoMove = setInterval(() => {
      setActive((prev) => (prev + 1) % cards.length);
    }, 5000);
    if (autoMove && !moveSlides) {
      clearInterval(autoMove);
    }
    return () => {
      clearInterval(autoMove);
    };
  }, [moveSlides]);

  useEffect(() => {
    if (active === cards.length -1) {
      setDisableNext(true);
    } else {
      setDisableNext(false);
    }
    if (active === 0) {
      setDisablePrev(true);
    } else {
      setDisablePrev(false);
    }
  }, [active]);

  const cards = [
    {
      title: "Healthy Recipe",
      subtitle: "Healthier Recipes, from food & nutrition experts",
      icon: GiChefToque,
    },
    {
      title: "Healthy Meals",
      subtitle: "Learn how to become a meal-planning pro",
      icon: GiHotMeal,
    },
    {
      title: "Healthy Eating",
      subtitle: "Eat healthy with our expert & inspiration tips",
      icon: GiMeal,
    },
    {
      title: "Healthy Life",
      subtitle: "Your life is your choice. make yourself healthier",
      icon: FaShieldHeart,
    },
  ];
  return (
    <div id="programs" className="py-20 lg:p-20 lg:px-28">
      <div className="flex justify-between">
        <div className="flex items-center gap-4">
          <span className="rounded-xl bg-gradient-to-b from-purple-400 to-purple-700 p-2 text-yellow-300">
            <FaCrown size={35} />
          </span>
          <p className="text-4xl font-bold text-purple-900">
            Our best programs
          </p>
        </div>
        <div className="flex gap-7">
          <div
            onClick={handlePrev}
            className={`cursor-pointer rounded-full p-4 text-purple-900 ${disablePrev ? "text-purple-200": ""} ring ring-purple-200`}
          >
            <AiOutlineLeft size={25} />
          </div>
          <div
            onClick={handleNext}
            className={`cursor-pointer rounded-full p-4 text-purple-900 ${disableNext ? "!text-purple-200": ""} ring ring-purple-200`}
          >
            <AiOutlineRight size={25} />
          </div>
        </div>
      </div>
      <div className="mt-16 flex h-56 justify-evenly rounded-3xl bg-gradient-to-b from-purple-400 to-purple-700 pb-0 ring-[10px] ring-purple-100/50">
        {cards.map((card, i) => (
          <SlideCard
            cb={() => {
              setActive(i);
              setMoveSlides(false);
            }}
            key={i}
            active={i === active}
            title={card.title}
            subtitle={card.subtitle}
            icon={card.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default ProgramsSection;
