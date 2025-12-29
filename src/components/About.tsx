import { motion } from "motion/react";
import { Target, Users, Zap, Shield } from "lucide-react";

export function About() {
  const features = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To empower individuals and organizations with AI-driven solutions that balance technological progress with environmental responsibility.",
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Committed to delivering excellence in every training program and consulting engagement, ensuring measurable outcomes and client satisfaction.",
    },
    {
      icon: Zap,
      title: "Innovation First",
      description: "Pioneering AI-enabled LMS and consulting services that adapt to the unique needs of each client and learner.",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Highly skilled professionals with deep expertise in AI, ML, cybersecurity, blockchain, and sustainable technology implementation.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl mb-6">
              About{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Swaiskil Technologies
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              Based in India, Swaiskil Technologies Pvt Ltd provides AI-powered
              innovative solutions for sustainable development. Our name combines
              "Sway" (influence, balance) and "Skill" (expertise, technology),
              symbolizing our expertise in using AI to balance technological
              progress with environmental responsibility.
            </p>
          </motion.div>
        </div>

        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 lg:p-12"
          >
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-2xl lg:text-3xl mb-4">स्वयम् (Swayam) - Self Empowerment</h3>
              <p className="text-lg text-gray-700">
                The Sanskrit word "Swayam" signifies "Self" and "Empowerment of
                the Self." With a focus on innovation and excellence, we empower
                individuals and organizations, ensuring they thrive in a
                technology-driven world through tailored skilling and consulting
                solutions.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
