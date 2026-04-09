import { motion } from "motion/react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Alex Rivera",
    role: "YouTube Creator",
    image: "https://picsum.photos/seed/alex/100/100",
    content: "ShortsAI has completely changed my workflow. I used to spend 5 hours per video, now it's done in 10 minutes. My channel grew by 50k subs in a month!",
    stars: 5
  },
  {
    name: "Sarah Chen",
    role: "Marketing Director",
    image: "https://picsum.photos/seed/sarah/100/100",
    content: "The AI voices are indistinguishable from real humans. We've scaled our brand's Instagram presence 10x without hiring a single editor.",
    stars: 5
  },
  {
    name: "Marcus Thorne",
    role: "TikTok Influencer",
    image: "https://picsum.photos/seed/marcus/100/100",
    content: "The dynamic captions are fire. Engagement is through the roof because people can't stop watching. Best investment for my business this year.",
    stars: 5
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Loved by <span className="gradient-text">10,000+</span> Creators
          </h2>
          <p className="text-slate-600 text-lg">
            Don't just take our word for it. Here's what the community is saying.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(t.stars)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-slate-700 leading-relaxed mb-8 italic">
                "{t.content}"
              </p>
              <div className="flex items-center gap-4">
                <Avatar className="w-12 h-12 border border-slate-100">
                  <AvatarImage src={t.image} referrerPolicy="no-referrer" />
                  <AvatarFallback>{t.name[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-bold text-slate-900">{t.name}</div>
                  <div className="text-xs text-slate-500">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
