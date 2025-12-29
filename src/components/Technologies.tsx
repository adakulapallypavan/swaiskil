import { motion } from "motion/react";
import { Brain, Shield, Network, Database, Code, Leaf } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Badge } from "./ui/badge";

export function Technologies() {
  const technologies = [
    {
      icon: Brain,
      title: "Artificial Intelligence & Machine Learning",
      description: "Master the fundamentals and advanced concepts of AI and ML, including neural networks, deep learning, and practical applications.",
      image: "https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjA2NTc3NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      topics: ["Neural Networks", "Deep Learning", "NLP", "Computer Vision", "Reinforcement Learning"],
      duration: "12-16 weeks",
      level: "Beginner to Advanced",
    },
    {
      icon: Network,
      title: "Deep Learning & Neural Networks",
      description: "Deep dive into advanced neural network architectures, CNNs, RNNs, transformers, and state-of-the-art deep learning techniques.",
      image: "https://images.unsplash.com/photo-1717501218456-c4789b65fc21?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWNoaW5lJTIwbGVhcm5pbmclMjBuZXVyYWwlMjBuZXR3b3JrfGVufDF8fHx8MTc2MDY4NjA0MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      topics: ["CNNs", "RNNs", "GANs", "Transformers", "Model Optimization"],
      duration: "10-12 weeks",
      level: "Intermediate to Advanced",
    },
    {
      icon: Shield,
      title: "Cybersecurity & Ethical Hacking",
      description: "Comprehensive training in cybersecurity principles, threat detection, penetration testing, and secure system design.",
      image: "https://images.unsplash.com/photo-1603985529862-9e12198c9a60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5JTIwcHJvdGVjdGlvbnxlbnwxfHx8fDE3NjA2NjI3NjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      topics: ["Network Security", "Ethical Hacking", "Threat Intelligence", "Security Auditing", "Incident Response"],
      duration: "14-18 weeks",
      level: "Beginner to Advanced",
    },
    {
      icon: Database,
      title: "Blockchain Technology",
      description: "Learn blockchain fundamentals, smart contracts, DeFi, and build decentralized applications on various blockchain platforms.",
      image: "https://images.unsplash.com/photo-1666816943035-15c29931e975?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibG9ja2NoYWluJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjA2MzEwNjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      topics: ["Smart Contracts", "Ethereum", "DeFi", "NFTs", "Web3 Development"],
      duration: "8-10 weeks",
      level: "Beginner to Intermediate",
    },
    {
      icon: Code,
      title: "Natural Language Processing",
      description: "Advanced NLP techniques, sentiment analysis, language models, chatbots, and text generation using modern frameworks.",
      image: "https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjA2NTc3NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      topics: ["Text Processing", "Sentiment Analysis", "Language Models", "Named Entity Recognition", "Machine Translation"],
      duration: "10-12 weeks",
      level: "Intermediate to Advanced",
    },
    {
      icon: Leaf,
      title: "Sustainable AI & Green Computing",
      description: "Learn to develop AI solutions with environmental consciousness, energy-efficient algorithms, and sustainable technology practices.",
      image: "https://images.unsplash.com/photo-1756802138007-13cdc180cc8d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMHRlY2hub2xvZ3klMjBncmVlbnxlbnwxfHx8fDE3NjA2Njc0NTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      topics: ["Green AI", "Energy Efficiency", "Carbon Footprint", "Sustainable Systems", "ESG Technology"],
      duration: "6-8 weeks",
      level: "All Levels",
    },
  ];

  return (
    <section id="technologies" className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl mb-6">
              Technology{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Training Programs
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive courses designed by industry experts to help you master
              cutting-edge technologies and advance your career.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300 h-full border border-gray-200 hover:-translate-y-1">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <ImageWithFallback
                      src={tech.image}
                      alt={tech.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center">
                        <Icon className="w-6 h-6 text-blue-600" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl mb-3">{tech.title}</h3>
                    <p className="text-gray-600 mb-4 text-sm">{tech.description}</p>

                    {/* Topics */}
                    <div className="mb-4 flex flex-wrap gap-2">
                      {tech.topics.slice(0, 3).map((topic, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {topic}
                        </Badge>
                      ))}
                      {tech.topics.length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{tech.topics.length - 3} more
                        </Badge>
                      )}
                    </div>

                    {/* Meta Info */}
                    <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t border-gray-200">
                      <span>{tech.duration}</span>
                      <span>{tech.level}</span>
                    </div>
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
