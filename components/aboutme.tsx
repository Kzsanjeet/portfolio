"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

export default function AboutMe() {
  const strengths = [
    "Strong foundation in JavaScript/TypeScript, Node.js, and backend architecture",
    "Experience building RESTful APIs and scalable server-side applications",
    "Hands-on experience with Express.js and NestJS for structured backend development",
    "Experience working with databases, authentication systems, and API security",
    "Full-stack experience with a focus on robust backend systems and seamless frontend integration",
  ];

  const interests = [
    "Exploring new technologies and frameworks",
    "Contributing to open-source projects",
    "Learning about system design and architecture",
    "Building personal projects to enhance skills",
  ];

  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="aboutme"
      className="py-1 md:py-4 px-4 sm:px-6 lg:px-8"
    >
      <div className="relative max-w-6xl mx-auto flex flex-col lg:flex-row overflow-hidden">
        {/* LEFT: Title */}
        <div className="relative z-10 flex items-center justify-center px-4 py-6 lg:py-12 lg:min-w-[80px] border-b lg:border-b-0 lg:border-r border-indigo-500/20">
          {/* Mobile Title */}
          <h1 className="lg:hidden text-3xl  tracking-[0.25em] uppercase font-mono">
            Who Am I?
          </h1>

          {/* Desktop Vertical Title */}
          <h1 className="hidden lg:block [writing-mode:vertical-rl] [text-orientation:mixed] rotate-180 text-4xl  tracking-[0.35em]  uppercase font-mono">
            Who Am I?
          </h1>
        </div>

        {/* CENTER: Bio */}
        <div className="relative z-10 flex-1 flex flex-col justify-center px-4 sm:px-8 lg:px-12 py-10 lg:py-16">
          <div className="w-12 h-[3px] bg-gradient-to-r from-indigo-500 to-emerald-500 rounded-full mb-6" />

          <p className="text-sm sm:text-base leading-relaxed mb-8 max-w-xl">
            I&apos;m an aspiring Backend Engineer with a strong interest in
            designing scalable systems and building reliable server-side
            applications. I enjoy creating clean architectures, optimizing
            performance, and developing APIs that power real-world products. I
            focus on writing maintainable code, understanding how systems work
            internally, and building backend solutions that are secure,
            efficient, and production-ready.
          </p>

          <h2 className="text-lg sm:text-xl tracking-[0.25em] uppercase bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent mb-4">
            Key Strengths
          </h2>

          <ul className="flex flex-col gap-3 mb-8">
            {strengths.map((item, i) => (
              <li
                key={i}
                className="relative pl-5 text-sm sm:text-base leading-relaxed"
              >
                <span className="absolute left-0 top-[9px] w-1.5 h-1.5 rounded-full bg-gradient-to-br from-indigo-500 to-emerald-500" />
                {item}
              </li>
            ))}
          </ul>

          <h2 className="text-lg sm:text-xl tracking-[0.25em] uppercase bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent mb-4">
            Interests
          </h2>

          <ul className="flex flex-col gap-3">
            {interests.map((item, i) => (
              <li
                key={i}
                className="relative pl-5 text-sm sm:text-base  leading-relaxed"
              >
                <span className="absolute left-0 top-[9px] w-1.5 h-1.5 rounded-full bg-gradient-to-br from-indigo-500 to-emerald-500" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT: Profile Image */}
        <div className="relative z-10 flex items-center justify-center px-4 sm:px-8 lg:px-12 py-12 w-full lg:w-1/2 border-t lg:border-t-0 lg:border-l border-indigo-500/10">
          <div className="relative w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] md:w-[320px] md:h-[320px] lg:w-[380px] lg:h-[380px]">
            <div className="absolute -inset-3 rounded-full border border-indigo-500/30" />
            <div className="absolute -inset-5 rounded-full border border-indigo-500/12" />
            <div className="absolute -inset-[3px] rounded-full bg-[conic-gradient(from_0deg,#6366f1,#10b981,#6366f1)] -z-10" />

            <Image
              src="/Profile .png"
              alt="About Me"
              fill
              className="rounded-full object-cover border-[3px] border-transparent brightness-95 contrast-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
