import Button from "@/components/button";
import { FC, memo } from "react";

interface SliderCardProps {
  title: string;
  icon: FC
}

const SliderCard: FC<SliderCardProps> = ({ title, icon:Icon }) => {
  return (
    <div className="bg-purple-200/50 ring ring-purple-100/50 hover:bg-purple-100/20 shadow hover:shadow-xl rounded-t-full !rounded-b-[150px] h-72 w-44 p-5 flex flex-col gap-3 items-center">
      <div className="bg-gradient-to-r from-purple-400 to-purple-500 rounded-t-full !rounded-b-[150px] w-full h-2/3 flex justify-center items-center text-white text-6xl">
        <Icon />
      </div>
      <div className="text-purple-950 mb-5 font-bold text-sm text-center">
        {title}
      </div>
      <Button size="sm">
        Try now
      </Button>
    </div>
  );
};

export default memo(SliderCard);
