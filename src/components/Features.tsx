import { motion } from "motion/react";
import { 
  FileText, 
  Mic2, 
  Video, 
  Type, 
  Share2, 
  Zap 
} from "lucide-react";
import { Card, CardContent } from "./ui/card";

const features = [
  {
    title: "AI Script Generation",
    description: "Our AI analyzes trending topics and writes high-retention scripts tailored for your niche.",
    icon: FileText,
    color: "text-blue-600",
    bg: "bg-blue-50"
  },
  {
    title: "Pro Voiceovers",
    description: "Choose from 100+ hyper-realistic AI voices in 30+ languages. No studio needed.",
    icon: Mic2,
    color: "text-purple-600",
    bg: "bg-purple-50"
  },
  {
    title: "Smart Video Editing",
    description: "Automatic scene selection, transitions, and B-roll integration that matches your script.",
    icon: Video,
    color: "text-indigo-600",
    bg: "bg-indigo-50"
  },
  {
    title: "Dynamic Captions",
    description: "Eye-catching, animated captions that keep viewers engaged and improve watch time.",
    icon: Type,
    color: "text-pink-600",
    bg: "bg-pink-50"
  },
  {
    title: "One-Click Publishing",
    description: "Schedule and post directly to YouTube Shorts, Instagram Reels, and TikTok.",
    icon: Share2,
    color: "text-orange-600",
    bg: "bg-orange-50"
  },
  {
    title: "Viral Optimization",
    description: "AI-generated titles, descriptions, and tags designed to beat the algorithm.",
    icon: Zap,
    color: "text-yellow-600",
    bg: "bg-yellow-50"
  }
];

export default function Features() {
  return (
    <section id="features" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Everything you need to <br />
            <span className="gradient-text">Go Viral</span>
          </h2>
          <p className="text-slate-600 text-lg">
            Stop spending hours on editing. Let our AI agent handle the heavy lifting 
            while you focus on your strategy.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full border-slate-100 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/5 transition-all group">
                <CardContent className="p-8">
                  <div className={`w-12 h-12 rounded-xl ${feature.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <feature.icon className={`w-6 h-6 ${feature.color}`} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
