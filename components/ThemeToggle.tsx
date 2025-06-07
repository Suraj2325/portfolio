"use client"

import { Moon, Sun, Stars } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/components/ThemeProvider"
import { motion } from "framer-motion"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className="relative w-10 h-10 rounded-full bg-black/20 backdrop-blur-md border border-white/20 hover:bg-black/30 dark:hover:bg-black/30 light:hover:bg-white/30"
      >
        <motion.div
          initial={false}
          animate={{
            scale: theme === "light" ? 1 : 0,
            rotate: theme === "light" ? 0 : 180,
          }}
          transition={{ duration: 0.3, type: "spring", stiffness: 300, damping: 25 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <Sun className="h-5 w-5 text-yellow-400" />
        </motion.div>
        <motion.div
          initial={false}
          animate={{
            scale: theme === "dark" ? 1 : 0,
            rotate: theme === "dark" ? 0 : -180,
          }}
          transition={{ duration: 0.3, type: "spring", stiffness: 300, damping: 25 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="relative">
            <Moon className="h-5 w-5 text-blue-300" />
            <motion.div
              animate={{
                opacity: [0, 1, 0],
                scale: [0.8, 1, 0.8],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
              }}
              className="absolute -top-1 -right-1"
            >
              <Stars className="h-3 w-3 text-blue-200" />
            </motion.div>
          </div>
        </motion.div>
      </Button>
    </motion.div>
  )
}
