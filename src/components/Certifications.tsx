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
  },
  {
    id: 2,
    name: "ISO/IEC 27001:2022",
    certNo: "IN241123021",
    logo: iafLogo,
    accent: "#8b5cf6",
  },
  {
    id: 3,
    name: "DPIIT Certificate",
    certNo: "DIPP162658",
    logo: dpttLogo,
    accent: "#f97316",
  },
  {
    id: 4,
    name: "MSME Certificate",
    certNo: "UDYAM-DL-08-0069895",
    logo: msmeLogo,
    accent: "#10b981",
  },
];

export function Certifications() {
  return (
    <section className="relative py-28 bg-[#0c0c0e]">
      <div className="max-w-7xl mx-auto px-8">

        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-60px" }}
        >
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-white/30 mb-4">
            Our Certifications
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Globally Recognised Standards
          </h2>
          <div className="w-12 h-0.5 bg-white/15 mx-auto mb-6" />
          <p className="text-white/40 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Our delivery is backed by globally recognised certifications, assuring quality,
            security, and reliability for mission-critical deployments.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true, margin: "-40px" }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group relative bg-white/[0.04] border border-white/10 rounded-2xl p-8 flex flex-col items-center text-center hover:border-white/20 hover:bg-white/[0.06] transition-all duration-300"
            >
              {/* Top accent line */}
              <div
                className="absolute top-0 left-8 right-8 h-[2px] rounded-b-full opacity-50 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(90deg, transparent, ${cert.accent}, transparent)` }}
              />

              {/* Logo */}
              <div className="w-28 h-28 flex items-center justify-center mb-6">
                <img
                  src={cert.logo}
                  alt={cert.name}
                  className="w-24 h-24 object-contain"
                />
              </div>

              {/* Cert name */}
              <h3 className="text-white font-semibold text-lg leading-snug mb-3">
                {cert.name}
              </h3>

              {/* Accent bar */}
              <div
                className="w-8 h-0.5 rounded-full mb-5"
                style={{ background: cert.accent }}
              />

              {/* Cert number */}
              <div className="mt-auto">
                <p className="text-white/30 text-xs mb-1.5">Certificate No</p>
                <p className="text-white/60 text-sm font-mono font-medium break-all">
                  {cert.certNo}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
