import { FC, useState, useCallback, useEffect, useRef } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { FaClipboardList } from "react-icons/fa6";
import ScrollArea from "./components/scrollArea";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SliderCard from "./components/sliderCard";
import { GiChefToque, GiMeal } from "react-icons/gi";
import { BiCake } from "react-icons/bi";

interface MenuSectionProps {}

const MenuSection: FC<MenuSectionProps> = ({}) => {
  const sliderRef = useRef(null);

  const [disableNext, setDisableNext] = useState(false);
  const [disablePrev, setDisablePrev] = useState(false);

  const handleNext = useCallback(() => {
    if (!sliderRef?.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  const handlePrev = useCallback(() => {
    if (!sliderRef?.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  useEffect(() => {
    if (sliderRef?.current?.activeIndex === cards.length - 1) {
      setDisableNext(true);
    } else {
      setDisableNext(false);
    }
    if (sliderRef?.current.activeIndex === 0) {
      setDisablePrev(true);
    } else {
      setDisablePrev(false);
    }
  }, [sliderRef]);

  const cards = [
    {
      title: "Red Onions With Chopped Cabbage",
      icon: GiChefToque,
    },
    {
      title: "Low Fat Apple Cake With White Cream",
      icon: BiCake,
    },
    {
      title: "Lorem ipsum dolor sit amet",
      icon: GiMeal,
    },
  ];

  return (
    <div className="px-32 py-28 md:py-20">
      <div className="flex justify-between">
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-4">
            <div className="rounded-xl w-fit bg-gradient-to-b from-purple-400 to-purple-700 p-2 text-yellow-300 ring ring-purple-100/50">
              <FaClipboardList size={35} />
            </div>
            <p className="text-4xl font-bold text-purple-900">
              Try Our Healthy Menu
            </p>
          </div>
          <p className="text-purple-900/75 text-lg tracking-tight">
            We provide a variety of healthy recipes that have
            <br />
            been curated by our best nutritionists for you
          </p>
        </div>
        <div className="flex gap-7 self-end">
          <div
            onClick={handlePrev}
            className={`cursor-pointer rounded-full p-4 text-purple-900 ${
              disablePrev ? "text-purple-200" : ""
            } ring ring-purple-200`}
          >
            <AiOutlineLeft size={25} />
          </div>
          <div
            onClick={handleNext}
            className={`cursor-pointer rounded-full p-4 text-purple-900 ${
              disableNext ? "!text-purple-200" : ""
            } ring ring-purple-200`}
          >
            <AiOutlineRight size={25} />
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-10 mt-5">
        <ScrollArea />
        <div className="lg:w-2/3">
          <Swiper
            ref={sliderRef}
            spaceBetween={5}
            slidesPerView={2}
            className="lg:w-1/2"
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {cards.map((card, i) => {
              return (
                <SwiperSlide key={i}>
                  <SliderCard title={card.title} icon={card.icon} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default MenuSection;
