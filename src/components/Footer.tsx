import { motion } from "motion/react";
import { Facebook, Twitter, Linkedin, Instagram, Youtube, Github } from "lucide-react";

export function Footer() {
  const footerLinks = {
    Company: [
      { label: "About Us", href: "#about" },
      { label: "Our Team", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Contact", href: "#contact" },
    ],
    Programs: [
      { label: "AI & Machine Learning", href: "#technologies" },
      { label: "Cybersecurity", href: "#technologies" },
      { label: "Blockchain", href: "#technologies" },
      { label: "Deep Learning", href: "#technologies" },
    ],
    Services: [
      { label: "Corporate Training", href: "#solutions" },
      { label: "Consulting", href: "#solutions" },
      { label: "Custom LMS", href: "#solutions" },
      { label: "Workshops", href: "#solutions" },
    ],
    Resources: [
      { label: "Blog", href: "#" },
      { label: "Case Studies", href: "#" },
      { label: "Whitepapers", href: "#" },
      { label: "Documentation", href: "#" },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook", color: "hover:text-blue-400" },
    { icon: Twitter, href: "#", label: "Twitter", color: "hover:text-sky-400" },
    { icon: Linkedin, href: "#", label: "LinkedIn", color: "hover:text-blue-500" },
    { icon: Instagram, href: "#", label: "Instagram", color: "hover:text-pink-400" },
    { icon: Youtube, href: "#", label: "YouTube", color: "hover:text-red-500" },
    { icon: Github, href: "#", label: "GitHub", color: "hover:text-purple-400" },
  ];

  return (
    <footer className="relative bg-black border-t border-white/5 overflow-hidden">
      {/* Border div - kept visible */}
      <div className="border-t border-white/5"></div>
      
      {/* Commented out footer content */}
      {/* 
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <motion.div
                  className="w-12 h-12 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-xl flex items-center justify-center relative overflow-hidden"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                >
                  <span className="text-white text-2xl relative z-10">S</span>
                </motion.div>
                <div className="flex flex-col">
                  <span className="tracking-tight text-white text-lg">
                    SWAISKIL TECHNOLOGIES
                  </span>
                  <span className="text-xs text-gray-400">Sway-AI-Skill</span>
                </div>
              </div>
              <p className="text-sm text-gray-400 mb-6 leading-relaxed">
                Empowering the future with sustainable AI solutions and world-class
                technology training programs. Join us in shaping tomorrow.
              </p>
              
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      aria-label={social.label}
                      className={`w-10 h-10 bg-white/5 backdrop-blur-xl border border-white/10 rounded-lg flex items-center justify-center text-gray-400 ${social.color} transition-all`}
                      whileHover={{ scale: 1.1, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Icon className="w-4 h-4" />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-white mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link, index) => (
                  <li key={index}>
                    <motion.a
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-white transition-colors inline-block relative group"
                      whileHover={{ x: 5 }}
                    >
                      {link.label}
                      <motion.div
                        className="absolute bottom-0 left-0 h-px bg-gradient-to-r from-blue-500 to-purple-500"
                        initial={{ width: 0 }}
                        whileHover={{ width: "100%" }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-white/5"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-500">
              © 2025 Swaiskil Technologies Pvt Ltd. All rights reserved.
            </p>
            <div className="flex space-x-6">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="text-sm text-gray-500 hover:text-white transition-colors relative group"
                  whileHover={{ y: -2 }}
                >
                  {item}
                  <motion.div
                    className="absolute bottom-0 left-0 h-px bg-gradient-to-r from-blue-500 to-purple-500"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
      */}
    </footer>
  );
}
