/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Workflow from "./components/Workflow";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
import { motion, useScroll, useSpring } from "motion/react";

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen selection:bg-blue-100 selection:text-blue-900">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 gradient-bg z-[60] origin-left"
        style={{ scaleX }}
      />

      <Navbar />
      
      <main>
        <Hero />
        <Features />
        <Workflow />
        <Testimonials />
        <Pricing />
        
        {/* Final CTA Section */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-5xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="gradient-bg rounded-[2rem] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl shadow-blue-500/20"
            >
              <div className="relative z-10">
                <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
                  Ready to go viral? <br />
                  Start creating today.
                </h2>
                <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto mb-12">
                  Join thousands of creators who are scaling their presence 
                  with ShortsAI. No credit card required.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <button className="h-14 px-10 rounded-full bg-white text-blue-600 font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg">
                    Get Started for Free
                  </button>
                  <button className="h-14 px-10 rounded-full bg-white/10 backdrop-blur-md text-white font-bold text-lg border border-white/20 hover:bg-white/20 transition-colors">
                    View Pricing
                  </button>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400/20 blur-3xl rounded-full translate-y-1/2 -translate-x-1/2" />
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
