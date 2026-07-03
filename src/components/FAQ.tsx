import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { HelpCircle, ChevronDown, ChevronUp } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What is Asam FX's core trading style?",
    answer: "Our execution model is strictly built on Price Action and Smart Money Concepts (SMC/ICT). Rather than relying on lagging retail indicator systems, we trace structural buy/sell zones, premium/discount price levels, and institutional liquidity sweeps (buying below sell-side liquidity pools and selling above buy-side liquidity pools).",
  },
  {
    question: "How does the 1-on-1 Elite Mentorship program work?",
    answer: "The Elite Mentorship program is a comprehensive 12-week blueprint designed to build you into an independent, rules-authoritative capital allocator. It includes our full core curriculum, daily live trading sessions, weekly private trade reviews via Zoom, customized portfolio checklists, and full preparation to pass prop firm evaluations.",
  },
  {
    question: "What are your strict risk management protocols?",
    answer: "Protection of capital is our absolute priority. We limit our maximum risk exposure per trade to 0.5% - 1.0% of the total account balance. Every position is immediately protected by a hard stop-loss. We maintain a minimum risk-reward ratio target of 1:3, allowing us to remain highly profitable even with a lower win rate.",
  },
  {
    question: "Is there a minimum account size required to join your signals?",
    answer: "No minimum capital is required, as the setups are executed as percentage models. However, to sustainably cover subscription overheads, we generally recommend using at least a $5,000 personal account or a $50,000+ prop firm challenge account.",
  },
  {
    question: "How do you handle trading psychology and losing streaks?",
    answer: "We treat trading as an absolute numbers game and losses as standard business overhead. To prevent psychological interference, we utilize rigid checklists. If we suffer 2 consecutive losses in any single session, we immediately close our charts and stand flat until the next session, eliminating revenge-trading risk entirely.",
  },
  {
    question: "Are your signals copy-paste friendly or do they require manual study?",
    answer: "Both. We broadcast exact execution parameters including limit order prices, protective stop-loss levels, and multiple partial take-profit milestones. However, we attach a comprehensive technical chart mapping and structural summary to every alert, prompting members to understand the behind-the-scenes institutional logic.",
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 relative overflow-hidden bg-black/30" id="faq">
      {/* Background decorations */}
      <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-gold-600/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-20">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-mono tracking-[0.3em] text-gold-400 uppercase font-medium">Have Questions?</span>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold mt-2 text-white">Frequently Asked <span className="text-gradient-gold">FAQs</span></h2>
          <div className="w-12 h-1 bg-gradient-to-r from-gold-500 to-transparent mx-auto mt-4"></div>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-xl border border-white/5 overflow-hidden transition-all duration-300"
                style={{
                  background: isOpen ? "rgba(15, 15, 15, 0.8)" : "rgba(10, 10, 10, 0.4)",
                  borderColor: isOpen ? "rgba(196, 161, 78, 0.25)" : "rgba(255, 255, 255, 0.05)",
                }}
              >
                {/* Trigger Button */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-display font-bold text-white text-base sm:text-lg cursor-pointer select-none"
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle className="text-gold-400 shrink-0" size={18} />
                    <span>{item.question}</span>
                  </span>
                  <div className="p-1 rounded-md bg-white/5 text-slate-400 group-hover:text-white transition-colors shrink-0">
                    {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </div>
                </button>

                {/* Sliding Answer */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 pt-1 text-slate-400 text-xs sm:text-sm leading-relaxed font-sans border-t border-white/5 bg-black/10">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
