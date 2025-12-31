import { FormEvent, useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, Send } from "lucide-react";

export function EnrollPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(event.currentTarget);
    const name = (formData.get("name") as string) || "";
    const email = (formData.get("email") as string) || "";
    const phone = (formData.get("phone") as string) || "";
    const subject = (formData.get("subject") as string) || "";
    const message = (formData.get("message") as string) || "";

    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone || "Not provided"}\nSubject: ${subject}\n\nMessage:\n${message}`
    );
    const emailSubject = encodeURIComponent(subject || "New Enrollment Request");

    window.location.href = `mailto:contact@carnotresearch.com?subject=${emailSubject}&body=${body}`;
    
    setTimeout(() => {
      event.currentTarget.reset();
      setIsSubmitting(false);
    }, 1000);
  };

  // Clean input styling without icons
  const inputBaseClasses = "w-full px-4 py-3.5 bg-white/15 border-2 border-white/30 rounded-lg text-white text-base placeholder:text-white/50 focus:border-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-400/40 focus:bg-white/20 transition-all duration-200 hover:border-white/40 hover:bg-white/18";
  
  const textareaClasses = "w-full px-4 py-3.5 bg-white/15 border-2 border-white/30 rounded-lg text-white text-base placeholder:text-white/50 focus:border-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-400/40 focus:bg-white/20 resize-none transition-all duration-200 hover:border-white/40 hover:bg-white/18";

  return (
    <section id="enroll" className="relative min-h-screen bg-gradient-to-br from-blue-600 via-purple-700 to-pink-600 overflow-hidden pt-24 pb-12 md:pt-32 md:pb-28 flex items-center">
      {/* grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px] opacity-60" />
      {/* glow accents */}
      <div className="absolute -left-24 top-10 w-80 h-80 bg-white/10 blur-3xl rounded-full" />
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-yellow-200/25 blur-3xl rounded-full" />

      <div className="container mx-auto px-4 sm:px-6 max-w-2xl relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl shadow-2xl p-8 md:p-10 lg:p-12"
        >
          {/* Form Header */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Enroll Now
            </h2>
            <p className="text-white/70 text-sm md:text-base">
              Complete the form below to get started
            </p>
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="space-y-2.5"
            >
              <label htmlFor="name" className="block text-sm font-semibold text-white mb-1.5">
                Full Name <span className="text-red-400 font-normal">*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className={inputBaseClasses}
                placeholder="John Doe"
                autoComplete="name"
              />
            </motion.div>

            {/* Email */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.35 }}
              className="space-y-2.5"
            >
              <label htmlFor="email" className="block text-sm font-semibold text-white mb-1.5">
                Email Address <span className="text-red-400 font-normal">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className={inputBaseClasses}
                placeholder="john.doe@example.com"
                autoComplete="email"
              />
            </motion.div>

            {/* Phone */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="space-y-2.5"
            >
              <label htmlFor="phone" className="block text-sm font-semibold text-white mb-1.5">
                Phone Number <span className="text-white/60 text-xs font-normal">(Optional)</span>
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                className={inputBaseClasses}
                placeholder="+91 8449710411"
                autoComplete="tel"
              />
            </motion.div>

            {/* Subject */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.45 }}
              className="space-y-2.5"
            >
              <label htmlFor="subject" className="block text-sm font-semibold text-white mb-1.5">
                Subject <span className="text-red-400 font-normal">*</span>
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                required
                className={inputBaseClasses}
                placeholder="Course enrollment inquiry"
              />
            </motion.div>

            {/* Message */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="space-y-2.5"
            >
              <label htmlFor="message" className="block text-sm font-semibold text-white mb-1.5">
                Message <span className="text-red-400 font-normal">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                required
                className={textareaClasses}
                placeholder="Tell us about your interest in our programs..."
              />
            </motion.div>

            {/* Submit Button */}
            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.6 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isSubmitting}
              className="w-full px-8 py-4 bg-gradient-to-r from-teal-500 via-teal-400 to-blue-500 text-white rounded-lg font-semibold text-base hover:from-teal-600 hover:via-teal-500 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-teal-500/25 flex items-center justify-center gap-2 group relative overflow-hidden mt-4 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />
              {isSubmitting ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                  />
                  <span className="relative z-10">Sending...</span>
                </>
              ) : (
                <>
                  <Send className="w-5 h-5 relative z-10" />
                  <span className="relative z-10">Submit Enrollment</span>
                  <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                </>
              )}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}