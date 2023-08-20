"use client";

import Button from "@/components/button";
import LogoIcon from "@/icons/logo";
import { FC, memo } from "react";

const Header: FC = () => {
  return (
    <>
      <header className="bg-transparent">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="md:flex md:items-center md:gap-12">
              <a className="flex items-center gap-2 text-teal-600" href="/">
                <span className="sr-only">Home</span>
                <LogoIcon />
                <div className="text-lg font-extrabold text-amber-400">
                  Eatly
                </div>
              </a>
            </div>

            <div className="hidden md:block">
              <nav aria-label="Global">
                <ul className="flex items-center gap-6 text-sm">
                  <li>
                    <a
                      className="text-white transition hover:text-gray-200/75"
                      href="#programs"
                    >
                      Programs
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-white transition hover:text-gray-200/75"
                      href="#services"
                    >
                      Services
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-white transition hover:text-gray-200/75"
                      href="#news"
                    >
                      News
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-white transition hover:text-gray-200/75"
                      href="#about-us"
                    >
                      About Us
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4">
                <Button size="sm">Let's Talk</Button> 
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default memo(Header);


