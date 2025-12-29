import { motion } from "motion/react";
import { AlertCircle, BookOpen, Briefcase, TrendingUp } from "lucide-react";

export function Challenges() {
  const challenges = [
    {
      icon: TrendingUp,
      title: "AI-Powered Sustainability Gap",
      description: "The discrepancy between AI's potential to drive sustainability solutions and actual implementation in real-world sustainability efforts.",
      color: "from-green-500 to-emerald-600",
    },
    {
      icon: BookOpen,
      title: "Skills Gap",
      description: "Rapid technological advancements have outpaced workforce capabilities, creating a critical need for upskilling and reskilling programs.",
      color: "from-blue-500 to-cyan-600",
    },
    {
      icon: AlertCircle,
      title: "Knowledge Gap",
      description: "Corporations and government entities struggle to adopt and effectively utilize advanced technologies in their operations.",
      color: "from-purple-500 to-pink-600",
    },
    {
      icon: Briefcase,
      title: "Need for Customized Solutions",
      description: "Generic software products fail to meet specific industry needs, necessitating tailored solutions for different sectors.",
      color: "from-orange-500 to-red-600",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl mb-6">
              Challenges We{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Address
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              We tackle critical industry challenges and emerging technology gaps
              to help organizations thrive in the digital age.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {challenges.map((challenge, index) => {
            const Icon = challenge.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 h-full border border-gray-200">
                  <div className={`w-16 h-16 bg-gradient-to-br ${challenge.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl mb-4">{challenge.title}</h3>
                  <p className="text-gray-600 text-lg">{challenge.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
