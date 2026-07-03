import { ReactNode } from "react";
import { motion } from "motion/react";
import { 
  GraduationCap, 
  Radio, 
  Briefcase, 
  FileText, 
  HelpCircle, 
  Settings2, 
  LineChart, 
  ArrowUpRight 
} from "lucide-react";

interface ServiceItem {
  id: string;
  title: string;
  icon: ReactNode;
  desc: string;
  features: string[];
  price?: string;
  highlighted?: boolean;
}

interface ServicesProps {
  onSelectService: (serviceTitle: string) => void;
}

const servicesData: ServiceItem[] = [
  {
    id: "mentorship",
    title: "1-on-1 Elite Mentorship",
    icon: <GraduationCap size={24} />,
    desc: "A direct, personal coaching program where we strip away retail theory and build you into a rules-authoritative fund allocator.",
    features: [
      "Full SMC/ICT core curriculum",
      "Daily live trading session room",
      "Private video log reviews",
      "Prop firm challenge blueprint",
    ],
    price: "$999 / Lifetime",
    highlighted: true,
  },
  {
    id: "signals",
    title: "VIP Signal Broadcast",
    icon: <Radio size={24} />,
    desc: "Real-time telegram broadcast of Asam's actual setups, showing exact entries, protective stops, and multiple scale-out target zones.",
    features: [
      "Average 5-10 high quality setups/week",
      "XAU/USD, EUR/USD, GBP/USD focus",
      "Full chart breakdown analysis",
      "Telegram instant alert integration",
    ],
    price: "$149 / Month",
  },
  {
    id: "management",
    title: "Portfolio Management",
    icon: <Briefcase size={24} />,
    desc: "Institutional asset allocation for qualified individuals and corporate accounts looking for algorithmic compound growth.",
    features: [
      "Strict maximum daily drawdowns (1.5%)",
      "Automated copy-trading software",
      "Bi-weekly performance audit sheets",
      "Transparent multi-million fund pool",
    ],
    price: "Custom Allocation",
  },
  {
    id: "review",
    title: "Account & Performance Review",
    icon: <FileText size={24} />,
    desc: "Deep-dive diagnostic of your current journal history. We identify your repeating mistakes, win biases, and risk leakage points.",
    features: [
      "100+ historic trades analysis",
      "Tailored corrective checklist",
      "Risk metric report card",
      "1-hour private review Zoom call",
    ],
    price: "$299 / Review",
  },
  {
    id: "consultation",
    title: "Trading Consultation",
    icon: <HelpCircle size={24} />,
    desc: "A strategic, customized consulting session focused on solving a specific problem in your execution or psychology.",
    features: [
      "Custom scaling strategies",
      "Mindset/discipline evaluation",
      "Prop firm choosing guidelines",
      "Q&A session with Asam",
    ],
    price: "$199 / Hour",
  },
  {
    id: "strategy",
    title: "Strategy Development",
    icon: <Settings2 size={24} />,
    desc: "Collaborative design of a highly personalized trading playbook that conforms perfectly to your daily schedule and risk profile.",
    features: [
      "Precision entry trigger checklists",
      "Clear daily bias criteria",
      "Session-specific (NY/London) setups",
      "Backtesting data templates",
    ],
    price: "$599 One-time",
  },
  {
    id: "analysis",
    title: "Daily Market Analysis",
    icon: <LineChart size={24} />,
    desc: "High-probability macro outlooks delivered straight to your inbox before the major trading sessions kick off.",
    features: [
      "Key session liquidity pools marked",
      "Premium/discount zones outlined",
      "Economic calendar impact assessments",
      "Directional daily bias breakdowns",
    ],
    price: "$49 / Month",
  },
];

export default function Services({ onSelectService }: ServicesProps) {
  return (
    <section className="py-24 relative overflow-hidden bg-black/40" id="services">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-gold-600/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-20">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-mono tracking-[0.3em] text-gold-400 uppercase font-medium">How We Collaborate</span>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold mt-2 text-white">Institutional <span className="text-gradient-gold">Services</span></h2>
          <div className="w-12 h-1 bg-gradient-to-r from-gold-500 to-transparent mx-auto mt-4"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              key={service.id}
              className={`p-8 rounded-2xl border transition-all duration-300 relative group flex flex-col justify-between ${
                service.highlighted
                  ? "bg-gradient-to-br from-gold-950/20 to-black border-gold-500/30 shadow-xl shadow-gold-500/5 hover:border-gold-400"
                  : "bg-white/5 border-white/5 hover:border-gold-500/20 hover:bg-[#121212]/80"
              }`}
            >
              {service.highlighted && (
                <div className="absolute -top-3 right-6 bg-gold-500 text-black text-[9px] font-mono font-bold uppercase px-3 py-1 rounded-full tracking-widest select-none shadow-md">
                  Most Popular
                </div>
              )}

              <div>
                {/* Header Icon & Title */}
                <div className="flex items-start justify-between">
                  <div className={`p-4 rounded-xl h-fit w-fit ${
                    service.highlighted
                      ? "bg-gold-500/10 text-gold-400"
                      : "bg-white/5 text-gold-400 group-hover:bg-gold-400/10"
                  } transition-colors duration-300`}>
                    {service.icon}
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-400 tracking-wider">
                    {service.price}
                  </span>
                </div>

                <h3 className="font-display font-extrabold text-white text-xl sm:text-2xl mt-6 group-hover:text-gold-400 transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="text-slate-400 text-xs sm:text-sm mt-3 leading-relaxed">
                  {service.desc}
                </p>

                {/* Features Checklist */}
                <ul className="mt-6 space-y-2">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-2.5 text-xs text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold-500"></span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <div className="mt-8 pt-6 border-t border-white/5">
                <button
                  onClick={() => onSelectService(service.title)}
                  className={`w-full py-3.5 px-4 rounded-lg font-mono text-xs uppercase tracking-wider font-semibold flex items-center justify-center gap-1.5 cursor-pointer transition-all ${
                    service.highlighted
                      ? "bg-gold-500 text-black hover:bg-gold-400"
                      : "bg-white/5 text-white hover:bg-gold-400/10 border border-white/5 hover:border-gold-400/30"
                  }`}
                >
                  Secure Spot <ArrowUpRight size={14} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
