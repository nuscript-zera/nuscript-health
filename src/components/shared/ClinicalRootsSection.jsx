import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, Zap, Brain, CheckCircle } from "lucide-react";
import "@/globals.css";

export default function ClinicalRootsSection() {
  const timelineItems = [
    { 
      year: "2000", 
      label: "Clinical Documentation Roots", 
      desc: "Founding team establishes NuScript's foundation in medical transcription and high-fidelity clinical documentation services.",
      icon: Zap
    },
    { 
      year: "2023", 
      label: "RCM Systems & Expertise", 
      desc: "Expanded into full-scale Revenue Cycle Management, building deep operational expertise in specialty coding, billing, and denial mitigation.",
      icon: TrendingUp
    },
    { 
      year: "2025", 
      label: "The AI Transformation", 
      desc: "Began architecting proprietary AI engines, distilling 25 years of clinical and financial workflows into scalable, purpose-built software.",
      icon: Brain
    },
    { 
      year: "Today", 
      label: "The Zera™ Product Suite", 
      desc: "Zera Scribe and Zera RCM represent the next era of autonomous clinical and financial workflows with zero-friction.",
      icon: CheckCircle
    }
  ];

  return (
    <section className="relative py-24 lg:py-32 bg-gradient-to-b from-white via-blue-50/30 to-white overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-bl from-blue-400/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-indigo-400/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Eyebrow */}
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block text-sm font-semibold tracking-wider uppercase text-blue-600 mb-4"
          >
            OUR OPERATIONAL FOUNDATION
          </motion.span>

          {/* Title */}
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-6 max-w-3xl"
          >
            Deep Clinical & RCM Roots: The NuScript Story
          </motion.h2>

          {/* Subtitle */}
          <motion.h3 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-2xl sm:text-3xl font-bold text-teal-600 mb-10"
          >
            Built by Operators, Not Just Engineers
          </motion.h3>

          {/* Body Text */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-3xl space-y-6 mb-16"
          >
            <p className="text-lg text-slate-600 leading-relaxed">
              Zera wasn't built in a vacuum. It was forged from over 25 years of experience managing documentation and revenue cycle operations for specialties, ASCs, and health systems. We understand the friction of a denial queue because we've sat in them. We know the burden of after-hours charting because we've supported thousands of clinicians through it.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Our mission to build a <span className="font-semibold text-slate-900">Zero-friction Engine for Revenue Autonomy</span> is the direct result of seeing where traditional RCM fails. We combined our deep clinical roots with healthcare-tuned LLMs to create a platform that fits your existing Epic workflows instead of fighting them.
            </p>
          </motion.div>

          {/* Timeline */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 rounded-3xl border border-blue-200/50 p-12 lg:p-16 overflow-hidden">
              {/* Background accent */}
              <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-400/5 to-transparent rounded-3xl" />
              
              <div className="relative">
                <div className="text-center mb-14">
                  <h4 className="text-2xl font-bold text-slate-900 mb-3">The Evolution Timeline</h4>
                  <p className="text-lg text-slate-600">
                    From clinical documentation experts to an AI-led platform transforming healthcare operations
                  </p>
                </div>

                {/* Timeline Cards */}
                <div className="grid md:grid-cols-4 gap-4 lg:gap-6">
                  {timelineItems.map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                        className="group relative bg-white rounded-2xl p-6 border border-blue-200/50 hover:border-blue-400/50 hover:shadow-lg transition-all duration-300"
                      >
                        {/* Hover gradient background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                        
                        <div className="relative">
                          {/* Icon */}
                          <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center mb-4 group-hover:from-blue-200 group-hover:to-indigo-200 transition-all">
                            <IconComponent className="w-6 h-6 text-blue-600" />
                          </div>

                          {/* Year */}
                          <div className="text-xs font-semibold tracking-widest uppercase text-teal-600 mb-2">
                            {item.year}
                          </div>

                          {/* Label */}
                          <div className="font-semibold text-slate-900 mb-2 text-sm group-hover:text-blue-600 transition-colors">
                            {item.label}
                          </div>

                          {/* Description */}
                          <div className="text-xs text-slate-600 leading-relaxed">
                            {item.desc}
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}