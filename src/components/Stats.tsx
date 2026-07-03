import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { TrendingUp, ShieldCheck, DollarSign, Briefcase, PlusCircle, CheckCircle } from "lucide-react";

interface CircularProgressProps {
  percentage: number;
  label: string;
  subLabel: string;
  color: "gold" | "emerald";
  duration?: number;
}

function CircularProgress({ percentage, label, subLabel, color, duration = 1500 }: CircularProgressProps) {
  const [value, setValue] = useState(0);
  const ref = useRef<SVGSVGElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setValue(progress * percentage);
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setValue(percentage);
      }
    };
    requestAnimationFrame(step);
  }, [percentage, duration, isInView]);

  const radius = 50;
  const strokeWidth = 8;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (value / 100) * circumference;

  const colorHex = color === "gold" ? "#c4a14e" : "#10b981";
  const glowShadow = color === "gold" ? "drop-shadow(0 0 8px rgba(196, 161, 78, 0.4))" : "drop-shadow(0 0 8px rgba(16, 185, 129, 0.4))";

  return (
    <div className="flex flex-col items-center p-6 rounded-xl glass-card border border-white/5 relative overflow-hidden group hover:border-white/10 transition-all text-center">
      <svg
        ref={ref}
        width="130"
        height="130"
        viewBox="0 0 120 120"
        className="transform -rotate-90 select-none"
      >
        {/* Background track circle */}
        <circle
          cx="60"
          cy="60"
          r={radius}
          stroke="rgba(255, 255, 255, 0.03)"
          strokeWidth={strokeWidth}
          fill="transparent"
        />
        {/* Foreground animated value circle */}
        <circle
          cx="60"
          cy="60"
          r={radius}
          stroke={colorHex}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          fill="transparent"
          style={{
            filter: glowShadow,
            transition: "stroke-dashoffset 0.1s ease-out",
          }}
        />
      </svg>

      {/* Floating inner content */}
      <div className="absolute top-[52px] left-1/2 -translate-x-1/2 -translate-y-1/2">
        <span className="font-display font-black text-white text-xl sm:text-2xl tracking-tighter">
          {value.toFixed(1)}%
        </span>
      </div>

      <h4 className="font-display font-extrabold text-white text-base mt-4">{label}</h4>
      <p className="text-xs text-slate-400 mt-1">{subLabel}</p>
    </div>
  );
}

export default function Stats() {
  const [accountType, setAccountType] = useState<"prop" | "personal">("prop");

  return (
    <section className="py-24 relative overflow-hidden grid-overlay" id="statistics">
      {/* Background radial glowing gradients */}
      <div className="absolute top-1/4 left-1/3 w-80 h-80 bg-gold-600/5 rounded-full blur-[110px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-20">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="text-left">
            <span className="text-xs font-mono tracking-[0.3em] text-gold-400 uppercase font-medium">Performance Metrics</span>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold mt-2 text-white">Trading <span className="text-gradient-gold">Statistics</span></h2>
            <div className="w-12 h-1 bg-gradient-to-r from-gold-500 to-transparent mt-4"></div>
          </div>

          {/* Account selector toggle buttons */}
          <div className="flex bg-[#0a0a0a]/80 p-1 rounded-lg border border-white/5 w-fit select-none h-fit self-start md:self-end">
            <button
              onClick={() => setAccountType("prop")}
              className={`px-4 py-2 text-xs font-mono uppercase tracking-wider rounded-md transition-all duration-300 cursor-pointer ${
                accountType === "prop"
                  ? "bg-gold-500 text-black font-bold"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Prop Portfolio
            </button>
            <button
              onClick={() => setAccountType("personal")}
              className={`px-4 py-2 text-xs font-mono uppercase tracking-wider rounded-md transition-all duration-300 cursor-pointer ${
                accountType === "personal"
                  ? "bg-gold-500 text-black font-bold"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Institutional Cents
            </button>
          </div>
        </div>

        {/* Circular Progress Bars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <CircularProgress
            percentage={85.4}
            label="Win Rate"
            subLabel="High probability entry accuracy"
            color="emerald"
          />
          <CircularProgress
            percentage={78.2}
            label="Risk Reward Index"
            subLabel="Average return ratio 1:4.8"
            color="gold"
          />
          <CircularProgress
            percentage={14.2}
            label="Avg Monthly Growth"
            subLabel="Consistent compounded yield"
            color="emerald"
          />
          <CircularProgress
            percentage={3.12} // Showing max drawdown (lower is better, represented as percentage of safety limits)
            label="Max Drawdown"
            subLabel="Strict capital protection threshold"
            color="gold"
          />
        </div>

        {/* Linear/Card Dashboard Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1 - Total Trades */}
          <div className="glass-card p-6 rounded-xl border border-white/5 flex items-center gap-5 hover:border-gold-500/20 transition-all">
            <div className="p-4 rounded-xl bg-gold-400/10 text-gold-400">
              <Briefcase size={24} />
            </div>
            <div>
              <span className="text-[10px] font-mono tracking-widest text-slate-500 uppercase">Total Executed</span>
              <h4 className="text-2xl font-display font-extrabold text-white mt-1">8,450+ Trades</h4>
              <p className="text-xs text-slate-400 mt-1">Full trading ledger recorded in MyFXBook</p>
            </div>
          </div>

          {/* Card 2 - Total Profits */}
          <div className="glass-card p-6 rounded-xl border border-white/5 flex items-center gap-5 hover:border-emerald-500/20 transition-all">
            <div className="p-4 rounded-xl bg-emerald-400/10 text-emerald-400">
              <DollarSign size={24} />
            </div>
            <div>
              <span className="text-[10px] font-mono tracking-widest text-slate-500 uppercase">Total Profit Captured</span>
              <h4 className="text-2xl font-display font-extrabold text-emerald-400 mt-1">+$1,180,450.00</h4>
              <p className="text-xs text-slate-400 mt-1">Compound interest return across 8 years</p>
            </div>
          </div>

          {/* Card 3 - Verified Accounts */}
          <div className="glass-card p-6 rounded-xl border border-white/5 flex items-center gap-5 hover:border-gold-500/20 transition-all">
            <div className="p-4 rounded-xl bg-gold-400/10 text-gold-400">
              <ShieldCheck size={24} />
            </div>
            <div>
              <span className="text-[10px] font-mono tracking-widest text-slate-500 uppercase">Risk Compliance Status</span>
              <h4 className="text-2xl font-display font-extrabold text-white mt-1">Fully Compliant</h4>
              <p className="text-xs text-slate-400 mt-1">No major rule breaches or drawdown halts</p>
            </div>
          </div>

        </div>

        {/* MyFXBook Live Embed Mimic Section */}
        <div className="mt-8 glass-card p-4 rounded-xl border border-white/5 bg-[#050505]/40 text-center select-none flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <p className="text-xs font-mono text-slate-300">
              MyFXBook Account Verification Status: <span className="text-emerald-400 font-bold">VERIFIED SECURE (LIVE)</span>
            </p>
          </div>
          <span className="text-[9px] font-mono bg-white/5 px-2.5 py-1 rounded border border-white/5 text-slate-400 uppercase tracking-widest">
            Last Sync: 2 Mins Ago
          </span>
        </div>

      </div>
    </section>
  );
}
