'use client';
import { motion } from 'framer-motion';

const locations = [
    { name: "FACILITY ALPHA", coords: "N 34° 52' 12.3\" W 120° 24' 59.8\"", type: "URBAN CQC SYNDICATE", top: "30%", left: "20%" },
    { name: "SITE BRAVO", coords: "N 41° 14' 22.1\" W 111° 57' 01.3\"", type: "MOUNTAIN WARFARE", top: "70%", left: "50%" },
    { name: "BLACK SITE OMEGA", coords: "███████████████", type: "CLASSIFIED", top: "45%", left: "75%" }
];

export default function MapSection() {
    return (
        <section className="relative w-full min-h-screen bg-black overflow-hidden py-32 px-6 border-t border-white/5 flex items-center justify-center font-space">
            {/* Grid overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />

            <div className="max-w-6xl w-full mx-auto relative z-10 flex flex-col md:flex-row gap-12 items-center">
                <div className="md:w-1/3 space-y-8">
                    <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                        <p className="text-exec-blue tracking-[0.3em] text-xs font-bold mb-4 uppercase">
                            // STAGING GROUNDS
                        </p>
                        <h2 className="text-4xl md:text-5xl font-rajdhani font-bold text-white tracking-tighter mb-4">
                            DEPLOYMENT ZONES
                        </h2>
                        <p className="text-sm text-white/50 leading-relaxed">
                            Our training facilities span multiple biomes, specifically chosen to simulate real-world theaters of operation. Environmental friction is an intentional variable in all curriculums.
                        </p>
                    </motion.div>

                    <div className="space-y-4">
                        {locations.map((loc, i) => (
                            <motion.div
                                key={loc.name}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.2 }}
                                className="group border border-white/10 p-4 hover:border-exec-blue transition-colors cursor-crosshair bg-white/[0.02]"
                            >
                                <div className="flex justify-between items-center mb-2">
                                    <h3 className="text-white font-bold tracking-widest">{loc.name}</h3>
                                    <span className="w-1.5 h-1.5 bg-[#4D774E] rounded-full animate-pulse shadow-[0_0_8px_#4D774E]" />
                                </div>
                                <p className="text-xs text-white/40 tracking-widest mb-1">{loc.type}</p>
                                <p className="text-[10px] text-exec-blue uppercase">{loc.coords}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Radar Map container */}
                <div className="md:w-2/3 relative w-full aspect-square md:aspect-video border border-white/10 overflow-hidden bg-[#050505]">
                    {/* Radar Sweep */}
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
                        className="absolute top-1/2 left-1/2 w-[200%] h-[200%] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                        style={{
                            background: 'conic-gradient(from 0deg, transparent 0deg, transparent 270deg, rgba(77,119,78,0.2) 360deg)',
                        }}
                    >
                    </motion.div>

                    {/* Radar Rings */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="w-1/4 h-1/4 rounded-full border border-white/5" />
                        <div className="absolute w-2/4 h-2/4 rounded-full border border-white/5" />
                        <div className="absolute w-3/4 h-3/4 rounded-full border border-white/5" />
                        <div className="absolute w-full h-full rounded-full border border-white/5" />
                    </div>

                    {/* Ping Locations */}
                    {locations.map((loc, i) => {
                        const isClassified = loc.type === "CLASSIFIED";
                        const pingColor = isClassified ? "bg-red-600" : "bg-[#4D774E]";
                        const shadowColor = isClassified ? "shadow-[0_0_15px_red]" : "shadow-[0_0_8px_#4D774E]";

                        return (
                            <div key={loc.name} className="absolute" style={{ top: loc.top, left: loc.left }}>
                                <div className="relative group cursor-crosshair">
                                    <motion.div
                                        animate={{ scale: [1, 2.5], opacity: [0.8, 0] }}
                                        transition={{ repeat: Infinity, duration: isClassified ? 1.5 : 2, delay: i * 0.5 }}
                                        className={`absolute w-3 h-3 ${pingColor} rounded-full -top-1 -left-1`}
                                    />
                                    <div className={`w-1 h-1 ${pingColor} ${shadowColor} rounded-full relative z-10`} />

                                    <div className="absolute left-4 top-0 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap bg-black/80 border border-white/20 p-2 text-[10px] z-20 pointer-events-none">
                                        <p className={`${isClassified ? 'text-red-500' : 'text-white'} font-bold`}>{loc.name}</p>
                                        <p className="text-white/50 mt-1 pb-1 border-b border-white/10">{loc.coords}</p>
                                        <p className="text-white/30 text-[8px] mt-1 pt-1 tracking-widest uppercase">CONNECTION SECURE</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
