import { useState, ReactNode } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  TrendingUp, 
  Layers, 
  Activity, 
  ShieldCheck, 
  Clock, 
  Compass, 
  GitCommit, 
  BarChart4, 
  PieChart, 
  CheckSquare, 
  Zap, 
  Brain 
} from "lucide-react";

interface SkillItem {
  id: string;
  name: string;
  category: "Technical" | "Execution" | "Psychology";
  icon: ReactNode;
  level: string; // e.g. "Mastery"
  desc: string;
  glowColor: string;
}

const skillsData: SkillItem[] = [
  {
    id: "smc",
    name: "Smart Money Concepts",
    category: "Technical",
    icon: <Layers size={20} />,
    level: "Institutional Mastery",
    desc: "Tracking bank orders via order blocks, breaker blocks, mitigation blocks, and market structures.",
    glowColor: "group-hover:border-gold-500/30 group-hover:shadow-gold-500/10",
  },
  {
    id: "sd",
    name: "Supply & Demand",
    category: "Technical",
    icon: <Activity size={20} />,
    level: "Advanced Confluence",
    desc: "Identifying structural buy/sell zones using premium/discount calculations and institutional imbalance.",
    glowColor: "group-hover:border-emerald-500/30 group-hover:shadow-emerald-500/10",
  },
  {
    id: "pa",
    name: "Price Action",
    category: "Technical",
    icon: <TrendingUp size={20} />,
    level: "Naked Chart Speculation",
    desc: "Interpreting pure candle mechanics, market momentum, structural changes, and key price levels without lag.",
    glowColor: "group-hover:border-gold-500/30 group-hover:shadow-gold-500/10",
  },
  {
    id: "rm",
    name: "Risk Management",
    category: "Execution",
    icon: <ShieldCheck size={20} />,
    level: "Absolute Priority",
    desc: "Implementing strict mathematical leverage, R:R thresholds (min 1:3), and capital exposure controls.",
    glowColor: "group-hover:border-emerald-500/30 group-hover:shadow-emerald-500/10",
  },
  {
    id: "scalp",
    name: "Scalping",
    category: "Execution",
    icon: <Clock size={20} />,
    level: "High-Speed Execution",
    desc: "Precision trading on LTF (1m/5m charts) capturing immediate order flow, spreads, and market expansion.",
    glowColor: "group-hover:border-gold-500/30 group-hover:shadow-gold-500/10",
  },
  {
    id: "swing",
    name: "Swing Trading",
    category: "Execution",
    icon: <Compass size={20} />,
    level: "HTF Trend Speculation",
    desc: "Holding assets for multiple days targeting major weekly expansion legs aligned with macro-fundamentals.",
    glowColor: "group-hover:border-emerald-500/30 group-hover:shadow-emerald-500/10",
  },
  {
    id: "ict",
    name: "ICT Concepts",
    category: "Technical",
    icon: <GitCommit size={20} />,
    level: "Inner Circle Mastery",
    desc: "Utilizing silver bullet triggers, judas swings, daily bias rules, and fair value gap (FVG) entries.",
    glowColor: "group-hover:border-gold-500/30 group-hover:shadow-gold-500/10",
  },
  {
    id: "ms",
    name: "Market Structure",
    category: "Technical",
    icon: <BarChart4 size={20} />,
    level: "Structural Blueprint",
    desc: "Mapping Bos (Break of Structure), Choch (Change of Character), and complex swing structures accurately.",
    glowColor: "group-hover:border-emerald-500/30 group-hover:shadow-emerald-500/10",
  },
  {
    id: "la",
    name: "Liquidity Analysis",
    category: "Technical",
    icon: <PieChart size={20} />,
    level: "Market Fuel Sweep",
    desc: "Tracing Buy-Stop Liquidity (BSL) and Sell-Stop Liquidity (SSL) to avoid retail stop-hunt traps.",
    glowColor: "group-hover:border-gold-500/30 group-hover:shadow-gold-500/10",
  },
  {
    id: "fib",
    name: "Fibonacci Retracement",
    category: "Technical",
    icon: <CheckSquare size={20} />,
    level: "Optimal Trade Entry (OTE)",
    desc: "Utilizing 0.618, 0.705, and 0.786 retracements to buy inside discounts and sell within premiums.",
    glowColor: "group-hover:border-emerald-500/30 group-hover:shadow-emerald-500/10",
  },
  {
    id: "vol",
    name: "Volume Analysis",
    category: "Technical",
    icon: <Zap size={20} />,
    level: "Order-Book Footprints",
    desc: "Interpreting volume profile, session highs/lows, and tick volume to validate key breakout points.",
    glowColor: "group-hover:border-gold-500/30 group-hover:shadow-gold-500/10",
  },
  {
    id: "psy",
    name: "Trading Psychology",
    category: "Psychology",
    icon: <Brain size={20} />,
    level: "Cold Discipline",
    desc: "Maintaining absolute emotional detachment, treating losses as business overhead, and adhering to strict plans.",
    glowColor: "group-hover:border-emerald-500/30 group-hover:shadow-emerald-500/10",
  },
];

