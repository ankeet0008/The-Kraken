'use client';
import { useState, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Preloader() {
    const [loading, setLoading] = useState(true);
    const containerRef = useRef<HTMLDivElement>(null);
    const leftRulerRef = useRef<HTMLDivElement>(null);
    const rightRulerRef = useRef<HTMLDivElement>(null);

    // Words to animate separately
    const word1 = "THE";
    const word2 = "EXECUTIONER";

    useGSAP(() => {
        document.body.style.overflow = 'hidden';

        const tl = gsap.timeline({
            onComplete: () => {
                setLoading(false);
                document.body.style.overflow = 'auto';
            }
        });

        // 1. Initial State Setup
        // "THE" starts high up, blurry and invisible
        gsap.set(".letter-word1", { y: -150, opacity: 0, scale: 0.9, filter: "blur(20px)" });
        // "EXECUTIONER" starts low down, blurry and invisible
        gsap.set(".letter-word2", { y: 150, opacity: 0, scale: 0.9, filter: "blur(20px)" });

        // Red line and Loading text hidden
        gsap.set(".red-line", { scaleX: 0, transformOrigin: "center" });
        gsap.set(".loading-text", { opacity: 0, y: -20 });
        gsap.set(".ruler-tick", { opacity: 0 });

        // 2. Animate Rulers
        tl.to(".ruler-tick", {
            opacity: 1,
            duration: 1.5,
            stagger: { amount: 1, from: "center" },
            ease: "power2.inOut"
        }, 0)

            // 3. Loading Text Fades In
            .to(".loading-text", {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power3.out"
            }, "-=1.0")

            // 4. THE Entrance (Slides down from top)
            // Each letter cascades in sequentially
            .to(".letter-word1", {
                y: 0,
                opacity: 1,
                scale: 1,
                filter: "blur(0px)",
                duration: 1.2,
                stagger: 0.05,
                ease: "power4.out"
            }, "-=0.5")

            // 5. EXECUTIONER Entrance (Slides up from bottom)
            // Letters cascade in perfectly synced right as THE finishes
            .to(".letter-word2", {
                y: 0,
                opacity: 1,
                scale: 1,
                filter: "blur(0px)",
                duration: 1.2,
                stagger: 0.03, // Faster stagger since the word is longer
                ease: "power4.out"
            }, "-=1.0") // Significant overlap so they seem to meet

            // 6. Draw the unifying red line exactly across
            .to(".red-line", {
                scaleX: 1,
                duration: 1,
                ease: "power4.inOut"
            }, "-=0.2")

            // 7. Pause to admire the stunning lockup
            .to({}, { duration: 1.2 })

            // 8. The Cross-Exit Animation
            // "THE" shoots downwards past the red line
            .to(".letter-word1", {
                y: 150,
                opacity: 0,
                filter: "blur(20px)",
                duration: 1,
                stagger: 0.03,
                ease: "power4.in"
            })
            // "EXECUTIONER" shoots upwards past the line, perfectly synced
            .to(".letter-word2", {
                y: -150,
                opacity: 0,
                filter: "blur(20px)",
                duration: 1,
                stagger: 0.02,
                ease: "power4.in"
            }, "<") // "<" tells GSAP to start exactly at the same time as the previous animation

            // 9. Cleanup elements left behind
            .to([".red-line", ".loading-text", ".ruler-tick"], {
                opacity: 0,
                duration: 0.5,
                ease: "power2.out"
            }, "-=0.4")

            // 10. Background curtain pulls up to reveal Hero page underneath
            .to(containerRef.current, {
                yPercent: -100,
                duration: 1.2,
                ease: "power4.inOut"
            }, "-=0.2");

    }, { scope: containerRef });

    if (!loading) return null;

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden bg-[#1D2420] text-white"
        >
            <style>
                {`
                    @import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');
                    .font-anton { font-family: 'Anton', sans-serif; }
                `}
            </style>

            {/* Left Ruler */}
            <div ref={leftRulerRef} className="absolute left-0 top-0 bottom-0 w-8 flex flex-col justify-between py-12 pointer-events-none opacity-50">
                {[...Array(50)].map((_, i) => (
                    <div key={i} className={`ruler-tick h-[1px] bg-[#66726A] ${i % 10 === 0 ? 'w-5' : i % 5 === 0 ? 'w-3' : 'w-1.5'}`} />
                ))}
            </div>

            {/* Right Ruler */}
            <div ref={rightRulerRef} className="absolute right-0 top-0 bottom-0 w-8 flex flex-col items-end justify-between py-12 pointer-events-none opacity-50">
                {[...Array(50)].map((_, i) => (
                    <div key={i} className={`ruler-tick h-[1px] bg-[#66726A] ${i % 10 === 0 ? 'w-5' : i % 5 === 0 ? 'w-3' : 'w-1.5'}`} />
                ))}
            </div>

            {/* Loading text */}
            <div className="loading-text absolute top-[25%] text-[10px] sm:text-xs font-bold tracking-[0.5em] text-[#8C9890]">
                PRE-FLIGHT CHECK
            </div>

            {/* Typography Lockup Container */}
            <div className="relative inline-flex flex-col items-center justify-center gap-0 sm:gap-2">

                {/* WORD 1: THE */}
                <div className="flex overflow-visible relative z-20 mx-auto opacity-90 drop-shadow-xl">
                    {word1.split('').map((char, charIndex) => (
                        <span
                            key={`w1-${charIndex}`}
                            className="letter-word1 inline-block text-[5rem] sm:text-[8rem] lg:text-[10rem] font-anton text-[#F5F5F5] leading-none"
                        >
                            {char}
                        </span>
                    ))}
                </div>

                {/* The Unifying Red Baseline */}
                <div className="red-line absolute top-1/2 left-0 right-0 h-[2px] bg-[#D62828] z-30 shadow-[0_0_15px_rgba(214,40,40,0.5)]">
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[2px] h-6 bg-[#D62828]" />
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[2px] h-6 bg-[#D62828]" />
                </div>

                {/* WORD 2: EXECUTIONER */}
                <div className="flex overflow-visible relative z-10 mx-auto pb-4 drop-shadow-2xl">
                    {word2.split('').map((char, charIndex) => (
                        <span
                            key={`w2-${charIndex}`}
                            className="letter-word2 inline-block text-[4rem] sm:text-[6rem] md:text-[8.5rem] lg:text-[11rem] font-anton text-white leading-none tracking-tight"
                        >
                            {char}
                        </span>
                    ))}
                </div>

            </div>
        </div>
    );
}
