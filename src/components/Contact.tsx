import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Send, 
  MessageSquare, 
  Send as TelegramIcon, 
  Instagram, 
  Mail, 
  MapPin, 
  CheckCircle, 
  Smartphone, 
  ArrowRight,
  ShieldCheck
} from "lucide-react";

interface ContactProps {
  selectedService: string;
  setSelectedService: (service: string) => void;
}

export default function Contact({ selectedService, setSelectedService }: ContactProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    handle: "",
    service: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  useEffect(() => {
    if (selectedService) {
      setFormData((prev) => ({ ...prev, service: selectedService }));
    }
  }, [selectedService]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please populate the required fields to transmit.");
      return;
    }

    setIsSubmitting(true);
    
    // Simulate high-security transmission sequence
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: "",
        email: "",
        handle: "",
        service: "",
        message: "",
      });
      setSelectedService("");
    }, 2000);
  };

  return (
    <section className="py-24 relative overflow-hidden grid-overlay" id="contact">
      {/* Background neon glows */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gold-600/5 rounded-full blur-[130px] pointer-events-none animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-emerald-600/5 rounded-full blur-[130px] pointer-events-none animate-pulse-slow" style={{ animationDelay: "3s" }}></div>

      <div className="max-w-7xl mx-auto px-6 relative z-20">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-mono tracking-[0.3em] text-gold-400 uppercase font-medium">Transmit Encrypted Request</span>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold mt-2 text-white">Contact <span className="text-gradient-gold">Asam FX</span></h2>
          <div className="w-12 h-1 bg-gradient-to-r from-gold-500 to-transparent mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Direct Telegram/WhatsApp & Interactive Grid Map */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h3 className="font-display font-extrabold text-white text-xl sm:text-2xl">Connect Directly</h3>
              <p className="text-slate-400 text-xs sm:text-sm mt-2 leading-relaxed font-sans">
                Skip the form completely and initiate a high-priority direct message directly with Asam's personal execution desk.
              </p>
            </div>

            {/* Quick Action Luxury Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Telegram Channel Link */}
              <a
                href="https://t.me/asam_fx_official"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 p-5 rounded-xl glass-card border border-white/5 hover:border-gold-400/25 hover:bg-white/10 transition-all group select-none"
              >
                <div className="p-3 rounded-lg bg-[#229ED9]/10 text-[#229ED9]">
                  <TelegramIcon size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">Telegram Desk</h4>
                  <span className="text-[10px] text-slate-400 font-mono flex items-center gap-1 group-hover:text-gold-400 transition-colors">
                    Join Channel <ArrowRight size={10} />
                  </span>
                </div>
              </a>

              {/* WhatsApp Business Link */}
              <a
                href="https://wa.me/447700900077"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 p-5 rounded-xl glass-card border border-white/5 hover:border-emerald-500/25 hover:bg-white/10 transition-all group select-none"
              >
                <div className="p-3 rounded-lg bg-[#25D366]/10 text-[#25D366]">
                  <MessageSquare size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">WhatsApp</h4>
                  <span className="text-[10px] text-slate-400 font-mono flex items-center gap-1 group-hover:text-emerald-400 transition-colors">
                    Instant Connect <ArrowRight size={10} />
                  </span>
                </div>
              </a>

              {/* Instagram Link */}
              <a
                href="https://instagram.com/asam.fx"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 p-5 rounded-xl glass-card border border-white/5 hover:border-pink-500/25 hover:bg-white/10 transition-all group select-none"
              >
                <div className="p-3 rounded-lg bg-[#E1306C]/10 text-[#E1306C]">
                  <Instagram size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">Instagram</h4>
                  <span className="text-[10px] text-slate-400 font-mono flex items-center gap-1 group-hover:text-pink-400 transition-colors">
                    @asam.fx <ArrowRight size={10} />
                  </span>
                </div>
              </a>

              {/* Email Address */}
              <a
                href="mailto:contact@asamfx.com"
                className="flex items-center gap-4 p-5 rounded-xl glass-card border border-white/5 hover:border-gold-400/25 hover:bg-white/10 transition-all group select-none"
              >
                <div className="p-3 rounded-lg bg-gold-400/10 text-gold-400">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">Email Support</h4>
                  <span className="text-[10px] text-slate-400 font-mono flex items-center gap-1 group-hover:text-gold-400 transition-colors">
                    contact@asamfx.com <ArrowRight size={10} />
                  </span>
                </div>
              </a>

            </div>

            {/* Premium Interactive Vector Location Map (Custom High-End Design) */}
            <div className="glass-card rounded-2xl border border-white/5 p-6 relative overflow-hidden bg-gradient-to-br from-[#0c0c0c] to-[#040404] h-72 flex flex-col justify-between">
              
              {/* Map Title Overlay */}
              <div className="flex items-center justify-between z-10 border-b border-white/5 pb-2">
                <div className="flex items-center gap-2">
                  <MapPin className="text-gold-400" size={14} />
                  <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">Dual HQ Locations</span>
                </div>
                <span className="text-[9px] font-mono text-slate-500">London | Dubai</span>
              </div>

              {/* Map Visuals (Sleek technical grid with target targets) */}
              <div className="relative flex-1 flex justify-center items-center my-4">
                {/* Simulated continents/coordinates */}
                <div className="absolute inset-0 bg-[#080808]/80 rounded-xl border border-white/5 opacity-55 grid-overlay pointer-events-none"></div>

                {/* Pulse Target London */}
                <div className="absolute left-[30%] top-[35%] flex flex-col items-center">
                  <span className="relative flex h-3.5 w-3.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-gold-500"></span>
                  </span>
                  <span className="text-[8px] font-mono text-slate-400 mt-1 uppercase font-semibold">London Desk</span>
                </div>

                {/* Pulse Target Dubai */}
                <div className="absolute right-[30%] bottom-[35%] flex flex-col items-center">
                  <span className="relative flex h-3.5 w-3.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500"></span>
                  </span>
                  <span className="text-[8px] font-mono text-slate-400 mt-1 uppercase font-semibold">Dubai HQ</span>
                </div>

                {/* Connection Line */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M 115,70 Q 185,40 235,115"
                    fill="transparent"
                    stroke="rgba(196, 161, 78, 0.2)"
                    strokeWidth="1.5"
                    strokeDasharray="4,4"
                  />
                </svg>
              </div>

              <p className="text-[10px] text-slate-500 font-mono text-center z-10 leading-normal">
                Standard office hours: 08:00 - 17:00 London AM / 09:00 - 18:00 Dubai PM.
              </p>
            </div>

          </div>

          {/* Right Column: Encrypted Form Section */}
          <div className="lg:col-span-7 glass-card p-8 rounded-2xl border border-white/5 bg-[#080808]/45 relative">
            
            <AnimatePresence mode="wait">
              {!submitSuccess ? (
                <motion.form
                  key="contact-form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] font-mono uppercase tracking-widest text-slate-400 font-semibold">
                        Your Full Name <span className="text-gold-400">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="e.g., Asam Ali"
                        className="luxury-input"
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] font-mono uppercase tracking-widest text-slate-400 font-semibold">
                        Your Email Address <span className="text-gold-400">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="e.g., info@domain.com"
                        className="luxury-input"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] font-mono uppercase tracking-widest text-slate-400 font-semibold">
                        Telegram / WhatsApp Handle
                      </label>
                      <input
                        type="text"
                        name="handle"
                        value={formData.handle}
                        onChange={handleInputChange}
                        placeholder="e.g., @asam_speculator"
                        className="luxury-input"
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] font-mono uppercase tracking-widest text-slate-400 font-semibold">
                        Service Category
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="luxury-input select-none appearance-none"
                      >
                        <option value="">-- General Inquiries --</option>
                        <option value="1-on-1 Elite Mentorship">1-on-1 Elite Mentorship</option>
                        <option value="VIP Signal Broadcast">VIP Signal Broadcast</option>
                        <option value="Portfolio Management">Portfolio Management</option>
                        <option value="Account & Performance Review">Account & Performance Review</option>
                        <option value="Trading Consultation">Trading Consultation</option>
                        <option value="Strategy Development">Strategy Development</option>
                        <option value="Daily Market Analysis">Daily Market Analysis</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-mono uppercase tracking-widest text-slate-400 font-semibold">
                      Your Message / Goals Description <span className="text-gold-400">*</span>
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Outline your trading background, active fund sizes, and specific goals..."
                      className="luxury-input resize-none"
                    ></textarea>
                  </div>

                  {/* Submission triggers */}
                  <div className="pt-4 flex items-center justify-between flex-wrap gap-4">
                    <div className="flex items-center gap-2 text-[10px] font-mono text-slate-500 select-none">
                      <Smartphone size={14} className="text-gold-400" /> Secure 256-Bit SSL Encryption
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-8 py-4 bg-gradient-to-r from-gold-600 to-gold-400 hover:from-gold-500 hover:to-gold-300 text-black font-mono font-bold text-xs uppercase tracking-wider rounded-lg transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-gold-500/10 min-w-[200px]"
                    >
                      {isSubmitting ? (
                        <>Transmitting...</>
                      ) : (
                        <>
                          Transmit Message <Send size={14} />
                        </>
                      )}
                    </button>
                  </div>
                </motion.form>
              ) : (
                <motion.div
                  key="success-screen"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center text-center py-16 space-y-5"
                >
                  <div className="p-4 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 animate-bounce">
                    <CheckCircle size={44} />
                  </div>
                  <div>
                    <h3 className="font-display font-black text-white text-2xl sm:text-3xl uppercase tracking-tight">
                      Transmission Successful
                    </h3>
                    <p className="text-slate-400 text-xs sm:text-sm max-w-sm mx-auto mt-2 leading-relaxed">
                      Your encrypted request has been compiled and safely transmitted. Asam FX's assistant will contact you via Telegram/Email within 12 hours.
                    </p>
                  </div>

                  <div className="p-4 bg-gold-400/5 border border-gold-400/20 rounded-xl text-left max-w-md w-full font-mono text-[11px] text-slate-300">
                    <p className="text-gold-400 font-bold mb-1 uppercase tracking-widest">System Secure Telemetry Status:</p>
                    <p>● Message ID: {Math.random().toString(36).substr(2, 9).toUpperCase()}</p>
                    <p>● Channel: TLS_SSL_SECURE</p>
                    <p>● Priority Index: LEVEL_1_ALLOCATION</p>
                  </div>

                  <button
                    onClick={() => setSubmitSuccess(false)}
                    className="px-6 py-2.5 rounded-lg border border-white/10 text-white font-mono text-xs uppercase tracking-wider hover:bg-white/5 transition-colors cursor-pointer"
                  >
                    Send Another Request
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

          </div>

        </div>

      </div>
    </section>
  );
}
