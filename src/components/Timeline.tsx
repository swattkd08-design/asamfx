import { ReactNode } from "react";
import { motion } from "motion/react";
import { Award, Compass, TrendingUp, Layers, CheckCircle, Zap } from "lucide-react";

interface TimelineEvent {
  year: string;
  title: string;
  role: string;
  desc: string;
  icon: ReactNode;
  tag: string;
}

const timelineData: TimelineEvent[] = [
  {
    year: "2018",
    title: "The Speculative Spark",
    role: "Retail Indicator Trainee",
    desc: "Began trading using retail guides, chart patterns, MACD, and EMAs. Faced the typical retail drawdowns, margin calls, and over-leveraged accounts, realizing retail books lag central market liquidity rules.",
    icon: <Compass size={18} />,
    tag: "The Spark",
  },
  {
    year: "2020",
    title: "The Structural Paradigm Shift",
    role: "Order Flow Investigator",
    desc: "Cleared all indicators from templates. Dedicated a full year to studying raw price structures, volume footprints, and order block imbalances, shifting completely to Smart Money Concepts (SMC) and Price Action.",
    icon: <Layers size={18} />,
    tag: "Paradigm Shift",
  },
  {
    year: "2021",
    title: "Prop Capital Alignment",
    role: "Funded Operator ($100K)",
    desc: "Passed the rigorous 2-step FTMO assessment, securing a $100,000 active fund allocation. Standardized a solid 0.5% risk rule-set and secured consistent bi-weekly profit withdrawals.",
    icon: <Award size={18} />,
    tag: "First Payouts",
  },
  {
    year: "2023",
    title: "Scaling Capital Horizons",
    role: "Multi-Account Fund Manager ($500K+)",
    desc: "Expanded funded capital across FundedNext, Maven, and MyFundedFX, scaling active portfolios to over $500,000. Established the Asam FX broadcast channel, sending real-time technical analysis to over 1,000 members globally.",
    icon: <TrendingUp size={18} />,
    tag: "Portfolio Scale",
  },
  {
    year: "2025",
    title: "Seven-Figure Institutional Inception",
    role: "Elite Allocator & Mentor ($1.2M)",
    desc: "Secured private backing and scaled active prop allocations to $1.24 Million. Formally launched 1-on-1 Elite Mentorship, creating high-probability guidelines that helped 50+ students secure their first funded accounts.",
    icon: <CheckCircle size={18} />,
    tag: "Seven Figures",
  },
  {
    year: "2026",
    title: "The Automated Algorithmic Frontier",
    role: "Systematic Trader & High Frequency Scalper",
    desc: "Developing custom, server-side execution scripts to automate entry orders inside Fair Value Gaps (FVG) on XAU/USD (Gold). Achieving unprecedented lightning-fast low-latency fill accuracy.",
    icon: <Zap size={18} />,
    tag: "Present Era",
  },
];

export default function Timeline() {
  return (
    <section className="py-24 relative overflow-hidden" id="journey">
      {/* Decorative blurred background circles */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gold-600/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-20">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="text-xs font-mono tracking-[0.3em] text-gold-400 uppercase font-medium">Trajectory & Evolution</span>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold mt-2 text-white">Trading <span className="text-gradient-gold">Journey</span></h2>
          <div className="w-12 h-1 bg-gradient-to-r from-gold-500 to-transparent mx-auto mt-4"></div>
        </div>

        {/* Timeline Structure */}
        <div className="relative border-l border-white/5 md:border-l-0 md:flex md:flex-col md:items-center">
          
          {/* Vertical Center Line on Desktop */}
          <div className="absolute left-[23px] md:left-1/2 top-0 bottom-0 w-px bg-white/5 transform md:-translate-x-1/2 hidden md:block"></div>

          {/* Timeline Nodes */}
          <div className="space-y-12 w-full">
            {timelineData.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div 
                  key={index}
                  className={`flex flex-col md:flex-row relative items-start md:items-center md:justify-between w-full ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Glowing dot on center line */}
                  <div className="absolute left-[23px] md:left-1/2 top-6 md:top-1/2 w-4 h-4 rounded-full bg-[#030303] border-2 border-gold-400 z-10 transform -translate-x-[7px] md:-translate-y-2 select-none shadow-[0_0_10px_rgba(196,161,78,0.5)]"></div>

                  {/* Panel Spacer for Desktop alignment */}
                  <div className="hidden md:block w-[45%]"></div>

                  {/* Dynamic Timeline Card */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 50 : -50, y: 15 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="w-full md:w-[45%] ml-12 md:ml-0 glass-card p-6 rounded-2xl border border-white/5 relative group hover:border-gold-500/20 hover:shadow-lg hover:shadow-gold-500/5 transition-all"
                  >
                    {/* Corner Tag */}
                    <span className="absolute top-4 right-4 bg-white/5 px-2.5 py-1 rounded text-[9px] font-mono uppercase tracking-widest text-slate-400 border border-white/5">
                      {item.tag}
                    </span>

                    {/* Timeline Header */}
                    <div className="flex items-center gap-3.5 mb-3.5">
                      <div className="p-2.5 rounded-lg bg-gold-400/10 text-gold-400 group-hover:bg-gold-500 group-hover:text-black transition-colors duration-300">
                        {item.icon}
                      </div>
                      <div>
                        <span className="text-xl font-display font-black text-gold-400">{item.year}</span>
                        <h4 className="font-display font-bold text-white text-base leading-tight mt-0.5">{item.title}</h4>
                      </div>
                    </div>

                    <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase block mb-3 font-semibold">
                      {item.role}
                    </span>

                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-sans">
                      {item.desc}
                    </p>
                  </motion.div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
