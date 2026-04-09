import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Video } from "lucide-react";

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-white/80 backdrop-blur-md border-b border-slate-200"
    >
      <div className="flex items-center gap-2">
        <div className="gradient-bg p-2 rounded-lg">
          <Video className="w-6 h-6 text-white" />
        </div>
        <span className="text-xl font-display font-bold tracking-tight">ShortsAI</span>
      </div>
      
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
        <a href="#features" className="hover:text-brand-blue transition-colors">Features</a>
        <a href="#workflow" className="hover:text-brand-blue transition-colors">Workflow</a>
        <a href="#pricing" className="hover:text-brand-blue transition-colors">Pricing</a>
        <a href="#testimonials" className="hover:text-brand-blue transition-colors">Testimonials</a>
      </div>

      <div className="flex items-center gap-4">
        <Button variant="ghost" className="hidden sm:inline-flex">Log in</Button>
        <Button className="gradient-bg hover:opacity-90 transition-opacity">Get Started</Button>
      </div>
    </motion.nav>
  );
}
