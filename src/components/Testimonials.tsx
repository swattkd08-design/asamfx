import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Star, Quote, ChevronLeft, ChevronRight, ShieldCheck } from "lucide-react";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  content: string;
  verified: boolean;
}

const testimonialsData: Testimonial[] = [
  {
    id: "t-1",
    name: "Dillon K.",
    role: "Secured $200K Maven Funded Account",
    avatar: "https://picsum.photos/seed/dillon/100/100",
    rating: 5,
    content: "Asam's SMC entry checklists are absolute gold. I was stuck in the retail indicators loop for years, but after 3 weeks of private coaching, I cleared my $200k evaluation. The Silver Bullet model is extremely consistent.",
    verified: true,
  },
  {
    id: "t-2",
    name: "Sophia R.",
    role: "Private Fund Allocator",
    avatar: "https://picsum.photos/seed/sophia/100/100",
    rating: 5,
    content: "The trade recaps and case studies are where Asam shines. It's not about guessing; it's about systematic mathematical execution. We allocated capital to his copy-trader system and have logged +14.2% monthly compounded growth.",
    verified: true,
  },
  {
    id: "t-3",
    name: "Michael S.",
    role: "Funded Trader ($100K FTMO)",
    avatar: "https://picsum.photos/seed/michael/100/100",
    rating: 5,
    content: "Asam's signal group is the only broadcast channel I've found that is completely verified. Each setup is supported by extensive technical chart maps, and his risk parameters are incredibly strict.",
    verified: true,
  },
  {
    id: "t-4",
    name: "Elena G.",
    role: "Retail Transition Student",
    avatar: "https://picsum.photos/seed/elena/100/100",
    rating: 5,
    content: "Trading psychology was my biggest struggle. Asam taught me to act like a risk manager first and a speculator second. He teaches how to embrace losses as standard business overhead. Fully funded and highly consistent!",
    verified: true,
  }
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const resetAutoplay = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetAutoplay();
    timeoutRef.current = setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % testimonialsData.length);
    }, 5000);

    return () => resetAutoplay();
  }, [activeIndex]);

  const handlePrev = () => {
    resetAutoplay();
    setActiveIndex((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    resetAutoplay();
    setActiveIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  return (
    <section className="py-24 relative overflow-hidden bg-black/40" id="testimonials">
      {/* Decorative glows */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-gold-600/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-20">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-mono tracking-[0.3em] text-gold-400 uppercase font-medium">Global Student Ledger</span>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold mt-2 text-white">Trader <span className="text-gradient-gold">Feedback</span></h2>
          <div className="w-12 h-1 bg-gradient-to-r from-gold-500 to-transparent mx-auto mt-4"></div>
        </div>

        {/* Testimonials Slider View */}
        <div className="relative min-h-[380px] sm:min-h-[320px] flex items-center justify-center">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.98, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.98, x: -20 }}
              transition={{ duration: 0.4 }}
              className="w-full glass-card p-8 sm:p-12 rounded-2xl border border-white/5 relative flex flex-col justify-between"
            >
              {/* Giant Quote Icon */}
              <div className="absolute top-6 right-8 text-gold-400/5 pointer-events-none select-none">
                <Quote size={80} />
              </div>

              {/* Stars and Verification Badge */}
              <div className="flex items-center justify-between">
                <div className="flex gap-1">
                  {[...Array(testimonialsData[activeIndex].rating)].map((_, sIndex) => (
                    <Star key={sIndex} className="text-gold-400 fill-gold-400" size={14} />
                  ))}
                </div>

                {testimonialsData[activeIndex].verified && (
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[9px] font-mono font-bold uppercase tracking-widest">
                    <ShieldCheck size={12} /> Verified Funded
                  </div>
                )}
              </div>

              {/* Feedback Content */}
              <p className="text-slate-200 text-sm sm:text-base md:text-lg leading-relaxed font-sans italic mt-6">
                "{testimonialsData[activeIndex].content}"
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4 mt-8 pt-6 border-t border-white/5">
                <img
                  src={testimonialsData[activeIndex].avatar}
                  alt={testimonialsData[activeIndex].name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-gold-400/20 shadow-md grayscale"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-display font-bold text-white text-sm sm:text-base">
                    {testimonialsData[activeIndex].name}
                  </h4>
                  <p className="text-[10px] sm:text-xs text-gold-400 font-mono uppercase tracking-widest mt-0.5">
                    {testimonialsData[activeIndex].role}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Slider Arrow Navigation Controls */}
          <div className="absolute -bottom-16 sm:bottom-auto sm:-left-6 sm:-right-6 sm:top-1/2 sm:-translate-y-1/2 flex justify-center gap-4 sm:justify-between w-full pointer-events-none">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full bg-black/60 border border-white/5 hover:border-gold-400 text-white pointer-events-auto transition-colors cursor-pointer shadow-md"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={handleNext}
              className="p-3 rounded-full bg-black/60 border border-white/5 hover:border-gold-400 text-white pointer-events-auto transition-colors cursor-pointer shadow-md"
            >
              <ChevronRight size={16} />
            </button>
          </div>

        </div>

        {/* Carousel Indicator Dots */}
        <div className="flex justify-center gap-2 mt-8 select-none">
          {testimonialsData.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                resetAutoplay();
                setActiveIndex(index);
              }}
              className={`w-2.5 h-1 rounded-full transition-all duration-300 cursor-pointer ${
                activeIndex === index ? "w-6 bg-gold-400" : "bg-white/10 hover:bg-white/20"
              }`}
            ></button>
          ))}
        </div>

      </div>
    </section>
  );
}
