import React, { useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { ArrowRight, CheckCircle, AlertCircle } from "lucide-react";
import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import AnimatedDataViz from "@/components/shared/AnimatedDataViz";

export default function ContactDemo() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    role: "",
    organizationType: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name, value) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("https://formspree.io/f/mdawzyyk", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(formData) }); if (!response.ok) throw new Error("Failed to submit");
      
      // For now, just show success since we're using mailto
      setSubmitted(true);
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        company: "",
        role: "",
        organizationType: "",
        message: "",
      });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      setError("Failed to submit. Please try again or email us directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white min-h-screen">
      <Helmet>
        <title>Schedule a Zera Demo | Ambient AI Scribe & Autonomous RCM Walkthrough | NuScript Health</title>
        <meta name="description" content="Schedule a live demo with NuScript Health to see Zera Scribe and Zera RCM in action, get answers on integrations, security, and implementation, and learn how ambient AI documentation and autonomous RCM can accelerate your practice or health system within 30–60 days." />
      </Helmet>
      {/* Hero */}
      <section className="relative overflow-hidden pt-20 pb-24 lg:pt-32 lg:pb-36 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        {/* Grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        />
        
        {/* Animated data visualization */}
        <AnimatedDataViz />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-6">
              See <span className="text-teal-600">Zera</span> in Action
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl">
              Talk with our team about how ambient AI documentation and autonomous RCM can transform your practice or health system.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Form Section */}
      <section className="py-12 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left Column - Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Get in Touch</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Quick Response</h3>
                  <p className="text-slate-600">
                    Our team typically responds within 24 hours during business days.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Direct Contact</h3>
                  <p className="text-slate-600 mb-3">
                    Prefer to call? Reach out directly:
                  </p>
                  <a href="tel:+18007737499" className="text-blue-600 hover:text-blue-700 font-medium">
                    (800) 773-7499
                  </a>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Email</h3>
                  <a 
                    href="mailto:hello@nuscripthealth.com"
                    className="text-blue-600 hover:text-blue-700 font-medium"
                  >
                    hello@nuscripthealth.com
                  </a>
                </div>

                <div className="pt-8 border-t border-gray-200">
                  <p className="text-sm text-slate-500">
                    Questions about implementation, security, or integrations? Our team has deep expertise across health systems, surgery centers, and independent practices.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center"
                >
                  <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-green-900 mb-2">Thanks for reaching out!</h3>
                  <p className="text-green-800">
                    We'll be in touch within 24 hours to schedule your personalized walkthrough.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-slate-900 mb-2">
                      Full Name *
                    </label>
                    <Input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Jane Smith"
                      required
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-900 mb-2">
                      Email *
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="jane@healthcare.com"
                      required
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-900 mb-2">
                      Phone
                    </label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 000-0000"
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-900 mb-2">
                      Organization *
                    </label>
                    <Input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your Health System"
                      required
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-900 mb-2">
                      Your Role *
                    </label>
                    <Select value={formData.role} onValueChange={(value) => handleSelectChange("role", value)}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select your role" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="physician">Physician / Clinician</SelectItem>
                        <SelectItem value="cmio">CMIO / Clinical Leader</SelectItem>
                        <SelectItem value="cfo">CFO / Financial Leader</SelectItem>
                        <SelectItem value="coo">COO / Operations Leader</SelectItem>
                        <SelectItem value="practice_owner">Practice Owner</SelectItem>
                        <SelectItem value="it_director">IT Director / IT Leadership</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-900 mb-2">
                      Organization Type *
                    </label>
                    <Select value={formData.organizationType} onValueChange={(value) => handleSelectChange("organizationType", value)}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select organization type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="health_system">Health System / Hospital</SelectItem>
                        <SelectItem value="asc">Ambulatory Surgery Center</SelectItem>
                        <SelectItem value="independent_practice">Independent Practice</SelectItem>
                        <SelectItem value="large_group">Large Medical Group</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-900 mb-2">
                      Tell us more (optional)
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="What challenges are you looking to solve? Any specific questions?"
                      className="w-full h-32"
                    />
                  </div>

                  {error && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex items-start gap-3 p-4 bg-red-50 border border-red-200 rounded-lg"
                    >
                      <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <p className="text-red-800 text-sm">{error}</p>
                    </motion.div>
                  )}

                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-all"
                  >
                    {loading ? "Sending..." : "Send Inquiry"}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>

                  <p className="text-xs text-slate-500 text-center">
                    We'll never share your information. Read our <a href={createPageUrl("PrivacyPolicy")} className="text-blue-600 hover:underline">privacy policy</a>.
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
            Common Questions
          </h2>

          <div className="space-y-6">
            {[
              {
                q: "How long is a typical walkthrough?",
                a: "Most demos are 30-45 minutes. We'll tailor it to your specific role and focus area—clinical documentation, revenue cycle, or both."
              },
              {
                q: "Do you work with my EHR?",
                a: "Epic support is in active development with early partners, and we're expanding to other major EHRs. Share your EHR during the demo."
              },
              {
                q: "What's the typical implementation timeline?",
                a: "Most deployments are live within 30-60 days, depending on scope and your team's availability for setup and training."
              },
              {
                q: "Is Zera HIPAA compliant?",
                a: "Yes. We're SOC 2 certified and maintain HIPAA-aligned controls. Security and compliance details will be shared during your demo."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 border border-gray-200"
              >
                <h3 className="font-semibold text-slate-900 mb-3">{faq.q}</h3>
                <p className="text-slate-600">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}