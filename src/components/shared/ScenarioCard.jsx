import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function ScenarioCard({ 
  title, 
  description, 
  persona,
  outcome,
  index = 0 
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative bg-white rounded-2xl p-8 border border-gray-200 hover:border-blue-400/50 transition-all hover:bg-blue-50/20"
      >
      <Quote className="w-8 h-8 text-blue-200 mb-4" />

      <h3 className="text-xl font-semibold text-slate-900 mb-2">
        {title}
      </h3>

      {persona && (
        <p className="text-sm text-blue-600 font-medium mb-4">
          {persona}
        </p>
      )}

      <p className="text-slate-600 leading-relaxed mb-6">
        {description}
      </p>

      {outcome && (
        <div className="pt-4 border-t border-gray-200">
           <p className="text-sm text-slate-500 uppercase tracking-wider mb-1">Outcome</p>
           <p className="text-blue-600 font-medium">{outcome}</p>
        </div>
      )}
    </motion.div>
  );
}