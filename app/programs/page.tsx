'use client';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

const programs = [
    {
        id: 'cqc',
        title: 'CQC MASTERY',
        subtitle: 'Close Quarters Combat',
        description: 'Lethal efficiency in confined environments. Master room clearing, weapon transitions, and hand-to-hand neutralization techniques used by Tier 1 operators worldwide.',
        stats: { duration: '12 WEEKS', intensity: 'EXTREME', clearance: 'LEVEL 3' },
    },
    {
        id: 'stealth',
        title: 'STEALTH INFILTRATION',
        subtitle: 'Zero Visibility Operations',
        description: 'Move without a trace through hostile terrain. Advanced camouflage, electronic countermeasures, and silent movement protocols for deep-cover assignments.',
        stats: { duration: '16 WEEKS', intensity: 'CRITICAL', clearance: 'LEVEL 5' },
    },
    {
        id: 'awareness',
        title: 'SITUATIONAL AWARENESS',
        subtitle: 'Battlefield Intelligence',
        description: 'Process battlefield data instantly. Never be outflanked. Train your brain to identify threats, opportunities, and escape routes in milliseconds.',
        stats: { duration: '8 WEEKS', intensity: 'HIGH', clearance: 'LEVEL 2' },
    },
    {
        id: 'halo',
        title: 'HALO INSERTION',
        subtitle: 'High Altitude Operations',
        description: 'High Altitude Low Opening jumps into hostile zones. Master freefall navigation, equipment deployment, and immediate ground engagement upon landing.',
        stats: { duration: '10 WEEKS', intensity: 'EXTREME', clearance: 'LEVEL 4' },
    },
    {
        id: 'survival',
        title: 'SURVIVAL & EVASION',
        subtitle: 'Behind Enemy Lines',
        description: 'When extraction fails, survival instinct takes over. Wilderness survival, evasion tactics, resistance to interrogation, and escape planning.',
        stats: { duration: '14 WEEKS', intensity: 'BRUTAL', clearance: 'LEVEL 5' },
    },
    {
        id: 'sniper',
        title: 'PRECISION ENGAGEMENT',
        subtitle: 'Long Range Marksmanship',
        description: 'One shot. One kill. Advanced ballistics, environmental compensation, camouflaged hide construction, and patience as a weapon.',
        stats: { duration: '20 WEEKS', intensity: 'EXTREME', clearance: 'LEVEL 4' },
    },
];

export default function ProgramsPage() {
    return (
        <main className="bg-black text-white min-h-screen">
            <Navbar />

            {/* Hero Banner */}
            <section className="relative pt-40 pb-24 px-6 overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(77,119,78,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(77,119,78,0.04)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(77,119,78,0.08)_0%,transparent_60%)]" />

                <div className="max-w-7xl mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <p className="text-[#8C9890] font-space font-bold tracking-[0.4em] mb-6 text-xs">
                            TRAINING PROGRAMS
                        </p>
                        <h1 className="text-6xl md:text-9xl font-bold font-rajdhani tracking-tighter leading-[0.85]">
                            FORGED IN<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4D774E] via-[#6B9A6C] to-[#4D774E]">
                                DISCIPLINE
                            </span>
                        </h1>
                        <p className="text-white/50 font-rajdhani text-lg md:text-xl mt-8 max-w-2xl">
                            Each program is a carefully engineered crucible. Select your path.
                            There are no shortcuts. There is no mercy.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Programs Grid */}
            <section className="px-6 pb-32">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
                    {programs.map((program, index) => (
                        <motion.div
                            key={program.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            className="group relative bg-[#0A0A0A] border border-white/5 rounded-2xl p-8 md:p-10 hover:border-[#4D774E]/30 transition-all duration-500 overflow-hidden"
                        >
                            {/* Hover glow */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[#4D774E]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                            {/* Index marker */}
                            <div className="absolute top-6 right-6 text-[10px] font-space text-white/15 tracking-widest">
                                {String(index + 1).padStart(2, '0')}
                            </div>

                            <div className="relative z-10">
                                <p className="text-[#66726A] font-space text-[10px] tracking-[0.3em] mb-3 uppercase">
                                    {program.subtitle}
                                </p>
                                <h3 className="text-3xl md:text-4xl font-bold font-rajdhani text-white mb-4 tracking-tight group-hover:text-[#8C9890] transition-colors duration-300">
                                    {program.title}
                                </h3>
                                <p className="text-white/40 font-rajdhani text-base leading-relaxed mb-8">
                                    {program.description}
                                </p>

                                {/* Stats row */}
                                <div className="flex gap-6 flex-wrap">
                                    {Object.entries(program.stats).map(([key, value]) => (
                                        <div key={key} className="border-l border-[#66726A]/50 pl-3">
                                            <p className="text-[10px] font-space text-[#66726A] uppercase tracking-widest">{key}</p>
                                            <p className="text-sm font-bold font-space text-white">{value}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            <Footer />
        </main>
    );
}
