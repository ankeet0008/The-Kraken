'use client';
import { motion, AnimatePresence } from 'framer-motion';

export default function EnlistModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
    if (!isOpen) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-xl p-4 font-space"
                >
                    <motion.div
                        initial={{ scale: 0.95, y: 20 }}
                        animate={{ scale: 1, y: 0 }}
                        exit={{ scale: 0.95, y: 20 }}
                        className="bg-[#050505] border border-white/20 w-full max-w-2xl overflow-hidden relative"
                    >
                        {/* Modal Header */}
                        <div className="flex justify-between items-center bg-white border-b border-white/20 p-4 relative overflow-hidden">
                            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
                            <div className="relative z-10 flex items-center gap-3">
                                <div className="w-2 h-2 bg-black rounded-full animate-pulse" />
                                <h2 className="text-black font-rajdhani font-bold text-xl tracking-widest uppercase">ENLISTMENT PORTAL V2.4</h2>
                            </div>
                            <button
                                onClick={onClose}
                                className="relative z-10 text-black font-bold tracking-widest text-xs hover:text-red-600 transition-colors uppercase cursor-pointer"
                            >
                                [ TERMINATE ]
                            </button>
                        </div>

                        {/* Scanner Line */}
                        <motion.div 
                            animate={{ top: ['0%', '100%'], opacity: [0, 0.5, 0] }} 
                            transition={{ repeat: Infinity, duration: 3, ease: 'linear' }} 
                            className="absolute left-0 right-0 h-1 bg-green-500/30 z-50 pointer-events-none" 
                        />

                        {/* Modal Body */}
                        <div className="p-8 space-y-8 h-[60vh] overflow-y-auto custom-scrollbar relative">
                            <div className="space-y-2">
                                <p className="text-red-500 text-xs font-bold tracking-[0.2em]">WARNING: CLASSIFIED MATERIAL</p>
                                <p className="text-white/70 text-sm leading-relaxed">
                                    You are attempting to access a Tier 1 application terminal. Falsifying any medical or background records is grounds for immediate extraction and blacklist. Acknowledge and proceed.
                                </p>
                            </div>

                            <form className="space-y-6">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-white/40 text-[10px] tracking-widest block">LEGAL NAME (FULL)</label>
                                        <input type="text" className="w-full bg-black border border-white/10 p-3 text-white focus:border-exec-blue transition-colors outline-none font-mono text-sm" placeholder="DOE, JOHN A." />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-white/40 text-[10px] tracking-widest block">IDENTIFICATION NO.</label>
                                        <input type="text" className="w-full bg-black border border-white/10 p-3 text-white focus:border-exec-blue transition-colors outline-none font-mono text-sm" placeholder="████-████" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-white/40 text-[10px] tracking-widest block">SPECIALTY CODE (IF ANY)</label>
                                    <select className="w-full bg-black border border-white/10 p-3 text-white focus:border-exec-blue transition-colors outline-none font-mono text-sm appearance-none">
                                        <option>CIVILIAN CANDIDATE</option>
                                        <option>MILITARY INTEL [18F]</option>
                                        <option>INFANTRY [11B]</option>
                                        <option>COMBAT MEDIC [68W]</option>
                                    </select>
                                </div>

                                <div className="space-y-2 pt-4 border-t border-white/10">
                                    <h3 className="text-white font-bold tracking-widest text-sm mb-4">MEDICAL WAIVER</h3>
                                    <label className="flex items-start gap-4 cursor-pointer group">
                                        <input type="checkbox" className="mt-1" />
                                        <span className="text-xs text-white/50 group-hover:text-white/80 transition-colors leading-relaxed">
                                            I understand that the Kraken curriculum involves live ammunition, extreme sleep deprivation, thermal stress, and blunt-force trauma defense scenarios. I waive all liability.
                                        </span>
                                    </label>
                                </div>

                                <button
                                    type="button"
                                    className="w-full bg-[#4D774E] text-black font-rajdhani font-bold text-xl py-4 mt-8 hover:bg-white hover:text-black transition-colors tracking-widest"
                                    onClick={onClose}
                                >
                                    SUBMIT DOSSIER
                                </button>
                            </form>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
