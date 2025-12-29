import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { AlertCircle, BookOpen, Briefcase, TrendingUp } from "lucide-react";

export function ChallengesScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const challenges = [
    {
      icon: TrendingUp,
      title: "AI-Powered Sustainability Gap",
      description: "The discrepancy between AI's potential to drive sustainability and actual implementation.",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: BookOpen,
      title: "Skills Gap",
      description: "Technological advancements have outpaced workforce capabilities globally.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: AlertCircle,
      title: "Knowledge Gap",
      description: "Organizations struggle to adopt and utilize advanced technologies effectively.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Briefcase,
      title: "Customization Needs",
      description: "Generic solutions fail to meet specific industry requirements.",
      color: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section ref={containerRef} className="relative py-32 overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header with Reveal */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, margin: "-200px" }}
          className="text-center mb-20"
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl mb-6"
          >
            Challenges We{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Solve
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            Tackling critical industry challenges with innovative AI solutions
          </motion.p>
        </motion.div>

        {/* Cards with Scroll-based Animations */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {challenges.map((challenge, index) => {
            const Icon = challenge.icon;
            const cardRef = useRef<HTMLDivElement>(null);
            const { scrollYProgress: cardProgress } = useScroll({
              target: cardRef,
              offset: ["start end", "end start"],
            });

            const y = useTransform(
              cardProgress,
              [0, 0.5, 1],
              [100, 0, -100]
            );
            const opacity = useTransform(
              cardProgress,
              [0, 0.3, 0.7, 1],
              [0, 1, 1, 0]
            );
            const scale = useTransform(
              cardProgress,
              [0, 0.3, 0.7, 1],
              [0.8, 1, 1, 0.8]
            );
            const rotate = useTransform(
              cardProgress,
              [0, 0.5, 1],
              [-5, 0, 5]
            );

            return (
              <motion.div
                key={index}
                ref={cardRef}
                style={{ y, opacity, scale, rotate }}
                whileHover={{ scale: 1.05, rotate: 0 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="group relative"
              >
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 h-full relative overflow-hidden">
                  {/* Gradient Background */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${challenge.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                  />

                  {/* Animated Border */}
                  <motion.div
                    className="absolute inset-0 rounded-3xl"
                    style={{
                      background: `linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.5), transparent)`,
                    }}
                    animate={{
                      x: ["-200%", "200%"],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />

                  <div className="relative z-10">
                    {/* Icon with 3D Effect */}
                    <motion.div
                      className={`w-20 h-20 bg-gradient-to-br ${challenge.color} rounded-2xl flex items-center justify-center mb-6`}
                      whileHover={{
                        rotateY: 180,
                        scale: 1.1,
                      }}
                      transition={{ duration: 0.6 }}
                      style={{ transformStyle: "preserve-3d" }}
                    >
                      <Icon className="w-10 h-10 text-white" />
                    </motion.div>

                    <h3 className="text-2xl md:text-3xl mb-4 text-white">
                      {challenge.title}
                    </h3>
                    <p className="text-gray-400 text-lg leading-relaxed">
                      {challenge.description}
                    </p>

                    {/* Hover Arrow */}
                    <motion.div
                      initial={{ x: 0, opacity: 0 }}
                      whileHover={{ x: 10, opacity: 1 }}
                      className="mt-6 flex items-center text-blue-400"
                    >
                      <span className="text-sm">Learn more</span>
                      <svg
                        className="w-4 h-4 ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
