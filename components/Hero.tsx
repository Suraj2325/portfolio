"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useEffect, useState } from "react"

export default function Hero() {
  const [mounted, setMounted] = useState(false)
  const [typedText, setTypedText] = useState("")
  const fullText = "Software Engineer"

  useEffect(() => {
    setMounted(true)
    let index = 0
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1))
        index++
      } else {
        clearInterval(interval)
      }
    }, 70)
    return () => clearInterval(interval)
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden section-bg-hero pt-20"
    >
      {/* Animated Background Elements */}
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
              backgroundImage: `linear-gradient(rgba(59,130,246,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.1) 1px, transparent 1px)`,
              backgroundSize: "50px 50px",
            }}
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-16">
        {/* Text */}
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
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground h-10">
              <span suppressHydrationWarning className="text-blue-600 dark:text-blue-400">
                {mounted ? typedText : ""}
              </span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
              Software Engineer with 3.6+ years' experience in Java, Spring Boot, and Microservices. Specialized in
              building scalable APIs, integrating AI-driven solutions, and delivering impactful backend architecture.
            </p>
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            {/* View My Work */}
            <Button
              size="lg"
              variant="outline"
              className="group relative border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold px-8 py-3 transition-all duration-300 overflow-hidden"
              onClick={() => scrollTo("projects")}
            >
              <span className="flex items-center gap-2">
                <motion.span whileHover={{ scale: 1.2 }} className="group-hover:animate-ping">
                  🔍
                </motion.span>
                View My Work
              </span>
              <span className="absolute inset-0 rounded-lg border border-blue-500 opacity-0 group-hover:opacity-50 group-hover:shadow-[0_0_10px_2px_rgba(59,130,246,0.5)] transition duration-500 pointer-events-none" />
            </Button>

            {/* Get In Touch */}
            <Button
              size="lg"
              variant="outline"
              className="group relative border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold px-8 py-3 transition-all duration-300 overflow-hidden"
              onClick={() => scrollTo("contact")}
            >
              <span className="flex items-center gap-2">
                <motion.span whileHover={{ rotate: 20, scale: 1.2 }} className="group-hover:animate-pulse">
                  📬
                </motion.span>
                Get In Touch
              </span>
              <span className="absolute inset-0 rounded-lg border border-blue-500 opacity-0 group-hover:opacity-50 group-hover:shadow-[0_0_10px_2px_rgba(59,130,246,0.5)] transition duration-500 pointer-events-none" />
            </Button>

            {/* Download Resume */}
            <Button
              size="lg"
              variant="outline"
              asChild
              className="group relative border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold px-8 py-3 transition-all duration-300 overflow-hidden"
            >
              <a href="/Suraj_mali_Resume.pdf" download>
                <span className="flex items-center gap-2">
                  <motion.span whileHover={{ scale: 1.2 }} className="group-hover:animate-bounce">
                    📄
                  </motion.span>
                  Download Resume
                </span>
                <span className="absolute inset-0 rounded-lg border border-blue-500 opacity-0 group-hover:opacity-50 group-hover:shadow-[0_0_10px_2px_rgba(59,130,246,0.5)] transition duration-500 pointer-events-none" />
              </a>
            </Button>
          </motion.div>
        </motion.div>

        {/* Avatar Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.8, type: "spring", stiffness: 100 }}
          className="lg:w-1/2 flex justify-center items-center"
        >
          <div className="relative w-80 h-80 md:w-96 md:h-96 lg:w-[420px] lg:h-[420px]">
            <Image
              src="/images/hero-avatar.jpeg"
              alt="Suraj Mali - Hero Avatar"
              fill
              className="object-cover rounded-3xl shadow-lg border border-white dark:border-gray-800"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
