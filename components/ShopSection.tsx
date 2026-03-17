'use client';
import { motion } from 'framer-motion';

const gearItems = [
    { name: "RECON PLATE CARRIER", price: "$285", inStock: true, img: "https://images.unsplash.com/photo-1595166416198-d7b1a64f3c02?q=80&w=400&auto=format&fit=crop" },
    { name: "TACTICAL ASSAULT PACK", price: "$145", inStock: false, img: "https://images.unsplash.com/photo-1553531384-cc64ac80f931?q=80&w=400&auto=format&fit=crop" },
    { name: "KRAKEN PVC PATCH", price: "$15", inStock: true, img: "https://images.unsplash.com/photo-1627885461756-32eb4a7aeaf7?q=80&w=400&auto=format&fit=crop" }, // Placeholder for patch
];

export default function ShopSection() {
    return (
        <section className="relative w-full min-h-screen bg-[#050505] overflow-hidden py-32 px-6 md:px-12 border-t border-white/5 font-space">
            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center text-center mb-24"
                >
                    <p className="text-exec-blue tracking-[0.3em] text-xs font-bold mb-4 uppercase">
                        // QUARTERMASTER DEPT.
                    </p>
                    <h2 className="text-5xl md:text-7xl font-rajdhani font-bold text-white tracking-tighter mb-6">
                        TACTICAL SUPPLY
                    </h2>
                    <p className="text-sm text-white/50 max-w-xl leading-relaxed">
                        Authorized equipment tested under extreme duress. Standard-issue for all candidates attending the Elite and Classified training programs.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {gearItems.map((item, i) => (
                        <motion.div
                            key={item.name}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.15 + 0.2 }}
                            className={`group flex flex-col items-center bg-black border ${item.inStock ? 'border-white/10 hover:border-white/30 cursor-pointer' : 'border-white/5 cursor-not-allowed opacity-50'} transition-colors duration-300 p-8 relative`}
                        >
                            {/* Target Reticle Hover */}
                            {item.inStock && <div className="absolute inset-4 border border-white/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />}

                            <div className="w-full aspect-square bg-[#0a0a0a] mb-8 relative flex items-center justify-center overflow-hidden border border-white/5 p-4">
                                <motion.img
                                    whileHover={{ x: [-2, 2, -2, 0], y: [1, -1, 1, 0] }}
                                    transition={{ duration: 0.2 }}
                                    src={item.img}
                                    alt={item.name}
                                    className="object-contain w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105 mix-blend-lighten"
                                />
                            </div>

                            <div className="w-full text-left space-y-2">
                                <p className="text-[#4D774E] text-[10px] tracking-widest font-bold">MIL-SPEC VERIFIED</p>
                                <h3 className="text-white text-lg font-bold tracking-wider">{item.name}</h3>
                                <div className="flex justify-between items-center pt-4 border-t border-white/10">
                                    <p className="text-white/60 text-sm tracking-widest">{item.price}</p>
                                    <p className={`text-xs ${item.inStock ? 'text-exec-blue group-hover:tracking-wider transition-all' : 'text-red-500'} uppercase`}>
                                        {item.inStock ? 'ACQUIRE [→]' : '[ OUT OF STOCK ]'}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <button className="px-8 py-3 bg-transparent border border-white/30 text-white font-bold text-xs tracking-[0.3em] rounded hover:bg-white/10 hover:border-white transition-all uppercase">
                        ACCESS ARMORY MODULE
                    </button>
                </div>
            </div>
        </section>
    );
}
