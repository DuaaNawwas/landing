import Button from "@/components/button";
import { FC } from "react";
import { FaFlag } from "react-icons/fa6";

interface BannerSectionProps {}

const BannerSection: FC<BannerSectionProps> = ({}) => {
  return (
    <div className="p-10 py-28 md:py-20">
      <div className="bg-gradient-to-r from-purple-600 to-purple-500 w-full rounded-3xl ring-8 ring-purple-100 flex flex-col gap-5 justify-center items-center p-5">
        <div className=" rounded-xl bg-purple-600 p-2 text-amber-400 ring-2 ring-purple-200 ">
          <FaFlag size={30} />
        </div>
        <h1 className="text-xl font-extrabold text-purple-100 capitalize">
          Get started with <span className="text-amber-500">Eatly</span>
        </h1>
        <p className="text-sm text-purple-100/50 p-0 m-0 w-80 text-center tracking-tight">
          Discover tips & news for your health from experts and get the best
          discounts by getting started
        </p>
        <Button>
            Get Started
        </Button>
      </div>
    </div>
  );
};

export default BannerSection;
