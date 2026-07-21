import React from "react";
import Container from "./Container";
import Image from "next/image";
import { navdata } from "@/api/navdata";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <nav>
        <Container>
          <div className="flex items-center justify-between h-20 px-8 rounded-3xl border border-white/20 bg-white/10 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.12)] absolute w-300 mt-6">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 600 170"
                width="150px"
              >
                {/* <!-- Deep Black Luxurious Background --> */}
                <rect fill="none" />

                {/* <!-- Definitions for Gradients and Glows --> */}
                <defs>
                  {/* <!-- Premium Gold Gradient --> */}
                  <linearGradient
                    id="goldGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stop-color="#F2C94C" />
                    <stop offset="50%" stop-color="#F2994A" />
                    <stop offset="100%" stop-color="#E2B041" />
                  </linearGradient>

                  {/* <!-- Soft White/Silver Gradient for Accents --> */}
                  <linearGradient
                    id="silverGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stop-color="#FFFFFF" />
                    <stop offset="100%" stop-color="#E0E0E0" />
                  </linearGradient>
                </defs>

                {/* <!-- Subtle Integrated Infinity Symbol in Background/Underlay --> */}
                <path
                  d="M 230 100 C 190 60, 150 60, 150 100 C 150 140, 190 140, 230 100 C 270 60, 310 60, 310 100 C 310 140, 270 140, 230 100 Z"
                  fill="none"
                  stroke="url(#goldGradient)"
                  stroke-width="1.5"
                  opacity="0.25"
                  stroke-dasharray="5,5"
                />

                <g transform="translate(50, 0)">
                  {/* <!-- "Nir" in Premium Elegant Serif Style --> */}
                  <text
                    x="-20"
                    y="115"
                    font-family="'Playfair Display', 'Didot', 'Georgia', serif"
                    font-size="100"
                    font-weight="600"
                    fill="url(#silverGradient)"
                    letter-spacing="2"
                  >
                    Nir
                  </text>

                  {/* <!-- "+" Replaced with a Sleek Golden Heart --> */}
                  <path
                    d="M 195 92 C 190 80, 172 80, 172 95 C 172 110, 195 125, 195 125 C 195 125, 218 110, 218 95 C 218 80, 200 80, 195 92 Z"
                    fill="url(#goldGradient)"
                  />

                  {/* <!-- "Aru" in Premium Elegant Serif Style --> */}
                  <text
                    x="240"
                    y="115"
                    font-family="'Playfair Display', 'Didot', 'Georgia', serif"
                    font-size="100"
                    font-weight="600"
                    fill="url(#silverGradient)"
                    letter-spacing="2"
                  >
                    Aru
                  </text>

                  {/* <!-- Minimalist Horizontal Accent Lines with Intertwined Infinity Tail --> */}
                  <line
                    x1="60"
                    y1="135"
                    x2="170"
                    y2="135"
                    stroke="url(#goldGradient)"
                    stroke-width="1"
                    opacity="0.7"
                  />
                  <line
                    x1="220"
                    y1="135"
                    x2="330"
                    y2="135"
                    stroke="url(#goldGradient)"
                    stroke-width="1"
                    opacity="0.7"
                  />
                </g>
              </svg>
            </div>
            <div>
              <ul className="flex items-center font-outfit text-text">
                {navdata?.map((item) => (
                  <li key={item.id}>
                    <Link  className="px-5 py-2.5 text-base font-medium text-white rounded-full transition-all duration-300 ease-in-out hover:bg-white hover:text-primary hover:shadow-lg" href={item.url}>{item.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </nav>
    </>
  );
};

export default Header;
