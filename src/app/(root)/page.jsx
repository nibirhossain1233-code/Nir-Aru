import Counter from "@/components/home/Counter";
import Hero from "@/components/home/Hero";
import Header from "@/components/ui/Header";
import React from "react";

const page = () => {
  return (
    <>
      <div className="bg-linear-to-br from-primary via-[#FF5D8F] to-[#FF6FA5]">
        <Hero />
        <Counter />
      </div>
    </>
  );
};

export default page;
