import React from "react";
import Link from "next/link";
import LastPrice from "./lastprice";

const Hero = () => {
  return (
    <div className="hero min-h-screen bg-background">
      <div className="hero-content flex-col lg:flex-row justify-center items-center">
        <div className="max-w-md lg:mr-8 mb-8 lg:mb-0 text-center">
          <h1 className="text-5xl font-bold">Добро пожаловать!</h1>
          <p className="py-6">
            Мы делаем оракула для доступа к внешним данным в блокчейне{" "}
            <span className="text-accent">Siberium </span>и предоставляем
            безопасную интеграцию смарт-контрактов с реальным миром.
          </p>
          <Link href="https://sp0-2.gitbook.io/siberiumpythia">
            <button className="btn btn-wide btn-primary">Начать</button>
          </Link>
        </div>
        <div className="lg:w-1/4 lg:ml-8">
          <LastPrice symbolCode={1} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
