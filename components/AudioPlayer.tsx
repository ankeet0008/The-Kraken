'use client';
import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function AudioPlayer() {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement>(null);

    const toggleAudio = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play().catch(e => console.error("Audio playback failed:", e));
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <div className="fixed bottom-8 left-8 z-50 flex items-center gap-3">
            {/* We will use a dummy ambient sound for now */}
            <audio
                ref={audioRef}
                src="https://www.soundjay.com/misc/sounds/wind-howl-01.mp3"
                crossOrigin="anonymous"
                loop
                className="hidden"
            />

            <button
                onClick={toggleAudio}
                className={`w-10 h-10 bg-black/50 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center hover:bg-white/10 transition-all group relative ${isPlaying ? 'shadow-[0_0_15px_rgba(77,119,78,0.5)] border-[#4D774E]/50' : ''}`}
            >
                {/* Visualizer bars */}
                <div className="flex gap-0.5 items-end h-3">
                    <motion.div animate={{ height: isPlaying ? [4, 12, 4] : 4 }} transition={{ repeat: Infinity, duration: 0.8 }} className="w-0.5 bg-white/70" />
                    <motion.div animate={{ height: isPlaying ? [4, 8, 4] : 4 }} transition={{ repeat: Infinity, duration: 0.8, delay: 0.2 }} className="w-0.5 bg-white/70" />
                    <motion.div animate={{ height: isPlaying ? [4, 10, 4] : 4 }} transition={{ repeat: Infinity, duration: 0.8, delay: 0.4 }} className="w-0.5 bg-white/70" />
                </div>

                <span className="absolute left-14 whitespace-nowrap text-[10px] font-space font-bold tracking-widest text-white/50 opacity-0 group-hover:opacity-100 transition-opacity uppercase">
                    {isPlaying ? 'COMMS: SECURE' : 'COMMS: MUTED'}
                </span>
            </button>
        </div>
    );
}
