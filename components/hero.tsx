"use client";

import { useEffect, useState } from "react";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16"
    >
      <div className="max-w-4xl mx-auto text-center">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
              नमस्ते,
            </span>
            I am Balbir Singh Thapa
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Passionate about building scalable web applications with modern
            technologies. Specialized in Nest.js, Express.js and React/Next.js,
            with expertise in cloud deployment and API development.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href="mailto:sanjeetkazithapa@gmail.com"
              className="px-6 py-3 flex  bg-blue-600 hover:bg-blue-700 rounded-lg"
            >
              <Mail className="mr-2" />
              Get In Touch
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              className="px-6 py-3 flex border border-slate-100 hover:border-slate-400 rounded-lg"
            >
              <Download className="mr-2" />
              View Resume
            </a>
          </div>

          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/Kzsanjeet"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/sanjeet-kazi-thapa-22a895263/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:sanjeetkazithapa@gmail.com"
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
