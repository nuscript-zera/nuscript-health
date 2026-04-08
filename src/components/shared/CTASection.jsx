import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTASection({ 
  title, 
  description, 
  primaryCTA, 
  secondaryCTA,
  variant = "gradient" 
}) {
  const variants = {
    gradient: "bg-gradient-to-br from-blue-50 via-white to-indigo-50 border border-gray-200",
    teal: "bg-gradient-to-br from-blue-600 to-indigo-600",
    dark: "bg-gray-100"
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={`relative overflow-hidden rounded-3xl ${variants[variant]} p-12 lg:p-16`}
        >
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-400/10 to-transparent" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl" />
          
          <div className="relative max-w-2xl">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight mb-4">
              {title}
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              {description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              {primaryCTA && (
                <a 
                  href={primaryCTA.href}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition-all hover:shadow-lg hover:shadow-blue-600/30 group"
                >
                  {primaryCTA.text}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              )}
              {secondaryCTA && (
                <a 
                  href={secondaryCTA.href}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gray-200 hover:bg-gray-300 text-slate-900 font-semibold rounded-full border border-gray-300 transition-all"
                >
                  {secondaryCTA.text}
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}