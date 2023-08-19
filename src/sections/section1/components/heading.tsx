import Button from "@/components/button";
import Play from "@/icons/play";
import { FC, memo } from "react";

interface HeadingProps {}

const Heading: FC<HeadingProps> = ({}) => {
  return (
    <div className="scale-[60%] md:scale-100">
      <div className="leading-tight  text-8xl font-extrabold text-white">
        Changing <br />
        your
        <div className="absolute leading-[8rem] inline-block h-[8rem] w-[450px] md:w-[450px] overflow-hidden text-amber-400">
          <div className="animated-text absolute top-0 left-5">
            eating <br />
            lifestyle <br />
            sleeping
          </div>
        </div>
        <br /> habits
      </div>
      <div className="text-white/80 tracking-wide">
        Always take care of your health starting from <br /> the food menu that
        you consume every day
      </div>
      <div className="mt-10 flex gap-14 items-center">
        <Button>Explore Menu</Button>
        <div className="flex items-center cursor-pointer">
          <div className="w-10 h-10 flex justify-center bg-pink-100 ring-2 ring-purple-300 rounded-full">
            <Play />
          </div>
          <div className="ml-4 text-white/70">Watch Video</div>
        </div>
      </div>
    </div>
  );
};

export default memo(Heading);
