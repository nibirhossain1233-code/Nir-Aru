import React from "react";
import Container from "../ui/Container";
import { FaQuoteLeft, FaHeart } from "react-icons/fa";

const Quote = () => {
  return (
    <section className="mt-14 lg:mt-15 pb-5">
      <Container>
        <div className="relative overflow-hidden rounded-4xl lg:rounded-[48px] border border-white/10 bg-white/5 backdrop-blur-md px-6 py-10 lg:px-0 lg:py-5">

          {/* Background Blur */}
          <div className="absolute -top-20 -left-20 w-52 h-52 rounded-full bg-pink-500/20 blur-[120px]"></div>
          <div className="absolute -bottom-20 -right-20 w-52 h-52 rounded-full bg-rose-300/20 blur-[120px]"></div>

          <div className="relative z-10 flex flex-col items-center text-center">

            <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full border border-white/20 bg-white/10 flex items-center justify-center text-pink-300 text-3xl lg:text-4xl">
              <FaQuoteLeft />
            </div>

            <h2 className="mt-6 text-2xl lg:text-4xl font-bold text-text font-inter">
              Quote of Our Love
            </h2>

            <p className="mt-8 max-w-4xl text-xl lg:text-3xl leading-relaxed text-white font-medium italic">
              “Distance means so little when someone means so much.
              Every sunrise brings us one day closer to holding each other
              again.”
            </p>

            <div className="flex items-center gap-2 mt-8 text-pink-300 text-xl">
              <FaHeart />
              <span className="text-base lg:text-lg font-medium text-white">
                Forever • Aru & Nir
              </span>
              <FaHeart />
            </div>

          </div>

        </div>
      </Container>
    </section>
  );
};

export default Quote;