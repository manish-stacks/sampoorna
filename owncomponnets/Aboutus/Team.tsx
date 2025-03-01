"use client"
import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { FaLinkedinIn, FaTwitter } from "react-icons/fa"

interface TeamMember {
  name: string
  role: string
  image: string
  linkedin?: string
  twitter?: string
}

const teamMembers: TeamMember[] = [
  {
    name: "Amit Sharma",
    role: "CEO",
    image: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?w=500&auto=format&fit=crop&q=60",
    linkedin: "https://www.linkedin.com/in/amitsharma/",
    twitter: "https://twitter.com/amitsharma",
  },
  {
    name: "Priya Iyer",
    role: "CTO",
    image: "https://images.unsplash.com/photo-1564564244660-5d73c057f2d2?w=500&auto=format&fit=crop&q=60",
    linkedin: "https://www.linkedin.com/in/priyaiyer/",
    twitter: "https://twitter.com/priyaiyer",
  },
  {
    name: "Rahul Verma",
    role: "Marketing Lead",
    image: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=500&auto=format&fit=crop&q=60",
    linkedin: "https://www.linkedin.com/in/rahulverma/",
    twitter: "https://twitter.com/rahulverma",
  },
  {
    name: "Ananya Gupta",
    role: "Sales Director",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=500&auto=format&fit=crop&q=60",
    linkedin: "https://www.linkedin.com/in/ananyagupta/",
    twitter: "https://twitter.com/ananyagupta",
  },
]

const TeamSection = () => {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.1 })

  return (
    <section
      ref={containerRef}
      className="bg-gradient-to-b from-gray-900 to-black text-white py-24 px-4 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
        >
          Meet Our Visionary Team
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative"
            >
              <div className="relative h-80 w-full overflow-hidden rounded-lg">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-2xl font-semibold mb-1">{member.name}</h3>
                <p className="text-purple-400 mb-4">{member.role}</p>
                <div className="flex space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-600 p-2 rounded-full hover:bg-blue-700 transition-colors"
                    >
                      <FaLinkedinIn size={20} />
                    </a>
                  )}
                  {member.twitter && (
                    <a
                      href={member.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-cyan-500 p-2 rounded-full hover:bg-cyan-600 transition-colors"
                    >
                      <FaTwitter size={20} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
   
    </section>
  )
}

export default TeamSection