export default function Skills() {
  const [activeFilter, setActiveFilter] = useState<"All" | "Technical" | "Execution" | "Psychology">("All");

  const filteredSkills = skillsData.filter(
    (skill) => activeFilter === "All" || skill.category === activeFilter
  );

  return (
    <section className="py-24 relative overflow-hidden" id="skills">
      {/* Background glow */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-emerald-600/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-20">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-xs font-mono tracking-[0.3em] text-gold-400 uppercase font-medium">Core Capabilities</span>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold mt-2 text-white">Trading <span className="text-gradient-gold">Skillsets</span></h2>
          <div className="w-12 h-1 bg-gradient-to-r from-gold-500 to-transparent mx-auto mt-4"></div>
        </div>

        {/* Filters */}
        <div className="flex justify-center flex-wrap gap-2 mb-12 select-none">
          {(["All", "Technical", "Execution", "Psychology"] as const).map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-lg font-mono text-xs uppercase tracking-wider transition-all duration-300 border cursor-pointer ${
                activeFilter === filter
                  ? "bg-gold-500 text-black border-gold-400 font-bold"
                  : "bg-white/5 text-slate-400 border-white/5 hover:border-white/10 hover:text-white"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, index) => (
              <motion.div
                layout
                key={skill.id}
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -10 }}
                transition={{ duration: 0.4, delay: index * 0.03 }}
                className={`glass-card p-6 rounded-xl border border-white/4 group glass-card-hover hover:border-gold-500/25 relative overflow-hidden flex flex-col justify-between`}
              >
                {/* Background decorative glow gradient */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-gold-500/10 to-transparent rounded-bl-full pointer-events-none group-hover:from-gold-500/20 transition-all duration-300"></div>

                <div>
                  <div className="flex items-center gap-3.5 mb-4">
                    <div className="p-3 rounded-lg bg-white/5 text-gold-400 group-hover:bg-gold-400/10 group-hover:text-gold-400 transition-colors duration-300">
                      {skill.icon}
                    </div>
                    <div>
                      <span className="text-[9px] font-mono tracking-widest text-slate-500 uppercase">
                        {skill.category}
                      </span>
                      <h4 className="font-display font-bold text-white text-base tracking-tight mt-0.5 group-hover:text-gold-400 transition-colors">
                        {skill.name}
                      </h4>
                    </div>
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed min-h-[50px]">
                    {skill.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-gold-400 font-semibold tracking-wider uppercase">
                    {skill.level}
                  </span>
                  
                  {/* Small progress meter indicator */}
                  <div className="w-12 bg-white/10 h-1 rounded-full overflow-hidden">
                    <div 
                      className="bg-gold-400 h-full rounded-full group-hover:bg-emerald-400 transition-colors duration-300" 
                      style={{ width: "90%" }}
                    ></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Market Philosophy Callout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 glass-card p-8 rounded-2xl border border-white/5 relative overflow-hidden bg-gradient-to-br from-[#0c0c0c] to-[#040404]"
        >
          <div className="absolute top-0 right-0 w-48 h-48 bg-gold-600/5 rounded-full blur-[60px] pointer-events-none"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-8">
              <h4 className="font-display font-extrabold text-white text-lg sm:text-xl">
                Aligning Trades Alongside Central Bank Order Flow
              </h4>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                Rather than using lagging retail indicators (like MACD, Bollinger Bands, or Stochastic oversold signals), our strategies are strictly built on observing liquidity imbalances. We find where massive stop-loss pools reside, await the sweeping hunt, and execute our positions concurrently with institutional makers.
              </p>
            </div>
            <div className="md:col-span-4 flex justify-end">
              <div className="px-5 py-3 rounded-lg border border-gold-400/20 bg-gold-400/5 text-center w-full md:w-fit">
                <span className="text-[10px] font-mono tracking-widest text-gold-400 uppercase">Operational Framework</span>
                <p className="font-display font-bold text-white text-base mt-1">SMC & ICT Direct</p>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
