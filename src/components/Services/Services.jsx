"use client";
import React from "react";

import { GiHealthNormal } from "react-icons/gi";
import { BsPersonBoundingBox } from "react-icons/bs";
import { GiCelebrationFire } from "react-icons/gi";
import { FaWater } from "react-icons/fa";
import { GiEarthCrack } from "react-icons/gi";
import { BsFillTelephoneForwardFill } from "react-icons/bs";
import { FaPeopleCarryBox } from "react-icons/fa6";
import { motion } from 'framer-motion';




const skillsData = [
  {
    name: "Υγειονομικό",
    icon: <GiHealthNormal className="text-4xl text-primary" />,
    link: "#",
    description:
      "Παροχή πρώτων βοηθειών και υποστήριξη σε έκτακτες ανάγκες.",
    aosDelay: "0",
  },
  {
    name: "Έρευνα και διάσωση αγνοούμενου",
    icon: <BsPersonBoundingBox className="text-4xl text-primary" />,
    link: "#",
    description:
      "Συντονισμένη αναζήτηση και διάσωση αγνοούμενων ατόμων. ",
    aosDelay: "300",
  },
  {
    name: "Πυροπροστασία & Πυρόσβεση (Αστική - Δασική)",
    icon: <GiCelebrationFire className="text-4xl text-primary" />,
    link: "#",
    description:
      "Πρόληψη και κατάσβεση πυρκαγιών σε αστικές και δασικές περιοχές.",
    aosDelay: "500",
  },
  {
    name: "Διάσωση στο υγρό στοιχείο (θάλασσα - ποτάμι - λίμνη)",
    icon: <FaWater className="text-4xl text-primary" />,
    link: "#",
    description:
      "Ασφαλής διάσωση σε θάλασσες, ποτάμια και λίμνες.",
    aosDelay: "700",
  },
  {
    name: "Αντιμετώπιση μαζικών καταστροφών (USAR)",
    icon: <GiEarthCrack className="text-4xl text-primary" />,
    link: "#",
    description:
      "Επιχειρήσεις διάσωσης σε καταστάσεις μαζικών καταστροφών.",
    aosDelay: "1000",
  },
  {
    name: "Ασύρματες Επικοινωνίες ",
    icon: <BsFillTelephoneForwardFill className="text-4xl text-primary" />,
    link: "#",
    description:
      "Αδιάλειπτη επικοινωνία για τη συντονισμένη δράση σε επιχειρήσεις.",
    aosDelay: "1200",
  },
  {
    name: "Ανθρωπιστικό",
    icon: <FaPeopleCarryBox className="text-4xl text-primary" />,
    link: "#",
    description:
      "Παροχή βοήθειας σε ευάλωτες ομάδες και κοινότητες.",
    aosDelay: "1400",
  },

];
const Services = () => {
  return (
    <>
      <span id="about"></span>
      <div className="bg-gray-100 dark:bg-black dark:text-white py-12 sm:grid sm:place-items-center">
        <div className="container">
          {/* Header */}
          <div className="pb-12 text-center space-y-3">
            <h1
              data-aos="fade-up"
              className="text-3xl font-semibold sm:text-3xl text-amber-500 dark:text-primary"
            >
              Ανακαλύψτε Τις Δράσεις Μας
            </h1>
            <p
              data-aos="fade-up"
              className="text-gray-600 dark:text-gray-400 text-sm"
            >
              Αντικείμενα Εκπαίδευσης & Επιχείρησης .
            </p>
          </div>

          {/* services cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 ml-10">
            {skillsData.map((skill) => (
              <div
                key={skill.name}
                data-aos="fade-up"
                data-aos-delay={skill.aosDelay}
                className="card space-y-3 sm:space-y-4 p-4"
              >
                <div>{skill.icon}</div>
                <h1 className="text-lg font-semibold">{skill.name}</h1>
                <p className="text-gray-600 dark:text-gray-400">
                  {skill.description}
                </p>
              </div>
            ))}
            <div data-aos="fade-up" data-aos-delay="50" >
              <motion.img src="/src/assets/brands/draseis.svg" width={400} height={400} className=""
                animate={{
                  translateY: [-10, 10],
                }}
                transition={{
                  repeat: Infinity,
                  repeatType: "mirror",
                  duration: 3,
                }}
              ></motion.img>
            </div>
          </div>

          {/* button */}
          <div
            data-aos="fade-up"
            data-aos-delay="900"
            data-aos-offset="0"
            className="text-center mt-4 sm:mt-8"
          >
            <button className="primary-btn">Μάθετε Περισσότερα</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
