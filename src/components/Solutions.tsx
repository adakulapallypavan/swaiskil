import { motion } from "motion/react";
import { GraduationCap, Lightbulb, MessageSquare, Rocket } from "lucide-react";
import { Button } from "./ui/button";

export function Solutions() {
  const solutions = [
    {
      icon: GraduationCap,
      title: "AI-Enabled LMS",
      description: "Intelligent learning management systems offering personalized learning experiences for Sustainable AI with adaptive content delivery.",
      features: [
        "Personalized Learning Paths",
        "Real-time Progress Tracking",
        "AI-Powered Content Recommendations",
        "Interactive Assessments",
      ],
      color: "from-blue-500 to-cyan-600",
    },
    {
      icon: Lightbulb,
      title: "Consulting Services",
      description: "Strategic advisory services to aid organizations in adopting emerging technologies efficiently with expert guidance.",
      features: [
        "Technology Roadmap Development",
        "AI Strategy Planning",
        "Digital Transformation",
        "Innovation Workshops",
      ],
      color: "from-purple-500 to-pink-600",
    },
    {
      icon: Rocket,
      title: "Training Programs",
      description: "Comprehensive skilling in AI, ML, cybersecurity, blockchain and sustainability implementation using these technologies.",
      features: [
        "Hands-on Project Work",
        "Industry Expert Mentors",
        "Certification Programs",
        "Job Placement Support",
      ],
      color: "from-orange-500 to-red-600",
    },
    {
      icon: MessageSquare,
      title: "Custom Solutions",
      description: "Tailored AI and ML solutions designed to meet unique business needs and specific industry requirements.",
      features: [
        "Bespoke AI Models",
        "Industry-Specific Solutions",
        "Integration Support",
        "Ongoing Maintenance",
      ],
      color: "from-green-500 to-emerald-600",
    },
  ];

  return (
    <section id="solutions" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl mb-6">
              Our{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Solutions
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive services designed to bridge technology gaps and drive
              sustainable innovation across industries.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 h-full border border-gray-200 group hover:-translate-y-1">
                  <div className={`w-16 h-16 bg-gradient-to-br ${solution.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl mb-4">{solution.title}</h3>
                  <p className="text-gray-600 mb-6">{solution.description}</p>
                  
                  <ul className="space-y-3 mb-6">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="w-5 h-5 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center mt-0.5 flex-shrink-0">
                          <span className="text-white text-xs">✓</span>
                        </div>
                        <span className="ml-3 text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button variant="outline" className="w-full group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:text-white transition-all">
                    Learn More
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
