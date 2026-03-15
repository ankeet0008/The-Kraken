'use client';
import { motion } from 'framer-motion';

const reports = [
    {
        id: "AAR-449-A",
        author: "SGT. R. MILLER",
        status: "GRADUATED",
        body: "Entered the program thinking I had reached my physical peak. Day 3 proved me wrong. By week 2, the mental fatigue was absolute. The cadre don't break you—they reveal what's left when comfort is stripped away. Essential training.",
        date: "2025.11.04"
    },
    {
        id: "AAR-712-B",
        author: "CPL. D. VANCE",
        status: "GRADUATED",
        body: "The nighttime infiltration exercises simulated real-world stress better than anything I've experienced stateside. The sleep deprivation is a weapon, and learning to operate through it saved my life on my last deployment.",
        date: "2026.01.12"
    },
    {
        id: "AAR-981-C",
        author: "[REDACTED]",
        status: "GRADUATED",
        body: "████████ techniques taught here are unparalleled. The CQC module is relentless. You will fail, you will bleed, and you will learn. Recommend mandatory attendance for all Tier 1 candidates.",
        date: "2026.02.28"
    }
];

export default function TestimonialSection() {
    return (
        <section className="relative w-full min-h-screen bg-[#0a0a0a] overflow-hidden py-32 px-6 md:px-12 border-t border-white/5">
            {/* Background Map Overlay (simulated) */}
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none mix-blend-overlay" />

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="mb-24 flex flex-col md:flex-row justify-between md:items-end gap-6"
                >
                    <div>
                        <p className="font-space text-red-500 tracking-[0.3em] text-xs font-bold mb-4 uppercase flex items-center gap-2">
                            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                            // AFTER ACTION REPORTS
                        </p>
                        <h2 className="text-5xl md:text-7xl font-rajdhani font-bold text-white tracking-tighter">
                            FIELD DEBRIEFS
                        </h2>
                    </div>
                    <div className="text-right font-space text-xs text-white/30 tracking-widest hidden md:block">
                        <p>NETWORK UPTIME: 99.9%</p>
                        <p>DATA INTEGRITY: VERIFIED</p>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {reports.map((report, index) => (
                        <motion.div
                            key={report.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 }}
                            className="bg-black border border-white/10 p-8 relative group hover:border-exec-blue/50 transition-colors duration-300"
                        >
                            {/* Watermark */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-9xl font-rajdhani font-black text-white/5 -rotate-45 pointer-events-none select-none">
                                CLASSIFIED
                            </div>

                            <div className="relative z-10">
                                <div className="flex justify-between items-start mb-8 border-b border-white/10 pb-4">
                                    <div>
                                        <p className="font-space text-xs text-white/50 tracking-widest mb-1">FILE NO.</p>
                                        <p className="font-space text-sm text-exec-blue font-bold tracking-widest">{report.id}</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="font-space text-xs text-white/50 tracking-widest mb-1">DATE</p>
                                        <p className="font-space text-sm text-white/70 tracking-widest">{report.date}</p>
                                    </div>
                                </div>

                                <blockquote className="font-mono text-sm leading-relaxed text-white/80 mb-8 min-h-[140px]">
                                    "{report.body}"
                                </blockquote>

                                <div className="flex items-center gap-4 mt-auto">
                                    <div className="w-10 h-10 bg-white/5 border border-white/10 flex items-center justify-center">
                                        <span className="text-white/30 font-bold font-rajdhani text-xl">
                                            {report.author.charAt(0)}
                                        </span>
                                    </div>
                                    <div>
                                        <p className="font-space text-sm font-bold tracking-wider text-white">
                                            {report.author}
                                        </p>
                                        <p className="font-space text-xs text-[#4D774E] tracking-widest mt-1">
                                            {report.status}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
