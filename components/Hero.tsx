"use client"
import { motion } from "framer-motion"
import { ArrowDown, Github, Linkedin, Mail, Coffee, Sparkles, Database, Code2, Braces, Terminal } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useEffect, useState } from "react"

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden section-bg-hero pt-20"
    >
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-400/20 dark:from-blue-500/30 dark:to-purple-500/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-400/20 to-pink-400/20 dark:from-purple-500/30 dark:to-pink-500/30 rounded-full blur-3xl"
        />
        <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)`,
              backgroundSize: "50px 50px",
            }}
          />
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6 flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left lg:w-1/2 space-y-8"
        >
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="space-y-2"
          >
            <p className="text-lg md:text-xl text-muted-foreground font-medium">Hello, I'm</p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 dark:from-blue-400 dark:via-purple-400 dark:to-blue-300 bg-clip-text text-transparent">
                Suraj Mali
              </span>
            </h1>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.8, duration: 1, ease: "easeOut" }}
              className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full origin-left max-w-md mx-auto lg:mx-0"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="space-y-4"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground">Java Backend Engineer</h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
              Backend Engineer with 4.6+ years' experience designing scalable microservices and REST APIs using Java, Spring Boot, and cloud-native architectures. Hands-on with AI-powered automation using LangChain4j, Spring AI, RAG pipelines, and OpenAI APIs.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start flex-wrap"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-3 shadow-lg"
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            >
              View My Work
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold px-8 py-3"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Get In Touch
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white font-semibold px-8 py-3"
            >
              <a href="/Suraj_Mali_Resume.pdf" download>
                Download Resume
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="flex gap-4 justify-center lg:justify-start pt-4"
          >
            {[
              { icon: Github, href: "https://github.com/surajmali", label: "GitHub" },
              { icon: Linkedin, href: "https://linkedin.com/in/surajmali2325", label: "LinkedIn" },
              { icon: Mail, href: "mailto:Surajdeveloper2325@gmail.com", label: "Email" },
            ].map((social, idx) => (
              <motion.a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-blue-600 hover:border-blue-600 transition-colors shadow-sm"
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Avatar Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8, type: "spring" }}
          className="lg:w-1/2 flex justify-center lg:justify-end"
        >
          {/* Outer wrapper — smaller padding on mobile */}
          <div className="relative p-6 sm:p-10 md:p-14">
            {/* Rotating gradient glow */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-4 sm:inset-8 md:inset-10 rounded-3xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-20 blur-2xl"
            />

            {/* Image — smaller on mobile */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-3xl overflow-hidden border-4 border-white/30 dark:border-white/10 shadow-2xl"
            >
              <Image
                src="/images/hero-avatar.jpeg"
                alt="Suraj Mali"
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent" />
            </motion.div>

            {/* Floating tech-stack badges — only show 4 on mobile, all 6 on larger screens */}
            {mounted && (
              <>
                {[
                  {
                    icon: Coffee,
                    label: "Java",
                    position: "top-0 left-0",
                    delay: 0,
                    gradient: "from-orange-500 to-red-500",
                    shadow: "shadow-orange-500/40",
                    showOnMobile: true,
                  },
                  {
                    icon: Sparkles,
                    label: "AI",
                    position: "top-0 right-0",
                    delay: 0.4,
                    gradient: "from-fuchsia-500 to-purple-600",
                    shadow: "shadow-purple-500/40",
                    showOnMobile: true,
                  },
                  {
                    icon: Code2,
                    label: "Spring",
                    position: "top-1/2 -translate-y-1/2 -left-2",
                    delay: 0.8,
                    gradient: "from-emerald-500 to-green-600",
                    shadow: "shadow-emerald-500/40",
                    showOnMobile: false,
                  },
                  {
                    icon: Database,
                    label: "DB",
                    position: "top-1/2 -translate-y-1/2 -right-2",
                    delay: 1.2,
                    gradient: "from-blue-500 to-indigo-600",
                    shadow: "shadow-blue-500/40",
                    showOnMobile: false,
                  },
                  {
                    icon: Braces,
                    label: "API",
                    position: "bottom-0 left-0",
                    delay: 1.6,
                    gradient: "from-cyan-500 to-blue-500",
                    shadow: "shadow-cyan-500/40",
                    showOnMobile: true,
                  },
                  {
                    icon: Terminal,
                    label: "DevOps",
                    position: "bottom-0 right-0",
                    delay: 2,
                    gradient: "from-pink-500 to-rose-500",
                    shadow: "shadow-pink-500/40",
                    showOnMobile: true,
                  },
                ].map((badge, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      y: [0, -6, 0],
                    }}
                    transition={{
                      opacity: { delay: 0.8 + badge.delay, duration: 0.4 },
                      scale: { delay: 0.8 + badge.delay, duration: 0.5, type: "spring", stiffness: 200 },
                      y: { duration: 3 + idx * 0.3, repeat: Infinity, ease: "easeInOut", delay: badge.delay },
                    }}
                    whileHover={{ scale: 1.1 }}
                    className={`absolute ${badge.position} ${badge.showOnMobile ? "" : "hidden sm:block"} group cursor-pointer z-10`}
                  >
                    <div
                      className={`bg-gradient-to-br ${badge.gradient} rounded-lg sm:rounded-xl shadow-lg ${badge.shadow} px-2 py-1 sm:px-3 sm:py-2 flex items-center gap-1 sm:gap-2 border border-white/20`}
                    >
                      <badge.icon className="w-3 h-3 sm:w-4 sm:h-4 text-white shrink-0" strokeWidth={2.5} />
                      <span className="text-[10px] sm:text-xs font-bold text-white whitespace-nowrap">{badge.label}</span>
                    </div>
                  </motion.div>
                ))}
              </>
            )}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToAbout}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{
          opacity: { delay: 1.5, duration: 0.8 },
          y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
        }}
        aria-label="Scroll to about section"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full border-2 border-border bg-card/50 backdrop-blur flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
      >
        <ArrowDown className="w-5 h-5" />
      </motion.button>
    </section>
  )
}
