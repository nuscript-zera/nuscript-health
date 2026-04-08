import React, { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import { createPageUrl } from "./utils";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { HelmetProvider } from "react-helmet-async";



export default function Layout() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [solutionsOpen, setSolutionsOpen] = useState(false);
    const [productsOpen, setProductsOpen] = useState(false);

    useEffect(() => {
      // Load Plus Jakarta Sans font
      const fontLink = document.createElement('link');
      fontLink.href = 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap';
      fontLink.rel = 'stylesheet';
      document.head.appendChild(fontLink);

      // Add typography styles
      const style = document.createElement('style');
      style.textContent = `
        * {
          font-family: 'Plus Jakarta Sans', sans-serif;
        }
        h1 {
          font-weight: 800;
          font-size: clamp(48px, 8vw, 64px);
          line-height: 1.2;
          letter-spacing: -0.03em;
        }
        p, body {
          font-weight: 400;
          font-size: 18px;
          line-height: 1.6;
          font-variant-numeric: tabular-nums;
        }
        small, .caption {
          font-weight: 500;
          font-size: 14px;
          line-height: 1.5;
          font-variant-numeric: tabular-nums;
        }
        button, .btn {
          font-weight: 700;
          text-transform: none;
          letter-spacing: 0;
        }
        table, .data-table {
          font-weight: 400;
          font-variant-numeric: tabular-nums;
        }
      `;
      document.head.appendChild(style);
    }, []);

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [currentPageName]);

  const navigation = [
    { 
      name: "Products", 
      hasDropdown: true,
      items: [
        { name: "ZERA Scribe", page: "ZeraScribe" },
        { name: "ZERA RCM", page: "ZeraFlow" },
      ]
    },
    { 
      name: "Solutions", 
      hasDropdown: true,
      items: [
        { name: "Ambulatory Surgery Centers", page: "SolutionsASC" },
        { name: "Independent Practices", page: "SolutionsPractices" },
      ]
    },
    { name: "How It Works", page: "HowItWorks" },
    { name: "Why NuScript", page: "WhyNuScript" },
  ];

  return (
    <HelmetProvider>
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
              <Link to={createPageUrl("Home")} className="flex items-center">
                <img 
                  src="/images/nuscripthealth-logo.png" 
                  alt="NuScript Health" 
                  className="h-9 object-contain"
                />
              </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navigation.map((item) => (
                item.hasDropdown ? (
                  <div 
                    key={item.name} 
                    className="relative"
                    onMouseEnter={() => item.name === "Products" ? setProductsOpen(true) : setSolutionsOpen(true)}
                    onMouseLeave={() => item.name === "Products" ? setProductsOpen(false) : setSolutionsOpen(false)}
                  >
                    <button className="flex items-center gap-1 px-4 py-2 text-slate-600 hover:text-slate-900 transition-colors text-base font-medium">
                      {item.name}
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    <AnimatePresence>
                      {(item.name === "Products" ? productsOpen : solutionsOpen) && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.15 }}
                          className="absolute top-full left-0 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 mt-1"
                        >
                          {item.items.map((subItem) => (
                            <Link
                              key={subItem.page}
                              to={createPageUrl(subItem.page)}
                              className="block px-4 py-2.5 text-slate-600 hover:text-slate-900 hover:bg-blue-50 text-base font-medium transition-colors"
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={item.name}
                    to={createPageUrl(item.page)}
                    className={`px-4 py-2 text-base font-medium transition-colors ${
                      currentPageName === item.page 
                        ? "text-blue-600" 
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    {item.name}
                  </Link>
                )
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Link 
                to={createPageUrl("ContactDemo")}
                className="inline-flex items-center px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm rounded-full transition-all hover:shadow-lg hover:shadow-blue-600/30"
              >
                Request Early Access
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-400 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-slate-900" /> : <Menu className="w-6 h-6 text-slate-900" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-gray-50 border-t border-gray-200"
            >
              <div className="px-4 py-4 space-y-1">
                {navigation.map((item) => (
                  item.hasDropdown ? (
                    <div key={item.name} className="space-y-1">
                      <div className="px-3 py-2 text-slate-500 text-xs font-semibold uppercase tracking-wider">
                        {item.name}
                      </div>
                      {item.items.map((subItem) => (
                        <Link
                          key={subItem.page}
                          to={createPageUrl(subItem.page)}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block px-3 py-2 text-slate-600 hover:text-slate-900 text-sm"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <Link
                      key={item.name}
                      to={createPageUrl(item.page)}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-3 py-2 text-slate-600 hover:text-slate-900 text-sm"
                    >
                      {item.name}
                    </Link>
                  )
                ))}
                <div className="pt-4">
                  <Link 
                    to={createPageUrl("ContactDemo")}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block w-full text-center px-5 py-2.5 bg-blue-600 text-white font-medium text-sm rounded-full"
                  >
                    Request Early Access
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Main Content */}
      <main className="pt-16 lg:pt-20">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {/* Brand */}
            <div className="col-span-2 md:col-span-2">
              <Link to={createPageUrl("Home")}>
                <img 
                  src="/images/nuscripthealth-wordmark.png" 
                  alt="NuScript" 
                  className="h-7 mb-4 cursor-pointer hover:opacity-80 transition-opacity"
                />
              </Link>
              <p className="text-gray-400 leading-relaxed mb-4" style={{fontSize: '14px'}}>
                The Clinical-to-Financial AI Platform
              </p>
              <p className="text-gray-400" style={{fontSize: '14px'}}>
                Unified Ambient Intelligence and Autonomous RCM
              </p>
              <div className="flex items-center gap-4 mt-6">
                <a 
                  href="https://www.linkedin.com/company/nuscripthealth" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors"
                >
                  <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a 
                  href="https://twitter.com/nuscripthealth" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors"
                >
                  <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a 
                  href="mailto:hello@nuscripthealth.com" 
                  className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors"
                >
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
              </div>
              </div>

            {/* Products */}
            <div>
              <div className="text-slate-300 font-medium mb-4 text-base">Products</div>
              <div className="space-y-3">
                <Link to={createPageUrl("ZeraScribe")} className="block text-gray-400 hover:text-blue-400 transition-colors" style={{fontSize: '14px'}}>
                  ZERA Scribe
                </Link>
                <Link to={createPageUrl("ZeraFlow")} className="block text-gray-400 hover:text-blue-400 transition-colors" style={{fontSize: '14px'}}>
                  ZERA RCM
                </Link>
                <Link to={createPageUrl("HowItWorks")} className="block text-gray-400 hover:text-blue-400 transition-colors" style={{fontSize: '14px'}}>
                  How It Works
                </Link>
              </div>
            </div>

            {/* Solutions */}
            <div>
              <div className="text-slate-300 font-medium mb-4 text-base">Solutions</div>
              <div className="space-y-3">
                <Link to={createPageUrl("SolutionsASC")} className="block text-gray-400 hover:text-blue-400 transition-colors" style={{fontSize: '14px'}}>
                  Ambulatory Surgery Centers
                </Link>
                <Link to={createPageUrl("SolutionsPractices")} className="block text-gray-400 hover:text-blue-400 transition-colors" style={{fontSize: '14px'}}>
                  Independent Practices
                </Link>
              </div>
            </div>

            {/* More */}
            <div>
              <div className="text-slate-300 font-medium mb-4 text-base">More</div>
              <div className="space-y-3">
                <Link to={createPageUrl("WhyNuScript")} className="block text-gray-400 hover:text-blue-400 transition-colors" style={{fontSize: '14px'}}>
                  Why NuScript
                </Link>
                <Link to={createPageUrl("PrivacyPolicy")} className="block text-gray-400 hover:text-blue-400 transition-colors" style={{fontSize: '14px'}}>
                  Privacy Policy
                </Link>
                <Link to={createPageUrl("TermsOfUse")} className="block text-gray-400 hover:text-blue-400 transition-colors" style={{fontSize: '14px'}}>
                  Terms of Use
                </Link>
                <Link to={createPageUrl("ContactDemo")} className="block text-gray-400 hover:text-blue-400 transition-colors" style={{fontSize: '14px'}}>
                  Contact Us
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-800">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-8 mb-8">
              <div className="flex flex-col gap-2">
                <p className="text-slate-500" style={{fontSize: '13px'}}>
                    © 2026 NuScript Systems, Inc. dba NuScript Health. ZERA™ is a trademark of NuScript Systems, Inc. All rights reserved.
                  </p>

              </div>
              <div className="flex items-center gap-4">
                <p className="text-gray-500" style={{fontSize: '13px'}}>Trusted and Certified</p>
                <img 
                  src="/images/soc2-badge.png" 
                  alt="SOC 2 Certified" 
                  className="h-14 object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </footer>
      </div>
      </HelmetProvider>
      );
      }