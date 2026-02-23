import { ReactLenis } from "lenis/react";
import { useTransform, motion, useScroll } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    title: "Assistant Supervisor",
    company: "Forever Living Products",
    period: "Feb 2023 - Jul 2024",
    types: "Full Time",
    address: "Unit No. 103, Ackruti Star, MIDC, Andheri East, Mumbai 400093",
    description:
      "Worked as an Assistant Supervisor in a dynamic sales environment while pursuing my engineering degree, gaining valuable real-world business experience.",
    responsibilities: [
      "Assisted in managing daily sales operations and team performance",
      "Guided and motivated team members to achieve sales targets",
      "Handled customer interactions and relationship management",
      "Supported implementation of sales strategies",
      "Coordinated team workflow and communication",
      "Developed leadership and communication skills",
      "Learned business operations and client handling",
      "Balanced academic and professional responsibilities",
    ],
    logo: "/logos/Forever.png",
    color: "#06b6d4",
  },
  {
    title: "Python Developer",
    company: "Pinnacle Lab",
    period: "may-2025  Aug-2025",
    types: " internship",
    address:
      "Flat No. 102, RK Arcade, Madhura Nagar, Ameerpet, Hyderabad - 500038",

    description:
      "Built responsive user interfaces using React, Tailwind CSS, and modern frontend tools with focus on performance.",

    responsibilities: [
      "Developed and executed Python scripts to automate tasks and improve workflow efficiency",
      "Utilized core Python libraries and functions to build clean, optimized, and scalable solutions",
      "Worked on real-world project modules, applying object-oriented programming concepts",
      "Gained hands-on experience with data handling, file operations, and debugging techniques",
      "Assisted in developing and improving project features based on functional requirements",
      "Collaborated with mentors and team members to understand industry-level development practices",
      "Improved problem-solving skills by implementing logical and efficient coding solutions",
    ],
    logo: "/logos/pinnacle.jpg",
    color: "#3b82f6",
  },
  {
    title: "Frontend Developer",
    company: "Gameonix Esports & Gaming",
    period: "May-2025 - Aug-2025",
    types: " internship",
    description:
      "Worked as a Frontend Developer Intern at Gameonix Esports & Gaming, where I was responsible for developing and maintaining responsive, user-friendly web interfaces.",
    responsibilities: [
      "Designed and developed responsive and interactive web interfaces using modern frontend technologies",
      "Improved UI/UX to enhance user engagement and overall website experience",
      "Optimized frontend performance and ensured cross-browser compatibility",
      "Followed industry best practices for scalable and maintainable frontend development",
      "Collaborated with team members to implement new features and improvements",
    ],
    logo: "/logos/gameonix.avif",
    color: "#8b5cf6",
  },
  {
    title: "MERN Stack Developer Trainee",
    company: "Euphoria GenX",
    period: "2024",
    address: "Kolkata, West Bengal, India",
    description:
      "Completed intensive Industrial Training in MERN Stack Development, gaining hands-on experience in building full-stack web applications using modern technologies and industry best practices.",
    responsibilities: [
      "Developed full-stack web applications using MongoDB, Express.js, React.js, and Node.js",
      "Built responsive and dynamic user interfaces using React and Tailwind CSS",
      "Created RESTful APIs using Node.js and Express.js",
      "Worked with MongoDB database for storing and managing application data",
      "Implemented CRUD operations for real-world application features",
      "Learned authentication systems and frontend-backend integration",
      "Followed industry coding standards and scalable project structure",
      "Gained real-world experience in modern full-stack development workflow",
    ],
    logo: "/logos/euphoria_genx_logo.jpg",
    color: "#9333ea",
  },
];

export default function ExperienceSection() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });
  return (
    <ReactLenis root>
      <main ref={container} className="bg-[#04081A] text-white">
        {/* HEADER */}
        <section className="pt-28 pb-16 text-center">
          <h2 className="text-6xl font-bold bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
            Professional Journey
          </h2>
          <p className="text-gray-400 mt-4 text-lg">
            Transforming ideas into digital reality
          </p>
        </section>
        {/* CARDS */}
        {experiences.map((exp, i) => {
          const targetScale = 1 - (experiences.length - i) * 0.05;
          return (
            <ExperienceCard
              key={i}
              {...exp}
              progress={scrollYProgress}
              range={[i * 0.25, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </main>
    </ReactLenis>
  );
}

function ExperienceCard({
  title,
  company,
  address,
  period,
  description,
  responsibilities,
  logo,
  color,
  progress,
  range,
  targetScale,
}) {
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div className="h-screen flex items-center justify-center sticky top-0">
      <motion.div
        style={{ scale }}
        whileHover={{
          y: -12,
          scale: 1.02,
          boxShadow: "0px 0px 50px rgba(59,130,246,0.3)",
        }}
        transition={{ duration: 0.4 }}
        className="w-[65%] min-h-[520px] bg-zinc-900 rounded-2xl shadow-2xl border border-gray-800 p-10"
      >
        <div className="flex items-start gap-6">
          {/* LOGO */}
          <div className="bg-gray-100 rounded-xl p-3 shadow-md flex items-center justify-center min-w-[70px] min-h-[70px]">
            <img
              src={logo}
              alt={company}
              className="h-16 w-16 object-contain"
            />
          </div>
          {/* TEXT */}
          <div>
            <h2 className="text-3xl font-bold" style={{ color }}>
              {title}
            </h2>
            <p className="text-gray-400 text-lg mt-1">{company}</p>
            {/* ✅ ADDRESS SHOW */}
            {address && (
              <p className="text-gray-500 text-sm mt-1 flex items-center gap-2">
                <span>📍</span>
                <span>{address}</span>
              </p>
            )}
            <p className="text-gray-500 text-sm mt-1">{period}</p>
          </div>
        </div>
        {/* DESCRIPTION */}
        <p className="text-gray-300 mt-6 text-base leading-relaxed">
          {description}
        </p>
        {/* RESPONSIBILITIES */}
        {responsibilities && (
          <div className="mt-6">
            <h4 className="text-sm text-gray-300 mb-3 font-semibold">
              Key Responsibilities & Achievements:
            </h4>
            <ul className="space-y-2">
              {responsibilities.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-gray-400 text-sm"
                >
                  <span style={{ color }} className="mt-[2px]">
                    ▹
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </motion.div>
    </div>
  );
}
