import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Award, Users, Zap, Target, Clock, Shield } from "lucide-react";

export function DifferentiatorsSticky() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const features = [
    {
      icon: Zap,
      title: "Innovative Products",
      description: "AI-enabled LMS with personalized learning experiences and adaptive content delivery",
      stat: "98%",
      statLabel: "Satisfaction",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Highly skilled workforce with deep expertise in AI, ML, and emerging technologies",
      stat: "50+",
      statLabel: "Experts",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Target,
      title: "Custom Solutions",
      description: "Tailored services to meet unique business needs and industry-specific requirements",
      stat: "100+",
      statLabel: "Projects",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: Award,
      title: "Industry Certified",
      description: "Recognized certification programs that add value to your professional profile",
      stat: "15+",
      statLabel: "Years",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock assistance and mentorship for all our learners and clients",
      stat: "24/7",
      statLabel: "Available",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: Shield,
      title: "Quality Standards",
      description: "World-class training aligned with industry standards and best practices",
      stat: "98%",
      statLabel: "Quality",
      color: "from-teal-500 to-cyan-500",
    },
  ];

  return (
    <section ref={containerRef} className="relative py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_0%,transparent_100%)]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl mb-6">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Swaiskil?
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We differentiate through innovation, expertise, and commitment to excellence
          </p>
        </motion.div>

        {/* Cards Grid with Stagger */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const cardRef = useRef<HTMLDivElement>(null);
            const { scrollYProgress: cardProgress } = useScroll({
              target: cardRef,
              offset: ["start end", "center center"],
            });

            const rotateX = useTransform(cardProgress, [0, 1], [15, 0]);
            const opacity = useTransform(cardProgress, [0, 0.5, 1], [0, 0.5, 1]);

            return (
              <motion.div
                key={index}
                ref={cardRef}
                style={{ opacity, rotateX }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ y: -10, rotateX: 0 }}
                className="group relative"
              >
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 h-full relative overflow-hidden">
                  {/* Gradient Background on Hover */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-20`}
                    transition={{ duration: 0.5 }}
                  />

                  {/* Animated Border */}
                  <div className="absolute inset-0 rounded-3xl">
                    <motion.div
                      className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100`}
                      style={{
                        background: `linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.5), transparent)`,
                      }}
                      animate={{
                        x: ["-200%", "200%"],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                  </div>

                  <div className="relative z-10">
                    {/* Icon and Stat */}
                    <div className="flex items-start justify-between mb-6">
                      <motion.div
                        className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center`}
                        whileHover={{
                          rotate: [0, -10, 10, -10, 0],
                          scale: 1.1,
                        }}
                        transition={{ duration: 0.5 }}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </motion.div>

                      <div className="text-right">
                        <div className={`text-3xl bg-gradient-to-r ${feature.color} bg-clip-text text-transparent`}>
                          {feature.stat}
                        </div>
                        <div className="text-xs text-gray-500">{feature.statLabel}</div>
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl mb-3 text-white">{feature.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {feature.description}
                    </p>

                    {/* Progress Bar */}
                    <motion.div
                      className="mt-6 h-1 bg-white/10 rounded-full overflow-hidden"
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <motion.div
                        className={`h-full bg-gradient-to-r ${feature.color}`}
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        transition={{ duration: 1.5, delay: index * 0.1 + 0.3 }}
                        viewport={{ once: true }}
                      />
                    </motion.div>
                  </div>

                  {/* Particle Effect */}
                  <div className="absolute inset-0 pointer-events-none">
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className={`absolute w-1 h-1 bg-gradient-to-r ${feature.color} rounded-full`}
                        initial={{
                          x: "50%",
                          y: "50%",
                          opacity: 0,
                        }}
                        whileHover={{
                          x: `${Math.random() * 100}%`,
                          y: `${Math.random() * 100}%`,
                          opacity: [0, 1, 0],
                        }}
                        transition={{
                          duration: 2,
                          delay: i * 0.2,
                          repeat: Infinity,
                        }}
                      />
                    ))}
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
