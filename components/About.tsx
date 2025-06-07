"use client"

import { motion } from "framer-motion"
import { Code2, Coffee, MapPin, Calendar, Award, Users } from "lucide-react"

// Work Experience Data
const workExperience = [
  {
    year: "May 2023 - Present",
    title: "Software Engineer",
    company: "Dure Technologies",
    description:
      "Leading backend development in public health domain projects across 40+ countries. Upgraded Spring Boot framework, integrated AI (OpenGPT, Spring AI), and built high-performance APIs and schedulers.",
    icon: Code2,
  },
  {
    year: "Oct 2022 - May 2023",
    title: "Software Developer",
    company: "Birlasoft Pvt Ltd.",
    description:
      "Worked on a healthcare domain project. Built REST APIs using Spring Boot and Oracle DB, ensured code quality with JUnit, and participated in agile workflows using Azure DevOps.",
    icon: Coffee,
  },
  {
    year: "Sep 2021 - Sep 2022",
    title: "Associate Developer",
    company: "We Value Soft",
    description:
      "Developed backend applications using Core Java, Spring Boot, and Hibernate. Focused on exception handling, REST APIs, and Agile methodologies.",
    icon: MapPin,
  },
]

// Education Data
const education = [
  {
    year: "2016 - 2019",
    title: "Bachelor of Science",
    company: "SGM College, Karad",
    description:
      "Graduated with a solid foundation in computer science and programming, later building expertise in Java, Spring Boot, and microservices.",
    icon: Calendar,
  },
]

// Stat Data (optional)
const stats = [
  { number: "3.6+", label: "Years Experience", icon: Calendar },
  { number: "8+", label: "Projects Delivered", icon: Award },
  { number: "40+", label: "Countries Impacted", icon: Users },
  { number: "30–40%", label: "Updates and Migrations", icon: Award },
]

// Timeline Card Component (reusable)
function TimelineSection({
  title,
  data,
}: {
  title: string
  data: {
    year: string
    title: string
    company: string
    description: string
    icon: any
  }[]
}) {
  return (
    <motion.div
      className="relative z-10 mb-20"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <h3 className="text-2xl font-semibold text-center mb-10">{title}</h3>
      <div className="relative border-l-4 border-blue-500 pl-6 space-y-12">
        {data.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="absolute -left-[1.5rem] top-2 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-md">
              <item.icon className="text-white w-4 h-4" />
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-5 shadow-md hover:shadow-lg transition-all">
              <div className="flex justify-between flex-wrap mb-2">
                <div>
                  <h4 className="font-semibold text-lg text-foreground">{item.title}</h4>
                  <p className="text-sm text-blue-400">{item.company}</p>
                </div>
                <span className="text-xs text-muted-foreground">{item.year}</span>
              </div>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default function About() {
  return (
    <section id="about" className="relative py-24 px-6 sm:px-8 bg-background text-foreground overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-purple-500 opacity-20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-[200px] h-[200px] bg-blue-500 opacity-20 rounded-full blur-2xl animate-pulse"></div>

      {/* Intro */}
      <motion.div
        className="text-center mb-16 relative z-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-4">
          About Me
        </h2>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto">
          Passionate software engineer blending Java, Spring Boot, and AI for global impact.
        </p>
      </motion.div>

      {/* Stats (Optional) */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-20 relative z-10"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.2 } },
        }}
      >
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            variants={{
              hidden: { opacity: 0, y: 30 },
              show: { opacity: 1, y: 0 },
            }}
            whileHover={{ scale: 1.05 }}
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all"
          >
            <stat.icon className="w-8 h-8 mx-auto mb-3 text-blue-400" />
            <div className="text-3xl font-bold text-foreground mb-2">{stat.number}</div>
            <p className="text-sm text-muted-foreground">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Story */}
      <motion.div
        className="max-w-3xl mx-auto mb-20 text-center text-muted-foreground relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-semibold mb-6 text-foreground">My Story</h3>
        <p className="mb-4">
          I’m Suraj — a software engineer crafting scalable, AI-driven systems with Java and Spring Boot.
        </p>
        <p className="mb-4">
          From global health tech to enterprise microservices, I’ve built APIs, automated data flows, and improved
          public service software across 40+ countries.
        </p>
        <p>
          I love solving real-world problems with clean code, clear docs, and curious thinking.
        </p>
      </motion.div>

      {/* Work Experience */}
      <TimelineSection title="Work Experience" data={workExperience} />

      {/* Education */}
      <TimelineSection title="Education" data={education} />
    </section>
  )
}
