import React from "react";
import { motion } from "framer-motion";

export default function SectionHeader({ 
  eyebrow, 
  title, 
  description,
  align = "center",
  dark = true,
  eyebrowColor,
  titleColor,
  descriptionColor
}) {
  const alignmentClasses = {
    center: "text-center mx-auto",
    left: "text-left"
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`max-w-3xl ${alignmentClasses[align]} mb-12 lg:mb-16`}
    >
      {eyebrow && (
        <span className={`inline-block text-sm font-semibold tracking-wider uppercase mb-4 ${
          eyebrowColor || (dark ? "text-teal-400" : "text-blue-600")
        }`}>
          {eyebrow}
        </span>
      )}
      <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4 ${
        titleColor || (dark ? "text-white" : "text-slate-900")
      }`}>
        {title}
      </h2>
      {description && (
        <p className={`text-lg leading-relaxed ${
          descriptionColor || (dark ? "text-slate-300" : "text-slate-600")
        }`}>
          {description}
        </p>
      )}
    </motion.div>
  );
}