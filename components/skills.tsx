"use client";

import { useEffect, useRef, useState } from "react";

const skillCategories = [
  {
    title: "Frontend",
    icon: "⬡",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "JavaScript"],
  },
  {
    title: "Backend",
    icon: "⬡",
    skills: [
      "Node.js",
      "Nest.js",
      "Express.js",
      "MongoDB",
      "PostgreSQL",
      "REST APIs",
    ],
  },
  {
    title: "Tools & Others",
    icon: "⬡",
    skills: ["Github", "Docker", "Socket.io", "Redis", "Postman", "JIRA"],
  },
];

const categoryAccents = [
  {
    from: "from-blue-600",
    to: "to-purple-600",
    border: "border-blue-500/20",
    glow: "shadow-blue-500/10",
    tag: "bg-blue-600/10 text-blue-300 border-blue-500/20",
    dot: "bg-blue-500",
  },
  {
    from: "from-purple-600",
    to: "to-blue-600",
    border: "border-purple-500/20",
    glow: "shadow-purple-500/10",
    tag: "bg-purple-600/10 text-purple-300 border-purple-500/20",
    dot: "bg-purple-500",
  },
  {
    from: "from-blue-500",
    to: "to-purple-500",
    border: "border-blue-400/20",
    glow: "shadow-blue-400/10",
    tag: "bg-blue-500/10 text-blue-200 border-blue-400/20",
    dot: "bg-blue-400",
  },
];

export function Skills() {
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
      id="skills"
      className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-purple-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-mono tracking-[0.3em] uppercase text-blue-400 mb-4 px-3 py-1 border border-blue-500/20 rounded-full bg-blue-500/5">
            What I work with
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {skillCategories.map((category, i) => {
            const accent = categoryAccents[i];
            return (
              <div
                key={category.title}
                className={`relative group rounded-2xl p-6 border bg-background/60 backdrop-blur-sm shadow-xl ${accent.border} ${accent.glow} transition-all duration-700 hover:-translate-y-1 hover:shadow-2xl ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                {/* Top gradient line */}
                <div
                  className={`absolute top-0 left-6 right-6 h-[2px] rounded-full bg-gradient-to-r ${accent.from} ${accent.to} opacity-60 group-hover:opacity-100 transition-opacity duration-300`}
                />

                {/* Card header */}
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className={`w-8 h-8 rounded-lg bg-gradient-to-br ${accent.from} ${accent.to} flex items-center justify-center text-white text-sm font-bold shadow-lg`}
                  >
                    {category.title[0]}
                  </div>
                  <h3 className="text-lg font-semibold tracking-wide">
                    {category.title}
                  </h3>
                  <span className="ml-auto text-xs font-mono text-muted-foreground">
                    {String(category.skills.length).padStart(2, "0")}
                  </span>
                </div>

                {/* Skill tags */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, j) => (
                    <span
                      key={skill}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium border ${accent.tag} hover:scale-105`}
                      style={{
                        transitionProperty: "opacity, transform",
                        transitionDuration: "0.4s",
                        transitionTimingFunction: "ease",
                        transitionDelay: isVisible
                          ? `${i * 150 + j * 60}ms`
                          : "0ms",
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible
                          ? "translateY(0)"
                          : "translateY(8px)",
                      }}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${accent.dot} opacity-70`}
                      />
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
