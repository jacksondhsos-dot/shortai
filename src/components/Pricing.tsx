import { motion } from "motion/react";
import { Check } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";

const plans = [
  {
    name: "Starter",
    price: "$0",
    description: "Perfect for exploring AI video creation.",
    features: [
      "5 videos per month",
      "720p Export quality",
      "Standard AI voices",
      "ShortsAI Watermark",
      "Community support"
    ],
    cta: "Get Started",
    popular: false
  },
  {
    name: "Pro",
    price: "$29",
    description: "For serious creators growing their brand.",
    features: [
      "Unlimited videos",
      "4K Export quality",
      "Premium AI voices",
      "No Watermark",
      "Direct social publishing",
      "Priority support"
    ],
    cta: "Start Free Trial",
    popular: true
  },
  {
    name: "Agency",
    price: "$99",
    description: "Scale your content production for clients.",
    features: [
      "Everything in Pro",
      "Multi-user workspace",
      "Custom brand presets",
      "API Access",
      "Dedicated account manager",
      "Bulk generation"
    ],
    cta: "Contact Sales",
    popular: false
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Simple, <span className="gradient-text">Transparent</span> Pricing
          </h2>
          <p className="text-slate-600 text-lg">
            Choose the plan that fits your content goals. No hidden fees.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className={`h-full flex flex-col relative ${plan.popular ? 'border-blue-600 shadow-xl shadow-blue-500/10' : 'border-slate-100'}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                    Most Popular
                  </div>
                )}
                <CardHeader className="pt-8">
                  <CardTitle className="text-xl mb-2">{plan.name}</CardTitle>
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-slate-500 text-sm">/month</span>
                  </div>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {plan.description}
                  </p>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-4">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-slate-600">
                        <Check className="w-4 h-4 text-blue-600 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="pb-8">
                  <Button 
                    variant={plan.popular ? "default" : "outline"} 
                    className={`w-full h-12 text-md ${plan.popular ? 'gradient-bg hover:opacity-90' : ''}`}
                  >
                    {plan.cta}
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
