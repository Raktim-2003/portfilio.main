import React from "react";
import { Award, Calendar, BookOpen, Trophy } from "lucide-react";
import { motion } from "framer-motion";

export default function EducationSection() {
  const educationData = [
    {
      degree:
        "Bachelor of Technology (B.Tech) in Computer Science and Engineering",
      school: "Brainware University",
      logo: "/logos/brainware_logo.png",
      year: "2022 – 2026",
      achievements: [
        "CGPA: Pursuing",
        "Specialization: Computer Science and Engineering",
      ],
      skills: [
        "Data Structures",
        "Algorithms",
        "React",
        "Node.js",
        "MongoDB",
        "Express.js",
        "JavaScript",
        "Database Management",
      ],
      description:
        "Currently pursuing my Bachelor of Technology in Computer Science and Engineering. Gaining strong knowledge in software development, programming, and full-stack web development using the MERN stack.",
      highlights: [
        "Built full stack MERN applications",
        "Completed Industrial Training in MERN Stack",
        "Developed strong problem solving skills",
        "Learned REST API development",
        "Worked on real world projects",
      ],
    },
    {
      degree: "WEST BENGAL BOARD OF HIGHER SECONDARY EDUCATION (WBCHSE)",
      school: "Deulpara B.N Vidyanakitan",
      logo: "/logos/deulpara_logo.png",
      year: "2020 – 2022",
      achievements: ["Percentage: 89.76%", "Stream: Science"],
      skills: [
        "Mathematics",
        "Physics",
        "Chemistry",
        "Biology",
        "English",
        "Bengali",
      ],
      description:
        "Completed Higher Secondary Education with excellent academic performance. Built strong analytical and logical thinking skills which helped transition into Computer Science field.",
      highlights: [
        "Achieved 89.76%",
        "Strong Science foundation",
        "Improved logical thinking",
        "Developed problem solving ability",
      ],
    },
    {
      degree: "WEST BENGAL BOARD OF SECONDARY EDUCATION (WBBSE)",
      school: "Deulpara B.N Vidyanakitan",
      logo: "/logos/deulpara_logo.png",
      year: "2015 – 2020",
      achievements: ["Percentage: 79.76%"],
      skills: [
        "Mathematics",
        "Science",
        "Computer",
        "English",
        "Geography",
        "History",
      ],

      description:
        "Completed Secondary Education and developed strong academic base. This stage sparked my interest in Computer Science.",

      highlights: [
        "Built academic discipline",

        "Learned computer basics",

        "Developed learning mindset",
      ],
    },
  ];

  return (
    <section className="min-h-screen py-32 bg-[#04081A] relative overflow-hidden">
      {/* GRID BACKGROUND */}

      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(50,50,70,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(50,50,70,0.2)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      {/* FLOATING DOTS */}

      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400/20 rounded-full"
            animate={{
              y: [0, -40, 0],

              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 5 + i,

              repeat: Infinity,
            }}
            style={{
              left: `${Math.random() * 100}%`,

              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* HEADER */}

        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
            Educational Journey
          </h2>

          <p className="text-gray-400 mt-4">
            My academic foundation and technical growth
          </p>
        </motion.div>

        {/* CARDS */}

        <div className="grid md:grid-cols-2 gap-10">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{
                y: -10,

                scale: 1.03,

                boxShadow: "0px 0px 40px rgba(0,255,255,0.2)",
              }}
              className="bg-gray-900/60 border border-cyan-500/20 rounded-2xl p-8 backdrop-blur-xl"
            >
              {/* TOP */}

              <div className="flex gap-4 items-center">
                <img
                  src={edu.logo}
                  className="w-16 h-16 bg-white rounded-xl p-2"
                />

                <div>
                  <h3 className="text-xl font-bold text-white">{edu.degree}</h3>

                  <p className="text-gray-400 flex items-center gap-2">
                    <BookOpen size={16} />

                    {edu.school}
                  </p>

                  <p className="text-gray-500 flex items-center gap-2">
                    <Calendar size={16} />

                    {edu.year}
                  </p>
                </div>
              </div>

              {/* DESCRIPTION */}

              <p className="text-gray-300 mt-4 border-l-2 border-cyan-400 pl-4">
                {edu.description}
              </p>

              {/* ACHIEVEMENTS */}

              <div className="mt-4">
                <p className="text-white flex gap-2 items-center mb-2">
                  <Trophy size={18} />
                  Achievements
                </p>

                <div className="flex flex-wrap gap-2">
                  {edu.achievements.map((a, i) => (
                    <div
                      key={i}
                      className="bg-cyan-500/10 text-cyan-400 px-3 py-1 rounded-full text-sm flex gap-2 items-center"
                    >
                      <Award size={14} />

                      {a}
                    </div>
                  ))}
                </div>
              </div>

              {/* SKILLS */}

              <div className="mt-4 flex flex-wrap gap-2">
                {edu.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="bg-blue-500/10 text-blue-300 px-3 py-1 rounded-md text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* HIGHLIGHTS */}

              <div className="mt-4">
                <ul className="space-y-2">
                  {edu.highlights.map((h, i) => (
                    <li key={i} className="text-gray-400 text-sm">
                      ▹ {h}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
