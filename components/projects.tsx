"use client"

import { useEffect, useRef, useState } from "react"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

const projects = [
  {
    title: "Casemellow (E-commerce with mock-ups)",
    description:
      "Full-stack MERN application with payment integration, admin dashboard, mock-ups customizaiton and real-time inventory management.",
    image: "/casemellow.png?height=200&width=300",
    technologies: ["Next.js", "Express.js", "MongoDB", "Khalti", "Typescript, Chart.js"],
    githubUrl: "https://github.com/Kzsanjeet/casemellow-client",
    liveUrl: "https://casemellow.vercel.app/home",
  },
  {
    title: "Nepal Luxury Escapes",
    description:
      "RESTful API, worked as a backend developer, generated APIs for admin and client side.",
    image: "/luxury.png?height=200&width=300",
    technologies: ["Express.js", "MongoDB", "Postman", "GitHub"],
    githubUrl: "https://github.com/Kzsanjeet/luxuryEscape",
    liveUrl: "https://www.nepalluxuryescapes.com",
  },
  {
    title: "readBeyond",
    description:
      "readBeyond is a e-learning platform, it is still on progress.",
    image: "/placeholder.svg?height=200&width=300",
    technologies: ["Next.js", "TypeScript", "Prisma", "Tailwind","Express.js","PostgreSQL","Prism"],
    githubUrl: "https://github.com/Kzsanjeet/read-beyond-fullstack",
    // liveUrl: "https://example.com",
  },
  // {
  //   title: "Real-time Chat App",
  //   description:
  //     "Scalable chat application with rooms, file sharing, and message encryption using modern web technologies.",
  //   image: "/placeholder.svg?height=200&width=300",
  //   technologies: ["React", "Socket.io", "Redis", "AWS S3", "Material-UI"],
  //   githubUrl: "https://github.com",
  //   liveUrl: "https://example.com",
  // },
  // {
  //   title: "Microservices Architecture",
  //   description:
  //     "Distributed system with multiple services, API gateway, and containerized deployment on cloud infrastructure.",
  //   image: "/placeholder.svg?height=200&width=300",
  //   technologies: ["Node.js", "Docker", "Kubernetes", "MongoDB", "NGINX"],
  //   githubUrl: "https://github.com",
  //   liveUrl: "https://example.com",
  // },
  // {
  //   title: "Content Management System",
  //   description: "Headless CMS with GraphQL API, role-based permissions, and dynamic content rendering capabilities.",
  //   image: "/placeholder.svg?height=200&width=300",
  //   technologies: ["GraphQL", "Apollo", "Strapi", "React", "PostgreSQL"],
  //   githubUrl: "https://github.com",
  //   liveUrl: "https://example.com",
  // },
]

export function Projects() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and contributions to various projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className={`group hover:shadow-lg transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <CardHeader className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="mb-2">{project.title}</CardTitle>
                <CardDescription className="mb-4 text-sm leading-relaxed">{project.description}</CardDescription>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md">
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0 flex gap-2">
                <Button variant="outline" size="sm" asChild className="flex-1">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </a>
                </Button>
                <Button size="sm" asChild className="flex-1">
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
