import { FC } from "react";
import { BiSolidRightArrow } from "react-icons/bi";

interface SlideCardProps {
  title: string;
  subtitle: string;
  icon: FC<{ size: number; className: string }>;
  key: number;
  active?: boolean;
  cb: () => void;
}

const SlideCard: FC<SlideCardProps> = ({
  title,
  subtitle,
  icon: Icon,
  key,
  active,
  cb,
}) => {
  return (
    <div
      onClick={cb}
      key={key}
      className={`group ${
        active
          ? "-translate-y-6 scale-110 bg-gradient-to-r from-amber-300 to-amber-500"
          : "cursor-pointer"
      } flex h-full flex-1 transform  flex-col items-center justify-center gap-3 rounded-3xl md:p-6 md:pt-8 transition-all duration-700 `}
    >
      <div className="fixed -top-20 z-50 hidden h-20 w-full bg-amber-200  "></div>
      <div
        className={`mx-auto w-fit rounded-lg  p-2 ring-1 ${
          active ? "bg-amber-300 " : " bg-purple-600"
        } ring-purple-100/50`}
      >
        <Icon
          size={35}
          className={`  ${active ? "text-purple-700" : "text-amber-300"}`}
        />
      </div>
      <h1
        className={`  ${
          active ? "text-purple-900" : "text-amber-300"
        } text-sm md:text-xl font-bold text-purple-100`}
      >
        {title}
      </h1>
      <div
        className={`  ${
          active ? "text-purple-800" : "text-purple-300"
        } w-32 lg:w-40 text-justify text-xs lg:text-sm `}
      >
        {subtitle}
      </div>
      <div
        className={` items-center gap-2 rounded-lg p-1 text-sm font-bold text-purple-900 hover:bg-purple-900 hover:text-amber-300 ${
          active ? "flex cursor-pointer" : "hidden"
        }`}
      >
        Learn More <BiSolidRightArrow />
      </div>
    </div>
  );
};

export default SlideCard;