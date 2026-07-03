import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Maximize2, X, Compass, ExternalLink, Calendar } from "lucide-react";

interface GalleryItem {
  id: string;
  title: string;
  category: "Setup" | "Lifestyle" | "Chart" | "Workspace";
  imageUrl: string;
  description: string;
  date: string;
}

const galleryData: GalleryItem[] = [
  {
    id: "setup-1",
    title: "Dual Monitor Trading Desk",
    category: "Workspace",
    imageUrl: "https://picsum.photos/seed/tradingsetup/800/600",
    description: "Our high-end London trading desk featuring multiple high-refresh monitors streaming Bloomberg terminals, Metatrader, and TradingView grids.",
    date: "June 2026",
  },
  {
    id: "chart-1",
    title: "Gold (XAU/USD) 1h Liquidity Map",
    category: "Chart",
    imageUrl: "https://picsum.photos/seed/goldchart/800/600",
    description: "An archived macro mapping of gold liquidity pools. Showing key buy-side (BSL) boundaries tapped prior to the Federal Reserve expansion cycle.",
    date: "May 2026",
  },
  {
    id: "lifestyle-1",
    title: "Dubai High-Rise Workspace",
    category: "Lifestyle",
    imageUrl: "https://picsum.photos/seed/lifestyle/800/600",
    description: "Aligning order blocks with a view. Executing New York session trades from our executive workspace overlooking Dubai Marina.",
    date: "April 2026",
  },
  {
    id: "workspace-1",
    title: "Minimalist Travel Workstation",
    category: "Workspace",
    imageUrl: "https://picsum.photos/seed/workstation/800/600",
    description: "Ultimate mobility. A premium laptop workstation paired with an iPad showing real-time market matrices on a marble desk.",
    date: "June 2026",
  },
  {
    id: "chart-2",
    title: "EUR/USD Imbalance Correction",
    category: "Chart",
    imageUrl: "https://picsum.photos/seed/analysis/800/600",
    description: "Tracking the corrective retracement phase of EUR/USD into the 15m Fair Value Gap, validating the London Silver Bullet model.",
    date: "March 2026",
  },
  {
    id: "lifestyle-2",
    title: "Swiss Alpine Focus Retreat",
    category: "Lifestyle",
    imageUrl: "https://picsum.photos/seed/swissretreat/800/600",
    description: "Trading psychology focus. Resetting neural pathways and backtesting historical market archives in the serenity of the Swiss Alps.",
    date: "January 2026",
  }
];

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState<"All" | "Setup" | "Lifestyle" | "Chart" | "Workspace">("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = galleryData.filter(
    (item) => activeFilter === "All" || item.category === activeFilter
  );

  const openLightbox = (id: string) => {
    const index = galleryData.findIndex((item) => item.id === id);
    if (index !== -1) {
      setLightboxIndex(index);
    }
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const navigateLightbox = (direction: "prev" | "next") => {
    if (lightboxIndex === null) return;
    let nextIndex = direction === "next" ? lightboxIndex + 1 : lightboxIndex - 1;

    if (nextIndex >= galleryData.length) nextIndex = 0;
    if (nextIndex < 0) nextIndex = galleryData.length - 1;

    setLightboxIndex(nextIndex);
  };

  return (
    <section className="py-24 relative overflow-hidden" id="gallery">
      {/* Background decorations */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-emerald-600/5 rounded-full blur-[110px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-20">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-xs font-mono tracking-[0.3em] text-gold-400 uppercase font-medium">Visual Archive</span>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold mt-2 text-white">Trading <span className="text-gradient-gold">Gallery</span></h2>
          <div className="w-12 h-1 bg-gradient-to-r from-gold-500 to-transparent mx-auto mt-4"></div>
        </div>

        {/* Category Filters */}
        <div className="flex justify-center flex-wrap gap-2 mb-12 select-none">
          {(["All", "Chart", "Workspace", "Lifestyle"] as const).map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter as any)}
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

        {/* Gallery Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.02 }}
                onClick={() => openLightbox(item.id)}
                className="group relative h-72 rounded-xl overflow-hidden cursor-pointer border border-white/5 shadow-lg select-none"
              >
                {/* Foreground Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 group-hover:via-black/20 z-10 transition-all duration-300"></div>

                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />

                {/* Floating Top Tag */}
                <span className="absolute top-4 left-4 bg-black/60 backdrop-blur-md border border-white/10 text-gold-400 font-mono text-[9px] uppercase tracking-widest px-2.5 py-1 rounded z-20">
                  {item.category}
                </span>

                {/* Info Text Overlay */}
                <div className="absolute bottom-6 left-6 right-6 z-20 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex items-center gap-2 text-[9px] font-mono text-slate-400 mb-1">
                    <Calendar size={10} /> {item.date}
                  </div>
                  <h4 className="font-display font-extrabold text-white text-base sm:text-lg group-hover:text-gold-400 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-slate-400 text-xs mt-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-2">
                    {item.description}
                  </p>
                </div>

                {/* Hover Maximize Icon */}
                <div className="absolute top-4 right-4 p-2 rounded-lg bg-black/60 backdrop-blur-md border border-white/10 text-white opacity-0 group-hover:opacity-100 transition-opacity z-20">
                  <Maximize2 size={14} />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {lightboxIndex !== null && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* Dark backdrop overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={closeLightbox}
                className="absolute inset-0 bg-black/95 backdrop-blur-lg cursor-pointer"
              ></motion.div>

              {/* Lightbox Panel */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ type: "spring", duration: 0.5 }}
                className="relative max-w-4xl w-full z-10 glass-card border border-white/10 rounded-2xl overflow-hidden flex flex-col md:grid md:grid-cols-12 max-h-[85vh] shadow-2xl shadow-black"
              >
                {/* Left Side: Images */}
                <div className="md:col-span-8 relative bg-black flex items-center justify-center">
                  <img
                    src={galleryData[lightboxIndex].imageUrl}
                    alt={galleryData[lightboxIndex].title}
                    className="w-full h-auto max-h-[50vh] md:max-h-[80vh] object-contain"
                    referrerPolicy="no-referrer"
                  />

                  {/* Left navigation trigger */}
                  <button
                    onClick={() => navigateLightbox("prev")}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 border border-white/10 hover:border-gold-400 text-white transition-colors cursor-pointer select-none"
                  >
                    &#8592;
                  </button>

                  {/* Right navigation trigger */}
                  <button
                    onClick={() => navigateLightbox("next")}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 border border-white/10 hover:border-gold-400 text-white transition-colors cursor-pointer select-none"
                  >
                    &#8594;
                  </button>
                </div>

                {/* Right Side: Info Panel */}
                <div className="md:col-span-4 p-6 sm:p-8 bg-[#0c0c0c] border-t md:border-t-0 md:border-l border-white/10 flex flex-col justify-between">
                  <div>
                    {/* Close Trigger */}
                    <button
                      onClick={closeLightbox}
                      className="absolute top-4 right-4 text-slate-400 hover:text-white p-2 bg-white/5 border border-white/5 rounded-lg cursor-pointer transition-colors"
                    >
                      <X size={16} />
                    </button>

                    <span className="text-[9px] font-mono tracking-widest text-gold-400 uppercase font-semibold">
                      {galleryData[lightboxIndex].category} // Operational Record
                    </span>

                    <h3 className="font-display font-extrabold text-white text-lg sm:text-xl mt-2 leading-tight">
                      {galleryData[lightboxIndex].title}
                    </h3>

                    <p className="text-slate-400 text-xs sm:text-sm mt-4 leading-relaxed font-sans">
                      {galleryData[lightboxIndex].description}
                    </p>
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-500">
                    <span className="flex items-center gap-1.5"><Calendar size={12} /> Logged: {galleryData[lightboxIndex].date}</span>
                    <span className="text-gold-400 font-bold uppercase tracking-widest text-[9px] flex items-center gap-1">
                      VERIFIED ACC <ExternalLink size={10} />
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
