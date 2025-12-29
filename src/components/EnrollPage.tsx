import { FormEvent } from "react";
import { motion } from "motion/react";

export function EnrollPage() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = (formData.get("name") as string) || "";
    const email = (formData.get("email") as string) || "";
    const phone = (formData.get("phone") as string) || "";
    const message = (formData.get("message") as string) || "";

    const subject = encodeURIComponent("New Enrollment Request");
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`
    );

    window.location.href = `mailto:contact@carnotresearch.com?subject=${subject}&body=${body}`;
    event.currentTarget.reset();
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-600 via-purple-700 to-pink-600 overflow-hidden pt-24 pb-12 md:pt-32 md:pb-28 md:flex md:items-center md:justify-center">
      {/* grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px] opacity-60" />
      {/* glow accents */}
      <div className="absolute -left-24 top-10 w-80 h-80 bg-white/10 blur-3xl rounded-full" />
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-yellow-200/25 blur-3xl rounded-full" />

      <div className="container mx-auto px-4 sm:px-6 max-w-5xl relative z-10 py-6 md:py-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl shadow-2xl p-6 sm:p-8 md:p-12"
        >
          <div className="text-center mb-8 md:mb-10">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-3">
              Enroll Now
            </h1>
            <p className="text-white/80 max-w-2xl mx-auto text-base sm:text-lg">
              Share your details and we’ll reach out from contact@carnotresearch.com.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-4 md:gap-6">
            <label className="flex flex-col gap-2">
              <span className="text-sm text-white/80">Name</span>
              <input
                name="name"
                required
                className="w-full rounded-xl px-4 py-3 bg-white/15 border border-white/20 text-white placeholder:text-white/60 focus:border-white focus:outline-none"
                placeholder="Your full name"
                autoComplete="name"
              />
            </label>
            <label className="flex flex-col gap-2">
              <span className="text-sm text-white/80">Email</span>
              <input
                type="email"
                name="email"
                required
                className="w-full rounded-xl px-4 py-3 bg-white/15 border border-white/20 text-white placeholder:text-white/60 focus:border-white focus:outline-none"
                placeholder="you@example.com"
                autoComplete="email"
              />
            </label>
            <label className="flex flex-col gap-2">
              <span className="text-sm text-white/80">Phone</span>
              <input
                type="tel"
                name="phone"
                className="w-full rounded-xl px-4 py-3 bg-white/15 border border-white/20 text-white placeholder:text-white/60 focus:border-white focus:outline-none"
                placeholder="+91 8449710411"
                autoComplete="tel"
              />
            </label>
            <label className="flex flex-col gap-2 md:col-span-2">
              <span className="text-sm text-white/80">Message</span>
              <textarea
                name="message"
                rows={4}
                className="w-full rounded-xl px-4 py-3 bg-white/15 border border-white/20 text-white placeholder:text-white/60 focus:border-white focus:outline-none resize-none"
                placeholder="Tell us what you want to learn"
              />
            </label>
            <div className="md:col-span-2 flex justify-center md:justify-end">
              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3 bg-white text-black rounded-full font-semibold hover:scale-[1.03] transition-transform shadow-lg text-center"
              >
                Send Message
              </button>
            </div>
          </form>

          {/* removed contact cards per request */}
        </motion.div>
      </div>
    </section>
  );
}

