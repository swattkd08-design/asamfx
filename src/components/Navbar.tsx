import { useState, useEffect } from "react";
import { Menu, X, Globe, DollarSign, Cpu } from "lucide-react";

interface NavbarProps {
  theme: "gold" | "emerald";
  setTheme: (theme: "gold" | "emerald") => void;
  scrollProgress: number;
}

export default function Navbar({ theme, setTheme, scrollProgress }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Stats", href: "#statistics" },
    { name: "Services", href: "#services" },
    { name: "Journey", href: "#journey" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Gallery", href: "#gallery" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 select-none ${
        isScrolled
          ? "bg-[#030303]/80 backdrop-blur-md border-b border-white/5 py-4"
          : "bg-transparent py-6"
      }`}
    >
      {/* Scroll Progress Indicator Bar */}
      <div 
        className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-gold-500 via-gold-400 to-emerald-500 transition-all duration-100" 
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2 group cursor-pointer">
          {/* Logo Icon */}
          <div className="flex items-end gap-0.5 h-6 w-6 relative overflow-hidden">
            <span className="w-1 bg-emerald-500 h-3 rounded-full animate-pulse"></span>
            <span className="w-1 bg-gold-400 h-5 rounded-full"></span>
            <span className="w-1 bg-emerald-500 h-4 rounded-full"></span>
          </div>

          <span className="font-display font-black text-xl tracking-tight text-white">
            ASAM <span className="text-gradient-gold group-hover:brightness-125 transition-all">FX</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-mono uppercase tracking-widest text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Theme Switcher Toggle + Primary Action Button */}
        <div className="hidden lg:flex items-center gap-6">
          
          {/* Theme switcher */}
          <div className="flex bg-[#0a0a0a] rounded-lg border border-white/5 p-0.5">
            <button
              onClick={() => setTheme("gold")}
              title="XAU/USD Gold Theme"
              className={`p-1.5 rounded-md transition-all cursor-pointer ${
                theme === "gold"
                  ? "bg-gold-500/10 text-gold-400 border border-gold-500/20"
                  : "text-slate-500 hover:text-slate-300"
              }`}
            >
              <DollarSign size={14} />
            </button>
            <button
              onClick={() => setTheme("emerald")}
              title="Forex Cyber Emerald Theme"
              className={`p-1.5 rounded-md transition-all cursor-pointer ${
                theme === "emerald"
                  ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                  : "text-slate-500 hover:text-slate-300"
              }`}
            >
              <Cpu size={14} />
            </button>
          </div>

          {/* Nav CTA */}
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-lg border border-gold-400/20 bg-gold-400/5 hover:bg-gold-500 hover:text-black font-mono text-[10px] uppercase tracking-widest font-bold transition-all cursor-pointer"
          >
            Fund Request
          </a>
        </div>

        {/* Mobile menu trigger */}
        <div className="lg:hidden flex items-center gap-4">
          
          {/* Mobile Theme Switcher */}
          <button
            onClick={() => setTheme(theme === "gold" ? "emerald" : "gold")}
            className="p-2 rounded-lg bg-[#0a0a0a] border border-white/5 text-slate-400 hover:text-white cursor-pointer"
          >
            {theme === "gold" ? <DollarSign size={14} /> : <Cpu size={14} />}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg bg-[#0a0a0a] border border-white/5 text-slate-400 hover:text-white cursor-pointer"
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden fixed top-[73px] left-0 w-full bg-[#030303]/95 border-b border-white/5 p-6 space-y-4 shadow-2xl backdrop-blur-md z-40 select-none">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-xs font-mono uppercase tracking-widest text-slate-400 hover:text-white transition-colors py-2 border-b border-white/5"
              >
                {link.name}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="block text-center px-4 py-3 bg-gradient-to-r from-gold-600 to-gold-400 text-black font-mono text-xs uppercase tracking-wider font-bold rounded-lg cursor-pointer"
          >
            Request Allocation
          </a>
        </div>
      )}
    </nav>
  );
}
