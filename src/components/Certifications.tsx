import { motion } from "motion/react";
import cmmiLogo from "../assets/cmmi maturity.png";
import iafLogo from "../assets/iaf.webp";
import dpttLogo from "../assets/dptt.webp";
import msmeLogo from "../assets/msme.webp";

const certifications = [
  {
    id: 1,
    name: "CMMI Maturity Level 3",
    certNo: "ECI/2411/0710",
    logo: cmmiLogo,
    accent: "#3b82f6",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    name: "ISO/IEC 27001:2022",
    certNo: "IN241123021",
    logo: iafLogo,
    accent: "#8b5cf6",
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 3,
    name: "DPIIT Certificate",
    certNo: "DIPP162658",
    logo: dpttLogo,
    accent: "#f97316",
    color: "from-orange-500 to-red-500",
  },
  {
    id: 4,
    name: "MSME Certificate",
    certNo: "UDYAM-DL-08-0069895",
    logo: msmeLogo,
    accent: "#10b981",
    color: "from-green-500 to-emerald-500",
  },
];

export function Certifications() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background glow — matches other sections */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.08)_0%,transparent_70%)]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header — matches DifferentiatorsSticky / TechnologiesShowcase pattern */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl mb-6">
            Globally{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Recognised
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Our delivery is backed by globally recognised certifications, assuring quality,
            security, and reliability for mission-critical deployments.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 flex flex-col items-center text-center relative overflow-hidden">
                {/* Gradient bg on hover */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />

                {/* Top accent line */}
                <div
                  className="absolute top-0 left-10 right-10 h-[2px] rounded-b-full opacity-40 group-hover:opacity-90 transition-opacity duration-300"
                  style={{ background: `linear-gradient(90deg, transparent, ${cert.accent}, transparent)` }}
                />

                {/* Logo — fixed 80×80 box so all cards align */}
                <div className="relative z-10 w-20 h-20 flex items-center justify-center mb-5 mt-1 flex-shrink-0">
                  <img
                    src={cert.logo}
                    alt={cert.name}
                    className="w-full h-full object-contain drop-shadow-lg"
                  />
                </div>

                {/* Cert name — fixed two-line min-height so names of different lengths don't shift the accent bar */}
                <h3 className="text-base text-white relative z-10 leading-snug min-h-[2.8rem] flex items-center justify-center">
                  {cert.name}
                </h3>

                {/* Accent bar */}
                <div
                  className="w-8 h-[2px] rounded-full my-4 relative z-10 flex-shrink-0"
                  style={{ background: cert.accent }}
                />

                {/* Cert number */}
                <div className="relative z-10 w-full border-t border-white/10 pt-4 flex-shrink-0">
                  <p className="text-white/30 text-[10px] uppercase tracking-widest mb-1">Certificate No</p>
                  <p className="text-white/60 text-xs font-mono tracking-wider break-all">
                    {cert.certNo}
                  </p>
                </div>

                {/* Shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.8 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
