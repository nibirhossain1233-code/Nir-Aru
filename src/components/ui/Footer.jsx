"use client"

import React from "react";
import Container from "../ui/Container";
import Link from "next/link";

import {
  FaHeart,
  FaInstagram,
  FaFacebookF,
  FaGithub,
  FaArrowUp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="pt-16 lg:pt-10 w-full">
      <Container>
        <div className="rounded-4xl lg:rounded-[48px] border border-white/10 bg-white/5 backdrop-blur-md px-6 py-10 lg:px-12 lg:py-14">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Logo & About */}
            <div>
              <h2 className="text-3xl font-bold text-text font-inter">
                Nir
                <span className="text-pink-300 mx-2">❤</span>
                Aru
              </h2>

              <p className="mt-4 text-white/70 leading-7">
                Even though miles keep us apart, our hearts beat as one. Every
                second, every memory, every dream belongs to us.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-semibold text-text mb-5">
                Quick Links
              </h3>

              <ul className="space-y-3">
                <li>
                  <Link
                    href="/"
                    className="text-white/70 hover:text-pink-300 duration-300"
                  >
                    Home
                  </Link>
                </li>

                <li>
                  <Link
                    href="/our-story"
                    className="text-white/70 hover:text-pink-300 duration-300"
                  >
                    Our Story
                  </Link>
                </li>

                <li>
                  <Link
                    href="/memories"
                    className="text-white/70 hover:text-pink-300 duration-300"
                  >
                    Memories
                  </Link>
                </li>

                <li>
                  <Link
                    href="/love-letters"
                    className="text-white/70 hover:text-pink-300 duration-300"
                  >
                    Love Letters
                  </Link>
                </li>

                <li>
                  <Link
                    href="/distance-map"
                    className="text-white/70 hover:text-pink-300 duration-300"
                  >
                    Distance Map
                  </Link>
                </li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <h3 className="text-xl font-semibold text-text mb-5">
                Stay Connected
              </h3>

              <p className="text-white/70 leading-7">
                Love has no distance. Follow our beautiful journey.
              </p>

              <div className="flex items-center gap-4 mt-6">
                <Link
                  href="#"
                  className="w-12 h-12 rounded-full border border-white/20 bg-white/10 flex items-center justify-center text-white hover:bg-pink-400 hover:border-pink-400 duration-300"
                >
                  <FaFacebookF />
                </Link>

                <Link
                  href="#"
                  className="w-12 h-12 rounded-full border border-white/20 bg-white/10 flex items-center justify-center text-white hover:bg-pink-400 hover:border-pink-400 duration-300"
                >
                  <FaInstagram />
                </Link>

                <Link
                  href="#"
                  className="w-12 h-12 rounded-full border border-white/20 bg-white/10 flex items-center justify-center text-white hover:bg-pink-400 hover:border-pink-400 duration-300"
                >
                  <FaGithub />
                </Link>
              </div>
            </div>
          </div>

          {/* Divider */}

          <div className="border-t border-white/10 my-8"></div>

          {/* Bottom */}

          <div className="flex flex-col lg:flex-row items-center justify-between gap-5">
            <p className="text-white/60 text-center lg:text-left">
              © {new Date().getFullYear()} Nir ❤ Aru. Made with{" "}
              <FaHeart className="inline text-pink-400" /> Forever.
            </p>
            <button
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
              }
              className="w-12 h-12 rounded-full border border-white/20 bg-white/10 flex items-center justify-center text-white hover:bg-pink-400 hover:border-pink-400 duration-300 cursor-pointer"
            >
              <FaArrowUp />
            </button>
            
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
