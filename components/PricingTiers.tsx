'use client';
import { motion } from 'framer-motion';
import { droneData } from '@/data/droneData';

export default function PricingTiers() {
    return (
        <section className="py-32 bg-black relative overflow-hidden" id="pricing">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-24">
                    <h2 className="text-5xl font-bold font-rajdhani mb-4">TRAINING DEPLOYMENTS</h2>
                    <p className="text-exec-platinum font-space text-sm tracking-widest">SELECT TRAINING PROFILE</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {droneData.pricing.map((tier, index) => (
                        <motion.div
                            key={tier.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className={`relative bg-exec-carbon/50 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:border-exec-blue/50 transition-colors group ${index === 1 ? 'border-exec-blue shadow-[0_0_30px_rgba(77,119,78,0.2)]' : ''
                                }`}
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-50 text-[10px] font-space text-white/30">
                                Mk.{index + 1}
                            </div>

                            <h3 className="text-xl font-bold font-rajdhani text-white mb-2">{tier.name}</h3>
                            <div className="text-3xl font-bold font-space text-exec-blue mb-8">{tier.price}</div>

                            <ul className="space-y-4 mb-8">
                                {tier.features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-3 text-sm text-gray-300 font-rajdhani">
                                        <div className="w-1.5 h-1.5 bg-exec-blue rounded-full" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <button className={`w-full py-4 rounded-xl font-bold font-space text-xs tracking-widest transition-all ${index === 1
                                ? 'bg-exec-blue text-white hover:bg-emerald-700'
                                : 'bg-white/5 text-white hover:bg-white hover:text-black'
                                }`}>
                                CONFIGURE
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
