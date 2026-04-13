import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { 
  ArrowRight, 
  DollarSign, 
  TrendingUp, 
  ShieldCheck, 
  Zap,
  Clock,
  BarChart3,
  CheckCircle,
  Target,
  RefreshCw
} from "lucide-react";
import { createPageUrl } from "@/utils";
import HeroSection from "@/components/shared/HeroSection";
import SectionHeader from "@/components/shared/SectionHeader";
import FeatureGrid from "@/components/shared/FeatureGrid";
import ScenarioCard from "@/components/shared/ScenarioCard";
import CTASection from "@/components/shared/CTASection";

export default function ZeraRCM() {
  const features = [
    {
      icon: Zap,
      title: "Epic-Native Integration",
      description: "Designed to integrate deeply with Epic RCM workflows—not sit beside them. Works within your existing systems."
    },
    {
      icon: Target,
      title: "Predictive Denial Prevention",
      description: "Models eligibility, authorization, and denial risk in real time, pushing issues upstream before claims are submitted."
    },
    {
      icon: TrendingUp,
      title: "Accelerated Cash Flow",
      description: "Built to deliver >95% clean claims and <25 days in AR, accelerating cash and eliminating financial surprises."
    },
    {
      icon: RefreshCw,
      title: "Autonomous Workflows",
      description: "Self-driving billing processes that reduce manual intervention and free your team for high-value work."
    },
    {
      icon: BarChart3,
      title: "Real-Time Analytics",
      description: "Instant visibility into claim status, denial patterns, and revenue performance across your organization."
    },
    {
      icon: ShieldCheck,
      title: "Compliance Built-In",
      description: "Automated compliance checks ensure claims meet payer requirements before submission."
    }
  ];

  const outcomes = [
    { metric: ">95%", label: "Clean claim rate target" },
    { metric: "<25", label: "Days in AR target" },
    { metric: "50%+", label: "Reduction in denial rework" },
    { metric: "<3%", label: "Net denial rate" }
  ];

  const scenarios = [
    {
      title: "The Denial-Plagued Health System",
      persona: "Regional Health System, 300+ beds",
      description: "A regional health system was losing millions annually to preventable denials. Zera RCM's predictive engine identified denial patterns and pushed fixes upstream, catching issues before claims were ever submitted.",
      outcome: "40% reduction in initial denials within first 6 months"
    },
    {
      title: "The Cash-Strapped ASC",
      persona: "Multi-Specialty Ambulatory Surgery Center",
      description: "An ASC with high case volume was struggling with authorization delays and slow reimbursement. Zera RCM automated eligibility verification and prior auth tracking, dramatically accelerating the revenue cycle.",
      outcome: "Reduced days in AR from 45 to under 25"
    }
  ];

  return (
    <div className="bg-white">
      <Helmet>
        <title>Zera RCM | Epic‑Native Autonomous RCM & Denial Prevention Engine | NuScript Health</title>
        <meta name="description" content="Zera RCM from NuScript Health is a zero‑friction, Epic‑native financial clearance engine that predicts and prevents denials, automates eligibility and auth workflows, and improves clean claim rates, days in AR, and cash flow for revenue cycle leaders." />
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
                Turn Billing Into a <span className="text-teal-600">Self‑Driving System</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-slate-600 leading-relaxed mb-10"
                style={{fontSize: '20px'}}
              >
                Zera RCM is a zero-friction, Epic-native financial clearance engine that autonomously predicts and prevents denials, accelerates cash, and delivers the revenue performance your organization deserves.
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
                  href="mailto:hello@nuscripthealth.com?subject=Zera%20Flow%20Deck%20Request"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gray-200 hover:bg-gray-300 text-slate-900 font-semibold rounded-full border border-gray-300 transition-all"
                >
                  Get the Zera RCM Deck
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
                <span className="text-3xl font-semibold tracking-tight" style={{color: '#475569'}}>RCM</span>
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
                Autonomous Revenue Cycle Management
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Zera RCM is not another RCM dashboard—it is an autonomous engine that predicts problems, prevents denials, and optimizes your revenue cycle without constant human intervention.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                Built for CFOs and revenue cycle leaders who want predictable cash flow, not endless workarounds.
              </p>
              <div className="flex items-center gap-4">
                <div className="flex -space-x-2">
                  <div className="w-10 h-10 rounded-full bg-blue-100 border-2 border-white flex items-center justify-center">
                    <DollarSign className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="w-10 h-10 rounded-full bg-blue-100 border-2 border-white flex items-center justify-center">
                    <BarChart3 className="w-5 h-5 text-blue-600" />
                  </div>
                </div>
                <span className="text-slate-600 text-sm">
                  Built for CFOs, Revenue Cycle Leaders, and Hospital Admins
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
                      <h4 className="text-slate-900 font-semibold mb-1">Predict</h4>
                      <p className="text-slate-600 text-sm">Model denial risk before claims are submitted</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-blue-600 font-bold text-sm">2</span>
                    </div>
                    <div>
                      <h4 className="text-slate-900 font-semibold mb-1">Prevent</h4>
                      <p className="text-slate-600 text-sm">Push issues upstream, fix before submission</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-blue-600 font-bold text-sm">3</span>
                    </div>
                    <div>
                      <h4 className="text-slate-900 font-semibold mb-1">Automate</h4>
                      <p className="text-slate-600 text-sm">Self-driving workflows for eligibility, auth, and follow-up</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-blue-600 font-bold text-sm">4</span>
                    </div>
                    <div>
                      <h4 className="text-slate-900 font-semibold mb-1">Accelerate</h4>
                      <p className="text-slate-600 text-sm">Faster reimbursement, predictable cash flow</p>
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
            title="Financial Performance That Matters"
            description="Zera RCM is designed to deliver the metrics CFOs and revenue cycle leaders care about."
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
            title="Built for Modern Revenue Cycle Teams"
            description="Every feature designed to reduce manual work and accelerate cash."
            dark={false}
          />
          <FeatureGrid features={features} columns={3} />
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-24 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeader
            eyebrow="Innovation in Progress"
            title="Zera RCM: The Future of Revenue Cycle"
            description="We are actively building and refining Zera RCM alongside healthcare providers and revenue cycle teams. Early adopters will help shape the roadmap and gain a real competitive edge as autonomous RCM becomes the new standard."
            dark={false}
          />
          <div className="mt-12 inline-block">
            <a href="mailto:hello@nuscripthealth.com?subject=Zera%20Flow%20Early%20Access" className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full transition-all hover:shadow-lg">
              Request Early Access
            </a>
          </div>
        </div>
      </section>

      {/* For CFOs */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-blue-600 text-sm font-semibold tracking-wider uppercase mb-4 block">For Financial Leaders</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                What Early CFO Design Partners Get with Zera RCM
              </h2>
              <div className="space-y-4">
                {[
                  "Early access to real-time revenue visibility dashboards",
                  "Direct input into denial prevention and automation design",
                  "Integration patterns that respect Epic and existing workflows",
                  "A combined team of RCM experts and autonomous AI",
                  "A clear ROI model focused on days in AR and denial reduction"
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
              <div className="text-blue-600 text-sm font-semibold mb-4">THE PROBLEM</div>
              <div className="text-5xl font-bold text-slate-900 mb-4">$262B</div>
              <p className="text-slate-600 leading-relaxed">
                in annual claim denials across the US healthcare system. Zera RCM's predictive engine helps you avoid becoming part of that statistic.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Epic Integration */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-12 border border-gray-200">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-blue-600 text-sm font-semibold tracking-wider uppercase mb-4 block">Epic-Aware Workflows</span>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">
                    Built to Work With Your EHR
                  </h2>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Zera RCM is designed to integrate deeply with Epic RCM workflows—not sit beside them. Our Epic-native approach means your teams work within familiar systems while gaining autonomous capabilities.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-slate-700">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                    Native Epic workflow integration
                  </li>
                  <li className="flex items-center gap-3 text-slate-700">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                    Bi-directional data synchronization
                  </li>
                  <li className="flex items-center gap-3 text-slate-700">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                    Minimal training required for adoption
                  </li>
                </ul>
              </div>
              <div className="flex items-center justify-center">
                <div className="w-48 h-48 bg-blue-100 rounded-full flex items-center justify-center border border-blue-200">
                  <div className="text-center">
                            <div className="text-4xl font-bold text-slate-900">Epic</div>
                            <div className="text-slate-600 text-sm">Native Integration</div>
                          </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Ready to Transform Your Revenue Cycle?"
        description="See how Zera RCM can deliver predictable cash flow and eliminate denial chaos."
        primaryCTA={{ text: "Get Early Access", href: createPageUrl("ContactDemo") }}
        secondaryCTA={{ text: "Get the Zera RCM Deck", href: "mailto:hello@nuscripthealth.com?subject=Zera%20Flow%20Deck" }}
      />
    </div>
  );
}