import React from "react";
import Container from "../ui/Container";
import Link from "next/link";

import { HiArrowLongRight } from "react-icons/hi2";
import { quickLinks } from "@/api/quickLinks";
const Story = () => {
  return (
    <section className="mt-14 lg:mt-10">
      <Container>

        {/* Section Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl lg:text-4xl font-bold text-text font-inter">
            Explore Our Story
          </h2>

          <p className="text-white/80 mt-3 text-base lg:text-lg">
            Explore every beautiful chapter of our love story.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">

          {quickLinks?.map((item) => (
            <Link
              key={item.id}
              href={item.url}
              className="group rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-md p-5 lg:p-6 transition-all duration-300 hover:-translate-y-2 active:-translate-y-2 hover:border-pink-300/40 active:border-pink-300/40 hover:bg-white/10 active:bg-white/10 hover:shadow-[0_15px_40px_rgba(0,0,0,0.15)] active:shadow-[0_15px_40px_rgba(0,0,0,0.15)]"
            >

              {/* Icon */}
              <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-2xl lg:text-3xl text-pink-300 group-hover:scale-110 transition-all duration-300">

                {item.icon}

              </div>

              {/* Title */}
              <h3 className="mt-4 lg:mt-5 text-lg lg:text-xl font-semibold text-text font-inter">
                {item.title}
              </h3>

              {/* Description */}
              <p className="mt-2 lg:mt-3 text-white/70 leading-6 lg:leading-7 text-sm lg:text-base">
                {item.desc}
              </p>

              {/* Arrow */}
              <div className="mt-5 flex items-center gap-2 text-pink-300 font-medium">
                <span className="text-sm lg:text-base">Open</span>

                <HiArrowLongRight className="text-xl lg:text-2xl transition-transform duration-300 group-hover:translate-x-2" />
              </div>

            </Link>
          ))}

        </div>

      </Container>
    </section>
  );
};

export default Story;