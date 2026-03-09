'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const cadreData = [
    {
        callsign: "CPT. KRAKEN",
        role: "LEAD INSTRUCTOR",
        specialty: "CQC / TACTICAL COMMAND",
        deployments: "███████, █████, KABUL",
        status: "ACTIVE",
        image: "https://images.unsplash.com/photo-1574169208507-84376144848b?q=80&w=800&auto=format&fit=crop"
    },
    {
        callsign: "GHOST",
        role: "RECON SPECIALIST",
        specialty: "SNIPER / STEALTH INFILTRATION",
        deployments: "█████, FALLUJAH, ████████",
        status: "ACTIVE",
        image: "https://images.unsplash.com/photo-1620000617482-821dd66c4069?q=80&w=800&auto=format&fit=crop" // Placeholder
    },
    {
        callsign: "REAPER",
        role: "DEMOLITIONS",
        specialty: "BREACHING / EXPLOSIVES",
        deployments: "██████, ███████, ████",
        status: "ACTIVE",
        image: "https://images.unsplash.com/photo-1599305090598-fe179d501227?q=80&w=800&auto=format&fit=crop" // Placeholder
    }
];

export default function CadreSection() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <section className="relative w-full min-h-screen bg-black overflow-hidden py-32 px-6 md:px-12 border-t border-white/10">
            {/* Background elements */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(77,119,78,0.05)_0%,transparent_70%)] pointer-events-none" />
            <div className="absolute top-10 left-10 w-32 h-32 border-l border-t border-white/10 pointer-events-none" />
            <div className="absolute bottom-10 right-10 w-32 h-32 border-r border-b border-white/10 pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <p className="font-space text-exec-blue tracking-[0.3em] text-xs font-bold mb-4 uppercase">
                        // Security Clearance Level 4 Required
                    </p>
                    <h2 className="text-5xl md:text-7xl font-rajdhani font-bold text-white tracking-tighter">
                        THE CADRE
                    </h2>
                    <p className="font-space text-white/50 mt-4 max-w-xl text-sm leading-relaxed">
                        Trained by the elite, for the elite. Our instructors are former Tier 1 operators with decades of combined combat experience. Declassified records below.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {cadreData.map((cadre, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            className="relative group cursor-crosshair h-[600px]"
                        >
                            {/* Card Background image */}
                            <div className="absolute inset-0 grayscale contrast-125 brightness-50 group-hover:grayscale-0 group-hover:brightness-75 transition-all duration-700">
                                <img
                                    src={cadre.image}
                                    alt={cadre.callsign}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                            </div>

                            {/* UI Overlay */}
                            <div className="absolute inset-0 border border-white/20 group-hover:border-[#4D774E] transition-colors duration-500 p-6 flex flex-col justify-end">
                                {/* Top right scanline box */}
                                <div className="absolute top-6 right-6 flex items-center gap-2">
                                    <span className="w-2 h-2 bg-[#4D774E] rounded-full animate-pulse" />
                                    <span className="font-space text-[10px] tracking-widest text-[#4D774E]">{cadre.status}</span>
                                </div>

                                {/* Content */}
                                <div className="relative z-10">
                                    <p className="font-space text-white/40 text-xs tracking-widest mb-1">{cadre.role}</p>
                                    <h3 className="font-rajdhani text-4xl font-bold text-white tracking-wider mb-4 border-b border-white/20 pb-4">
                                        {cadre.callsign}
                                    </h3>

                                    <div className="space-y-4 font-space text-xs">
                                        <div>
                                            <p className="text-white/30 tracking-widest mb-1">SPECIALTY</p>
                                            <p className="text-white tracking-wider">{cadre.specialty}</p>
                                        </div>
                                        <div>
                                            <p className="text-white/30 tracking-widest mb-1">DEPLOYMENTS</p>
                                            <p className="text-white bg-white/10 inline-block px-2 py-1 select-none">
                                                {cadre.deployments}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Hover Target Reticle overlay */}
                                <AnimatePresence>
                                    {hoveredIndex === index && (
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.8 }}
                                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 pointer-events-none"
                                        >
                                            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#4D774E]" />
                                            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#4D774E]" />
                                            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#4D774E]" />
                                            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#4D774E]" />
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <div className="w-1 h-1 bg-[#4D774E] rounded-full" />
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                {/* Action on hover */}
                                <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                                    <p className="font-space text-[10px] text-[#4D774E] tracking-widest uppercase hover:text-white cursor-pointer transition-colors">
                                        DECRYPT DOSSIER {'>'}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
