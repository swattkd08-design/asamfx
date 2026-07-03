import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "motion/react";
import { BookOpen, Award, CheckCircle2, ShieldCheck, Heart, Eye, Target, Compass } from "lucide-react";

interface CounterProps {
  value: number;
  suffix?: string;
  duration?: number;
}

function AnimatedCounter({ value, suffix = "", duration = 1500 }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * value));
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCount(value);
      }
    };
    requestAnimationFrame(step);
  }, [value, duration, isInView]);

  return (
    <span ref={ref} className="font-display font-extrabold text-white text-3xl sm:text-5xl">
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function About() {
  const [activeTab, setActiveTab] = useState<"bio" | "philosophy" | "values">("bio");

  const bioContent = (
    <div className="space-y-4 text-slate-300">
      <p>
        Asam FX is a distinguished institutional-grade portfolio manager and professional Forex speculator. Operating with a core foundation built on deep institutional order flow, Price Action, and ICT concepts, Asam specializes in decoding complex market structures to capture high-probability expansion cycles.
      </p>
      <p>
        Starting his trading path over eight years ago, Asam navigated the noise of conventional retail retail methodologies, discovering that true longevity lies in aligning execution alongside institutional liquidity sweeps. Today, he manages significant capital reserves across industry-leading proprietary firms while training the next generation of risk-conscious capital allocators.
      </p>
    </div>
  );

  const philosophyContent = (
    <div className="space-y-4 text-slate-300">
      <p className="italic border-l-2 border-gold-400 pl-4 py-1 text-white">
        "Trade what the banks do, not what the retail guides tell you."
      </p>
      <p>
        Asam’s core framework revolves around **Smart Money Concepts (SMC)** and **Liquidity-Based Risk Management**. He approaches the market not as a game of predictions, but as a systematic map of supply, demand, and structural imbalance.
      </p>
      <p>
        Every execution is backed by high-confluence criteria: identifying premium/discount valuations, tapping structural fair value gaps (FVG), waiting for liquidity hunts, and executing with minimal drawdown to maximize risk-reward returns.
      </p>
    </div>
  );

  const valuesContent = (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div className="glass-card p-3 rounded-lg border border-white/5">
        <h4 className="font-bold text-gold-400 mb-1 text-sm flex items-center gap-1.5">
          <ShieldCheck size={14} className="text-gold-400" /> Capital Protection First
        </h4>
        <p className="text-xs text-slate-400">Risking no more than 0.5% - 1% per transaction. Survival is the ultimate leverage.</p>
      </div>
      <div className="glass-card p-3 rounded-lg border border-white/5">
        <h4 className="font-bold text-gold-400 mb-1 text-sm flex items-center gap-1.5">
          <Compass size={14} className="text-gold-400" /> Algorithmic Consistency
        </h4>
        <p className="text-xs text-slate-400">Trading purely on rules, checklists, and cold numbers, eliminating emotional noise.</p>
      </div>
      <div className="glass-card p-3 rounded-lg border border-white/5">
        <h4 className="font-bold text-gold-400 mb-1 text-sm flex items-center gap-1.5">
          <CheckCircle2 size={14} className="text-gold-400" /> Market Transparency
        </h4>
        <p className="text-xs text-slate-400">Fully verified public performance ledger, exposing both wins and drawdowns honestly.</p>
      </div>
      <div className="glass-card p-3 rounded-lg border border-white/5">
        <h4 className="font-bold text-gold-400 mb-1 text-sm flex items-center gap-1.5">
          <Award size={14} className="text-gold-400" /> Continuous Optimization
        </h4>
        <p className="text-xs text-slate-400">Backtesting historical archives and recording comprehensive journals to refine triggers.</p>
      </div>
    </div>
  );

  return (
    <section className="py-24 relative overflow-hidden" id="about">
      {/* Background blur decorative element */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-gold-600/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-20">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-mono tracking-[0.3em] text-gold-400 uppercase font-medium">Inside The Mind Of A Trader</span>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold mt-2 text-white">About Asam <span className="text-gradient-gold">FX</span></h2>
          <div className="w-12 h-1 bg-gradient-to-r from-gold-500 to-transparent mx-auto mt-4"></div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Interactive Tabbed Panel */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex border-b border-white/5 gap-2 pb-0.5">
              {(["bio", "philosophy", "values"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 sm:px-6 py-3 font-mono text-xs uppercase tracking-wider transition-all border-b-2 cursor-pointer ${
                    activeTab === tab
                      ? "border-gold-400 text-white font-semibold"
                      : "border-transparent text-slate-400 hover:text-slate-200"
                  }`}
                >
                  {tab === "bio" ? "Biography" : tab === "philosophy" ? "Trading Thesis" : "Our Values"}
                </button>
              ))}
            </div>

            <div className="min-h-[220px] p-6 rounded-xl glass-card border border-white/5">
              {activeTab === "bio" && bioContent}
              {activeTab === "philosophy" && philosophyContent}
              {activeTab === "values" && valuesContent}
            </div>

            {/* Mission & Vision Mini Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="glass-card p-5 rounded-xl border border-white/5 flex gap-4">
                <div className="p-3 rounded-lg bg-gold-400/10 text-gold-400 h-fit">
                  <Target size={20} />
                </div>
                <div>
                  <h4 className="font-display font-bold text-white text-base">Mission</h4>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    To construct risk-authoritative market blueprints that empower modern capital allocators, transforming reactive retail traders into compound-oriented professional operators.
                  </p>
                </div>
              </div>

              <div className="glass-card p-5 rounded-xl border border-white/5 flex gap-4">
                <div className="p-3 rounded-lg bg-emerald-400/10 text-emerald-400 h-fit">
                  <Eye size={20} />
                </div>
                <div>
                  <h4 className="font-display font-bold text-white text-base">Vision</h4>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    To establish a premier decentralized private trading desk, managing top tier institutional assets while delivering verified global liquidity flow transparency.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Key Trading Achievements & Numbers */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            
            {/* Metres Card 1 */}
            <div className="glass-card p-6 rounded-xl border border-white/5 flex flex-col justify-between h-40 hover:border-gold-400/30 transition-all group cursor-default">
              <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400">Experience</span>
              <div className="my-2">
                <AnimatedCounter value={8} suffix="+" />
              </div>
              <span className="text-xs font-semibold text-gold-400">Years Speculating Markets</span>
            </div>

            {/* Metres Card 2 */}
            <div className="glass-card p-6 rounded-xl border border-white/5 flex flex-col justify-between h-40 hover:border-emerald-400/30 transition-all group cursor-default">
              <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400">Trades Executed</span>
              <div className="my-2">
                <AnimatedCounter value={8450} suffix="+" />
              </div>
              <span className="text-xs font-semibold text-emerald-400">Order Confluences Logged</span>
            </div>

            {/* Metres Card 3 */}
            <div className="glass-card p-6 rounded-xl border border-white/5 flex flex-col justify-between h-40 hover:border-emerald-400/30 transition-all group cursor-default">
              <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400">Client Base</span>
              <div className="my-2">
                <AnimatedCounter value={1200} suffix="+" />
              </div>
              <span className="text-xs font-semibold text-emerald-400">Mentored Globally</span>
            </div>

            {/* Metres Card 4 */}
            <div className="glass-card p-6 rounded-xl border border-white/5 flex flex-col justify-between h-40 hover:border-gold-400/30 transition-all group cursor-default">
              <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400">Accuracy</span>
              <div className="my-2 flex items-baseline">
                <AnimatedCounter value={85} suffix=".4%" />
              </div>
              <span className="text-xs font-semibold text-gold-400">High-Probability Accuracy</span>
            </div>

            {/* Premium Institutional Status Card */}
            <div className="col-span-2 glass-card p-5 rounded-xl border border-gold-400/20 bg-gradient-to-r from-gold-950/20 to-black select-none text-center">
              <p className="text-xs font-mono tracking-widest text-gold-400 uppercase">Verified Performance Indicator</p>
              <h4 className="text-base font-bold text-white mt-1">Proprietary Evaluation Ledger: ACTIVE</h4>
              <p className="text-[10px] text-slate-400 mt-2 max-w-sm mx-auto">
                Authorized master allocation via FTMO, FundedNext, and Maven Trading. Standard maximum daily risk: 0.5%.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
