"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 2,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(" ");
  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration: duration ? duration : 1,
        delay: stagger(0.2),
      }
    );
  }, [animate, duration, filter]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          console.log(word)
          return (
            <motion.span
            key={word + idx}
            className={`dark:text-white ${
              idx === 1
                ? "bg-gradient-to-r text-2xl md:text-9xl from-orange-500 to-yellow-400 bg-clip-text text-transparent"
                : idx === 2
                ? "bg-gradient-to-r from-green-500 to-green-700 bg-clip-text text-transparent"
                : "text-white"
            } opacity-0`}
            style={{
              filter: filter ? "blur(10px)" : "none",
            }}
          >
            {word}{" "}
          </motion.span>
          
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-0 px-5 md:px-0">
        <div className=" dark:text-white text-5xl   text-white md:text-9xl text-center leading-[3.2rem]  md:leading-[10.2rem] md:tracking-tight">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
