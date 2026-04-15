import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { ArrowRight, Mic, DollarSign, Shield, Zap, Clock, CheckCircle, ArrowUpRight, Layers } from "lucide-react";
import AnimatedDataViz from "@/components/shared/AnimatedDataViz";

export default function Home() {
  return (
    <div className="bg-white">
      <Helmet>
        <title>AI Clinical Documentation & Autonomous RCM Platform | Zera™ Scribe & RCM | NuScript Health</title>
        <meta name="description" content="NuScript Health builds Zera™ Scribe and Zera™ RCM, an AI‑native platform that connects clinical conversation to cash—ambient medical scribing plus Epic‑aware autonomous RCM to reduce denials, cut after‑hours charting, and accelerate revenue." />
      </Helmet>
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-24 lg:pt-32 lg:pb-36 bg-white">
        {/* Animated background elements */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-blue-400/15 via-transparent to-indigo-400/10 opacity-40"
            animate={{ opacity: [0.4, 0.6, 0.4] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.div 
            className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-blue-400/10 to-transparent"
            animate={{ x: [0, 20, 0], y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
          />
          <motion.div 
            className="absolute bottom-0 left-1/4 w-96 h-96 bg-indigo-400/5 rounded-full blur-3xl"
            animate={{ scale: [1, 1.1, 1], y: [0, -20, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
          />
          {/* Subtle grid pattern for enterprise feel */}
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(0deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:80px_80px]" />
          {/* Minimal geometric accent */}
          <motion.div 
            className="absolute top-1/3 left-0 w-1 h-48 bg-gradient-to-b from-blue-400/20 to-transparent blur-xl"
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          {/* Animated data visualization */}
          <AnimatedDataViz />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.05] mb-6"
            >
              From <span className="text-blue-600">Clinical Conversation</span> to <span className="text-teal-600">Predictable Cash</span>
            </motion.h1>

            <motion.p
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
             className="text-xl text-slate-600 leading-relaxed max-w-3xl mb-8"
            >
              NuScript connects ambient clinical documentation and autonomous revenue cycle automation in one AI platform—so providers chart less, revenue teams touch fewer claims, and leaders get cleaner margins with fewer surprises.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-4 mb-8"
            >
              <Link 
                  to={createPageUrl("ContactDemo")}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition-all hover:shadow-lg hover:shadow-blue-600/30 group"
                >
                  Talk to Our Team
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              <Link 
                to={createPageUrl("HowItWorks")}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gray-200 hover:bg-gray-300 text-slate-900 font-semibold rounded-full border border-gray-300 transition-all"
              >
                See How It Works
              </Link>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45, ease: "easeOut" }}
              className="text-sm text-slate-600"
            >
              Built by healthcare operators with 25+ years in documentation and RCM.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Outcome Strip */}
      <section className="py-12 bg-gradient-to-r from-blue-50 to-indigo-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-6">For Leaders Who Need AI to Show Up in the Numbers</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                "Reduce after-hours charting and documentation drag.",
                "Push denials upstream and raise clean-claim rates.",
                "Shorten days in AR and stabilize cash flow across sites and payers."
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                  <p className="text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Zera Product Line */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-blue-600 text-sm font-semibold tracking-wider uppercase mb-4 block">The Zera Product Line</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
              One Platform. From Capture to Cash.
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed mb-4">
              Zera<sup>™</sup> is a clinical-to-financial AI platform that follows every encounter from first words in the exam room to final dollars in the bank. One AI that documents, codes, and claims — with zero handoffs in between.
            </p>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed mb-8">
             <span className="text-blue-600 font-medium">Zera Scribe</span> eliminates the documentation burden. <span className="text-blue-600 font-medium">Zera RCM</span> autonomously captures the revenue. Together, they remove every manual touch between the clinical encounter and the paid claim.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Zera Scribe Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group relative bg-white rounded-3xl p-10 border border-gray-200 hover:border-blue-400/50 transition-all overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl group-hover:bg-blue-400/20 transition-all" />
              <div className="relative">
                <div className="mb-5">
                  <h3 className="text-3xl font-bold tracking-tight" style={{ letterSpacing: '-0.02em' }}>
                    <span className="text-slate-900">Zera </span>
                    <span className="text-blue-600">Scribe</span>
                  </h3>
                  <p className="text-slate-500 text-sm font-medium mt-1.5 uppercase tracking-wider">Ambient AI Medical Scribe</p>
                </div>
                <p className="text-slate-700 leading-relaxed mb-6">
                  <span className="text-blue-600 font-medium">Zera Scribe</span> listens to patient encounters, drafts chart-ready notes, and surfaces code-ready detail in real time. Providers finish on time, clinical quality improves, and the data required for payment is captured up front.
                </p>
                <div className="mb-6">
                  <h4 className="font-semibold text-slate-900 mb-3">Key outcomes</h4>
                  <ul className="space-y-2 text-slate-600 text-sm">
                    <li>• Less pajama-time documentation and click fatigue.</li>
                    <li>• Cleaner, richer notes that support coding and quality.</li>
                    <li>• A clearer front-end for Zera RCM and your RCM team.</li>
                  </ul>
                </div>
                <Link 
                   to={createPageUrl("ZeraScribe")}
                   className="inline-flex items-center gap-2 text-blue-600 font-medium hover:text-blue-700 transition-colors group/link"
                 >
                  Learn about Zera Scribe
                  <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            </motion.div>

            {/* Zera RCM Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group relative bg-white rounded-3xl p-10 border border-gray-200 hover:border-blue-400/50 transition-all overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-400/10 rounded-full blur-3xl group-hover:bg-indigo-400/20 transition-all" />
              <div className="relative">
                <div className="mb-5">
                  <h3 className="text-3xl font-bold tracking-tight" style={{ letterSpacing: '-0.02em' }}>
                    <span className="text-slate-900">Zera </span>
                    <span className="text-indigo-600">RCM</span>
                  </h3>
                  <p className="text-slate-500 text-sm font-medium mt-1.5 uppercase tracking-wider">Autonomous RCM Engine</p>
                </div>
                <p className="text-slate-700 leading-relaxed mb-6">
                  <span className="text-blue-600 font-medium">Zera RCM</span> monitors financial workflows, identifies payer and patient risk, and resolves issues before service. Claims process more smoothly, denials are reduced, and more clean, touchless claims reach payers on time.
                </p>
                <div className="mb-6">
                  <h4 className="font-semibold text-slate-900 mb-3">Key outcomes</h4>
                  <ul className="space-y-2 text-slate-600 text-sm">
                    <li>• Target &gt;95% clean claims and fewer write-offs.</li>
                    <li>• Shorter days in AR and more predictable cash.</li>
                    <li>• Fewer manual follow-ups and appeals across the team.</li>
                  </ul>
                </div>
                <Link 
                   to={createPageUrl("ZeraRCM")}
                   className="inline-flex items-center gap-2 text-indigo-600 font-medium hover:text-indigo-700 transition-colors group/link"
                 >
                  Learn about Zera RCM
                  <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Providers Choose NuScript */}
      <section className="py-24 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
              Why Providers Choose NuScript
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl">
              Built on decades of real-world clinical and RCM operations.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {[
              {
                icon: Layers,
                title: "Deep Clinical & RCM Roots",
                description: "NuScript is led by operators who have lived documentation and revenue cycle for decades—from dictation to coding to full RCM outsourcing. That experience is built into Zera's workflows, guardrails, and metrics, so AI supports how clinicians and billing teams actually work."
              },
              {
                icon: Zap,
                title: "Modern AI, Built for Healthcare",
                description: "Zera uses healthcare-tuned LLMs, deterministic workflows, and clear audit trails instead of generic plugins. Ambient scribing and autonomous RCM are designed around safety, compliance, and explainability, not just demos."
              },
              {
                icon: Shield,
                title: "Healthcare-Grade Trust & Governance",
                description: "NuScript is a Texas C-Corp focused on healthcare, with SOC 2 and HIPAA-aligned controls. The platform is engineered to pass security review, integrate with Epic and other core systems, and satisfy medical staff, compliance, and finance stakeholders."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-white rounded-2xl p-10 border border-gray-200 hover:border-blue-400 hover:shadow-xl transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:from-blue-200 group-hover:to-blue-100 transition-all">
                    <item.icon className="w-10 h-10 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-sm">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Operational Foundation & Services */}
      <section className="py-24 bg-gradient-to-b from-white via-blue-50/30 to-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-indigo-100/20 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 max-w-3xl"
          >
            <span className="text-blue-600 text-sm font-semibold tracking-wider uppercase mb-4 block">Our Operational Foundation & Services</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
              Built on Real Operations, Not Just Software
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              NuScript Health grew out of hands-on work in clinical documentation, coding, and revenue cycle operations—not from a lab or a slide deck. That real-world experience now powers the Zera clinical-to-financial platform and the services our teams deliver on top of it, so you get AI, workflows, and people that already know what it takes to run a high-performing RCM operation.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                icon: Mic,
                title: "Clinical Documentation",
                description: "NuScript's roots are in clinical documentation, from traditional transcription to AI-assisted medical scribing and charting support across multiple specialties. Our teams use Zera Scribe to turn clinician audio into clear, complete, and compliant notes that reduce after-hours charting and support downstream coding and billing.",
                bgGradient: "from-blue-50 to-blue-50/50",
                iconGradient: "from-blue-500 to-blue-600",
                borderColor: "border-blue-200"
              },
              {
                icon: DollarSign,
                title: "Coding & RCM Services",
                description: "On the financial side, NuScript provides tech-enabled coding, billing, and revenue cycle management services that work hand-in-hand with Zera RCM. We help clients improve clean-claim rates, reduce days in AR, and tackle denials with teams who have lived the daily reality of payer rules and front-end documentation gaps.",
                bgGradient: "from-indigo-50 to-indigo-50/50",
                iconGradient: "from-indigo-500 to-indigo-600",
                borderColor: "border-indigo-200"
              },
              {
                icon: Clock,
                title: "Implementation & Enablement",
                description: "Every deployment comes with implementation, training, and ongoing enablement so Zera and NuScript services fit your existing EHR, PM, and staffing model. From pilot design to scale-up and continuous optimization, our team functions as an extension of yours—keeping both clinicians and RCM leaders supported as workflows evolve.",
                bgGradient: "from-teal-50 to-teal-50/50",
                iconGradient: "from-teal-500 to-teal-600",
                borderColor: "border-teal-200"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`group relative bg-gradient-to-br ${service.bgGradient} rounded-3xl p-10 border ${service.borderColor} hover:border-slate-300 hover:shadow-2xl transition-all duration-300 overflow-hidden`}
              >
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/40 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative">
                  <div className={`w-14 h-14 bg-gradient-to-br ${service.iconGradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-all`}>
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h3>
                  <p className="text-slate-700 leading-relaxed" style={{fontSize: '18px'}}>{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50 rounded-3xl p-12 lg:p-16 border border-gray-200"
          >
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-400/10 to-transparent" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-400/5 rounded-full blur-3xl" />
            
            <div className="relative max-w-2xl">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight mb-4">
                Ready to See Zera in Your Numbers?
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Schedule a walkthrough to see how <span className="text-blue-600 font-medium">Zera Scribe</span> and <span className="text-blue-600 font-medium">Zera RCM</span> work together—from the first clinical conversation to final payment—to reduce fatigue, stabilize margins, and make AI show up in your P&L, not just your pilots.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to={createPageUrl("ContactDemo")}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition-all hover:shadow-lg hover:shadow-blue-600/30 group"
                >
                  Schedule a Walkthrough
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  to={createPageUrl("ContactDemo")}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gray-200 hover:bg-gray-300 text-slate-900 font-semibold rounded-full border border-gray-300 transition-all"
                >
                  Talk With Our Team
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}