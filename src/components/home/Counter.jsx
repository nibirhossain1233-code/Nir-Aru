"use client";

import React, { useEffect, useState } from "react";
import Container from "../ui/Container";

const Counter = () => {
  const relationshipDate = new Date("2026-05-25T01:15:00");

  const [time, setTime] = useState({
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
  });

  // =========================
  // Update Counter Function
  // =========================
  const updateCounter = () => {
    const now = new Date();

    let years = now.getFullYear() - relationshipDate.getFullYear();
    let months = now.getMonth() - relationshipDate.getMonth();
    let days = now.getDate() - relationshipDate.getDate();
    let hours = now.getHours() - relationshipDate.getHours();

    // Hour Adjust
    if (hours < 0) {
      hours += 24;
      days--;
    }

    // Day Adjust
    if (days < 0) {
      const previousMonthDays = new Date(
        now.getFullYear(),
        now.getMonth(),
        0
      ).getDate();

      days += previousMonthDays;
      months--;
    }

    // Month Adjust
    if (months < 0) {
      months += 12;
      years--;
    }

    setTime({
      years,
      months,
      days,
      hours,
    });
  };

  useEffect(() => {
    updateCounter();

    const interval = setInterval(updateCounter, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="mt-12.5">
      <Container>
        <div className="w-full text-center rounded-[48px] border border-white/10 bg-white/5 backdrop-blur-md p-6">
          <h2 className="text-text font-medium font-inter text-3xl">
            <span className="inline-block -rotate-15">♥️</span>
            {" "}Every Second Matters{" "}
            <span className="inline-block rotate-15">♥️</span>
          </h2>

          <div className="flex items-center justify-between mt-10">

            {/* Years */}
            <div className="w-70 h-50 rounded-4xl border border-white/20 bg-white/10 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.12)] flex flex-col justify-around items-center">
              <span className="text-3xl">📆</span>
              <span className="text-6xl">
                {String(time.years).padStart(2, "0")}
              </span>
              <span className="text-2xl">Years</span>
            </div>

            {/* Months */}
            <div className="w-70 h-50 rounded-4xl border border-white/20 bg-white/10 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.12)] flex flex-col justify-around items-center">
              <span className="text-3xl">💌</span>
              <span className="text-6xl">
                {String(time.months).padStart(2, "0")}
              </span>
              <span className="text-2xl">Months</span>
            </div>

            {/* Days */}
            <div className="w-70 h-50 rounded-4xl border border-white/20 bg-white/10 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.12)] flex flex-col justify-around items-center">
              <span className="text-3xl">🕛</span>
              <span className="text-6xl">
                {String(time.days).padStart(2, "0")}
              </span>
              <span className="text-2xl">Days</span>
            </div>

            {/* Hours */}
            <div className="w-70 h-50 rounded-4xl border border-white/20 bg-white/10 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.12)] flex flex-col justify-around items-center">
              <span className="text-3xl">🕒</span>
              <span className="text-6xl">
                {String(time.hours).padStart(2, "0")}
              </span>
              <span className="text-2xl">Hours</span>
            </div>

          </div>
        </div>
      </Container>
    </section>
  );
};

export default Counter;