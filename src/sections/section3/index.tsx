"use client";
import { FC, memo } from "react";
import { IoDiamond } from "react-icons/io5";
import { GiHeartPlus } from "react-icons/gi";
import { SlEnergy } from "react-icons/sl";
import { FaWeightScale } from "react-icons/fa6";
import { BsFillStarFill } from "react-icons/bs";

interface ValuesSectionProps {}

const ValuesSection: FC<ValuesSectionProps> = (({}) => {
  return (
    <section
      id="services"
      className="min-h-16 p-5 lg:p-0 grid h-[530px] lg:grid-cols-2 bg-slate-100/50  "
    >
      <div>
        <img
          src="https://gcdnb.pbrd.co/images/uCgYRFygaGBI.jpg"
          alt=""
          className="hidden lg:block h-[530px] mx-auto"
        />
      </div>
      <div className="grid grid-cols-2 gap-y-10 lg:gap-x-1 items-center">
        <div className="col-span-2  max-w-xl ">
          <div className="flex items-center gap-4">
            <span className="rounded-xl bg-gradient-to-b from-purple-400 to-purple-700 p-2 text-yellow-300">
              <IoDiamond size={35} />
            </span>
            <p className="text-4xl font-bold text-purple-900">
              Our value To Help You
            </p>
          </div>
          <p className="mt-2 whitespace-break-spaces text-lg text-purple-950/50">
            We always want to provide the best value for you <br />
            and your health, join us to maximize the benefits
          </p>
        </div>
        <div className="col-span-1 w-52 md:w-64 lg:w-72 rounded-3xl bg-purple-200/25 ring ring-white shadow-md p-5  hover:shadow-lg">
          <div className="-mb-5 ml-2 w-fit -translate-y-10 rounded-xl bg-purple-600 p-2 text-white ring-2 ring-purple-200 ">
            <GiHeartPlus size={30} />
          </div>
          <div>
            <p className="text-2xl font-bold text-purple-500 ">
              Become Healthier
            </p>
            <span className="text-gray-400">
              immune will stronger if the body is healthier
            </span>
          </div>
        </div>
        <div className="col-span-1 w-52 md:w-64 lg:w-72 rounded-3xl bg-white/25 ring ring-white shadow-md p-5  hover:shadow-lg">
          <div className="-mb-5 ml-2 w-fit -translate-y-10 rounded-xl bg-yellow-400 p-2 text-white ring-2 ring-yellow-200 ">
            <SlEnergy size={30} />
          </div>
          <div>
            <p className="text-2xl font-bold text-purple-500 ">
              Increase Energy
            </p>
            <span className="text-gray-400">
              Have enough energy can help carry out routine
            </span>
          </div>
        </div>
        <div className="col-span-1 w-52 md:w-64 lg:w-72 rounded-3xl bg-purple-200/25 ring ring-white shadow-md p-5  hover:shadow-lg">
          <div className="-mb-5 ml-2 w-fit -translate-y-10 rounded-xl bg-purple-600 p-2 text-white ring-2 ring-purple-200 ">
            <FaWeightScale size={30} />
          </div>
          <div>
            <p className="text-2xl font-bold text-purple-500 ">
              Controlling Weight
            </p>
            <span className="text-gray-400">
              Body will feel lighter and will not be tired
            </span>
          </div>
        </div>
        <div className="col-span-1 w-52 md:w-64 lg:w-72 rounded-3xl bg-purple-200/25 ring ring-white shadow-md p-5  hover:shadow-lg">
          <div className="-mb-5 ml-2 w-fit -translate-y-10 rounded-xl bg-purple-600 p-2 text-white ring-2 ring-purple-200 ">
            <BsFillStarFill size={30} />
          </div>
          <div>
            <p className="text-2xl font-bold text-purple-500 ">
              Becomes Happier
            </p>
            <span className="text-gray-400">
              Living a healthy life also Increase self-confidence
            </span>
          </div>
        </div>
      </div>
    </section>
  );
});

export default ValuesSection;
