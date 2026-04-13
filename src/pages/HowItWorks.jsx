import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { 
  ArrowRight, 
  Mic, 
  Code2, 
  DollarSign, 
  ChevronRight,
  CheckCircle,
  Zap,
  ArrowDown
} from "lucide-react";
import HeroSection from "@/components/shared/HeroSection";
import SectionHeader from "@/components/shared/SectionHeader";
import CTASection from "@/components/shared/CTASection";

export default function HowItWorks() {
  const journey = [
    {
      step: "Capture",
      product: "Zera Scribe",
      icon: Mic,
      color: "from-blue-500 to-blue-600",
      title: "Ambient Documentation",
      description: "Zera Scribe listens to clinician-patient conversations in the background, capturing the complete clinical encounter without disrupting the care experience.",
      details: [
        "Real-time conversation capture",
        "Healthcare-tuned speech recognition",
        "Specialty-specific context understanding",
        "HIPAA-compliant processing"
      ]
    },
    {
      step: "Code",
      product: "Zera Scribe → RCM",
      icon: Code2,
      color: "from-purple-500 to-purple-600",
      title: "Intelligent Coding",
      description: "From the captured conversation, Zera generates chart-ready notes with accurate ICD-10 and CPT code suggestions—setting up the revenue cycle for success.",
      details: [
        "SOAP and specialty-specific note generation",
        "Accurate diagnosis code suggestions",
        "Procedure code mapping",
        "CDI-ready documentation"
      ]
    },
    {
      step: "Collect",
      product: "Zera RCM",
      icon: DollarSign,
      color: "from-teal-500 to-teal-600",
      title: "Autonomous RCM",
      description: "Zera RCM takes over, predicting and preventing denials, automating financial clearance, and accelerating cash collection—turning billing into a self-driving system.",
      details: [
        "Real-time eligibility verification",
        "Predictive denial prevention",
        "Automated claim submission",
        "Intelligent follow-up workflows"
      ]
    }
  ];

  const integrationSteps = [
    {
      title: "Discovery & Planning",
      duration: "Week 1",
      description: "We assess your current workflows, EHR configuration, and pain points to design the implementation plan."
    },
    {
      title: "Configuration",
      duration: "Week 2",
      description: "Zera is configured for your specialty templates, coding preferences, and Epic workflows."
    },
    {
      title: "Pilot Deployment",
      duration: "Weeks 3-4",
      description: "Limited rollout with a select group of providers to validate workflows and gather feedback."
    },
    {
      title: "Full Launch",
      duration: "Week 5+",
      description: "Expanded deployment across your organization with ongoing optimization and support."
    }
  ];

  return (
    <div className="bg-white">
      <Helmet>
        <title>How NuScript Works | From Clinical Conversation to Cash Collection | Zera Scribe & RCM</title>
        <meta name="description" content="See how NuScript Health's unified AI platform connects Zera Scribe and Zera RCM to capture clinical conversations, generate coded documentation, and automate revenue cycle workflows—creating an end‑to‑end Capture → Code → Collect journey that reduces friction, denials, and time to cash." />
      </Helmet>
      {/* Hero */}
      <HeroSection
        headline={<>Capture. Code. <span className="text-teal-600">Collect.</span></>}
        subheadline="NuScript's unified AI platform follows the complete journey from clinical conversation to compensation—automating documentation, coding, and revenue cycle in one connected flow."
        primaryCTA={{ text: "See It In Action", href: createPageUrl("ContactDemo") }}
        secondaryCTA={{ text: "Talk to Our Team", href: "mailto:hello@nuscripthealth.com" }}
      />

      {/* Journey Visualization */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="The End-to-End Flow"
            title="From Conversation to Compensation"
            description="See how Zera Scribe and Zera RCM work together to transform your clinical and financial workflows."
            dark={false}
          />

          <div className="relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-teal-500 transform -translate-x-1/2" />

            <div className="space-y-12 lg:space-y-24">
              {journey.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative lg:grid lg:grid-cols-2 lg:gap-16 items-center ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Step indicator for desktop */}
                  <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 z-10">
                    <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                    <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
                      {/* Mobile step indicator */}
                      <div className="lg:hidden flex items-center gap-4 mb-6">
                        <div className={`w-12 h-12 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center`}>
                          <step.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <div className="text-sm text-slate-500 uppercase tracking-wider">{step.step}</div>
                          <div className="text-blue-600 font-medium">{step.product}</div>
                        </div>
                      </div>

                      {/* Desktop label */}
                      <div className="hidden lg:block mb-4">
                        <span className="inline-flex items-center px-3 py-1 bg-gray-100 text-slate-700 text-sm font-medium rounded-full">
                          {step.step} • {step.product}
                        </span>
                      </div>

                      <h3 className="text-2xl font-bold text-slate-900 mb-4">{step.title}</h3>
                      <p className="text-slate-600 leading-relaxed mb-6">{step.description}</p>
                      
                      <div className="space-y-2">
                        {step.details.map((detail, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-slate-700">
                            <CheckCircle className="w-4 h-4 text-blue-600" />
                            <span className="text-sm">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Visual/Diagram placeholder */}
                  <div className={`hidden lg:block ${index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-gray-200 aspect-[4/3] flex items-center justify-center">
                      <div className="text-center">
                        <div className={`w-24 h-24 bg-gradient-to-br ${step.color} rounded-3xl flex items-center justify-center mx-auto mb-4 opacity-80`}>
                          <step.icon className="w-12 h-12 text-white" />
                        </div>
                        <div className="text-4xl font-bold text-slate-900 mb-2">{step.step}</div>
                        <div className="text-slate-600">{step.product}</div>
                      </div>
                    </div>
                  </div>

                  {/* Arrow between steps (mobile) */}
                  {index < journey.length - 1 && (
                    <div className="lg:hidden flex justify-center py-6">
                      <ArrowDown className="w-6 h-6 text-gray-400" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Unified Platform */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-blue-600 text-sm font-semibold tracking-wider uppercase mb-4 block">Unified Platform</span>
               <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                 One Platform, Connected Workflows
               </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Zera ties together capture, coding context, and revenue actions in one clinical-to-financial backbone instead of three disconnected tools. That means fewer dropped balls between teams and fewer denial-driven surprises in your cash flow.
              </p>
              <div className="space-y-4">
                {[
                  "Shared data layer eliminates duplicate entry",
                  "Clinical context informs revenue decisions",
                  "Coding suggestions flow from documentation",
                  "Single vendor for clinical and financial AI"
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
              className="relative"
            >
              <div className="bg-white rounded-2xl p-8 border border-blue-300 shadow-lg shadow-blue-200/50 hover:shadow-xl hover:shadow-blue-300/60 transition-all duration-300">
                <div className="text-center mb-8">
                  <div className="text-2xl font-bold text-slate-900 mb-2">The NuScript Difference</div>
                  <div className="text-slate-600">Connected vs. Disconnected</div>
                </div>
                
                <div className="grid grid-cols-2 gap-8">
                  <div className="text-center">
                    <div className="bg-gray-100 rounded-lg px-4 py-3 mb-4">
                      <div className="text-xs font-bold text-slate-700 uppercase tracking-widest">Typical Approach</div>
                    </div>
                    <div className="space-y-3">
                      <div className="bg-gray-100 rounded-lg p-3 text-slate-600 text-sm">Scribe Tool</div>
                      <ArrowDown className="w-4 h-4 text-red-400 mx-auto" />
                      <div className="bg-gray-100 rounded-lg p-3 text-slate-600 text-sm">Manual Coding</div>
                      <ArrowDown className="w-4 h-4 text-red-400 mx-auto" />
                      <div className="bg-gray-100 rounded-lg p-3 text-slate-600 text-sm">RCM System</div>
                    </div>
                    <div className="mt-4 text-red-500 text-sm">Data silos, friction</div>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-blue-100 rounded-lg px-4 py-3 mb-4 border border-blue-200">
                      <div className="text-xs font-bold text-blue-700 uppercase tracking-widest">NuScript</div>
                    </div>
                    <div className="bg-gradient-to-b from-blue-50 to-indigo-50 rounded-xl p-4 border border-blue-200">
                      <div className="space-y-3">
                        <div className="bg-blue-100 rounded-lg p-3 text-blue-700 text-sm">Zera Scribe</div>
                        <ChevronRight className="w-4 h-4 text-blue-600 mx-auto rotate-90" />
                        <div className="bg-blue-100 rounded-lg p-3 text-blue-700 text-sm">Zera RCM</div>
                      </div>
                    </div>
                    <div className="mt-4 text-blue-600 text-sm">Connected, seamless</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Implementation */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Implementation"
            title="Fast, Low-Disruption Deployment"
            description="We designed Zera for rapid adoption—weeks, not months."
            dark={false}
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {integrationSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                      <span className="text-blue-600 font-bold">{index + 1}</span>
                    </div>
                    <span className="text-sm text-slate-500">{step.duration}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-slate-600 text-sm">{step.description}</p>
                </div>
                
                {index < integrationSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <ChevronRight className="w-6 h-6 text-gray-400" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Human + AI */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-12 border border-gray-200">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-blue-600 text-sm font-semibold tracking-wider uppercase mb-4 block">Our Approach</span>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">
                  Human Experts + Autonomous AI
                </h2>
                <p className="text-slate-600 leading-relaxed mb-6">
                  NuScript combines 25+ years of clinical documentation and RCM expertise with modern AI. We don't just deploy software—we bring the operational know-how to make it work.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-3 text-slate-700">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                    Start with services, add software when ready
                  </li>
                  <li className="flex items-center gap-3 text-slate-700">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                    Human oversight on complex cases
                  </li>
                  <li className="flex items-center gap-3 text-slate-700">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                    Continuous optimization from real-world feedback
                  </li>
                </ul>
                <p className="text-slate-600">So you get the speed of autonomy with the safety and nuance of experienced teams.</p>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative">
                  <div className="w-40 h-40 bg-blue-100 rounded-full flex items-center justify-center shadow-lg shadow-blue-400/40">
                    <Zap className="w-16 h-16 text-blue-600" />
                  </div>
                  <div className="absolute -top-4 -right-4 w-20 h-20 bg-white rounded-full flex items-center justify-center border-4 border-blue-300 shadow-lg shadow-blue-300/50">
                    <span className="text-2xl">🧠</span>
                  </div>
                  <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-white rounded-full flex items-center justify-center border-4 border-blue-300 shadow-lg shadow-blue-300/50">
                    <span className="text-2xl">👨‍⚕️</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Ready to See the Full Journey?"
        description="Schedule a walkthrough to see how Capture → Code → Collect works for your organization."
        primaryCTA={{ text: "Get Early Access", href: createPageUrl("ContactDemo") }}
        secondaryCTA={{ text: "Get Technical Details", href: "mailto:hello@nuscripthealth.com?subject=Technical%20Details" }}
      />
    </div>
  );
}