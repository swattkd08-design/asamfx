import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  TrendingUp, 
  ArrowUp, 
  CheckCircle2, 
  Terminal, 
  Sparkles,
  ChevronRight
} from "lucide-react";

// Section imports
import ParticlesBg from "./components/ParticlesBg";
import Navbar from "./components/Navbar";
import { TradingViewTicker, TradingViewMainChart } from "./components/TradingViewWidgets";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Stats from "./components/Stats";
import Services from "./components/Services";
import Timeline from "./components/Timeline";
import Portfolio from "./components/Portfolio";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Certifications from "./components/Certifications";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [theme, setTheme] = useState<"gold" | "emerald">("gold");
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [loadingText, setLoadingText] = useState("Securing bridge to Bloomberg feeds...");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  // Custom cursor states
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [ringPos, setRingPos] = useState({ x: -100, y: -100 });
  const [isHoveringClickable, setIsHoveringClickable] = useState(false);

  // 1. Loading sequence simulation
  useEffect(() => {
    const loadingTexts = [
      "Accessing liquid order books...",
      "Mapping liquidity-pool distributions...",
      "Validating premium & discount Fibonacci models...",
      "Configuring Smart Money checklists...",
      "Asam FX interface online.",
    ];

    let currentTextIdx = 0;
    const progressInterval = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => setIsLoading(false), 500);
          return 100;
        }

        const nextProgress = prev + Math.floor(Math.random() * 8) + 4;
        const boundedProgress = Math.min(nextProgress, 100);

        // Update text at key milestones
        const textMilestone = Math.floor(100 / loadingTexts.length);
        const nextTextIdx = Math.min(
          Math.floor(boundedProgress / textMilestone),
          loadingTexts.length - 1
        );
        if (nextTextIdx !== currentTextIdx) {
          currentTextIdx = nextTextIdx;
          setLoadingText(loadingTexts[nextTextIdx]);
        }

        return boundedProgress;
      });
    }, 120);

    return () => clearInterval(progressInterval);
  }, []);

  // 2. Track scroll activities (Progress & Back-to-Top)
  useEffect(() => {
    const handleScroll = () => {
      // Total scrollable height
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
      }

      // Back to top visibility
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 3. Custom cursor tracking on mousemove
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    // Hover listeners to resize cursor ring on interactive items
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isClickable = 
        target.tagName === "BUTTON" || 
        target.tagName === "A" || 
        target.closest("button") !== null || 
        target.closest("a") !== null ||
        target.classList.contains("cursor-pointer") ||
        target.closest(".cursor-pointer") !== null;
      
      setIsHoveringClickable(!!isClickable);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  // 4. Smooth spring delay for the outer trailing cursor ring
  useEffect(() => {
    let animationFrameId: number;

    const updateRing = () => {
      setRingPos((prev) => {
        const dx = mousePos.x - prev.x;
        const dy = mousePos.y - prev.y;
        // Adjust the multiplier for custom trailing lag speed (e.g. 0.15)
        return {
          x: prev.x + dx * 0.18,
          y: prev.y + dy * 0.18,
        };
      });
      animationFrameId = requestAnimationFrame(updateRing);
    };

    animationFrameId = requestAnimationFrame(updateRing);
    return () => cancelAnimationFrame(animationFrameId);
  }, [mousePos]);

  const handleSelectService = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    // Scroll directly to contact section
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScrollToPortfolio = () => {
    const portfolioSection = document.getElementById("portfolio");
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Switch styles dynamically based on the selected master theme (Gold/Emerald)
  const themeAccentColor = theme === "gold" ? "#c4a14e" : "#10b981";

  return (
    <div className={`relative min-h-screen text-slate-100 font-sans overflow-x-hidden ${
      theme === "gold" ? "theme-gold" : "theme-emerald"
    }`}>
      
      {/* 1. CUSTOM INTERACTIVE PARTICLES */}
      <ParticlesBg theme={theme} />

      {/* 2. CUSTOM DYNAMIC SPRING MOUSE CURSORS (Desktop only) */}
      <div
        className="custom-cursor"
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
          backgroundColor: themeAccentColor,
          width: isHoveringClickable ? "12px" : "8px",
          height: isHoveringClickable ? "12px" : "8px",
        }}
      />
      <div
        className="custom-cursor-ring"
        style={{
          left: `${ringPos.x}px`,
          top: `${ringPos.y}px`,
          borderColor: themeAccentColor,
          transform: `translate(-50%, -50%) scale(${isHoveringClickable ? 1.5 : 1})`,
        }}
      />

      {/* 3. ANTIMATED PRELOADER GATE */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="fixed inset-0 bg-[#030303] z-[99999] flex flex-col items-center justify-center p-6 select-none"
          >
            {/* Ambient Background Preloader Lighting */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gold-600/10 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="max-w-md w-full space-y-8 relative">
              
              {/* Spinning Loader Rings */}
              <div className="flex justify-center relative">
                <div className="w-20 h-20 rounded-full border-2 border-white/5 border-t-gold-400 animate-spin"></div>
                <div className="w-16 h-16 rounded-full border-2 border-white/5 border-b-emerald-400 animate-[spin_3s_linear_infinite_reverse] absolute top-2 left-1/2 -translate-x-1/2"></div>
                <div className="absolute top-6 left-1/2 -translate-x-1/2 flex items-center gap-1">
                  <span className="text-xs font-mono font-bold text-white tracking-widest uppercase">AFX</span>
                </div>
              </div>

              {/* Loader Description & Progress */}
              <div className="text-center space-y-2">
                <h2 className="font-display font-black text-xl text-white tracking-widest uppercase">
                  ASAM <span className="text-gradient-gold">FX</span>
                </h2>
                <p className="text-[10px] font-mono tracking-widest text-slate-500 uppercase">
                  Institutional Capital Terminal
                </p>
              </div>

              {/* Progress bar container */}
              <div className="space-y-2.5">
                <div className="flex justify-between items-center text-[10px] font-mono text-slate-400">
                  <span className="flex items-center gap-1.5"><Terminal size={12} className="text-gold-400" /> {loadingText}</span>
                  <span className="font-bold text-white">{loadingProgress}%</span>
                </div>
                
                {/* Visual Progress slider */}
                <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden border border-white/5">
                  <div 
                    className="bg-gradient-to-r from-gold-500 to-gold-300 h-full rounded-full transition-all duration-100 ease-out"
                    style={{ width: `${loadingProgress}%` }}
                  />
                </div>
              </div>

              {/* Telemetry Status Grid */}
              <div className="grid grid-cols-2 gap-4 p-4 rounded-xl border border-white/5 bg-white/1 flex justify-between font-mono text-[9px] text-slate-500">
                <div>
                  <p>SYS_STATUS: <span className="text-emerald-400">ENCRYPTED</span></p>
                  <p>GEO_LOC: London / Dubai</p>
                </div>
                <div className="text-right">
                  <p>FEED: BLOOMBERG_SEC_3</p>
                  <p>COMPOUND_MOD: ACTIVE</p>
                </div>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 4. MAIN APP CONTENT VIEWPORT */}
      {!isLoading && (
        <>
          {/* Header Live Forex Quote Tape */}
          <TradingViewTicker />

          {/* Sticky Navigation */}
          <Navbar theme={theme} setTheme={setTheme} scrollProgress={scrollProgress} />

          {/* Hero Section with interactive candlestick charts background */}
          <Hero 
            onScrollToContact={handleScrollToContact} 
            onScrollToPortfolio={handleScrollToPortfolio}
            theme={theme}
          />

          {/* About Section */}
          <About />

          {/* Skills Section */}
          <Skills />

          {/* Trading Statistics (Ledgers, Win rates, Circular Progress Metrics) */}
          <Stats />

          {/* LIVE TRADINGVIEW EMBEDDED MAIN DATA WIDGET SECTION (Apple/Tesla level highlight) */}
          <section className="py-12 relative overflow-hidden bg-[#070707]">
            <div className="max-w-7xl mx-auto px-6 relative z-20">
              <div className="glass-card p-6 sm:p-8 rounded-2xl border border-white/5 flex flex-col md:grid md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-4 space-y-4">
                  <span className="text-xs font-mono tracking-widest text-gold-400 uppercase flex items-center gap-1.5">
                    <Sparkles size={14} className="text-gold-400 animate-pulse" /> Real-Time Analytics
                  </span>
                  <h3 className="font-display font-extrabold text-white text-2xl sm:text-3xl leading-tight">
                    Live Gold <span className="text-gradient-gold">(XAU/USD)</span> Terminal Feed
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                    Interact directly with our verified live Gold market telemetry feed. Trace real-time support zones, Fibonacci levels, or toggle analytical tools straight on our active chart canvas.
                  </p>
                  
                  <div className="pt-4 border-t border-white/5">
                    <p className="text-[10px] font-mono text-slate-500 uppercase flex items-center gap-1">
                      <CheckCircle2 size={12} className="text-emerald-500" /> Authorized connection feed
                    </p>
                  </div>
                </div>

                <div className="md:col-span-8 w-full">
                  <TradingViewMainChart symbol="OANDA:XAUUSD" theme={theme} />
                </div>
              </div>
            </div>
          </section>

          {/* Services Portfolio */}
          <Services onSelectService={handleSelectService} />

          {/* Career Trajectory timeline */}
          <Timeline />

          {/* Active Work Portfolios (Journals, analyses, case studies, slide-over audits) */}
          <Portfolio selectedService={selectedProjectCategory()} setSelectedService={setSelectedService} />

          {/* Lightbox Visual Gallery */}
          <Gallery />

          {/* Testimonials */}
          <Testimonials />

          {/* Credentials and Certifications */}
          <Certifications />

          {/* Accordion FAQ */}
          <FAQ />

          {/* Contact form and integrated custom locator map */}
          <Contact selectedService={selectedService} setSelectedService={setSelectedService} />

          {/* Footer with financial disclaimers and legal telemetry disclosures */}
          <Footer />

          {/* 5. FLOATING BACK TO TOP TRIGGER */}
          <AnimatePresence>
            {showBackToTop && (
              <motion.button
                initial={{ opacity: 0, scale: 0.8, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 10 }}
                onClick={handleBackToTop}
                title="Back to Top"
                className="fixed bottom-6 right-6 p-4 rounded-xl bg-gold-500 text-black shadow-lg shadow-gold-500/20 z-40 transition-transform hover:-translate-y-1 cursor-pointer select-none"
              >
                <ArrowUp size={16} />
              </motion.button>
            )}
          </AnimatePresence>
        </>
      )}

    </div>
  );

  // Helper hook mapper to prevent typing mismatches inside form inputs
  function selectedProjectCategory() {
    return selectedService;
  }
}
