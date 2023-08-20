import { FC, memo } from "react";
import { BiCalendar, BiLock } from "react-icons/bi";
import { BsClock } from "react-icons/bs";
import { PiAirplaneLanding } from "react-icons/pi";

interface ScrollAreaProps {}

const ScrollArea: FC<ScrollAreaProps> = ({}) => {
  const menuCards = [
    {
      title: "Breakfast Recipes",
      icon: BsClock,
    },
    {
      title: "Low-Calorie Recipes",
      icon: PiAirplaneLanding,
    },
    {
      title: "Holiday Recipes",
      icon: BiCalendar,
    },
    {
      title: "Restriction Recipes",
      icon: BiLock,
    },
    {
      title: "Breakfast Recipes",
      icon: BsClock,
    },
    {
      title: "Low-Calorie Recipes",
      icon: PiAirplaneLanding,
    },
    {
      title: "Holiday Recipes",
      icon: BiCalendar,
    },
    {
      title: "Restriction Recipes",
      icon: BiLock,
    },
  ];
  return (
    <div className="flex flex-col gap-5 w-96 h-[350px] overflow-y-auto">
      {menuCards.map((card, i) => {
        return (
          <div
            key={i}
            className="p-3 py-5 flex items-center gap-5 bg-purple-200/50 ring ring-white hover:bg-purple-100/20 hover:shadow-xl rounded-2xl w-72 group"
          >
            <div className="p-2 text-white bg-violet-600 ring-2 ring-violet-300 group-hover:ring-white group-hover:bg-gradient-to-r group-hover:from-amber-300 group-hover:to-amber-400 rounded-lg">
              <card.icon />
            </div>
            <div className="text-purple-900 group-hover:text-purple-500 font-bold">
              {card.title}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default memo(ScrollArea);
