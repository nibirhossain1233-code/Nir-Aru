import React from "react";
import Container from "../ui/Container";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      <section>
        <Container>
          <div className="pt-35 flex items-center justify-between">
            <div className="w-[50%]">
              <p className="text-[14px] font-medium text-text">
                <span>❤️</span> Long Distance • Forever Together
              </p>
              <h1 className="text-[49px] font-bold leading-16 tracking-[-0.02em] text-text font-inter mt-5">
                Every Mile Between Us Makes Our Love Stronger.
              </h1>
              <h2 className="text-[20px] leading-8 text-white/90 max-w-130 font-normal mt-3">
                No matter how many kilometers separate us, our hearts always
                find their way back to each other.
              </h2>
              <div className="flex items-center mt-8 gap-6">
                <Link
                  className="px-8 py-4 rounded-full hover:bg-white border border-text hover:text-primary text-text font-inter duration-300 ease-in-out font-semibold text-[16px]"
                  href="/our-story"
                >
                  🩷 Our Story
                </Link>
                <Link
                  className="px-8 py-4 rounded-full hover:bg-white border border-text hover:text-primary text-text font-inter duration-300 ease-in-out font-semibold text-[16px]"
                  href="/memories"
                >
                  📸 Memories
                </Link>
              </div>
            </div>
            <div className="bg-secondary rounded-[30px] p-1 shadow-[0_30px_70px_rgba(0,0,0,0.18)] mb-6 rotate-3">
              <Image
                className="rounded-[30px]"
                src="/images/home/hero.jpg"
                width={349}
                height={620}
              />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Hero;
