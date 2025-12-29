import { motion } from "motion/react";
import { Award, Users, Zap, Target, Clock, Shield } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Differentiators() {
  const features = [
    {
      icon: Zap,
      title: "Innovative Products",
      description: "AI-enabled LMS with personalized learning experiences and adaptive content delivery.",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Highly skilled workforce with deep expertise in AI, ML, and emerging technologies.",
    },
    {
      icon: Target,
      title: "Custom Solutions",
      description: "Tailored services to meet unique business needs and industry-specific requirements.",
    },
    {
      icon: Award,
      title: "Industry Certified",
      description: "Recognized certification programs that add value to your professional profile.",
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock assistance and mentorship for all our learners and clients.",
    },
    {
      icon: Shield,
      title: "Quality Standards",
      description: "World-class training aligned with industry standards and best practices.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl mb-6">
              Why Choose{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Swaiskil?
              </span>
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              We differentiate ourselves through innovation, expertise, and a
              commitment to excellence that empowers individuals and organizations
              to thrive in a technology-driven world.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
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
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="mb-2">{feature.title}</h3>
                        <p className="text-sm text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1690264421892-46e3af5c3455?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMG9mZmljZXxlbnwxfHx8fDE3NjA2MTQ3Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Team Collaboration"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent"></div>
            </div>

            {/* Stats Overlay */}
            <div className="absolute -bottom-8 -left-8 right-8">
              <div className="bg-white rounded-2xl shadow-2xl p-6">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-3xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      98%
                    </div>
                    <div className="text-xs text-gray-600 mt-1">Satisfaction Rate</div>
                  </div>
                  <div>
                    <div className="text-3xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      15+
                    </div>
                    <div className="text-xs text-gray-600 mt-1">Years Experience</div>
                  </div>
                  <div>
                    <div className="text-3xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      500+
                    </div>
                    <div className="text-xs text-gray-600 mt-1">Students Trained</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
