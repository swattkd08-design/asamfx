import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import { CandlestickBgChart } from "./TradingViewWidgets";
import { TrendingUp, ShieldAlert, Award, Star, Compass } from "lucide-react";

interface HeroProps {
  onScrollToContact: () => void;
  onScrollToPortfolio: () => void;
  theme: "gold" | "emerald";
}

const typingTexts = [
  "Price Action Expert",
  "Smart Money Concepts Specialist",
  "Institutional Fund Manager",
  "XAU/USD (Gold) Specialist",
  "ICT & Liquidity Strategist",
];

export default function Hero({ onScrollToContact, onScrollToPortfolio, theme }: HeroProps) {
  const [textIndex, setTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  // Profile image generated on first turn
  const profileImage = "/src/assets/images/asam_fx_profile_1783083839472.jpg";

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const fullText = typingTexts[textIndex];

    const handleType = () => {
      if (!isDeleting) {
        // Typing
        setCurrentText(fullText.substring(0, currentText.length + 1));
        setTypingSpeed(100);

        if (currentText === fullText) {
          // Pause before deleting
          timer = setTimeout(() => setIsDeleting(true), 2500);
          return;
        }
      } else {
        // Deleting
        setCurrentText(fullText.substring(0, currentText.length - 1));
        setTypingSpeed(40);

        if (currentText === "") {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % typingTexts.length);
        }
      }

      timer = setTimeout(handleType, typingSpeed);
    };

    timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, textIndex, typingSpeed]);

  const themeAccentClass = theme === "gold" ? "text-gold-400" : "text-emerald-400";
  const themeBorderClass = theme === "gold" ? "border-gold-500/20" : "border-emerald-500/20";
  const themeGlowClass = theme === "gold" ? "glow-gold" : "glow-emerald";
  const themeBgAccent = theme === "gold" ? "bg-gold-500" : "bg-emerald-500";

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden grid-overlay" id="hero">
      {/* Candlestick Chart Background */}
      <CandlestickBgChart />

      {/* Floating Ambient Glowing Circles */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold-600/10 rounded-full blur-[120px] pointer-events-none animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-600/10 rounded-full blur-[120px] pointer-events-none animate-pulse-slow" style={{ animationDelay: "2s" }}></div>

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-20">
        
        {/* Left Side: Typography and CTAs */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-panel border border-white/5 w-fit mb-6 select-none"
          >
            <span className={`w-2.5 h-2.5 rounded-full ${themeBgAccent} animate-pulse ${themeGlowClass}`}></span>
            <span className="text-[10px] uppercase tracking-[0.25em] font-mono text-slate-300 font-medium flex items-center gap-1">
              Active Fund Allocation: <span className="text-white font-bold">$1.24M Institutional</span>
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl sm:text-7xl xl:text-8xl font-display font-extrabold tracking-tight leading-none mb-4"
          >
            ASAM <span className="text-gradient-gold">FX</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-8 sm:h-10 mb-6 flex items-center"
          >
            <p className="text-lg sm:text-2xl font-mono text-slate-300">
              <span className={`font-semibold ${themeAccentClass}`}>Asam FX</span> is a{" "}
              <span className="border-r-2 border-gold-400 pr-1 animate-pulse font-medium text-white">
                {currentText || "\u00A0"}
              </span>
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-slate-400 text-base sm:text-lg max-w-xl mb-10 leading-relaxed font-sans"
          >
            Specializing in High-Probability Price Action and Smart Money Concepts (SMC/ICT). Managing institutional-grade prop firm capital with strict risk structures, consistent monthly compound yields, and algorithmic precision.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 sm:items-center"
          >
            <button
              onClick={onScrollToPortfolio}
              className="group relative px-8 py-4 rounded-lg bg-gradient-to-r from-gold-600 to-gold-400 text-black font-semibold tracking-wider hover:from-gold-500 hover:to-gold-300 transition-all duration-300 text-center shadow-lg shadow-gold-500/10 cursor-pointer overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center gap-2 uppercase text-xs">
                View Live Portfolio <TrendingUp size={16} />
              </span>
              <span className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></span>
            </button>

            <button
              onClick={onScrollToContact}
              className="group px-8 py-4 rounded-lg border border-white/10 hover:border-gold-400/40 bg-white/5 hover:bg-white/10 text-white font-medium tracking-wider transition-all duration-300 text-center cursor-pointer text-xs uppercase"
            >
              Contact Me
            </button>
          </motion.div>
        </div>

        {/* Right Side: Professional Trader Illustration with Floating Stat Cards */}
        <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
          
          {/* Animated Glow Halo */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full border border-gold-400/10 animate-[spin_40s_linear_infinite] pointer-events-none"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] rounded-full border border-emerald-400/5 animate-[spin_60s_linear_infinite_reverse] pointer-events-none"></div>

          {/* Interactive Profile Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative w-72 h-72 sm:w-96 sm:h-96 rounded-2xl overflow-hidden group shadow-2xl shadow-black"
          >
            {/* Outer golden shining border */}
            <div className={`absolute inset-0 border border-white/5 rounded-2xl group-hover:${themeBorderClass} transition-colors duration-500 z-10`}></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 pointer-events-none"></div>
            
            <img
              src={profileImage}
              alt="Asam FX Trader"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out transform group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          {/* Floating Statistic Card 1 - WIN RATE */}
          <motion.div
            initial={{ opacity: 0, x: -30, y: -20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="absolute -left-4 top-10 sm:top-16 glass-card p-4 rounded-xl border border-white/5 max-w-[170px] select-none hover:border-emerald-500/30 transition-all cursor-default group"
          >
            <div className="flex items-center gap-2 mb-1.5">
              <div className="p-1 rounded-md bg-emerald-500/10 text-emerald-400">
                <TrendingUp size={16} />
              </div>
              <span className="text-[10px] font-mono tracking-wider text-slate-400 uppercase">Win Rate</span>
            </div>
            <p className="text-2xl font-display font-extrabold text-emerald-400 group-hover:scale-105 transition-transform duration-300">85.4%</p>
            <span className="text-[9px] text-slate-500 font-mono">MyFXBook Verified</span>
          </motion.div>

          {/* Floating Statistic Card 2 - DRAWDOWN */}
          <motion.div
            initial={{ opacity: 0, x: 30, y: 30 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="absolute -right-4 bottom-8 sm:bottom-12 glass-card p-4 rounded-xl border border-white/5 max-w-[170px] select-none hover:border-gold-500/30 transition-all cursor-default group"
          >
            <div className="flex items-center gap-2 mb-1.5">
              <div className="p-1 rounded-md bg-gold-500/10 text-gold-400">
                <ShieldAlert size={16} />
              </div>
              <span className="text-[10px] font-mono tracking-wider text-slate-400 uppercase">Max DD</span>
            </div>
            <p className="text-2xl font-display font-extrabold text-gold-400 group-hover:scale-105 transition-transform duration-300">3.12%</p>
            <span className="text-[9px] text-slate-500 font-mono">Strict Risk Model</span>
          </motion.div>

          {/* Floating Statistic Card 3 - GLOBAL RANK */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="absolute left-1/4 -bottom-4 glass-card px-4 py-2.5 rounded-lg border border-white/5 flex items-center gap-2.5 select-none hover:border-white/10 transition-all"
          >
            <Award className="text-gold-400 animate-pulse" size={16} />
            <div className="flex flex-col">
              <span className="text-[9px] font-mono tracking-widest text-slate-400 uppercase">Prop Master</span>
              <span className="text-xs font-bold text-white">Top 1% Trader Rank</span>
            </div>
          </motion.div>

        </div>

      </div>

      {/* Slide-down mouse indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 opacity-50 hover:opacity-100 transition-opacity">
        <span className="text-[9px] font-mono tracking-[0.3em] uppercase text-slate-400">Scroll Market</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border border-white/25 flex justify-center p-1.5"
        >
          <div className="w-1 h-1.5 rounded-full bg-gold-400"></div>
        </motion.div>
      </div>
    </section>
  );
}
