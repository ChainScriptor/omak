"use client";
import { motion, useAnimate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function BrandsLogo() {
  const [isHovered, setIsHovered] = useState(false);
  const animation = useRef(null);
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animation.current = animate(
      scope.current,
      { x: '-20%' },
      {
        duration: 30,
        ease: 'linear',
        repeat: Infinity
      });
  }, []);

  useEffect(() => {
    if (animation.current) {
      if (isHovered) {
        animation.current.speed = 0.5;
      } else {
        animation.current.speed = 1;
      }
    }
  }, [isHovered]);

  return (
    <section className="shadow-md ">
      <div className="overflow-x-clip flex shadow-md ">
        <motion.div
          ref={scope}
          className="flex flex-none gap-16 pr-16 text-3xl md:text-2xl font-medium group"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="flex items-center gap-16">

              <span className="group-hover:text-amber-700 text-sm font-thin">OM.Α.Κ.  - Εθελοντές Δήμου Καλαμαριάς</span>
              <span className=" text-4xl text-primary group-hover:text-amber-700">
                &#128384; - &#128387;
              </span>
              <h4 className="text-primary text-sm group-hover:text-amber-700 font-inter">Tηλ. 2310440953 & 6974009009 - email: omak.kalamaria@gmail.com</h4>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
