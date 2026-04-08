import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Mail, Phone } from "lucide-react";

export default function PrivacyPolicy() {
  const sections = [
    {
      title: "HIPAA and Business Associate Status",
      content: "NuScript Health primarily operates as a Business Associate (as defined by HIPAA) when providing services to healthcare providers. Our handling of Protected Health Information (PHI) is governed by specific Business Associate Agreements (BAAs) with our clients, which take precedence over this Privacy Policy in the event of a conflict."
    },
    {
      title: "Information We Collect",
      items: [
        {
          label: "ZERA Scribe Data",
          description: "We collect audio recordings or transcripts of clinical encounters to generate documentation. Audio data is processed in real-time. Depending on client configuration, audio files may be deleted immediately following transcript generation to ensure maximum privacy (\"Zero-Retention\" mode)."
        },
        {
          label: "ZERA RCM Data",
          description: "We collect clinical documentation, ICD/CPT codes, and financial remittance data (835/277 files) to automate RCM workflows."
        },
        {
          label: "User Account Information",
          description: "Standard contact and billing details for platform access."
        },
        {
          label: "Automatically Collected Information",
          description: "IP addresses, device identifiers, and usage logs via our website and EHR-integrated \"Smart on FHIR\" applications."
        }
      ]
    },
    {
      title: "How We Use Your Information (The AI Provision)",
      intro: "In addition to standard operational uses, we use information to:",
      items: [
        {
          label: "Train and Optimize ZERA™ Models",
          description: "We use de-identified, aggregated data to improve the accuracy of our ambient listening and autonomous coding engines. We do not use identifiable PHI to train models accessible by other clients."
        },
        {
          label: "Closed-Loop Analysis",
          description: "We link clinical intent (from Scribe) to financial outcomes (from Flow) to provide predictive denial analytics."
        },
        {
          label: "EHR Integration",
          description: "To sync generated notes and codes directly into your system of record (e.g., Epic, Oracle/Cerner)."
        }
      ]
    },
    {
      title: "Data Sharing and Disclosure",
      intro: "We do not sell or rent personal data. We share information only with:",
      items: [
        {
          label: "EHR Partners",
          description: "To facilitate the transfer of clinical and billing data."
        },
        {
          label: "Sub-Processors",
          description: "HIPAA-compliant hosting (e.g., AWS/Azure) and specialized AI infrastructure partners bound by BAAs and strict confidentiality."
        },
        {
          label: "Audit & Compliance",
          description: "To legal authorities when required by law or for SOC2/HIPAA compliance audits."
        }
      ]
    },
    {
      title: "Data Security & AI Governance",
      intro: "We implement institutional-grade safeguards, including:",
      items: [
        {
          label: "Encryption",
          description: "Data is encrypted at rest (AES-256) and in transit (TLS 1.2+)."
        },
        {
          label: "De-identification",
          description: "Utilization of industry-standard de-identification protocols for any data used in research or platform-wide model optimization."
        },
        {
          label: "Access Control",
          description: "Role-based access control (RBAC) ensuring only authorized personnel interact with sensitive datasets."
        }
      ]
    },
    {
      title: "Data Retention",
      items: [
        {
          label: "Clinical Audio",
          description: "Retained only for the duration necessary to produce a verified transcript (often < 24 hours), unless otherwise specified by the Provider BAA."
        },
        {
          label: "Financial Records",
          description: "Retained in accordance with federal healthcare record retention requirements (typically 7–10 years)."
        }
      ]
    },
    {
      title: "California and State-Specific Notices",
      content: "At this time, NuScript Systems, Inc. dba NuScript Health does not meet the legal thresholds to be subject to the California Consumer Privacy Act (CCPA) or California Privacy Rights Act (CPRA). However, we are committed to protecting the privacy of all our users and will continue to monitor our business activities for compliance with all applicable privacy laws. If you are a California resident and have questions or concerns about your data, please contact us at the information below. We monitor the \"CCPA/CPRA\" thresholds and \"Colorado Privacy Act\" (CPA) requirements. Our HIPAA-exempt status for PHI remains the primary governance framework for clinical data."
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      <Helmet>
        <title>Privacy Policy | NuScript Health ZERA Scribe & Flow Clinical‑to‑Financial AI Platform</title>
        <meta name="description" content="Read NuScript Health's Privacy Policy covering ZERA Scribe and ZERA RCM, including HIPAA Business Associate status, PHI handling, data retention, AI model training, security controls, sub‑processors, and state‑specific privacy notices." />
      </Helmet>
      {/* Hero */}
      <section className="relative pt-20 pb-12 lg:pt-32 lg:pb-16 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-6">
              Privacy Policy
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl">
              Effective Date: August 14, 2025 (Updated January 16, 2026)
            </p>
          </div>
        </motion.div>
      </section>

      {/* Content */}
      <section className="py-12 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Introduction</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              NuScript Systems, Inc., doing business as NuScript Health ("NuScript Health", "we", "us", or "our") provides a Clinical-to-Financial AI platform. This Privacy Policy describes how we handle personal information across our website and our two core product suites: <span className="font-semibold">ZERA™ Scribe</span> (Ambient Clinical Intelligence) and <span className="font-semibold">ZERA™ Flow</span> (Autonomous Revenue Cycle Management).
            </p>
          </motion.div>

          {/* Main Sections */}
          <div className="space-y-12">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  {index + 1}. {section.title}
                </h2>

                {section.content && (
                  <p className="text-slate-600 leading-relaxed mb-4">
                    {section.content}
                  </p>
                )}

                {section.intro && (
                  <p className="text-slate-600 leading-relaxed mb-4">
                    {section.intro}
                  </p>
                )}

                {section.items && (
                  <ul className="space-y-4">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex gap-4">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center h-6 w-6 rounded-full bg-blue-100">
                            <span className="text-blue-600 text-sm font-semibold">•</span>
                          </div>
                        </div>
                        <div>
                          <h3 className="font-semibold text-slate-900 mb-1">
                            {item.label}
                          </h3>
                          <p className="text-slate-600">
                            {item.description}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
          </div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 pt-12 border-t border-gray-200"
          >
            <h2 className="text-2xl font-bold text-slate-900 mb-8">
              8. Contact Information
            </h2>
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
              <div className="space-y-6">
                <div>
                  <p className="font-semibold text-slate-900 mb-2">
                    NuScript Systems, Inc. dba NuScript Health
                  </p>
                  <p className="text-slate-600">
                    Attn: Privacy Officer
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-blue-600" />
                  <a
                    href="mailto:hello@nuscripthealth.com"
                    className="text-blue-600 hover:text-blue-700 font-medium"
                  >
                    hello@nuscripthealth.com
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}