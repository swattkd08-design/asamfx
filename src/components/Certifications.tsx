import { motion } from "motion/react";
import { Award, BookOpen, Shield, ShieldCheck, Heart, Calendar, ArrowUpRight } from "lucide-react";

interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  category: "Award" | "Course" | "Credentials";
  badgeColor: "gold" | "emerald";
  desc: string;
}

const certificationsData: CertificationItem[] = [
  {
    id: "cert-1",
    title: "Certified Financial Technician (CFT)",
    issuer: "IFTA - International Federation of Technical Analysts",
    date: "November 2021",
    credentialId: "IFTA-CFT-9428-A",
    category: "Credentials",
    badgeColor: "gold",
    desc: "A globally recognized, university-level standard validating advanced market mechanics, cyclical analysis, and naked chart price speculation frameworks.",
  },
  {
    id: "cert-2",
    title: "$1.2 Million Collective Allocations Certificate",
    issuer: "Prop Master Board & FTMO Verification Services",
    date: "March 2025",
    credentialId: "PROP-ALL-XAU-84952",
    category: "Award",
    badgeColor: "emerald",
    desc: "Achieved elite status by passing 5 simultaneous independent evaluations across top prop desks, qualifying to manage a collective portfolio of $1.2M.",
  },
  {
    id: "cert-3",
    title: "Advanced Institutional Order Flow Diploma",
    issuer: "Inner Circle Trading Research Group",
    date: "September 2020",
    credentialId: "ICT-OF-20491-BLUE",
    category: "Course",
    badgeColor: "gold",
    desc: "Comprehensive coursework mastering fair value gap inefficiencies, algorithmic daily bias, market maker models, and central bank liquidity pools.",
  },
  {
    id: "cert-4",
    title: "Outstanding Risk Compliance Trophy",
    issuer: "Maven Trading & FundedNext Annual Board",
    date: "December 2024",
    credentialId: "MAV-RISK-GOLD-00241",
    category: "Award",
    badgeColor: "emerald",
    desc: "Awarded for completing 18 consecutive months of active prop speculation with maximum drawdown remaining strictly under 3.5%.",
  }
];

export default function Certifications() {
  return (
    <section className="py-24 relative overflow-hidden" id="certifications">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-gold-600/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-20">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-mono tracking-[0.3em] text-gold-400 uppercase font-medium">Verified Credentials</span>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold mt-2 text-white">Awards & <span className="text-gradient-gold">Certificates</span></h2>
          <div className="w-12 h-1 bg-gradient-to-r from-gold-500 to-transparent mx-auto mt-4"></div>
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certificationsData.map((cert, index) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              key={cert.id}
              className="p-8 rounded-2xl glass-card border border-white/5 relative group hover:border-gold-500/25 transition-all duration-300"
            >
              {/* Outer light overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/2 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none"></div>

              {/* Badges & Categories */}
              <div className="flex items-start justify-between">
                <div className={`p-4 rounded-xl ${
                  cert.badgeColor === "gold" ? "bg-gold-500/10 text-gold-400" : "bg-emerald-500/10 text-emerald-400"
                }`}>
                  {cert.category === "Award" ? <Award size={24} /> : cert.category === "Course" ? <BookOpen size={24} /> : <Shield size={24} />}
                </div>

                <span className={`text-[10px] font-mono font-bold uppercase tracking-widest px-3 py-1 rounded border ${
                  cert.badgeColor === "gold" 
                    ? "text-gold-400 border-gold-500/20 bg-gold-500/5" 
                    : "text-emerald-400 border-emerald-500/20 bg-emerald-500/5"
                }`}>
                  {cert.category}
                </span>
              </div>

              {/* Cert Details */}
              <h3 className="font-display font-extrabold text-white text-lg sm:text-xl mt-6 group-hover:text-gold-400 transition-colors">
                {cert.title}
              </h3>

              <p className="text-xs font-mono text-slate-400 mt-1 font-semibold">
                {cert.issuer}
              </p>

              <p className="text-slate-400 text-xs sm:text-sm mt-4 leading-relaxed font-sans">
                {cert.desc}
              </p>

              {/* Audit Footer */}
              <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between flex-wrap gap-4 text-[10px] font-mono text-slate-500">
                <span className="flex items-center gap-1.5"><Calendar size={12} /> Received: {cert.date}</span>
                <span className="text-slate-400 bg-white/5 px-2.5 py-1 rounded border border-white/5 flex items-center gap-1 cursor-default group-hover:border-gold-400/20">
                  ID: {cert.credentialId} <ShieldCheck size={12} className="text-emerald-500" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
