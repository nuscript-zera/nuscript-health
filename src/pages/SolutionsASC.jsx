import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { 
  ArrowRight, 
  Stethoscope, 
  Clock, 
  DollarSign, 
  TrendingUp,
  CheckCircle,
  FileText,
  Zap,
  Heart,
  Users
} from "lucide-react";
import HeroSection from "@/components/shared/HeroSection";
import SectionHeader from "@/components/shared/SectionHeader";
import CTASection from "@/components/shared/CTASection";

export default function SolutionsASC() {
  const challenges = [
    {
      title: "High Case Volume, Limited Staff",
      description: "ASCs handle rapid case turnover with lean teams—documentation and billing can't slow down the OR schedule."
    },
    {
      title: "Authorization Delays",
      description: "Prior auth and eligibility issues cause case delays, patient dissatisfaction, and revenue uncertainty."
    },
    {
      title: "Complex Multi-Specialty Coding",
      description: "Orthopedics, GI, pain management—each specialty has unique documentation and coding requirements."
    },
    {
      title: "Cash Flow Pressure",
      description: "Thin margins mean ASCs can't afford extended AR cycles or preventable denials."
    }
  ];

  const outcomes = [
    { metric: "<20 Days", label: "From claim to cash" },
    { metric: "95%+", label: "Clean claim rate" },
    { metric: "Zero", label: "Case delays from auth issues" },
    { metric: "<24 Hrs", label: "Case to documentation" }
  ];

  const solutions = [
    {
      icon: FileText,
      product: "ZERA Scribe",
      title: "Ambient Documentation for High-Volume Surgical Settings",
      description: "Capture surgical encounters without slowing case turnover. ZERA Scribe produces specialty-specific operative reports and procedure notes that meet coding requirements.",
      benefits: [
        "Operative notes completed before the surgeon leaves",
        "Specialty templates for ortho, GI, pain, and more",
        "Accurate CPT and ICD-10 suggestions from encounter",
        "Reduces documentation time per case by 60%+"
      ]
    },
    {
      icon: DollarSign,
      product: "ZERA RCM",
      title: "Streamlined Financial Clearance for ASCs",
      description: "Eliminate authorization delays and cash flow uncertainty. ZERA RCM automates eligibility verification, prior auth tracking, and denial prevention.",
      benefits: [
        "Real-time eligibility and benefits verification",
        "Automated prior authorization tracking",
        "Predictive denial prevention before claim submission",
        "Accelerated cash flow with sub-20-day AR"
      ]
    }
  ];

  const scenarios = [
    {
      title: "The High-Volume Ortho ASC",
      persona: "Orthopedic Surgery Center, 15+ cases/day",
      description: "A busy orthopedic ASC was struggling with surgeon documentation backlogs. After implementing ZERA Scribe, surgeons complete operative notes same-day with accurate CPT coding, eliminating the post-op documentation burden.",
      outcome: "Zero documentation backlog, 100% same-day note completion"
    },
    {
      title: "The GI Endoscopy Center",
      persona: "Gastroenterology, 25+ procedures/day",
      description: "A high-volume GI center was struggling with documentation turnaround time for colonoscopy and endoscopy reports. After implementing ZERA Scribe, all procedure notes are completed same-day with accurate CPT coding, eliminating backlogs.",
      outcome: "100% same-day documentation, 40% reduction in coding errors"
    }
  ];

  return (
    <div className="bg-white">
      <Helmet>
        <title>Ambulatory Surgery Center Solutions | ZERA Scribe & Flow for ASCs | NuScript Health</title>
        <meta name="description" content="NuScript Health's AI platform is built for Ambulatory Surgery Centers—combining ZERA Scribe for same‑day operative notes with ZERA RCM for real‑time eligibility, prior auth automation, and denial prevention to reduce documentation backlogs, eliminate case delays, and accelerate ASC cash flow." />
      </Helmet>
      {/* Hero */}
      <HeroSection
        headline={<>Move Fast. <span className="text-teal-600">Get Paid Faster.</span></>}
        subheadline="NuScript's AI platform is built for the unique demands of ASCs—high case volume, lean teams, and zero tolerance for delays. From surgical documentation to same-day billing, we keep your OR running and your cash flowing."
        primaryCTA={{ text: "Get Early Access", href: createPageUrl("ContactDemo") }}
        secondaryCTA={{ text: "See ASC Case Studies", href: "mailto:hello@nuscripthealth.com?subject=ASC%20Case%20Studies" }}
      />

      {/* Outcomes */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Results"
            title="Outcomes That Matter to ASC Operators"
            description="Real impact on your case volume, your staff, and your bottom line."
            dark={false}
          />

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {outcomes.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-blue-50 rounded-2xl p-6 text-center border border-blue-200"
              >
                <div className="text-4xl sm:text-5xl font-bold text-blue-600 mb-2">{item.metric}</div>
                <div className="text-slate-600 text-sm">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="The Challenge"
            title="Surgery Centers Can't Afford Documentation Delays"
            description="You went into surgery to help patients—not to manage paperwork delays."
            dark={false}
          />

          <div className="grid md:grid-cols-2 gap-6">
            {challenges.map((challenge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-blue-400/50 transition-all hover:bg-blue-50/30"
              >
                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                  <div className="w-3 h-3 bg-blue-600 rounded-full" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">{challenge.title}</h3>
                <p className="text-slate-600">{challenge.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="The Solution"
            title="AI Built for Surgical Efficiency"
            description="Right-sized tools for ASCs—powerful enough to transform your workflows, simple enough to implement in days."
            dark={false}
          />

          <div className="space-y-12">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-3xl p-10 border border-gray-200"
              >
                <div className="grid lg:grid-cols-2 gap-10">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center">
                        <solution.icon className="w-7 h-7 text-blue-600" />
                      </div>
                      <span className="text-teal-600 font-medium">{solution.product}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">{solution.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{solution.description}</p>
                  </div>
                  <div>
                    <div className="space-y-3">
                      {solution.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                          <span className="text-slate-700">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="In Practice"
            title="ASC Success Stories"
            description="How surgery centers are using ZERA."
            dark={false}
          />

          <div className="grid md:grid-cols-2 gap-8">
            {scenarios.map((scenario, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-blue-400/50 transition-all hover:bg-blue-50/30"
              >
                <h3 className="text-xl font-semibold text-slate-900 mb-2">{scenario.title}</h3>
                <p className="text-sm text-blue-600 font-medium mb-4">{scenario.persona}</p>
                <p className="text-slate-600 leading-relaxed mb-6">{scenario.description}</p>
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-sm text-slate-500 uppercase tracking-wider mb-1">Outcome</p>
                  <p className="text-blue-600 font-medium">{scenario.outcome}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ASC-Specific Features */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-blue-600 text-sm font-semibold tracking-wider uppercase mb-4 block">ASC-Optimized</span>
               <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                 Purpose-Built for Surgery Center Workflows
               </h2>
              <div className="space-y-4">
                {[
                   "Pre-op, intra-op, and post-op documentation templates",
                   "Surgical specialty support: ortho, GI, pain, ophthalmology",
                   "Same-day case documentation and coding",
                   "Real-time eligibility and authorization tracking",
                   "Block scheduling awareness for operational planning",
                   "Rapid implementation—weeks, not months"
                 ].map((item, index) => (
                   <div key={index} className="flex items-start gap-3">
                     <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 border border-gray-200"
            >
              <div className="text-center mb-8">
                <Stethoscope className="w-14 h-14 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-slate-900">Surgical Specialties Supported</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                   "Orthopedics",
                   "Gastroenterology",
                   "Pain Management",
                   "Ophthalmology",
                   "ENT",
                   "Urology",
                   "General Surgery",
                   "Plastics"
                 ].map((specialty, index) => (
                   <div key={index} className="flex items-center gap-2 text-slate-700">
                     <div className="w-2 h-2 bg-teal-600 rounded-full" />
                    {specialty}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why ASC Operators */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-12 border border-gray-200">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="text-center lg:text-left">
                <TrendingUp className="w-10 h-10 text-blue-600 mb-4 mx-auto lg:mx-0" />
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Accelerate Your Cash Flow</h3>
                <p className="text-slate-600">Get paid faster with cleaner claims and same-day documentation.</p>
              </div>
              <div className="text-center lg:text-left">
                <Clock className="w-10 h-10 text-blue-600 mb-4 mx-auto lg:mx-0" />
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Eliminate Bottlenecks</h3>
                <p className="text-slate-600">No more case delays from documentation or authorization issues.</p>
              </div>
              <div className="text-center lg:text-left">
                <Users className="w-10 h-10 text-blue-600 mb-4 mx-auto lg:mx-0" />
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Protect Your Margins</h3>
                <p className="text-slate-600">Reduce denials and operational friction on lean teams.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Ready to Streamline Your ASC Operations?"
        description="See how NuScript can help your surgery center document faster and get paid sooner."
        primaryCTA={{ text: "Get Early Access", href: createPageUrl("ContactDemo") }}
        secondaryCTA={{ text: "Talk to Our Team", href: "mailto:hello@nuscripthealth.com" }}
      />
    </div>
  );
}