import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "motion/react";
import { Brain, Shield, Network, Database, Code, Leaf } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function TechnologiesShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const technologies = [
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Master neural networks, deep learning, and practical AI applications",
      image: "https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjA2NTc3NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      topics: ["Neural Networks", "Deep Learning", "NLP", "Computer Vision"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Network,
      title: "Deep Learning",
      description: "Advanced neural architectures, CNNs, RNNs, and transformers",
      image: "https://images.unsplash.com/photo-1717501218456-c4789b65fc21?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWNoaW5lJTIwbGVhcm5pbmclMjBuZXVyYWwlMjBuZXR3b3JrfGVufDF8fHx8MTc2MDY4NjA0MXww&ixlib=rb-4.1.0&q=80&w=1080",
      topics: ["CNNs", "RNNs", "GANs", "Transformers"],
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Comprehensive training in threat detection and secure systems",
      image: "https://images.unsplash.com/photo-1603985529862-9e12198c9a60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5JTIwcHJvdGVjdGlvbnxlbnwxfHx8fDE3NjA2NjI3NjR8MA&ixlib=rb-4.1.0&q=80&w=1080",
      topics: ["Ethical Hacking", "Network Security", "Threat Intelligence"],
      color: "from-red-500 to-orange-500",
    },
    {
      icon: Database,
      title: "Blockchain",
      description: "Smart contracts, DeFi, and decentralized applications",
      image: "https://images.unsplash.com/photo-1666816943035-15c29931e975?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibG9ja2NoYWluJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjA2MzEwNjB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      topics: ["Smart Contracts", "Ethereum", "DeFi", "Web3"],
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: Code,
      title: "Natural Language Processing",
      description: "Advanced NLP, sentiment analysis, and language models",
      image: "https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjA2NTc3NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      topics: ["Text Processing", "Sentiment Analysis", "Chatbots"],
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Leaf,
      title: "Sustainable AI",
      description: "Energy-efficient algorithms and green computing practices",
      image: "https://images.unsplash.com/photo-1756802138007-13cdc180cc8d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMHRlY2hub2xvZ3klMjBncmVlbnxlbnwxfHx8fDE3NjA2Njc0NTh8MA&ixlib=rb-4.1.0&q=80&w=1080",
      topics: ["Green AI", "Energy Efficiency", "Sustainable Systems"],
      color: "from-teal-500 to-green-500",
    },
  ];

  return (
    <section
      id="technologies"
      ref={containerRef}
      className="relative py-32 overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 left-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
            scale: [1.2, 1, 1.2],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
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
            Technology{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Training
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Master cutting-edge technologies with our comprehensive training programs
          </p>
        </motion.div>

        {/* Grid Layout - Consistent card sizes */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {technologies.map((tech, index) => (
            <TechCard key={index} tech={tech} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TechCard({ tech, index }: any) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const Icon = tech.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
      animate={isInView ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      whileHover={{ scale: 1.02, z: 50 }}
      className="group relative"
      style={{ transformStyle: "preserve-3d" }}
    >
      <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden h-full relative flex flex-col">
        {/* Image Background - Fixed height */}
        <div className="relative h-64 overflow-hidden flex-shrink-0">
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.6 }}
            className="h-full w-full"
          >
            <ImageWithFallback
              src={tech.image}
              alt={tech.title}
              className="w-full h-full object-cover"
            />
          </motion.div>
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

          {/* Animated Icon */}
          <motion.div
            className={`absolute top-6 left-6 w-16 h-16 bg-gradient-to-br ${tech.color} rounded-2xl flex items-center justify-center`}
            whileHover={{
              rotate: [0, -10, 10, -10, 0],
              scale: 1.1,
            }}
            transition={{ duration: 0.5 }}
          >
            <Icon className="w-8 h-8 text-white" />
          </motion.div>
        </div>

        {/* Content Section - Flexible height but consistent padding */}
        <div className="flex-1 p-6 flex flex-col min-h-[200px]">
          <h3 className="text-2xl md:text-3xl mb-2 text-white flex-shrink-0">{tech.title}</h3>
          <p className="text-gray-300 text-sm mb-4 flex-shrink-0">{tech.description}</p>

          {/* Topics Pills */}
          <div className="flex flex-wrap gap-2 flex-grow items-start">
            {tech.topics.map((topic: string, idx: number) => (
              <motion.span
                key={idx}
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5 + idx * 0.1 }}
                className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs text-gray-200"
              >
                {topic}
              </motion.span>
            ))}
          </div>

          {/* Hover Line Effect - Fixed at bottom */}
          <motion.div
            className={`mt-auto pt-4 h-1 bg-gradient-to-r ${tech.color} rounded-full`}
            initial={{ width: 0 }}
            whileHover={{ width: "100%" }}
            transition={{ duration: 0.3 }}
          />
        </div>

        {/* Shine Effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none"
          initial={{ x: "-100%" }}
          whileHover={{ x: "100%" }}
          transition={{ duration: 0.8 }}
        />
      </div>
    </motion.div>
  );
}
