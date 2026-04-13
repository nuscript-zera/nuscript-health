import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { 
  ArrowRight, 
  Mic, 
  FileText, 
  Code2, 
  Clock, 
  Heart, 
  Shield,
  CheckCircle,
  Stethoscope,
  Users,
  TrendingUp
} from "lucide-react";
import { createPageUrl } from "@/utils";
import HeroSection from "@/components/shared/HeroSection";
import SectionHeader from "@/components/shared/SectionHeader";
import FeatureGrid from "@/components/shared/FeatureGrid";
import ScenarioCard from "@/components/shared/ScenarioCard";
import CTASection from "@/components/shared/CTASection";

export default function ZeraScribe() {
  const features = [
    {
      icon: Mic,
      title: "Real-Time Ambient Capture",
      description: "Captures clinician-patient conversations in real time, in the background—no dictation, no manual input required."
    },
    {
      icon: FileText,
      title: "Chart-Ready Notes",
      description: "Drafts SOAP and specialty-specific notes mapped to your templates and EHR, ready for quick review and sign-off."
    },
    {
      icon: Code2,
      title: "Intelligent Code Suggestions",
      description: "Suggests accurate diagnosis and procedure codes from the encounter to support cleaner claims and stronger revenue integrity."
    },
    {
      icon: Clock,
      title: "End After-Hours Charting",
      description: "Reduces after-hours documentation burden so providers can leave work at work."
    },
    {
      icon: Heart,
      title: "Preserve Clinical Quality",
      description: "Maintains the clinical, compliance, and billing detail your practice needs without sacrificing completeness."
    },
    {
      icon: Shield,
      title: "Healthcare-Grade Security",
      description: "SOC 2 and HIPAA-aligned controls ensure PHI stays protected at every step."
    }
  ];

  const outcomes = [
    { metric: "2+ hrs", label: "Saved per provider per day" },
    { metric: "90%+", label: "Reduction in after-hours charting" },
    { metric: "<24 hrs", label: "Notes completed same day" },
    { metric: "95%+", label: "Coding accuracy rate" }
  ];

  const scenarios = [
    {
      title: "The Burned-Out Physician",
      persona: "Internal Medicine, Multi-Site Practice",
      description: "Dr. Chen was spending 2+ hours every night finishing charts. After deploying Zera Scribe, she completes documentation during patient visits and leaves on time—without sacrificing note quality.",
      outcome: "Reclaimed evenings with family, improved patient satisfaction scores"
    },
    {
      title: "The Growing Specialty Practice",
      persona: "Orthopedic Surgery Group",
      description: "A 12-provider orthopedic group was scaling but couldn't hire scribes fast enough. Zera Scribe's ambient AI handles documentation across all providers without adding headcount.",
      outcome: "Scaled from 8 to 12 providers without additional documentation staff"
    }
  ];

  return (
          <div className="bg-white">
      <Helmet>
        <title>Zera Scribe | Ambient AI Medical Scribe for Clinical Documentation | NuScript Health</title>
        <meta name="description" content="Zera Scribe is an ambient AI medical scribe from NuScript Health that listens to clinician‑patient conversations and generates chart‑ready notes and code suggestions—cutting after‑hours charting, improving coding accuracy, and reducing documentation burden for providers." />
      </Helmet>
      {/* Hero */}
      <section className="relative overflow-hidden bg-white pt-20 pb-24 lg:pt-32 lg:pb-36">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 via-transparent to-transparent opacity-30" />
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-blue-400/10 to-transparent" />
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12 items-center">
            <div className="lg:col-span-2">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-900 tracking-tight leading-[1.1] mb-6"
              >
                Chart Less. <span className="text-teal-600">Care More.</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-slate-600 leading-relaxed mb-10"
                style={{fontSize: '20px'}}
              >
                Zera Scribe is an ambient AI medical scribe that sits in the background of the clinical encounter, using healthcare-tuned generative AI to produce chart-ready notes and structured data for coding—tailored to your specialty and workflow.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <a 
                  href={createPageUrl("ContactDemo")}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition-all hover:shadow-lg hover:shadow-blue-600/30 group"
                >
                  Get Early Access
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="mailto:hello@nuscripthealth.com?subject=Zera%20Scribe%20Product%20Brief"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gray-200 hover:bg-gray-300 text-slate-900 font-semibold rounded-full border border-gray-300 transition-all"
                >
                  Get the Product Brief
                </a>
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex justify-center lg:justify-end"
            >
              <div className="flex items-center gap-3">
                <img
                  src="/images/zera-icon.png"
                  alt="Zera"
                  className="h-11 object-contain"
                />
                <div className="w-px h-8 bg-gray-300" />
                <span className="text-3xl font-semibold tracking-tight" style={{color: '#475569'}}>Scribe</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What It Is */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-blue-600 text-sm font-semibold tracking-wider uppercase mb-4 block">What It Is</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                AI Documentation That Actually Works
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Zera Scribe listens to your patient conversations, understands clinical context, and produces complete, accurate documentation—without you touching a keyboard.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                Unlike generic transcription tools, Zera Scribe is built specifically for healthcare. It understands medical terminology, specialty workflows, and the coding requirements that drive clean claims.
              </p>
              <div className="flex items-center gap-4">
                <div className="flex -space-x-2">
                    <div className="w-10 h-10 rounded-full bg-blue-100 border-2 border-white flex items-center justify-center">
                      <Stethoscope className="w-5 h-5 text-blue-600" />
                    </div>
                    <div className="w-10 h-10 rounded-full bg-blue-100 border-2 border-white flex items-center justify-center">
                      <Users className="w-5 h-5 text-blue-600" />
                    </div>
                  </div>
                <span className="text-slate-600 text-sm">
                  Built for CMIOs, Physician Leaders, and Practice Owners
                </span>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
              >
              <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-blue-600 font-bold text-sm">1</span>
                    </div>
                    <div>
                      <h4 className="text-slate-900 font-semibold mb-1">Listen</h4>
                      <p className="text-slate-600 text-sm">Ambient capture of clinician-patient conversation</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-blue-600 font-bold text-sm">2</span>
                    </div>
                    <div>
                      <h4 className="text-slate-900 font-semibold mb-1">Understand</h4>
                      <p className="text-slate-600 text-sm">Healthcare-tuned AI extracts clinical meaning</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-blue-600 font-bold text-sm">3</span>
                    </div>
                    <div>
                      <h4 className="text-slate-900 font-semibold mb-1">Draft</h4>
                      <p className="text-slate-600 text-sm">Chart-ready notes mapped to your EHR templates</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-blue-600 font-bold text-sm">4</span>
                    </div>
                    <div>
                      <h4 className="text-slate-900 font-semibold mb-1">Code</h4>
                      <p className="text-slate-600 text-sm">Suggested diagnosis and procedure codes for clean claims</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Outcomes */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Outcomes"
            title="Measurable Impact on Your Practice"
            description="Zera Scribe doesn't just promise efficiency—it delivers quantifiable results."
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

      {/* Features Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Capabilities"
            title="Purpose-Built for Clinical Workflows"
            description="Every feature designed around how providers actually work."
            dark={false}
          />
          <FeatureGrid features={features} columns={3} />
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="In Practice"
            title="Real Scenarios, Real Results"
            description="How practices like yours are using Zera Scribe."
            dark={false}
          />
          <div className="grid md:grid-cols-2 gap-8">
            {scenarios.map((scenario, index) => (
              <ScenarioCard key={index} {...scenario} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* For CMIOs */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-blue-600 text-sm font-semibold tracking-wider uppercase mb-4 block">For Clinical Leaders</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                Why CMIOs Trust Zera Scribe
              </h2>
              <div className="space-y-4">
                {[
                  "Specialty-specific templates that preserve clinical nuance",
                  "Full audit trail for compliance and quality review",
                  "EHR integration that fits existing workflows",
                  "Provider adoption rates that actually stick",
                  "Reductions in documentation time and after-hours charting"
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
              className="bg-blue-50 rounded-2xl p-8 border border-blue-200"
              >
              <div className="text-blue-600 text-sm font-semibold mb-4">QUICK STAT</div>
              <div className="text-5xl font-bold text-slate-900 mb-4">43%</div>
              <p className="text-slate-600 leading-relaxed">
                of physician time is spent on EHR and documentation tasks. Zera Scribe gives providers back their clinical time—and their evenings.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Ready to See Zera Scribe in Action?"
        description="Schedule a personalized walkthrough and see how ambient AI documentation can transform your practice."
        primaryCTA={{ text: "Get Early Access", href: createPageUrl("ContactDemo") }}
        secondaryCTA={{ text: "Get Product Details", href: "mailto:hello@nuscripthealth.com?subject=Zera%20Scribe%20Details" }}
      />
    </div>
  );
}