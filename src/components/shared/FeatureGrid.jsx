import React from "react";
import { motion } from "framer-motion";

export default function FeatureGrid({ features, columns = 3 }) {
  const gridCols = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-2 lg:grid-cols-3",
    4: "md:grid-cols-2 lg:grid-cols-4"
  };

  return (
    <div className={`grid grid-cols-1 ${gridCols[columns]} gap-6 lg:gap-8`}>
      {features.map((feature, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="group relative bg-white rounded-2xl p-8 border border-gray-200 hover:border-blue-400/50 transition-all hover:bg-blue-50/30"
          >
          {/* Gradient overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

          <div className="relative">
            {feature.icon && (
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-5">
                 <feature.icon className="w-6 h-6 text-blue-600" />
              </div>
            )}
            <h3 className="text-xl font-semibold text-slate-900 mb-3">
              {feature.title}
            </h3>
            <p className="text-slate-600 leading-relaxed">
              {feature.description}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}