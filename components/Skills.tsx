"use client"

import React from "react"

import { motion, useInView, useAnimation, AnimatePresence } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import { Database, Server, Layers, GitBranch, Terminal, Cpu } from "lucide-react"
import { cn } from "@/lib/utils"

// Define skill categories with enhanced visual elements
const skillCategories = [
  {
    title: "Backend Development",
    icon: Server,
    color: "from-emerald-500 to-green-600",
    glowColor: "rgba(16, 185, 129, 0.3)",
    skills: [
      "Java (11/17)",
      "Spring Boot",
      "Microservices",
      "Schedulers",
      "Spring MVC",
      "JPA / Hibernate",
      "JUnit Testing",
      "RESTful APIs",
      "Maven",
    ],
  },
  {
    title: "Frontend Basics",
    icon: Layers,
    color: "from-blue-500 to-cyan-500",
    glowColor: "rgba(59, 130, 246, 0.3)",
    skills: ["HTML5", "CSS3", "JavaScript (ES6)", "JSP / Thymeleaf"],
  },
  {
    title: "Tools & Technologies",
    icon: Terminal,
    color: "from-purple-500 to-pink-500",
    glowColor: "rgba(168, 85, 247, 0.3)",
    skills: ["Git / GitHub", "Quartz Scheduler", "JWT / Security", "Agile / Jira", "Docker"],
  },
  {
    title: "Databases",
    icon: Database,
    color: "from-blue-600 to-indigo-600",
    glowColor: "rgba(79, 70, 229, 0.3)",
    skills: ["MySQL", "Oracle", "MongoDB", "PostgreSQL"],
  },
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [mounted, setMounted] = useState(false)
  const [activeCategory, setActiveCategory] = useState(0)
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)
  const controls = useAnimation()

  useEffect(() => {
    setMounted(true)
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const skillVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: (i: number) => ({
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        delay: i * 0.05,
      },
    }),
  }

  return (
    <section id="skills" className="relative py-28 overflow-hidden section-bg-alt">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Glowing orbs */}
        {mounted &&
          [0, 1, 2, 3].map((i) => (
            <motion.div
              key={`orb-${i}`}
              className="absolute rounded-full opacity-20 dark:opacity-30 blur-3xl"
              style={{
                background: `radial-gradient(circle, ${
                  i === 0
                    ? "rgba(16, 185, 129, 0.3)"
                    : i === 1
                      ? "rgba(59, 130, 246, 0.3)"
                      : i === 2
                        ? "rgba(168, 85, 247, 0.3)"
                        : "rgba(79, 70, 229, 0.3)"
                } 0%, transparent 70%)`,
                width: `${300 + i * 50}px`,
                height: `${300 + i * 50}px`,
                left: `${15 + i * 25}%`,
                top: `${20 + i * 15}%`,
              }}
              animate={{
                x: [0, 10, -10, 0],
                y: [0, -10, 10, 0],
                scale: [1, 1.05, 0.95, 1],
              }}
              transition={{
                duration: 10 + i * 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
          ))}

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.07]">
          <svg
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            fill="none"
            viewBox="0 0 800 800"
          >
            <g stroke="currentColor" strokeWidth="0.5">
              <line x1="0" y1="0" x2="0" y2="800" />
              <line x1="100" y1="0" x2="100" y2="800" />
              <line x1="200" y1="0" x2="200" y2="800" />
              <line x1="300" y1="0" x2="300" y2="800" />
              <line x1="400" y1="0" x2="400" y2="800" />
              <line x1="500" y1="0" x2="500" y2="800" />
              <line x1="600" y1="0" x2="600" y2="800" />
              <line x1="700" y1="0" x2="700" y2="800" />
              <line x1="0" y1="0" x2="800" y2="0" />
              <line x1="0" y1="100" x2="800" y2="100" />
              <line x1="0" y1="200" x2="800" y2="200" />
              <line x1="0" y1="300" x2="800" y2="300" />
              <line x1="0" y1="400" x2="800" y2="400" />
              <line x1="0" y1="500" x2="800" y2="500" />
              <line x1="0" y1="600" x2="800" y2="600" />
              <line x1="0" y1="700" x2="800" y2="700" />
            </g>
          </svg>
        </div>

        {/* Floating code elements */}
        {mounted && (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {["{ }", "[ ]", "< />", "=>", "&&", "||", "++", "import", "export", "class"].map((code, i) => (
              <motion.div
                key={`code-${i}`}
                className="absolute text-blue-400/10 dark:text-blue-300/10 font-mono text-lg font-bold"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: [0, 0.5, 0],
                  y: [0, -100],
                  x: [0, Math.random() * 50 - 25],
                  rotate: [0, Math.random() * 20 - 10],
                }}
                transition={{
                  duration: 8 + Math.random() * 5,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: i * 2,
                  ease: "easeInOut",
                }}
                style={{
                  left: `${10 + ((i * 80) % 80)}%`,
                  top: "100%",
                  fontSize: `${1 + Math.random() * 0.5}rem`,
                }}
              >
                {code}
              </motion.div>
            ))}
          </div>
        )}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-extrabold mb-6">
            <span className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Mastering the backend with clean Java architecture, scalable systems, and tool-driven precision.
          </p>
        </motion.div>

        {/* Category Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {skillCategories.map((category, index) => (
            <motion.button
              key={category.title}
              onClick={() => setActiveCategory(index)}
              className={cn(
                "relative px-6 py-3 rounded-xl font-medium transition-all duration-300",
                activeCategory === index
                  ? "text-white shadow-lg scale-105"
                  : "bg-card/50 backdrop-blur-sm text-muted-foreground hover:text-foreground border border-border",
              )}
              whileHover={{ scale: activeCategory === index ? 1.05 : 1.03 }}
              whileTap={{ scale: 0.98 }}
              style={{
                background:
                  activeCategory === index
                    ? `linear-gradient(to right, ${category.color.replace("from-", "").replace("to-", "")})`
                    : "",
              }}
            >
              <div className="flex items-center gap-2">
                <category.icon size={18} />
                <span>{category.title}</span>
              </div>
              {activeCategory === index && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-600/80 to-purple-600/80 -z-10"
                  initial={false}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <motion.div
              className="absolute -inset-10 rounded-3xl opacity-20"
              style={{
                background: `radial-gradient(circle, ${skillCategories[activeCategory].glowColor} 0%, transparent 70%)`,
                filter: "blur(40px)",
              }}
            />

            <div className="bg-card/40 backdrop-blur-md border border-border rounded-2xl p-8 shadow-xl">
              <div className="flex items-center gap-4 mb-8">
                <div
                  className={`w-16 h-16 rounded-xl bg-gradient-to-r ${skillCategories[activeCategory].color} flex items-center justify-center shadow-lg`}
                >
                  {React.createElement(skillCategories[activeCategory].icon, { className: "text-white", size: 32 })}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">{skillCategories[activeCategory].title}</h3>
                  <p className="text-muted-foreground">
                    {skillCategories[activeCategory].skills.length} skills in this category
                  </p>
                </div>
              </div>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
              >
                {skillCategories[activeCategory].skills.map((skill, idx) => (
                  <motion.div
                    key={skill}
                    custom={idx}
                    variants={skillVariants}
                    whileHover={{
                      scale: 1.05,
                      y: -5,
                      transition: { duration: 0.2 },
                    }}
                    onMouseEnter={() => setHoveredSkill(skill)}
                    onMouseLeave={() => setHoveredSkill(null)}
                    className={cn(
                      "relative bg-background/60 backdrop-blur-sm border border-border rounded-xl p-4 group transition-all duration-300 cursor-default",
                      hoveredSkill === skill ? "shadow-lg border-blue-500/50 bg-background/80" : "shadow-md",
                    )}
                  >
                    <div className="text-center">
                      <h4 className="text-sm font-semibold text-foreground group-hover:text-blue-500 transition-colors">
                        {skill}
                      </h4>
                    </div>

                    {/* Decorative elements */}
                    <div className="absolute -bottom-1 -right-1 w-8 h-8 rounded-br-xl bg-gradient-to-r from-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute -top-1 -left-1 w-3 h-3 rounded-tl-xl border-t border-l border-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />

                    {/* Glowing effect on hover */}
                    <motion.div
                      className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity"
                      style={{
                        background: `linear-gradient(45deg, ${skillCategories[activeCategory].color.replace("from-", "").replace("to-", "")})`,
                      }}
                    />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Skill Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { label: "Years Experience", value: "3.6+", icon: Cpu },
            { label: "Skills Mastered", value: "20+", icon: Terminal },
            { label: "Projects Completed", value: "8+", icon: GitBranch },
            { label: "Countries Impacted", value: "40+", icon: Layers },
          ].map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.8 + idx * 0.1 }}
              className="bg-card/40 backdrop-blur-sm border border-border rounded-xl p-6 text-center hover:shadow-lg transition-all group"
            >
              <motion.div
                whileHover={{ scale: 1.2, rotate: 10 }}
                className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center shadow-md group-hover:shadow-xl transition-all"
              >
                <stat.icon className="text-white" size={24} />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1 + idx * 0.1 }}
              >
                <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
