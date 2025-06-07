"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const blogPosts = [
  {
    id: 1,
    title: "Integrating Spring AI and OpenGPT in Microservices",
    excerpt:
      "Discover how to enhance backend automation with Spring AI and OpenGPT integration for intelligent workflows in distributed systems.",
    image: "/images/blog-ai.png",
    date: "2024-05-10",
    readTime: "7 min read",
    category: "AI & Java",
    slug: "spring-ai-opengpt-microservices",
  },
  {
    id: 2,
    title: "Migrating Spring Boot Applications from 2.7 to 3.3",
    excerpt:
      "A practical guide on upgrading legacy Spring Boot projects to the latest version, improving performance and ensuring compatibility.",
    image: "/images/blog-spring.png",
    date: "2024-04-18",
    readTime: "6 min read",
    category: "Spring Boot",
    slug: "spring-boot-upgrade-guide",
  },
  {
    id: 3,
    title: "Real-Time Dashboard Development with Java and MongoDB",
    excerpt:
      "Learn how to build interactive, real-time dashboards using Spring Boot, MongoDB, and REST APIs for enterprise-grade applications.",
    image: "/images/blog-dashboard.png",
    date: "2024-03-22",
    readTime: "9 min read",
    category: "Backend",
    slug: "real-time-dashboards-java-mongodb",
  },
]

export default function Blog() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <section id="blog" className="relative py-20 overflow-hidden section-bg-alt">
      {/* Dark Theme Background */}
      <div className="absolute inset-0 opacity-10 dark:block hidden">
        <div className="bg-black p-4 font-mono text-green-400 text-xs">
          <div className="mb-2">$ npm install spring-boot-starter</div>
          <div className="mb-2">$ mvn clean install</div>
          <div className="mb-2">$ java -jar application.jar</div>
          <div className="mb-2">$ docker build -t my-app .</div>
          <div className="mb-2">$ kubectl apply -f deployment.yaml</div>
          <div className="mb-2">$ git commit -m "feat: add new feature"</div>
          <div className="mb-2">$ git push origin main</div>
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

      {/* Floating Code Snippets - Dark Theme Only */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none dark:block hidden">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-blue-400/20 font-mono text-xs bg-gray-800/20 p-2 rounded"
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 6 + i * 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            style={{
              left: `${20 + i * 20}%`,
              top: `${10 + i * 20}%`,
            }}
          >
            {["@Service", "@RestController", "@Autowired", "@Entity"][i]}
          </motion.div>
        ))}
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
            Latest Articles
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Thoughts, tutorials, and insights about web development, backend architecture, and AI integrations.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-card backdrop-blur-sm border border-border rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:bg-accent transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  width={500}
                  height={300}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center text-sm text-muted-foreground mb-3">
                  <Calendar size={16} className="mr-2" />
                  <span className="mr-4">{formatDate(post.date)}</span>
                  <Clock size={16} className="mr-2" />
                  <span>{post.readTime}</span>
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-blue-400 transition-colors line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>

                <Button variant="ghost" className="group/btn p-0 h-auto text-blue-400 hover:text-blue-300">
                  Read More
                  <ArrowRight size={16} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
          >
            View All Articles
            <ArrowRight size={20} className="ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
