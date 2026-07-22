import React from "react";
import Container from "../ui/Container";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      <section>
        <Container>
          <div className="pt-32 lg:pt-35 flex flex-col-reverse lg:flex-row items-center justify-between gap-12">

            {/* Left Content */}
            <div className="w-full lg:w-[50%] text-center lg:text-left">

              <p className="text-[14px] font-medium text-text">
                <span>❤️</span> Long Distance • Forever Together
              </p>

              <h1 className="text-[34px] sm:text-[42px] lg:text-[49px] font-bold leading-tight lg:leading-16 tracking-[-0.02em] text-text font-inter mt-5">
                Every Mile Between Us Makes Our Love Stronger.
              </h1>

              <h2 className="text-[17px] sm:text-[18px] lg:text-[20px] leading-7 lg:leading-8 text-white/90 max-w-full lg:max-w-130 font-normal mt-3 mx-auto lg:mx-0">
                No matter how many kilometers separate us, our hearts always
                find their way back to each other.
              </h2>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start mt-8 gap-4 sm:gap-6">

                <Link
                  className="w-full sm:w-auto text-center px-8 py-4 rounded-full hover:bg-white border border-text hover:text-primary text-text font-inter duration-300 ease-in-out font-semibold text-[16px]"
                  href="/our-story"
                >
                  🩷 Our Story
                </Link>

                <Link
                  className="w-full sm:w-auto text-center px-8 py-4 rounded-full hover:bg-white border border-text hover:text-primary text-text font-inter duration-300 ease-in-out font-semibold text-[16px]"
                  href="/memories"
                >
                  📸 Memories
                </Link>

              </div>

            </div>

            {/* Right Image */}
            <div className="bg-secondary rounded-[30px] p-1 shadow-[0_30px_70px_rgba(0,0,0,0.18)] rotate-3 w-fit">

              <Image
                className="rounded-[30px] w-[260px] sm:w-[320px] lg:w-[349px] h-auto"
                src="/images/home/hero.jpg"
                width={349}
                height={620}
                alt="Hero Image"
                priority
              />

            </div>

          </div>
        </Container>
      </section>
    </>
  );
};

export default Hero;