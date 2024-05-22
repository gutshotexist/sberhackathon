import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="hero min-h-screen bg-background">
      <div className="hero-content text-center py-20">
        <div className="max-w-md mx-auto">
          <h1 className="text-5xl font-bold text-text mb-6">
            Добро пожаловать!
          </h1>
          <p className="text-text mb-8">
            Мы делаем оракула для доступа к внешним данным в блокчейне{" "}
            <span className="text-accent font-bold">Siberium</span> и
            предоставляем безопасную интеграцию смарт-контрактов с реальным
            миром.
          </p>
          <Link
            href="https://sp0-2.gitbook.io/siberiumpythia/"
            className="btn btn-wide btn-primary"
          >
            Начать
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
