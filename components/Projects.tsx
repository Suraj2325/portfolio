"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ExternalLink, Github, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const projects = [
  {
    id: 1,
    title: "OneImpact Platform",
    description:
      "Empowered 90K+ patients in 28+ countries through AI-enabled TB response with Spring Boot and OpenGPT integration.",
    image: "/images/oneimpact-dashboard.png",
    tags: ["Spring Boot", "MongoDB", "Spring AI", "OpenGPT"],
    liveUrl: "https://example.com/oneimpact",
    githubUrl: "https://github.com",
    featured: true,
    category: "enterprise",
  },
  {
    id: 2,
    title: "HSSP Sanitation Tracker",
    description:
      "Built real-time inventory & activity system for school health workers, backed by scheduler-driven automation.",
    image: "/images/hssp-tracker.png",
    tags: ["Schedulers", "PostgreSQL", "Spring Boot", "Dashboards"],
    liveUrl: "https://example.com/hssp",
    githubUrl: "https://github.com",
    featured: true,
    category: "enterprise",
  },
  {
    id: 3,
    title: "CMDS Rebate Portal",
    description:
      "Backend for U.S. government healthcare portal aiding seniors in rebate eligibility and drug processing.",
    image: "/images/cmds-portal.png",
    tags: ["Java 11", "Oracle", "Spring Boot", "JUnit"],
    liveUrl: "https://example.com/cmds",
    githubUrl: "https://github.com",
    featured: false,
    category: "enterprise",
  },
  {
    id: 4,
    title: "Globida Insurance Engine",
    description:
      "Built backend for insurance platform enabling claim management and risk analysis for UK-based client.",
    image: "/images/insurance-engine.png",
    tags: ["Core Java", "Spring Boot", "MySQL"],
    liveUrl: "https://example.com/globida",
    githubUrl: "https://github.com",
    featured: false,
    category: "enterprise",
  },
  {
    id: 5,
    title: "Rewards & Attendance Module",
    description:
      "Automated reward tracking and Excel-based reporting for community users using schedulers and Apache POI.",
    image: "/images/rewards-module.png",
    tags: ["Quartz", "Spring Boot", "Apache POI"],
    liveUrl: "https://example.com/rewards",
    githubUrl: "https://github.com",
    featured: false,
    category: "internal",
  },
]

const filterLabels = {
  all: "All",
  featured: "Featured",
  enterprise: "Enterprise",
  internal: "Internal",
  personal: "Personal",
}

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [filter, setFilter] = useState("all")

  const filteredProjects =
    filter === "all"
      ? projects
      : filter === "featured"
        ? projects.filter((p) => p.featured)
        : projects.filter((p) => p.category === filter)

  return (
    <section id="projects" className="relative py-20 overflow-hidden section-bg">
      {/* Dark Theme Background */}
      <div className="absolute inset-0 dark:block hidden">
        {/* Matrix Rain Effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-green-400/20 font-mono text-sm"
              initial={{ y: -100 }}
              animate={{
                y: ["-100vh", "100vh"],
              }}
              transition={{
                duration: 8,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 0.5,
                ease: "linear",
              }}
              style={{
                left: `${i * 10}%`,
              }}
            >
              {Array.from({ length: 20 }, (_, j) => (
                <div key={j} style={{ marginBottom: "10px" }}>
                  {String.fromCharCode(0x30a0 + Math.random() * 96)}
                </div>
              ))}
            </motion.div>
          ))}
        </div>

        {/* Code Snippet Background */}
        <div className="absolute inset-0 opacity-5">
          <pre className="text-blue-400 text-xs leading-relaxed p-8">
            {`@RestController
@RequestMapping("/api/v1")
public class ProjectController {
    
    @Autowired
    private ProjectService projectService;
    
    @GetMapping("/projects")
    public ResponseEntity<List<Project>> getAllProjects() {
        return ResponseEntity.ok(projectService.findAll());
    }
    
    @PostMapping("/projects")
    public ResponseEntity<Project> createProject(@RequestBody Project project) {
        return ResponseEntity.ok(projectService.save(project));
    }
}`}
          </pre>
        </div>
      </div>

      {/* Light Theme Background */}
      <div className="absolute inset-0 opacity-5 dark:hidden block">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-gray-50" />
        <motion.div
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%234F46E5' fillOpacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            A showcase of real-world projects in healthcare, AI, and enterprise systems using modern backend
            technologies.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {Object.keys(filterLabels).map((filterType) => (
              <Button
                key={filterType}
                variant="outline"
                onClick={() => setFilter(filterType)}
                className={
                  filter === filterType
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white border-transparent hover:from-blue-700 hover:to-purple-700"
                    : "bg-card border-border text-muted-foreground hover:bg-accent hover:text-foreground"
                }
              >
                {filterLabels[filterType]}
              </Button>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-card backdrop-blur-sm border border-border rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:bg-accent transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.src = "/placeholder.svg?height=400&width=600"
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors"
                  >
                    <ExternalLink size={16} className="text-gray-900" />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors"
                  >
                    <Github size={16} className="text-gray-900" />
                  </a>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>
                  {project.featured && (
                    <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs px-2 py-1 rounded-full">
                      Featured
                    </span>
                  )}
                </div>
                <p className="text-muted-foreground mb-4 line-clamp-3">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="bg-muted text-muted-foreground text-xs px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-3">
                  <Button
                    size="sm"
                    className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                    asChild
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <Eye size={16} className="mr-2" />
                      Live Demo
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="bg-card border-border text-muted-foreground hover:bg-accent hover:text-foreground"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github size={16} className="mr-2" />
                      Code
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
