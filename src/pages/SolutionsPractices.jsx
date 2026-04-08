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
  Heart,
  CheckCircle,
  FileText,
  Users,
  TrendingUp
} from "lucide-react";
import HeroSection from "@/components/shared/HeroSection";
import SectionHeader from "@/components/shared/SectionHeader";
import CTASection from "@/components/shared/CTASection";

export default function SolutionsPractices() {
  const challenges = [
    {
      title: "After-Hours Documentation",
      description: "Providers spend evenings and weekends finishing charts, leading to burnout and work-life imbalance."
    },
    {
      title: "Limited Administrative Resources",
      description: "Small teams can't afford dedicated billing staff, leading to delayed claims, missed follow‑up, and lost revenue."
    },
    {
      title: "Specialty-Specific Needs",
      description: "Generic solutions don't understand your specialty's unique documentation and coding requirements."
    },
    {
      title: "Practice Growth Constraints",
      description: "Documentation burden limits how many patients you can see and how fast you can grow."
    }
  ];

  const outcomes = [
    { metric: "2+ hrs", label: "Saved per provider daily" },
    { metric: "30%", label: "More patient time" },
    { metric: "95%+", label: "Coding accuracy" },
    { metric: "<30", label: "Days in AR" }
  ];

  const solutions = [
    {
      icon: FileText,
      product: "ZERA Scribe",
      title: "Ambient AI Documentation for Every Specialty",
      description: "Purpose-built for independent and specialty practices. ZERA Scribe captures your patient conversations and produces complete, coded notes tailored to your specialty.",
      benefits: [
        "End after-hours charting—leave work at work",
        "Specialty templates: cardiology, dermatology, primary care, and more",
        "Accurate coding suggestions for clean claims",
        "Simple setup—start in days, not weeks"
      ]
    },
    {
      icon: DollarSign,
      product: "ZERA RCM",
      title: "Simplified Revenue Cycle for Growing Practices",
      description: "Don't let billing complexity slow your growth. ZERA RCM automates eligibility, prevents denials, and accelerates your cash flow without adding headcount.",
      benefits: [
        "Automated eligibility and benefits verification",
        "Denial prediction and prevention",
        "Faster reimbursement with cleaner claims",
        "Right-sized for practice economics—not a health system price tag for a small practice"
      ]
    }
  ];

  const scenarios = [
    {
      title: "The Burned-Out Cardiologist",
      persona: "Solo Cardiology Practice",
      description: "Dr. Patel was spending 3 hours every night on documentation. After implementing ZERA Scribe, he completes notes during patient visits and has reclaimed his evenings.",
      outcome: "Zero after-hours charting, improved patient satisfaction"
    },
    {
      title: "The Growing Dermatology Group",
      persona: "3-Provider Dermatology Practice",
      description: "A dermatology practice wanted to add a fourth provider but couldn't scale their documentation and billing operations. NuScript enabled growth without adding administrative staff.",
      outcome: "Added 1 provider without increasing admin headcount"
    }
  ];

  const specialties = [
    "Primary Care", "Internal Medicine", "Cardiology", "Dermatology",
    "Orthopedics", "Neurology", "Gastroenterology", "Pulmonology",
    "Rheumatology", "Pediatrics", "Pain Management", "Mental Health"
  ];

  return (
    <div className="bg-white">
      <Helmet>
        <title>Independent Medical Practice Solutions | More Patients, Less Paper | NuScript Health</title>
        <meta name="description" content="NuScript Health's AI platform helps independent and specialty practices see more patients with less paperwork—combining ZERA Scribe for ambient clinical documentation and ZERA RCM for simplified revenue cycle automation to cut after‑hours charting, reduce denials, and improve cash flow." />
      </Helmet>
      {/* Hero */}
      <HeroSection
        headline={<>More Patients. <span className="text-teal-600">Less Paper.</span></>}
        subheadline="NuScript's AI platform gives independent and specialty practices the documentation and revenue tools they need—without enterprise complexity or enterprise pricing."
        primaryCTA={{ text: "Get Early Access", href: createPageUrl("ContactDemo") }}
        secondaryCTA={{ text: "See Your Specialty", href: "mailto:hello@nuscripthealth.com?subject=Specialty%20Support" }}
      />

      {/* Outcomes */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Results"
            title="Outcomes That Matter to Practice Owners"
            description="Real impact on your time, your patients, and your bottom line."
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
            title="Practice Ownership Shouldn't Mean Burnout"
            description="You went into medicine to help patients—not to spend your nights charting."
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
            title="AI That Fits Your Practice"
            description="Right-sized tools for independent practices—powerful enough to transform your workflows, simple enough to implement in days."
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
            title="Practice Owner Success Stories"
            description="How practices like yours are using NuScript."
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

      {/* Specialties */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-blue-600 text-sm font-semibold tracking-wider uppercase mb-4 block">Specialty Support</span>
               <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                 Built for Your Specialty
               </h2>
               <p className="text-lg text-slate-600 leading-relaxed mb-8">
                ZERA Scribe understands the unique documentation requirements of each specialty—from cardiology note templates to dermatology procedure documentation.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {specialties.map((specialty, index) => (
                   <div key={index} className="flex items-center gap-2 text-slate-700">
                     <div className="w-2 h-2 bg-teal-600 rounded-full" />
                    {specialty}
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
                <h3 className="text-xl font-semibold text-slate-900">Low-Disruption Adoption</h3>
              </div>
              <div className="space-y-4">
                {[
                   "Start with services, add software when ready",
                   "Implementation in days, not months",
                   "Works with your existing EHR",
                   "Dedicated support from clinical experts",
                   "Flexible pricing for practice economics"
                 ].map((item, index) => (
                   <div key={index} className="flex items-start gap-3">
                     <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Practice Owners */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-12 border border-gray-200">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="text-center lg:text-left">
                <Heart className="w-10 h-10 text-blue-600 mb-4 mx-auto lg:mx-0" />
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Reclaim Your Time</h3>
                <p className="text-slate-600">Stop spending evenings on documentation. Get back to why you became a physician.</p>
              </div>
              <div className="text-center lg:text-left">
                <Users className="w-10 h-10 text-blue-600 mb-4 mx-auto lg:mx-0" />
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Scale Without Stress</h3>
                <p className="text-slate-600">Grow your practice without proportionally growing your administrative burden.</p>
              </div>
              <div className="text-center lg:text-left">
                <TrendingUp className="w-10 h-10 text-blue-600 mb-4 mx-auto lg:mx-0" />
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Protect Your Revenue</h3>
                <p className="text-slate-600">Accurate coding and cleaner claims mean you get paid what you've earned.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Ready to Transform Your Practice?"
        description="See how NuScript can give you back your time and protect your revenue."
        primaryCTA={{ text: "Get Early Access", href: createPageUrl("ContactDemo") }}
        secondaryCTA={{ text: "Talk to the Founder", href: "mailto:hello@nuscripthealth.com" }}
      />
    </div>
  );
}