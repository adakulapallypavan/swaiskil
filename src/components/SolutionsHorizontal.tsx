import { motion } from "motion/react";
import { GraduationCap, Lightbulb, Rocket, MessageSquare, Building2, Users2, BarChart3, Shield } from "lucide-react";

export function SolutionsHorizontal() {

  const solutions = [
    {
      icon: GraduationCap,
      title: "AI-Enabled LMS",
      subtitle: "Personalized Learning Platform",
      description: "Intelligent learning management systems offering personalized learning experiences for Sustainable AI with adaptive content delivery and real-time analytics.",
      features: [
        "Personalized Learning Paths",
        "Real-time Progress Tracking",
        "AI-Powered Recommendations",
        "Interactive Assessments",
        "Adaptive Content Delivery",
        "Gamification & Rewards"
      ],
      color: "from-blue-500 to-cyan-500",
      stats: { number: "10K+", label: "Active Learners" }
    },
    {
      icon: Lightbulb,
      title: "Consulting Services",
      subtitle: "Strategic Technology Advisory",
      description: "Expert guidance to navigate AI adoption, digital transformation, and innovation with proven methodologies and best practices.",
      features: [
        "Technology Roadmap Development",
        "AI Strategy & Planning",
        "Digital Transformation",
        "Innovation Workshops",
        "Change Management Support",
        "ROI Optimization"
      ],
      color: "from-purple-500 to-pink-500",
      stats: { number: "20+", label: "Clients Served" }
    },
    {
      icon: Rocket,
      title: "Training Programs",
      subtitle: "Comprehensive Skill Development",
      description: "Industry-focused training in AI, ML, cybersecurity, blockchain with hands-on projects and expert mentorship for career growth.",
      features: [
        "Hands-on Project Work",
        "Industry Expert Mentors",
        "Professional Certifications",
        "Job Placement Assistance",
        "Live Capstone Projects",
        "Career Counseling"
      ],
      color: "from-orange-500 to-red-500",
      stats: { number: "50+", label: "Courses Available" }
    },
    {
      icon: MessageSquare,
      title: "Custom AI Solutions",
      subtitle: "Tailored Technology Development",
      description: "Bespoke AI and ML solutions designed to meet unique business needs with end-to-end implementation and continuous support.",
      features: [
        "Custom AI Model Development",
        "Industry-Specific Solutions",
        "Seamless System Integration",
        "Ongoing Maintenance & Updates",
        "Performance Optimization",
        "24/7 Technical Support"
      ],
      color: "from-green-500 to-emerald-500",
      stats: { number: "95%", label: "Client Satisfaction" }
    },
    {
      icon: Building2,
      title: "Enterprise Solutions",
      subtitle: "Large-Scale AI Implementation",
      description: "Enterprise-grade AI solutions with scalable architecture, security compliance, and seamless integration with existing systems.",
      features: [
        "Scalable Architecture Design",
        "Enterprise Security Compliance",
        "Legacy System Integration",
        "Multi-tenant Solutions",
        "Cloud & On-premise Options",
        "Dedicated Account Manager"
      ],
      color: "from-indigo-500 to-blue-500",
      stats: { number: "20+", label: "Enterprise Clients" }
    },
    {
      icon: Users2,
      title: "Team Augmentation",
      subtitle: "Expert Talent On-Demand",
      description: "Scale your team with our AI/ML experts, data scientists, and engineers for short-term projects or long-term partnerships.",
      features: [
        "Pre-vetted AI Experts",
        "Flexible Engagement Models",
        "Quick Team Ramp-up",
        "Domain Specialists Available",
        "Seamless Collaboration",
        "Knowledge Transfer Programs"
      ],
      color: "from-teal-500 to-green-500",
      stats: { number: "200+", label: "Experts Network" }
    },
    {
      icon: BarChart3,
      title: "Analytics & Insights",
      subtitle: "Data-Driven Decision Making",
      description: "Advanced analytics solutions with AI-powered insights, predictive modeling, and comprehensive business intelligence dashboards.",
      features: [
        "Predictive Analytics",
        "Business Intelligence Dashboards",
        "Real-time Data Processing",
        "Custom Reporting Solutions",
        "Data Visualization",
        "Automated Insights Generation"
      ],
      color: "from-yellow-500 to-orange-500",
      stats: { number: "1M+", label: "Data Points Analyzed" }
    },
    {
      icon: Shield,
      title: "AI Security & Compliance",
      subtitle: "Secure & Compliant AI",
      description: "Ensure your AI systems are secure, ethical, and compliant with industry regulations and data privacy standards.",
      features: [
        "AI Model Security Audits",
        "GDPR & Compliance Support",
        "Ethical AI Implementation",
        "Bias Detection & Mitigation",
        "Data Privacy Protection",
        "Regular Security Updates"
      ],
      color: "from-red-500 to-pink-500",
      stats: { number: "100%", label: "Compliance Rate" }
    },
  ];

  return (
    <section
      id="solutions"
      className="relative py-32 overflow-hidden bg-black"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
      
      {/* Animated Background Gradients */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 100, 0],
          y: [0, 50, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          x: [0, -100, 0],
          y: [0, -50, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:100px_100px]" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl lg:text-7xl mb-4">
              Our{" "}
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Solutions
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive AI-powered services designed to transform your business and empower your team with cutting-edge technology.
            </p>
          </motion.div>
        </div>

        {/* Grid Container */}
        <div className="grid md:grid-cols-2 gap-6 max-w-7xl mx-auto">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-8 h-full relative overflow-hidden hover:border-white/20 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 flex flex-col">
                  {/* Gradient Background on Hover */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${solution.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  />

                  {/* Corner Accent */}
                  <div className="absolute top-0 right-0 w-32 h-32 overflow-hidden opacity-30">
                    <motion.div
                      className={`absolute -top-16 -right-16 w-32 h-32 bg-gradient-to-br ${solution.color} rounded-full blur-xl`}
                      animate={{
                        scale: [1, 1.3, 1],
                        rotate: [0, 90, 0],
                      }}
                      transition={{ duration: 8, repeat: Infinity }}
                    />
                  </div>

                  <div className="relative z-10">
                    {/* Header Row */}
                    <div className="flex items-start justify-between mb-5">
                      <motion.div
                        className={`w-16 h-16 bg-gradient-to-br ${solution.color} rounded-2xl flex items-center justify-center shadow-lg shadow-black/20`}
                        whileHover={{ 
                          rotate: [0, -10, 10, -10, 0],
                          scale: 1.1 
                        }}
                        transition={{ duration: 0.5 }}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </motion.div>

                      {/* Stat Badge */}
                      <div className="text-right bg-white/5 backdrop-blur-sm rounded-xl px-3 py-2 border border-white/10">
                        <div className={`text-xl md:text-2xl bg-gradient-to-r ${solution.color} bg-clip-text text-transparent`}>
                          {solution.stats.number}
                        </div>
                        <div className="text-xs text-gray-500">{solution.stats.label}</div>
                      </div>
                    </div>

                    {/* Title & Subtitle */}
                    <div className="mb-4">
                      <h3 className="text-2xl md:text-3xl text-white mb-1">
                        {solution.title}
                      </h3>
                      <p className={`text-sm bg-gradient-to-r ${solution.color} bg-clip-text text-transparent`}>
                        {solution.subtitle}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-gray-400 text-sm leading-relaxed mb-5 flex-shrink-0">
                      {solution.description}
                    </p>

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 flex-grow">
                      {solution.features.map((feature, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.03 }}
                          viewport={{ once: true }}
                          className="flex items-start gap-2 group/item"
                        >
                          <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${solution.color} mt-1.5 flex-shrink-0 group-hover/item:scale-150 transition-transform`} />
                          <span className="text-xs text-gray-300 group-hover/item:text-white transition-colors">
                            {feature}
                          </span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Bottom Accent Line */}
                    <motion.div
                      className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${solution.color}`}
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                      style={{ transformOrigin: "left" }}
                    />
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
