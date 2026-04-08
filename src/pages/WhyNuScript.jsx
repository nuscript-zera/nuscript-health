import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { 
  ArrowRight, 
  Users, 
  Clock, 
  Shield, 
  Zap,
  CheckCircle,
  Award,
  Heart,
  Building2,
  FileCheck,
  Mic,
  Code2,
  DollarSign
} from "lucide-react";
import HeroSection from "@/components/shared/HeroSection";
import SectionHeader from "@/components/shared/SectionHeader";
import CTASection from "@/components/shared/CTASection";

export default function WhyNuScript() {
  const differentiators = [
    {
      icon: Users,
      title: "Founder-Led, Operator-Built",
      description: "NuScript is led by founders with 25+ years in clinical documentation and revenue cycle operations. That experience shapes how we design ZERA, structure engagements, and measure success."
    },
    {
      icon: Clock,
      title: "25+ Years of Healthcare Experience",
      description: "Our team has lived every phase of clinical documentation and RCM—from paper charts and dictation to EHR-native workflows—so ZERA is grounded in how work actually gets done."
    },
    {
      icon: Shield,
      title: "SOC 2 & HIPAA-Aligned",
      description: "Healthcare-grade security isn't an afterthought. NuScript is built with SOC 2 Type I and HIPAA-aligned controls from the ground up—because your patients' data deserves nothing less."
    },
    {
      icon: Zap,
      title: "Epic-Aware Workflows",
      description: "We don't just integrate with Epic—we understand Epic. Our team has deep experience with Epic RCM workflows, and ZERA RCM is designed to work within Epic, not around it."
    }
  ];

  const timeline = [
    {
      year: "2000",
      title: "Clinical Documentation Roots",
      description: "Founding team establishes NuScript's foundation in accurate medical transcription and high-fidelity clinical documentation services."
    },
    {
      year: "2023",
      title: "RCM Systems & Expertise",
      description: "Expanded into full-scale Revenue Cycle Management, building deep operational expertise in specialty coding, billing, and denial mitigation."
    },
    {
      year: "2025",
      title: "The AI Transformation",
      description: "Began architecting proprietary AI engines, distilling 25 years of clinical and financial workflows into scalable, purpose-built software."
    },
    {
      year: "Today",
      title: "The ZERA™ Product Suite",
      description: "ZERA Scribe and ZERA RCM represent the next era of autonomous clinical and financial workflows—coined for our mission: Zero-friction Engine for Revenue Autonomy."
    }
  ];

  const values = [
    {
      icon: Heart,
      title: "Provider-First",
      description: "We build for the clinicians and staff who use our tools every day—not for the demo."
    },
    {
      icon: Award,
      title: "Outcomes Over Features",
      description: "We measure success by time saved, denials prevented, and revenue collected—not by feature counts."
    },
    {
      icon: Building2,
      title: "Long-Term Partnership",
      description: "We're building relationships, not just transactions. Our success depends on yours."
    },
    {
      icon: FileCheck,
      title: "Radical Transparency",
      description: "No hidden fees, no surprise costs. We're clear about what we do and what it costs."
    }
  ];

  const complianceFeatures = [
    "SOC 2 Type I certified",
    "HIPAA-aligned security controls",
    "End-to-end encryption",
    "Role-based access controls",
    "Audit logging and monitoring",
    "Business Associate Agreements",
    "Regular security assessments",
    "Incident response procedures"
  ];

  return (
    <div className="bg-white">
      <Helmet>
        <title>Why NuScript Health | 25+ Years of Clinical & RCM Experience Behind ZERA AI</title>
        <meta name="description" content="NuScript Health is a founder‑led, Texas‑based healthtech company with 25+ years in clinical documentation and revenue cycle operations, now delivering the ZERA Scribe and ZERA RCM clinical‑to‑financial AI platform with SOC 2 and HIPAA‑aligned security for providers who want AI gains without operational chaos." />
      </Helmet>
      {/* Hero */}
      <HeroSection
        headline={<>Built by Operators. <span className="text-teal-600">For Operators.</span></>}
        subheadline="NuScript isn't another AI startup chasing healthcare. We're healthcare veterans who've spent 25+ years in clinical documentation and revenue cycle—and we're building the tools we wished existed."
        primaryCTA={{ text: "Meet Our Team", href: "mailto:hello@nuscripthealth.com" }}
        secondaryCTA={{ text: "See Our Products", href: createPageUrl("ZeraScribe") }}
      />

      {/* Clinical-to-Financial Positioning */}
       <section className="py-24 bg-gradient-to-b from-white to-blue-50">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="mb-20"
           >
             <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6 text-center leading-tight">
               Why the <span className="text-blue-600">Clinical-to-Financial</span><br />approach to AI matters
             </h2>
             <p className="text-xl text-slate-600 text-center max-w-2xl mx-auto mb-6">
               One integrated system beats three disconnected tools.
             </p>
             </motion.div>

           <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="max-w-5xl mx-auto mb-16"
           >
             <p className="text-lg text-slate-600 leading-relaxed mb-6">
               For decades, healthcare organizations bought documentation tools, coding tools, and RCM tools that never fully talked to each other. Documentation happened in one system, coding in another, and revenue operations in a third—each optimized locally, but not for the full journey from visit to payment.
             </p>
             <p className="text-lg text-slate-900 leading-relaxed font-medium mb-10">
               NuScript's clinical-to-financial approach is about designing AI across that whole journey, not in silos:
             </p>
           </motion.div>

           <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
             {[
               {
                 icon: Mic,
                 title: "Better documentation",
                 description: "Captures the clinical story and code-ready detail the first time.",
                 step: "01"
               },
               {
                 icon: Code2,
                 title: "Better coding context",
                 description: "Connects notes, diagnoses, and procedures to how payers actually pay.",
                 step: "02"
               },
               {
                 icon: DollarSign,
                 title: "Better revenue decisions",
                 description: "Uses clinical context to prevent denials, prioritize follow-up, and forecast cash.",
                 step: "03"
               }
             ].map((item, idx) => (
               <motion.div
                 key={idx}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: idx * 0.1 }}
                 className="relative"
               >
                 <div className="bg-white rounded-2xl p-8 border border-gray-200 h-full hover:border-blue-400 hover:shadow-lg transition-all duration-300">
                   <div className="absolute -top-4 left-8 text-sm font-bold text-blue-600 bg-white px-2">
                     {item.step}
                   </div>
                   <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 mt-2">
                     <item.icon className="w-7 h-7 text-blue-600" />
                   </div>
                   <h4 className="text-lg font-semibold text-slate-900 mb-3">{item.title}</h4>
                   <p className="text-slate-600 leading-relaxed">{item.description}</p>
                 </div>
               </motion.div>
             ))}
           </div>

           <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="max-w-3xl mx-auto bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200/50 rounded-2xl p-8 text-center"
           >
             <p className="text-lg text-slate-900 leading-relaxed font-medium">
               When those layers are designed together instead of in silos, AI can reduce friction across the entire clinical-to-financial chain—not just make one team a little faster.
             </p>
           </motion.div>
         </div>
       </section>

      {/* Key Differentiators */}
       <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="What Sets Us Apart"
            title="Why Healthcare Organizations Choose NuScript"
            description="The difference between AI that merely works in healthcare and AI that was built by and for healthcare operators."
            eyebrowColor="text-blue-600"
            titleColor="text-slate-900"
            descriptionColor="text-slate-600"
          />

          <div className="grid md:grid-cols-2 gap-8">
            {differentiators.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-blue-400/50 transition-all hover:bg-blue-50/30"
              >
                <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                  <item.icon className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed text-base">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Our Journey"
            title="25+ Years of Healthcare Experience"
            description="From clinical documentation services to autonomous AI workflows."
            eyebrowColor="text-blue-600"
            titleColor="text-slate-900"
            descriptionColor="text-slate-600"
          />

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-300 transform -translate-x-1/2" />

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative md:grid md:grid-cols-2 md:gap-8 ${
                    index % 2 === 0 ? "" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 z-10">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xs" aria-label={item.year}>
                      {item.year}
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`${index % 2 === 0 ? "md:text-right md:pr-12" : "md:col-start-2 md:pl-12"}`}>
                    <div className="bg-white rounded-2xl p-6 border border-gray-200">
                      <div className="text-blue-600 font-bold mb-2 md:hidden">{item.year}</div>
                      <h3 className="text-lg font-semibold text-slate-900 mb-2">{item.title}</h3>
                      <p className="text-slate-600 text-base">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Our Values"
            title="How We Work"
            description="The principles that guide everything we build."
            eyebrowColor="text-blue-600"
            titleColor="text-slate-900"
            descriptionColor="text-slate-600"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6"
              >
                <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{value.title}</h3>
                <p className="text-slate-600 text-base">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security & Compliance */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-blue-600 text-sm font-semibold tracking-wider uppercase mb-4 block">Security & Compliance</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                Healthcare-Grade Security, No Compromises
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                We built NuScript with the security controls that healthcare demands. As a Texas C-Corp with SOC 2 Type I certification and HIPAA-aligned practices, we take the protection of PHI seriously.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                We operate as if every deployment will face security review, audit, and legal scrutiny—because it will.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {complianceFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 text-slate-700">
                     <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
                     <span className="text-base">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              <div className="bg-white rounded-2xl p-8 border border-gray-200 text-center">
                <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <div className="text-2xl font-bold text-slate-900 mb-1">SOC 2</div>
                <div className="text-slate-600 text-sm">Type I Certified</div>
              </div>
              <div className="bg-white rounded-2xl p-8 border border-gray-200 text-center">
                <FileCheck className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <div className="text-2xl font-bold text-slate-900 mb-1">HIPAA</div>
                <div className="text-slate-600 text-sm">Aligned Controls</div>
              </div>
              <div className="bg-white rounded-2xl p-8 border border-gray-200 text-center col-span-2">
                <Building2 className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <div className="text-2xl font-bold text-slate-900 mb-1">Texas C-Corp</div>
                <div className="text-slate-600 text-sm">US-Based, Founder-Led</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About NuScript */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-12 border border-gray-200">
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-blue-600 text-sm font-semibold tracking-wider uppercase mb-4 block">About NuScript</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                The Company Behind ZERA
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                NuScript Health is a founder‑led healthtech company based in Texas. After 25 years in clinical documentation and revenue cycle operations, we now build AI engines that automate both the note and the dollar for healthcare providers and their revenue teams.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                Our flagship products, <span className="text-blue-600 font-medium">ZERA Scribe</span> and <span className="text-blue-600 font-medium">ZERA RCM</span>, turn hard‑earned service experience into scalable software for the next era of autonomous clinical and financial workflows.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="mailto:hello@nuscripthealth.com"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition-all hover:shadow-lg hover:shadow-blue-600/30 group"
                >
                  Email the Founder
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="https://www.linkedin.com/company/nuscripthealth/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gray-200 hover:bg-gray-300 text-slate-900 font-semibold rounded-full border border-gray-300 transition-all"
                >
                  Follow on LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Trusted by Providers Who Want AI Gains Without Operational Chaos
            </h2>
             <p className="text-slate-600 max-w-2xl mx-auto text-base">
              From solo practices to health systems, NuScript powers clinical and financial workflows for organizations that prioritize outcomes over hype.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { label: "Specialties Supported", value: "15+" },
              { label: "Years of Experience", value: "25+" },
              { label: "Documentation Accuracy", value: "99%+" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl font-bold text-blue-600 mb-2">{stat.value}</div>
                <div className="text-slate-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Ready to Work With a Team That Gets Healthcare?"
        description="Schedule a conversation with our team and see why operators choose NuScript."
        primaryCTA={{ text: "Schedule a Conversation", href: createPageUrl("ContactDemo") }}
        secondaryCTA={{ text: "Email the Founder", href: "mailto:hello@nuscripthealth.com" }}
      />
    </div>
  );
}