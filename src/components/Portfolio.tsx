import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { BookOpen, Calendar, Clock, Eye, ChevronRight, X, ArrowUpRight, TrendingUp } from "lucide-react";

interface PortfolioProject {
  id: string;
  title: string;
  category: "Gold Analysis" | "Weekly Outlook" | "Trade Recap" | "Case Study" | "Trading Plan" | "Journal";
  description: string;
  date: string;
  readTime: string;
  tags: string[];
  setupImageCode: string; // for rich custom mockups
  fullContent: {
    overview: string;
    metrics: string[];
    rules: string[];
    recap: string;
  };
}

const portfolioData: PortfolioProject[] = [
  {
    id: "gold-analysis-sweep",
    title: "Gold (XAU/USD) Institutional Liquidity Sweep At Key Support",
    category: "Gold Analysis",
    description: "Detailed Price Action breakdown analyzing a premium London-session liquidity grab on Gold, sweeping equal lows at $2310 and bouncing off the 4h Order Block.",
    date: "Jul 01, 2026",
    readTime: "4 Min Read",
    tags: ["#XAUUSD", "#OrderBlocks", "#LiquiditySweep"],
    setupImageCode: "XAUUSD_CHART",
    fullContent: {
      overview: "An exemplary Smart Money Concept (SMC) execution on Gold. Price swept London Session sell-side liquidity (equal lows) at $2310, tapping directly into a 4-hour Bullish Order Block. This triggered an immediate Change of Character (Choch) on the 5-minute timeframe.",
      metrics: ["Pair: XAU/USD (Gold)", "Entry Trigger: 5m FVG (Fair Value Gap)", "Position Size: 1.0% Capital", "Risk-to-Reward: 1:5.8 Secured"],
      rules: [
        "1. Identify HTF (4h) structural bias: Bullish.",
        "2. Wait for LTF (15m) equal-low sweeps.",
        "3. Wait for Market Structure Shift (MSS) with displacement.",
        "4. Enter limit on the discount 5m FVG."
      ],
      recap: "The position was closed within 4 hours at the structural high of $2338. Capital compound growth achieved: +5.8%."
    }
  },
  {
    id: "journal-june-ledger",
    title: "Q2 Master Trading Journal: June Performance Ledger",
    category: "Journal",
    description: "Our complete verified trading ledger for June 2026. Documenting 42 total executions on major FX cross-rates and commodities, maintaining 85.7% accuracy.",
    date: "Jun 30, 2026",
    readTime: "8 Min Read",
    tags: ["#TradingLedger", "#PerformanceAnalysis", "#MyFXBook"],
    setupImageCode: "PERFORMANCE_LEDGER",
    fullContent: {
      overview: "June 2026 represented our most optimized monthly cycle. High session volatility allowed us to exploit clean displacement models on USD pairs. Out of 42 trades logged, 36 closed in profit with an average holding time of 2.5 hours.",
      metrics: ["Total Yield: +14.2% Account", "Total Trades: 42", "Average Profit Factor: 4.8", "Max Consecutive Wins: 11"],
      rules: [
        "No trading during high-impact red economic folders (CPI/FOMC).",
        "Risk capped at strictly 0.5% during NY session overlaps.",
        "Take partial profits at 1:3 R:R without exception."
      ],
      recap: "The monthly ledger was synced successfully to public trackers. The top performing pair was XAU/USD, contributing 65% of the total monthly yield."
    }
  },
  {
    id: "recap-gbpusd-silver",
    title: "GBP/USD 1:8 Risk-Reward London Silver Bullet Execution",
    category: "Trade Recap",
    description: "Step-by-step walkthrough of a high-probability ICT Silver Bullet model execution on GBP/USD, utilizing the 3 AM - 4 AM London session liquidity macro.",
    date: "Jun 18, 2026",
    readTime: "5 Min Read",
    tags: ["#GBPUSD", "#SilverBullet", "#ICTConcepts"],
    setupImageCode: "GBPUSD_CHART",
    fullContent: {
      overview: "During the 3:00 AM London open macro, GBP/USD engineered a Judas Swing (stop hunt) above the Asian session highs. This successfully swept retail buyside liquidity before collapsing downward into the London session target discount levels.",
      metrics: ["Pair: GBP/USD", "Session: London (3:15 AM Entry)", "Risk-to-Reward: 1:8.2 Actual", "Imbalance: Premium 15m FVG"],
      rules: [
        "Asian Session high swept between 3:00 AM - 3:30 AM.",
        "Rapid displacement down breaking the 5m swing low.",
        "Set limit order at premium FVG midpoint (consequent encroachment).",
        "Target the Asian Session low."
      ],
      recap: "The trade completed its target trajectory within 55 minutes, securing +8.2% on our active prop accounts."
    }
  },
  {
    id: "case-study-cpi-survival",
    title: "CPI Volatility Protection: Risk Management Case Study",
    category: "Case Study",
    description: "An in-depth risk case study analyzing how we protected our multi-million dollar prop fund allocations during extreme CPI inflation news volatility.",
    date: "Jun 12, 2026",
    readTime: "6 Min Read",
    tags: ["#RiskManagement", "#NewsVolatility", "#CapitalProtection"],
    setupImageCode: "RISK_MODEL",
    fullContent: {
      overview: "Macroeconomic folders representing high inflation (CPI) cause extreme order book thinness, leading to substantial slippage and spread expansion. This case study demonstrates how we mitigate these risks completely using structural rules.",
      metrics: ["Slippage Tolerated: 0 Pips", "Risk Multiplier: 0.0x (Flat)", "Active Accounts Insured: $1.2M", "Outcome: Zero drawdown incurred"],
      rules: [
        "All active limit orders cancelled 30 minutes prior to red folders.",
        "Active running positions locked at Break-Even or closed flat.",
        "No new executions until 30 minutes post-release when spreads stabilize.",
        "Never trade the immediate candle surge."
      ],
      recap: "By maintaining absolute rule discipline, we protected our capital from high-slippage execution, demonstrating institutional grade maturity."
    }
  },
  {
    id: "weekly-outlook-london",
    title: "Weekly Session Imbalance & Fair Value Gap Assessment",
    category: "Weekly Outlook",
    description: "Our weekly directional bias map for EUR/USD, GBP/USD, and XAU/USD. Spotting major institutional imbalances and order blocks to target for the upcoming session.",
    date: "Jun 08, 2026",
    readTime: "3 Min Read",
    tags: ["#WeeklyOutlook", "#EURUSD", "#DailyBias"],
    setupImageCode: "OUTLOOK_IMBALANCE",
    fullContent: {
      overview: "Entering the weekly cycle, the US Dollar Index (DXY) is showing structural bearish divergence on the daily chart. Consequently, we are establishing a bullish bias on EUR/USD and GBP/USD, targeting historical premium resistance pools.",
      metrics: ["DXY Bias: Bearish", "EUR/USD Bias: Bullish", "GBP/USD Bias: Bullish", "Expected Volatility: High (Retail Sales Wed)"],
      rules: [
        "Focus on London AM (3:00 - 5:00 AM EST) and NY AM (8:00 - 11:00 AM EST) sessions.",
        "Look for EUR/USD to retrace to the 1h bullish breaker block at $1.0820.",
        "If breached, shift bias to bearish."
      ],
      recap: "Weekly target zones were tapped perfectly. Directional biases yielded a total of 3 valid entries across the week."
    }
  },
  {
    id: "plan-q3-institutional",
    title: "The Q3 Speculative playbook: Institutional Trading Plans",
    category: "Trading Plan",
    description: "The official Asam FX blueprint for Q3 2026. Highlighting session-specific parameters, algorithmic bias checklists, and capital scale strategies.",
    date: "Jun 01, 2026",
    readTime: "10 Min Read",
    tags: ["#TradingPlaybook", "#Q3Strategy", "#SessionChecklists"],
    setupImageCode: "PLAYBOOK_SPECS",
    fullContent: {
      overview: "The Q3 Speculative Playbook formalizes our session setups, eliminating discretion. We operate strictly within a state-machine checklist, entering positions only when 4 independent high-probability criteria align.",
      metrics: ["Core Pairs: XAU/USD, EUR/USD", "Primary Sessions: London & NY Open", "Max Daily Risk: 1.0%", "Compounding Cycle: Monthly"],
      rules: [
        "Determine Higher Timeframe (Daily/4h) Bias.",
        "Mark Premium / Discount levels of the current dealing range.",
        "Trace High and Low liquidity boundaries of the Asian session.",
        "Await LTF MSS + displacement on the 1m-5m chart."
      ],
      recap: "This playbook is distributed to our Elite Mentorship members as the foundation of their prop evaluations."
    }
  }
];

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState<"All" | "Gold Analysis" | "Weekly Outlook" | "Trade Recap" | "Case Study" | "Trading Plan" | "Journal">("All");
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);

  const filteredProjects = portfolioData.filter(
    (p) => activeFilter(p)
  );

  function activeFilter(p: PortfolioProject) {
    return activeTab === "All" || p.category === activeTab;
  }

  // Custom visual representation for the trading setup image inside cards
  const renderSetupMockup = (code: string) => {
    switch (code) {
      case "XAUUSD_CHART":
        return (
          <div className="w-full h-full bg-[#080808] flex flex-col justify-end p-4 font-mono text-[9px] text-emerald-400 select-none">
            <div className="flex items-center justify-between border-b border-white/5 pb-2 mb-2 text-[8px] text-slate-500">
              <span>XAU/USD, 15m, OANDA</span>
              <span className="text-emerald-400">● LIVE</span>
            </div>
            {/* Mock candlestick grid */}
            <div className="flex items-end gap-1.5 h-24 mb-2">
              <div className="w-1 bg-red-500 h-10 relative"><span className="absolute left-1/2 -top-2 w-px h-16 bg-red-500 transform -translate-x-1/2"></span></div>
              <div className="w-1 bg-red-500 h-16 relative"><span className="absolute left-1/2 -top-4 w-px h-24 bg-red-500 transform -translate-x-1/2"></span></div>
              <div className="w-1 bg-red-500 h-8 relative"><span className="absolute left-1/2 -top-1 w-px h-12 bg-red-500 transform -translate-x-1/2"></span></div>
              <div className="w-1.5 bg-emerald-500 h-12 relative"><span className="absolute left-1/2 -top-6 w-px h-24 bg-emerald-500 transform -translate-x-1/2"></span></div>
              <div className="w-1.5 bg-emerald-500 h-20 relative"><span className="absolute left-1/2 -top-2 w-px h-28 bg-emerald-500 transform -translate-x-1/2"></span></div>
              <div className="w-1.5 bg-red-500 h-6 relative"><span className="absolute left-1/2 -top-4 w-px h-16 bg-red-500 transform -translate-x-1/2"></span></div>
              <div className="w-1.5 bg-emerald-500 h-16 relative"><span className="absolute left-1/2 -top-4 w-px h-24 bg-emerald-500 transform -translate-x-1/2"></span></div>
              <div className="w-1.5 bg-emerald-500 h-28 relative"><span className="absolute left-1/2 -top-1 w-px h-32 bg-emerald-500 transform -translate-x-1/2"></span></div>
            </div>
            <div className="text-[8px] text-slate-400 border-t border-white/5 pt-2 flex items-center justify-between">
              <span>Support Sweet Spot: $2310.45</span>
              <span className="text-gold-400">SMC Liquidity Grab</span>
            </div>
          </div>
        );
      case "PERFORMANCE_LEDGER":
        return (
          <div className="w-full h-full bg-[#050505] p-4 font-mono text-[9px] text-slate-400 flex flex-col justify-between select-none">
            <div className="flex items-center justify-between border-b border-white/5 pb-2">
              <span className="text-white font-bold">MONTHLY ACCOUNT LEDGER</span>
              <span className="text-gold-400">FTMO #92451</span>
            </div>
            <div className="space-y-1 my-3 text-[8px]">
              <div className="flex justify-between border-b border-white/5 py-0.5"><span>JUNE NET PROFIT</span><span className="text-emerald-400 font-bold">+$142,450.00</span></div>
              <div className="flex justify-between border-b border-white/5 py-0.5"><span>ACCURACY RATE</span><span className="text-white font-bold">85.7%</span></div>
              <div className="flex justify-between border-b border-white/5 py-0.5"><span>PROFIT FACTOR</span><span className="text-white font-bold">4.82</span></div>
              <div className="flex justify-between border-b border-white/5 py-0.5"><span>SHARPE RATIO</span><span className="text-white font-bold">3.12</span></div>
            </div>
            <div className="flex items-center gap-1 text-[8px] text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span> Verified Audit Log Active
            </div>
          </div>
        );
      case "GBPUSD_CHART":
        return (
          <div className="w-full h-full bg-[#060606] flex flex-col justify-end p-4 font-mono text-[9px] text-emerald-400 select-none">
            <div className="flex items-center justify-between border-b border-white/5 pb-2 mb-2 text-[8px] text-slate-500">
              <span>GBP/USD, 5m, OANDA</span>
              <span>NY OPEN</span>
            </div>
            <div className="flex items-end gap-1.5 h-24 mb-2">
              <div className="w-1.5 bg-red-500 h-16 relative"><span className="absolute left-1/2 -top-2 w-px h-20 bg-red-500 transform -translate-x-1/2"></span></div>
              <div className="w-1.5 bg-red-500 h-24 relative"><span className="absolute left-1/2 -top-4 w-px h-32 bg-red-500 transform -translate-x-1/2"></span></div>
              <div className="w-1.5 bg-emerald-500 h-12 relative"><span className="absolute left-1/2 -top-6 w-px h-24 bg-emerald-500 transform -translate-x-1/2"></span></div>
              <div className="w-1.5 bg-emerald-500 h-22 relative"><span className="absolute left-1/2 -top-2 w-px h-28 bg-emerald-500 transform -translate-x-1/2"></span></div>
              <div className="w-1.5 bg-red-500 h-6 relative"><span className="absolute left-1/2 -top-2 w-px h-12 bg-red-500 transform -translate-x-1/2"></span></div>
              <div className="w-1.5 bg-red-500 h-18 relative"><span className="absolute left-1/2 -top-4 w-px h-24 bg-red-500 transform -translate-x-1/2"></span></div>
              <div className="w-1.5 bg-red-500 h-28 relative"><span className="absolute left-1/2 -top-2 w-px h-32 bg-red-500 transform -translate-x-1/2"></span></div>
            </div>
            <div className="text-[8px] text-slate-400 border-t border-white/5 pt-2 flex items-center justify-between">
              <span>Asia High Swept: 1.2745</span>
              <span className="text-gold-400">Silver Bullet Trigger</span>
            </div>
          </div>
        );
      default:
        return (
          <div className="w-full h-full bg-[#0a0a0a] flex flex-col justify-center items-center p-4 font-mono text-[9px] text-slate-500 select-none border border-white/5">
            <TrendingUp size={24} className="text-gold-400/40 mb-2 animate-pulse" />
            <span>SMC SPECULATIVE MOCKUP</span>
            <span className="text-[7px] text-slate-600 mt-1 uppercase tracking-widest">Rules Blueprint Verified</span>
          </div>
        );
    }
  };

  return (
    <section className="py-24 relative overflow-hidden bg-black/30" id="portfolio">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/4 w-80 h-80 bg-gold-600/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-20">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-xs font-mono tracking-[0.3em] text-gold-400 uppercase font-medium">Verified Operational Records</span>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold mt-2 text-white">Trading <span className="text-gradient-gold">Portfolio</span></h2>
          <div className="w-12 h-1 bg-gradient-to-r from-gold-500 to-transparent mx-auto mt-4"></div>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex justify-center flex-wrap gap-2 mb-12 select-none">
          {(["All", "Gold Analysis", "Journal", "Trade Recap", "Case Study", "Weekly Outlook", "Trading Plan"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3.5 py-2 rounded-lg font-mono text-xs uppercase tracking-wider transition-all duration-300 border cursor-pointer ${
                activeTab === tab
                  ? "bg-gold-500 text-black border-gold-400 font-bold"
                  : "bg-white/5 text-slate-400 border-white/5 hover:border-white/10 hover:text-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.04 }}
              key={project.id}
              className="glass-card rounded-2xl overflow-hidden border border-white/5 flex flex-col group hover:border-gold-500/25 transition-all duration-300"
            >
              {/* Top Custom Mockup Screen */}
              <div className="h-44 bg-[#0a0a0a] border-b border-white/5 relative overflow-hidden">
                {renderSetupMockup(project.setupImageCode)}
                <div className="absolute top-3 left-3 bg-gold-500/10 backdrop-blur-md border border-gold-400/25 text-gold-400 text-[9px] font-mono font-bold uppercase tracking-widest px-2.5 py-1 rounded">
                  {project.category}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-4 text-[10px] font-mono text-slate-500 mb-3.5">
                    <span className="flex items-center gap-1"><Calendar size={12} /> {project.date}</span>
                    <span className="flex items-center gap-1"><Clock size={12} /> {project.readTime}</span>
                  </div>

                  <h3 className="font-display font-extrabold text-white text-base sm:text-lg group-hover:text-gold-400 transition-colors line-clamp-2 leading-tight">
                    {project.title}
                  </h3>

                  <p className="text-slate-400 text-xs sm:text-sm mt-2.5 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    {/* Tags */}
                    <div className="flex gap-1.5 flex-wrap">
                      {project.tags.map((tag, tIndex) => (
                        <span key={tIndex} className="text-[9px] font-mono text-slate-500 bg-white/5 px-2 py-0.5 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={() => setSelectedProject(project)}
                      className="text-[10px] font-mono font-bold text-gold-400 uppercase tracking-wider flex items-center gap-1.5 group-hover:text-white transition-colors cursor-pointer"
                    >
                      Audit Entry <ChevronRight size={12} />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Detailed Slide-Over glass panel modal for Audit Details */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="absolute inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
              ></motion.div>

              {/* Modal Container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 30 }}
                transition={{ type: "spring", duration: 0.5 }}
                className="relative bg-[#0c0c0c] border border-white/10 rounded-2xl p-6 sm:p-8 max-w-2xl w-full z-10 overflow-hidden shadow-2xl shadow-black"
              >
                {/* Background ambient lighting */}
                <div className="absolute -top-12 -left-12 w-48 h-48 bg-gold-600/10 rounded-full blur-[60px] pointer-events-none"></div>

                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors p-2 rounded-lg bg-white/5 border border-white/5 cursor-pointer"
                >
                  <X size={16} />
                </button>

                <span className="text-[10px] font-mono tracking-widest text-gold-400 uppercase font-semibold">
                  {selectedProject.category} // Active Audit Ledger
                </span>

                <h3 className="font-display font-extrabold text-white text-xl sm:text-2xl mt-2 mb-4 leading-tight">
                  {selectedProject.title}
                </h3>

                {/* Info Fields */}
                <div className="grid grid-cols-2 gap-3.5 mb-6">
                  {selectedProject.fullContent.metrics.map((metric, mIndex) => (
                    <div key={mIndex} className="p-3 rounded-lg bg-white/5 border border-white/5 text-[11px] font-mono text-slate-300">
                      {metric}
                    </div>
                  ))}
                </div>

                {/* Overview Text */}
                <div className="space-y-4 text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
                  <p className="text-white font-medium">Setup Summary:</p>
                  <p>{selectedProject.fullContent.overview}</p>
                </div>

                {/* Trade Rules Blueprint */}
                <div className="p-4 rounded-xl bg-gold-400/5 border border-gold-400/20 mb-6">
                  <p className="text-xs font-mono text-gold-400 uppercase tracking-widest font-semibold mb-2 flex items-center gap-1.5">
                    <TrendingUp size={14} /> Execution Triggers Checklist
                  </p>
                  <ul className="space-y-1.5 text-[11px] sm:text-xs text-slate-300">
                    {selectedProject.fullContent.rules.map((rule, rIndex) => (
                      <li key={rIndex}>{rule}</li>
                    ))}
                  </ul>
                </div>

                {/* Outcome */}
                <div className="border-t border-white/5 pt-4 flex items-center justify-between flex-wrap gap-4">
                  <div>
                    <span className="text-[10px] font-mono text-slate-500 uppercase">Outcome Status</span>
                    <p className="text-xs text-emerald-400 font-bold mt-0.5">
                      {selectedProject.fullContent.recap}
                    </p>
                  </div>

                  <button
                    onClick={() => setSelectedProject(null)}
                    className="px-5 py-2.5 rounded-lg bg-gold-500 text-black font-mono text-xs uppercase tracking-wider font-bold hover:bg-gold-400 transition-all cursor-pointer"
                  >
                    Close Ledger
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
