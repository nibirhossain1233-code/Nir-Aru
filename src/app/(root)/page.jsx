import Counter from "@/components/home/Counter";
import Hero from "@/components/home/Hero";
import Quote from "@/components/home/Quote";
import Story from "@/components/home/Story";
import Footer from "@/components/ui/Footer";
import Header from "@/components/ui/Header";
import React from "react";

const page = () => {
  return (
    <>
      <div className="bg-linear-to-br from-primary via-[#e6326b] to-[#f53f82]">
        <Hero />
        <Counter />
        <Story />
        <Quote />
        <Footer />
      </div>
    </>
  );
};

export default page;
