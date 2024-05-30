import React from "react";
import NavBar from "../components/NavBar";
import Image from "next/image";

const AboutUs = () => {
  return (
    <div className="bg-background min-h-screen">
      <div>
        <NavBar />
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
            <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
              Наша команда
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12 justify-center">
            <div className="text-center">
              <div className="rounded-xl sm:w-48 sm:h-48 lg:w-60 lg:h-60 mx-auto relative">
                <Image
                  className="rounded-xl"
                  src="/assets/photo_2021-04-09_00-16-28.jpg"
                  alt="Image Description"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="mt-2 sm:mt-4">
                <h3 className="text-sm font-medium text-gray-800 sm:text-base lg:text-lg dark:text-neutral-200">
                  Михаил Шарай
                </h3>
                <p className="text-xs text-gray-600 sm:text-sm lg:text-base dark:text-neutral-400">
                  Фронтенд
                </p>
              </div>
            </div>
            <div className="text-center">
              <div className="rounded-xl sm:w-48 sm:h-48 lg:w-60 lg:h-60 mx-auto relative">
                <Image
                  className="rounded-xl"
                  src="/assets/photo_2023-05-10_03-11-54.jpg"
                  alt="Image Description"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="mt-2 sm:mt-4">
                <h3 className="text-sm font-medium text-gray-800 sm:text-base lg:text-lg dark:text-neutral-200">
                  Артур Валитов
                </h3>
                <p className="text-xs text-gray-600 sm:text-sm lg:text-base dark:text-neutral-400">
                  Бекенд
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
