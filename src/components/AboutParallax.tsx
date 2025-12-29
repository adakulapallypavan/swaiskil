import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "motion/react";
import { Shield, Target, Users, Zap } from "lucide-react";

export function AboutParallax() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.8]);

  const features = [
    {
      icon: Target,
      title: "Our Mission",
      description: "Balance technological progress with environmental responsibility",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Committed to delivering excellence in every engagement",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Zap,
      title: "Innovation First",
      description: "AI-enabled solutions that adapt to unique needs",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Deep expertise in AI, ML, and emerging technologies",
      color: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative py-20 md:py-24 min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Elements */}
      <motion.div
        style={{ y: y1 }}
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl"
      />

      <div className="container mx-auto px-6 relative z-10 flex flex-col">
        {/* Hero Section */}
        <motion.div
          style={{ opacity, scale }}
          className="max-w-4xl mx-auto text-center mb-16 md:mb-20"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-5xl md:text-7xl mb-6 md:mb-8">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Swaiskil Technologies
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              Inspired by <span className="text-blue-400">"Sway"</span> (influence, balance) 
              and <span className="text-purple-400">"Skill"</span> (expertise, technology).
            </p>
          </motion.div>
        </motion.div>

        {/* Empowering Organizations Section - Redesigned for better integration */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 md:mb-20"
        >
          <motion.div
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-10 lg:p-12 relative overflow-hidden max-w-5xl mx-auto"
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Subtle gradient overlay - reduced opacity for better integration */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl"
              animate={{
                backgroundPosition: ["0% 0%", "100% 100%"],
              }}
              transition={{ duration: 15, repeat: Infinity, repeatType: "reverse" }}
            />
            
            {/* Content with proper vertical centering */}
            <div className="relative z-10 text-center space-y-4 md:space-y-6">
              <h3 className="text-3xl md:text-4xl lg:text-5xl bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Empowering Organizations
              </h3>
              <p className="text-base md:text-lg text-gray-200 leading-relaxed max-w-3xl mx-auto">
                With a focus on innovation and excellence, we empower individuals 
                and organizations to thrive in a technology-driven world through 
                tailored skilling and consulting solutions.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Features Grid - Increased spacing for better separation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10 max-w-7xl mx-auto w-full">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <FeatureCard key={index} feature={feature} index={index} Icon={Icon} />
            );
          })}
        </div>

      </div>
    </section>
  );
}

function FeatureCard({ feature, index, Icon }: any) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, rotateX: -15 }}
      animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="group relative"
      style={{ transformStyle: "preserve-3d" }}
    >
      <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 h-full relative overflow-hidden">
        {/* Gradient Background on Hover */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
        />
        
        {/* Icon */}
        <motion.div
          className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-4 relative`}
          whileHover={{ rotate: 360, scale: 1.1 }}
          transition={{ duration: 0.6 }}
        >
          <Icon className="w-8 h-8 text-white" />
        </motion.div>

        {/* Content */}
        <h3 className="text-xl mb-3 text-white">{feature.title}</h3>
        <p className="text-gray-300 text-sm leading-relaxed">{feature.description}</p>

        {/* Shine Effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
          initial={{ x: "-100%" }}
          whileHover={{ x: "100%" }}
          transition={{ duration: 0.6 }}
        />
      </div>
    </motion.div>
  );
}
