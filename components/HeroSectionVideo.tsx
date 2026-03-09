'use client';
import { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { droneData } from '@/data/droneData';

export default function HeroSectionVideo({ onEnlist }: { onEnlist?: () => void }) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const isInView = useInView(videoRef);

    useEffect(() => {
        if (videoRef.current) {
            if (isInView) {
                videoRef.current.play().catch((e) => console.log('Video play error:', e));
            } else {
                videoRef.current.pause();
            }
        }
    }, [isInView]);

    return (
        <section className="relative w-full h-screen overflow-hidden bg-black">
            {/* Background Video */}
            <video
                ref={videoRef}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="absolute inset-0 w-full h-full object-cover opacity-80"
            >
                <source src={droneData.hero.videoPath} type="video/mp4" />
            </video>

            {/* Gradients for text readability */}
            <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/90 to-transparent pointer-events-none" />
            <div className="absolute inset-x-0 bottom-0 h-[32rem] bg-gradient-to-t from-black via-black/60 to-transparent pointer-events-none" />

            {/* Grid Overlay - Tactical Feel */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px] pointer-events-none" />

            <div className="relative z-10 h-full max-w-[1920px] mx-auto px-6 md:px-12">
                {/* Top HUD */}
                <div className="absolute top-28 left-0 right-0 flex justify-between px-6 md:px-12 pointer-events-none">
                    <motion.div
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="flex items-center gap-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full px-5 py-2.5"
                    >
                        <div className="w-2.5 h-2.5 bg-[#4D774E] rounded-full animate-pulse shadow-[0_0_10px_#4D774E]" />
                        <span className="font-space font-bold text-xs tracking-[0.2em] text-white">LIVE FEED</span>
                    </motion.div>

                    <motion.div
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="flex items-center gap-4 bg-black/40 backdrop-blur-md rounded-full px-5 py-2 border border-white/10"
                    >
                        <div className="text-right">
                            <p className="text-xs font-bold font-space text-white">CPT. KRAKEN</p>
                            <p className="text-[10px] text-white/50 uppercase font-rajdhani">COMMAND</p>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
                            <span role="img" aria-label="pilot">👨‍✈️</span>
                        </div>
                    </motion.div>
                </div>

                {/* Floating Weapon Tag */}
                <div className="absolute top-[40%] left-[20%] hidden lg:flex flex-col items-center gap-2 pointer-events-none">
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 1.5, type: "spring" }}
                        className="bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 flex items-center gap-2"
                    >
                        <span className="w-1.5 h-1.5 bg-exec-blue rounded-full animate-pulse" />
                        <span className="text-[10px] font-bold font-space text-white">HEART RATE: 145 BPM</span>
                    </motion.div>
                    <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: 96 }}
                        transition={{ delay: 1 }}
                        className="w-[1px] bg-gradient-to-b from-exec-blue/50 to-transparent dashed-line"
                    />
                </div>

                {/* Bottom Right Telemetry */}
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="absolute bottom-12 right-12 hidden md:block bg-black/80 backdrop-blur-3xl border border-white/10 rounded-[2rem] p-8 w-80 shadow-2xl"
                >
                    <div className="flex justify-between items-start mb-6">
                        <div className="relative w-24 h-24">
                            <div className="absolute inset-0 rounded-full border-2 border-white/10 border-t-white/80 animate-spin-slow" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-1 h-1 bg-white rounded-full shadow-[0_0_10px_white]" />
                            </div>
                        </div>
                        <div className="text-right">
                            <p className="text-[10px] font-space text-white/40 tracking-widest">HEADING</p>
                            <p className="text-5xl font-bold font-space text-white">182°</p>
                            <p className="text-xs text-exec-blue font-bold tracking-widest mt-1 animate-pulse">LOCKED</p>
                        </div>
                    </div>

                    <div className="space-y-2 font-space text-[10px] text-white/60">
                        <div className="flex justify-between"><span className="text-white/30">ALT</span> <span>4,500 FT</span></div>
                        <div className="flex justify-between"><span className="text-white/30">SPD</span> <span>320 KTS</span></div>
                        <div className="flex justify-between"><span className="text-white/30">BAT</span> <span className="text-[#4D774E]">98%</span></div>
                    </div>
                </motion.div>

                {/* Main Title - Bottom Left */}
                <div className="absolute bottom-24 left-6 md:bottom-12 md:left-12 max-w-5xl pointer-events-none">
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="relative">
                            <h1 className="text-6xl md:text-[9rem] font-bold text-transparent bg-clip-text bg-gradient-to-b from-white via-white/80 to-white/40 leading-[0.8] tracking-tighter drop-shadow-2xl font-rajdhani">
                                THE<br />KRAKEN
                            </h1>
                        </div>
                        <div className="mt-8 pl-6 border-l-2 border-white/40 pointer-events-auto">
                            <p className="text-xl font-rajdhani text-gray-200">{droneData.hero.subtitle}</p>
                            <div className="flex gap-4 mt-6">
                                <button
                                    onClick={onEnlist}
                                    className="px-8 py-3 bg-white text-black font-bold font-space text-sm tracking-widest rounded transition-transform hover:scale-105 hover:bg-exec-blue hover:text-white"
                                >
                                    ENLIST NOW
                                </button>
                                <button className="px-8 py-3 border border-white/30 text-white font-bold font-space text-sm tracking-widest rounded backdrop-blur-md hover:bg-white/10 hover:border-white">
                                    CURRICULUM
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
