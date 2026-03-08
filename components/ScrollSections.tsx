'use client';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ScrollSectionsProps {
    children: React.ReactNode[];
}

export default function ScrollSections({ children }: ScrollSectionsProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const sectionsRef = useRef<HTMLDivElement[]>([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const sections = sectionsRef.current;
            if (!sections.length) return;

            // --- HERO (index 0): Pin while About scrolls over ---
            ScrollTrigger.create({
                trigger: sections[0],
                start: 'top top',
                end: () => `+=${window.innerHeight}`,
                pin: true,
                pinSpacing: true,
            });

            // --- ABOUT (index 1): Pin while Basic Training overlaps the PROGRAM text ---
            ScrollTrigger.create({
                trigger: sections[1],
                start: 'bottom bottom',
                end: () => `+=${window.innerHeight * 0.5}`,
                pin: true,
                pinSpacing: true,
            });

            // Basic Training (index 2) slides up to overlap PROGRAM text
            gsap.fromTo(
                sections[2],
                { marginTop: 0 },
                {
                    marginTop: '-12rem',
                    ease: 'none',
                    scrollTrigger: {
                        trigger: sections[2],
                        start: 'top bottom',
                        end: 'top 60%',
                        scrub: 1,
                    },
                }
            );

            // --- Training sections overlap each other (index 2→3, 3→4) ---
            // Each training section pins while the next one slides up over it
            for (let i = 2; i < sections.length - 1; i++) {
                const current = sections[i];
                const next = sections[i + 1];
                if (!current || !next) continue;

                // Pin current training while next one approaches
                ScrollTrigger.create({
                    trigger: current,
                    start: 'bottom bottom',
                    end: () => `+=${window.innerHeight * 0.6}`,
                    pin: true,
                    pinSpacing: true,
                });

                // Next section slides up with negative margin for overlap
                gsap.fromTo(
                    next,
                    { marginTop: 0 },
                    {
                        marginTop: '-8rem',
                        ease: 'none',
                        scrollTrigger: {
                            trigger: next,
                            start: 'top bottom',
                            end: 'top 55%',
                            scrub: 1,
                        },
                    }
                );
            }

            ScrollTrigger.refresh();
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="scroll-container relative">
            {(children as React.ReactNode[]).map((child, index) => (
                <div
                    key={index}
                    ref={(el) => {
                        if (el) sectionsRef.current[index] = el;
                    }}
                    className="scroll-section w-full relative"
                    style={{
                        zIndex: index + 1,
                    }}
                >
                    {child}
                </div>
            ))}
        </div>
    );
}
