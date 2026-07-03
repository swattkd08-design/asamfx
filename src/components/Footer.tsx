import { useState, FormEvent } from "react";
import { 
  Send as TelegramIcon, 
  MessageSquare, 
  Instagram, 
  Mail, 
  ChevronRight, 
  ShieldCheck, 
  ArrowUp,
  ShieldAlert
} from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribing, setSubscribing] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setSubscribing(true);
    setTimeout(() => {
      setSubscribing(false);
      setSubscribed(true);
      setEmail("");
    }, 1500);
  };

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#050505] border-t border-white/5 pt-20 pb-12 relative overflow-hidden select-none">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-gold-600/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-20">
        
        {/* Top Segment: Brand, Quick Links, Newsletter */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/5">
          
          {/* Brand Segment */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-2 group">
              <div className="flex items-end gap-0.5 h-6 w-6">
                <span className="w-1 bg-emerald-500 h-3 rounded-full animate-pulse"></span>
                <span className="w-1 bg-gold-400 h-5 rounded-full"></span>
                <span className="w-1 bg-emerald-500 h-4 rounded-full"></span>
              </div>
              <span className="font-display font-black text-xl tracking-tight text-white">
                ASAM <span className="text-gradient-gold">FX</span>
              </span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed font-sans max-w-sm">
              Securing systematic wealth cycles using advanced structural Price Action and Smart Money Concepts (SMC). Managing seven-figure allocations with absolute risk discipline.
            </p>

            {/* Social icons row */}
            <div className="flex items-center gap-3 pt-2">
              <a href="https://t.me/asam_fx_official" target="_blank" rel="noreferrer" className="p-2 rounded-md bg-white/5 hover:bg-[#229ED9]/10 text-slate-400 hover:text-[#229ED9] transition-all border border-white/5 hover:border-[#229ED9]/20" title="Telegram Channel">
                <TelegramIcon size={14} />
              </a>
              <a href="https://wa.me/447700900077" target="_blank" rel="noreferrer" className="p-2 rounded-md bg-white/5 hover:bg-[#25D366]/10 text-slate-400 hover:text-[#25D366] transition-all border border-white/5 hover:border-[#25D366]/20" title="WhatsApp Chat">
                <MessageSquare size={14} />
              </a>
              <a href="https://instagram.com/asam.fx" target="_blank" rel="noreferrer" className="p-2 rounded-md bg-white/5 hover:bg-[#E1306C]/10 text-slate-400 hover:text-[#E1306C] transition-all border border-white/5 hover:border-[#E1306C]/20" title="Instagram Profile">
                <Instagram size={14} />
              </a>
              <a href="mailto:contact@asamfx.com" className="p-2 rounded-md bg-white/5 hover:bg-gold-500/10 text-slate-400 hover:text-gold-400 transition-all border border-white/5 hover:border-gold-500/20" title="Email Desk">
                <Mail size={14} />
              </a>
            </div>
          </div>

          {/* Quick Links Segment */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-[10px] font-mono uppercase tracking-widest text-slate-500 font-bold">Quick Navigation</h4>
            <div className="grid grid-cols-2 gap-2 text-xs font-mono text-slate-400">
              <a href="#about" className="hover:text-gold-400 transition-colors flex items-center gap-0.5"><ChevronRight size={10} /> About</a>
              <a href="#skills" className="hover:text-gold-400 transition-colors flex items-center gap-0.5"><ChevronRight size={10} /> Skills</a>
              <a href="#statistics" className="hover:text-gold-400 transition-colors flex items-center gap-0.5"><ChevronRight size={10} /> Stats</a>
              <a href="#services" className="hover:text-gold-400 transition-colors flex items-center gap-0.5"><ChevronRight size={10} /> Services</a>
              <a href="#journey" className="hover:text-gold-400 transition-colors flex items-center gap-0.5"><ChevronRight size={10} /> Trajectory</a>
              <a href="#portfolio" className="hover:text-gold-400 transition-colors flex items-center gap-0.5"><ChevronRight size={10} /> Ledger</a>
              <a href="#gallery" className="hover:text-gold-400 transition-colors flex items-center gap-0.5"><ChevronRight size={10} /> Archive</a>
              <a href="#faq" className="hover:text-gold-400 transition-colors flex items-center gap-0.5"><ChevronRight size={10} /> FAQs</a>
            </div>
          </div>

          {/* Newsletter Subscription */}
          <div className="md:col-span-5 space-y-4">
            <h4 className="text-[10px] font-mono uppercase tracking-widest text-slate-500 font-bold">The Speculative Report</h4>
            <p className="text-xs text-slate-400 leading-normal font-sans">
              Sign up to receive macro outlook reports, institutional sweeps analysis, and exclusive mentorship slots directly to your inbox.
            </p>

            {!subscribed ? (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  required
                  placeholder="speculator@domain.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="luxury-input flex-1 py-2 text-xs"
                />
                <button
                  type="submit"
                  disabled={subscribing}
                  className="px-4 py-2 bg-gold-500 hover:bg-gold-400 text-black font-mono font-bold text-[10px] uppercase tracking-wider rounded-lg transition-all cursor-pointer whitespace-nowrap"
                >
                  {subscribing ? "Encrypting..." : "Subscribe"}
                </button>
              </form>
            ) : (
              <div className="p-3 rounded-lg bg-emerald-500/5 border border-emerald-500/25 flex items-center gap-2 text-[10px] font-mono text-emerald-400">
                <ShieldCheck size={14} /> Subscribed to Speculative Report list.
              </div>
            )}
          </div>

        </div>

        {/* Middle Segment: Comprehensive Financial Risk Disclaimer (Essential for Forex Portfolios) */}
        <div className="py-8 border-b border-white/5 space-y-3 select-text">
          <div className="flex items-center gap-2 text-red-400 font-mono text-[9px] uppercase tracking-widest font-bold">
            <ShieldAlert size={12} /> High Risk Warning / Speculative Disclosure
          </div>
          <p className="text-[9.5px] text-slate-500 font-sans leading-relaxed text-justify">
            Trading foreign exchange on margin, CFD, and precious metals carries a high level of risk, and may not be suitable for all investors. The high degree of leverage can work against you as well as for you. Before deciding to trade foreign exchange or allocate capital to prop evaluations, you should carefully consider your investment objectives, level of experience, and risk appetite. The possibility exists that you could sustain a loss of some or all of your initial investment. You should be aware of all the risks associated with foreign exchange trading, and seek advice from an independent financial advisor if you have any doubts. Any performance records or case studies shown on this website represent hypothetical or simulated results, which may not mirror actual performance. Past results are not indicative of future market returns.
          </p>
        </div>

        {/* Bottom Segment: Copyright & Back-to-Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-mono text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} ASAM FX. All Rights Reserved. Created under institutional compliance framework.
          </div>

          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5"><ShieldCheck className="text-emerald-500" size={14} /> SECURE SOCKET ENG</span>
            
            <button
              onClick={handleBackToTop}
              className="group flex items-center gap-1 hover:text-white transition-colors cursor-pointer text-slate-400 font-bold uppercase tracking-wider text-[9px]"
            >
              Back to Top <ArrowUp size={12} className="group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
