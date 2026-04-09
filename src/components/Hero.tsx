import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Play, Sparkles, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-200/30 blur-[120px] rounded-full" />
        <div className="absolute bottom-[10%] right-[-10%] w-[40%] h-[40%] bg-purple-200/30 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-semibold mb-6">
            <Sparkles className="w-3 h-3" />
            <span>AI-Powered Video Revolution</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-[1.1]">
            Turn your ideas into <br />
            <span className="gradient-text">Viral Shorts</span> in seconds.
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            The all-in-one AI agent that handles scriptwriting, voiceovers, 
            editing, and captions. Grow your audience on YouTube and Instagram without lifting a finger.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button size="lg" className="h-14 px-8 text-lg gradient-bg hover:opacity-90 shadow-lg shadow-blue-500/20">
              Start Creating Free
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-8 text-lg border-slate-200 hover:bg-slate-50">
              <Play className="mr-2 w-5 h-5 fill-current" />
              Watch Demo
            </Button>
          </div>
        </motion.div>

        {/* Dashboard Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative max-w-5xl mx-auto"
        >
          <div className="rounded-2xl border border-slate-200 bg-white p-2 shadow-2xl overflow-hidden">
            <div className="rounded-xl border border-slate-100 bg-slate-50 aspect-video flex items-center justify-center relative overflow-hidden">
              {/* Simulated UI Elements */}
              <div className="absolute top-4 left-4 right-4 flex justify-between items-center">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="px-3 py-1 bg-white rounded-md border border-slate-200 text-[10px] font-mono text-slate-400">
                  shorts-ai.app/dashboard
                </div>
              </div>

              <div className="grid grid-cols-12 gap-4 w-full h-full p-12 pt-16">
                <div className="col-span-3 space-y-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="h-8 bg-white rounded-md border border-slate-200 animate-pulse" />
                  ))}
                </div>
                <div className="col-span-6 bg-white rounded-xl border border-slate-200 shadow-sm flex flex-col p-4">
                  <div className="h-4 w-1/3 bg-slate-100 rounded mb-4" />
                  <div className="flex-1 bg-slate-50 rounded-lg border border-dashed border-slate-200 flex items-center justify-center">
                    <Play className="w-12 h-12 text-slate-300" />
                  </div>
                </div>
                <div className="col-span-3 space-y-4">
                  <div className="h-32 bg-white rounded-md border border-slate-200 p-3">
                    <div className="h-2 w-full bg-slate-100 rounded mb-2" />
                    <div className="h-2 w-2/3 bg-slate-100 rounded mb-2" />
                    <div className="h-2 w-1/2 bg-slate-100 rounded" />
                  </div>
                  <div className="h-24 bg-blue-50 rounded-md border border-blue-100 p-3">
                    <div className="h-2 w-full bg-blue-200 rounded mb-2" />
                    <div className="h-2 w-2/3 bg-blue-200 rounded" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Floating Accents */}
          <div className="absolute -top-6 -right-6 w-24 h-24 bg-purple-500/10 blur-2xl rounded-full" />
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-500/10 blur-2xl rounded-full" />
        </motion.div>
      </div>
    </section>
  );
}
