import { motion } from "motion/react";
import { Check } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Describe your idea",
    description: "Enter a topic, a link, or a raw thought. Our AI will brainstorm the perfect angle for your video."
  },
  {
    number: "02",
    title: "Review the script",
    description: "Get a high-retention script in seconds. Edit it to your liking or let the AI refine it automatically."
  },
  {
    number: "03",
    title: "Generate & Polish",
    description: "AI generates the voiceover, selects the visuals, and adds captions. Preview and make final tweaks."
  },
  {
    number: "04",
    title: "Publish & Grow",
    description: "Export in 4K or publish directly to your social channels. Watch your metrics soar."
  }
];

export default function Workflow() {
  return (
    <section id="workflow" className="py-24 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
              From idea to viral <br />
              in <span className="text-blue-600">4 simple steps</span>
            </h2>
            <div className="space-y-8">
              {steps.map((step, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-6"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center text-blue-600 font-bold shadow-sm">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="aspect-square rounded-3xl bg-linear-to-br from-blue-500 to-purple-600 p-8 flex items-center justify-center shadow-2xl">
              <div className="w-full h-full bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 flex flex-col p-6">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex gap-2">
                    <div className="w-2 h-2 rounded-full bg-white/40" />
                    <div className="w-2 h-2 rounded-full bg-white/40" />
                    <div className="w-2 h-2 rounded-full bg-white/40" />
                  </div>
                  <div className="px-3 py-1 rounded-full bg-white/20 text-[10px] text-white font-medium">
                    Processing... 85%
                  </div>
                </div>
                
                <div className="space-y-4 flex-1">
                  <div className="h-4 w-3/4 bg-white/20 rounded" />
                  <div className="h-4 w-1/2 bg-white/20 rounded" />
                  <div className="h-32 w-full bg-white/10 rounded-xl border border-white/10 flex items-center justify-center">
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                    >
                      <Check className="w-12 h-12 text-white" />
                    </motion.div>
                  </div>
                  <div className="h-4 w-full bg-white/20 rounded" />
                </div>
              </div>
            </div>
            
            {/* Floating Card */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 max-w-[240px]"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                  <Check className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <div className="text-sm font-bold">Video Ready</div>
                  <div className="text-[10px] text-slate-400">Exported in 4K</div>
                </div>
              </div>
              <div className="text-xs text-slate-500 leading-relaxed">
                "This script is optimized for 85% average view duration."
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
