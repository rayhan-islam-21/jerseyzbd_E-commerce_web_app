import React from "react";
import Container from "./Container";
import Image from "next/image";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <Container classname={" bg-[#f2f0f1] md:p-4"}>
      <section className="md:relative w-full md:h-[600px]">
        {/* Background Image */}
        <Image
          src="/hero-img.jpg"
          alt="Hero"
          fill
          priority
          className="object-cover hidden md:block"
        />

        {/* Text Overlay */}
        <div className="md:absolute md:inset-0 mt-8 md:top-16 flex  items-center md:px-6 ">
          <div className="max-w-xl flex flex-col justify-between gap-3 md:gap-6 md:p-4 rounded-lg">
            <h1 className="text-3xl md:text-6xl font-bold md:font-extrabold">
              DISCOVER <span className="text-sky-500">JERSEYS</span> THAT MATCH YOUR <span className="text-rose-600">PASSION</span>
            </h1>

            <p className="text-gray-800/60 text-xs font-normal leading-5 md:max-w-sm md:text-sm ">
              Explore our curated collection of original and premium-quality
              football jerseys— from club kits to national team classics.
            </p>

            <Button
              variant="outline"
              className="  bg-black text-white md:w-1/3 px-4 md:py-6 text-lg rounded-3xl cursor-pointer font-semibold"
            >
              Shop Jerseys
            </Button>
            {/* counter section */}
            <div className=" grid grid-cols-2 mt-5 md:mt-0 md:grid-cols-3 place-content-center    px-4 items-center gap-4">
              <div className="md:col-span-1 rounded-2xl md:rounded border  p-3 md:border-0 md:border-r-2 border-r-gray-300">
                <h1 className="md:text-3xl text-xl font-extrabold">100+</h1>
                <p className="font-normal text-sm text-gray-400 mt-1">
                  Clubs & Nations
                </p>
              </div>
              <div className="md:col-span-1  bordermd:rounded  p-3 md:border-0 md:border-r-2 border-r-gray-300">
                <h1 className="md:text-3xl text-xl font-extrabold">2,00+</h1>
                <p className="font-normal text-sm text-gray-400 mt-1">
                 Authentic Jerseys
                </p>
              </div>
              <div className=" border p-3 rounded-2xl col-span-1 md:border-0 ">
                <h1 className="md:text-3xl text-xl font-extrabold">30,000+</h1>
                <p className="font-normal text-sm text-gray-400 mt-1">
                  Happy Fans 
                </p>
              </div>
            </div>
             <div className="md:hidden">
              <Image
                src='/hero-right.png'
                width={600}
                height={700}
                alt="hero-mobile"
                priority
              
              />
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Hero;
