"use client";

import { motion, animate, useMotionValue } from "framer-motion";
import { FaGift, FaPercent, FaTicketAlt } from "react-icons/fa";
import { useEffect } from "react";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function HeroSection() {
  const pointsUsed = 7000;
  const totalPoints = 10000;

  const animatedValue = useMotionValue(0);

  const benefits = [
    {
      title: "Exclusive Discounts",
      icon: <FaPercent />,
      description: "Enjoy handpicked discounts on top brands and services.",
      cta: "View Deals",
    },
    {
      title: "Voucher Redemption",
      icon: <FaTicketAlt />,
      description: "Redeem your reward points for exciting vouchers.",
      cta: "Claim Now",
    },
    {
      title: "Special Gifts",
      icon: <FaGift />,
      description: "Unlock surprise gifts for being a loyal member.",
      cta: "Explore",
    },
  ];

  useEffect(() => {
    animate(animatedValue, (pointsUsed / totalPoints) * 100, {
      duration: 1.4,
      ease: "easeInOut",
    });
  }, [pointsUsed, totalPoints]);

  return (
    <section className=" text-white py-16 px-6 md:px-20">
      <h2 className="text-3xl text-gray-400 md:text-4xl font-bold text-center mb-12">
        Your Garage Perks
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {benefits.map((benefit, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            whileHover={{ scale: 1.05, rotate: 1 }}
            whileTap={{ scale: 0.97 }}
            className=" p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-green-500/20 hover:border-green-400/50 transform transition duration-300"
          >
            <div className="text-3xl mb-4 text-green-400">{benefit.icon}</div>
            <h3 className="text-xl text-gray-500  font-semibold mb-2">{benefit.title}</h3>
            <p className="text-gray-400 mb-4">{benefit.description}</p>
            <button className="mt-auto px-4 py-2 bg-green-500 text-black rounded-full font-medium hover:bg-green-400">
              {benefit.cta}
            </button>
          </motion.div>
        ))}
      </div>

      <div className="mt-20 max-w-xs mx-auto text-center">
        <h3 className="text-2xl text-gray-400 font-bold mb-6">Reward Points</h3>
        <div className="w-80 h-80 mx-auto">
          <CircularProgressbarWithChildren
            value={(pointsUsed / totalPoints) * 100}
            styles={buildStyles({
              pathColor: "#22c55e",
              trailColor: "#374151",
            })}
          >
            <div className="flex flex-col items-center text-white font-semibold">
              <span className="text-6xl">🏆</span>
            </div>
          </CircularProgressbarWithChildren>
        </div>
        <p className="mt-4 text-xl text-gray-400">
          {pointsUsed} / {totalPoints} points used
        </p>
      </div>
    </section>
  );
}
