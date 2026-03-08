'use client';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const trainings = [
    {
        id: 'breaching',
        number: 'TRAINING 01',
        title: 'BASIC — THREE-DAY BREACHING TRAINING',
        description:
            'For units already performing at the highest level. Three days of theory and practice. Climbing and breaching training based on real failures and near-misses from operations. Realistic scenarios, realistic materials.',
        features: [
            'Mechanical and hydraulic breaching',
            'Hands-on with professional equipment',
            'Tested on realistic materials, no cardboard doors',
        ],
        tags: ['3 DAYS', 'FULLY FACILITATED', 'PEOPLE-FOCUSSED'],
        imagePath: '/marine.jpg',
    },
    {
        id: 'tactical-ops',
        number: 'TRAINING 02',
        title: 'INTERMEDIATE — SEVEN-DAY TACTICAL OPERATIONS',
        description:
            'A comprehensive week-long immersion into advanced tactical methodologies. Operators train across dynamic entry, hostage scenarios, vehicle interdiction, and coordinated multi-element assaults under realistic conditions.',
        features: [
            'Dynamic CQB and room clearing',
            'Vehicle assault and convoy ambush drills',
            'Night vision operations and low-light tactics',
            'Stress inoculation under live-fire conditions',
        ],
        tags: ['7 DAYS', 'ADVANCED LEVEL', 'TEAM-INTEGRATED'],
        imagePath: '/marine.jpg',
    },
    {
        id: 'command',
        number: 'TRAINING 03',
        title: 'ELITE — TWELVE-DAY COMMAND CERTIFICATION',
        description:
            'The definitive special operations certification. Twelve days of escalating intensity covering every domain of modern warfare — from urban combat to wilderness survival, leadership under fire, and strategic mission planning.',
        features: [
            'Full-spectrum mission planning and execution',
            'Leadership under extreme duress',
            'Interrogation resistance and evasion',
            'Joint operations with multi-agency coordination',
            'Final 72-hour uninterrupted field exercise',
        ],
        tags: ['12 DAYS', 'ELITE CERTIFICATION', 'COMMAND-LEVEL'],
        imagePath: '/marine.jpg',
    },
];

export default function ProgramsSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const sectionRefs = useRef<HTMLDivElement[]>([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            sectionRefs.current.forEach((section, index) => {
                if (!section) return;

                const heading = section.querySelector('.training-heading');
                const tags = section.querySelector('.training-tags');
                const image = section.querySelector('.training-image');
                const textContent = section.querySelector('.training-text');
                const features = section.querySelectorAll('.training-feature');

                // Create a timeline for each section
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: section,
                        start: 'top 80%',
                        end: 'top 20%',
                        toggleActions: 'play none none reverse',
                    },
                });

                // Heading slides up and fades in
                if (heading) {
                    tl.fromTo(
                        heading,
                        { y: 80, opacity: 0 },
                        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
                        0
                    );
                }

                // Tags slide in from left
                if (tags) {
                    tl.fromTo(
                        tags,
                        { x: -60, opacity: 0 },
                        { x: 0, opacity: 1, duration: 0.7, ease: 'power3.out' },
                        0.15
                    );
                }

                // Image scales up and fades in
                if (image) {
                    tl.fromTo(
                        image,
                        { scale: 0.85, opacity: 0 },
                        { scale: 1, opacity: 1, duration: 0.9, ease: 'power2.out' },
                        0.2
                    );
                }

                // Text content slides up
                if (textContent) {
                    tl.fromTo(
                        textContent,
                        { y: 50, opacity: 0 },
                        { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out' },
                        0.35
                    );
                }

                // Features stagger in
                if (features.length) {
                    tl.fromTo(
                        features,
                        { x: 30, opacity: 0 },
                        {
                            x: 0,
                            opacity: 1,
                            duration: 0.5,
                            ease: 'power2.out',
                            stagger: 0.1,
                        },
                        0.5
                    );
                }

                // Divider line grows
                const divider = section.querySelector('.section-divider');
                if (divider) {
                    tl.fromTo(
                        divider,
                        { scaleX: 0 },
                        { scaleX: 1, duration: 0.8, ease: 'power2.inOut' },
                        0.1
                    );
                }
            });

            ScrollTrigger.refresh();
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="w-full bg-[#1E2A1A] text-white relative overflow-hidden">
            {/* Top overlap space */}
            <div className="pt-32 md:pt-44" />

            {/* Training Sections */}
            {trainings.map((training, index) => (
                <div
                    key={training.id}
                    ref={(el) => {
                        if (el) sectionRefs.current[index] = el;
                    }}
                    className="program-section relative"
                    style={{ minHeight: '100vh' }}
                >
                    {/* Section divider line (except for first) */}
                    {index > 0 && (
                        <div className="max-w-[1400px] mx-auto px-8 md:px-16 pt-12 md:pt-20">
                            <div
                                className="section-divider w-full h-[1px] bg-white/10 mb-16 md:mb-24 origin-left"
                            />
                        </div>
                    )}

                    <div className="max-w-[1400px] mx-auto px-8 md:px-16 pb-20 md:pb-32">
                        {/* Language selector (only on first section) */}
                        {index === 0 && (
                            <div className="flex gap-4 mb-8">
                                <span className="font-space font-bold text-xs tracking-widest text-white/80 cursor-pointer hover:text-white transition">EN</span>
                                <span className="font-space font-bold text-xs tracking-widest text-white/30 cursor-pointer hover:text-white transition">NL</span>
                                <span className="font-space font-bold text-xs tracking-widest text-white/30 cursor-pointer hover:text-white transition">DE</span>
                            </div>
                        )}

                        {/* Big title heading */}
                        <h2
                            className="training-heading font-rajdhani font-bold uppercase leading-[0.9] tracking-tight mb-16 md:mb-24"
                            style={{
                                fontSize: 'clamp(2.2rem, 5.5vw, 5rem)',
                                color: '#C4B99A',
                            }}
                        >
                            {training.title.split('—')[0]}—<br />
                            {training.title.split('—')[1]?.trim()}
                        </h2>

                        {/* Tags — far left */}
                        <div className="training-tags flex flex-col gap-2 mb-12 md:mb-16">
                            {training.tags.map((tag) => (
                                <div
                                    key={tag}
                                    className="inline-block border border-white/20 px-4 py-2 font-space font-bold text-[10px] tracking-[0.2em] text-white/60 uppercase w-fit"
                                >
                                    {tag}
                                </div>
                            ))}
                        </div>

                        {/* Content grid: image left, text right */}
                        <div className="flex flex-col md:flex-row gap-12 md:gap-20">
                            {/* Left: Image */}
                            <div className="training-image w-full md:w-[380px] shrink-0">
                                <div className="w-full aspect-[3/4] overflow-hidden relative" style={{ maxHeight: '480px' }}>
                                    <img
                                        src={training.imagePath}
                                        alt={training.title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#1E2A1A]/60 to-transparent" />
                                </div>
                            </div>

                            {/* Right: Text content */}
                            <div className="training-text flex-1 flex flex-col justify-center">
                                {/* Training number */}
                                <p className="font-space font-bold text-xs tracking-[0.3em] text-white/30 mb-8 uppercase">
                                    {training.number}
                                </p>

                                {/* Description */}
                                <p
                                    className="font-rajdhani text-base md:text-lg leading-[1.8] mb-10"
                                    style={{ color: '#A0A89A' }}
                                >
                                    {training.description}
                                </p>

                                {/* What's included */}
                                <p className="font-rajdhani font-semibold text-white/70 text-base mb-6">
                                    Whats included:
                                </p>
                                <div className="space-y-5">
                                    {training.features.map((feature) => (
                                        <div key={feature} className="training-feature flex items-start gap-4">
                                            <svg
                                                className="w-5 h-5 text-white/40 mt-0.5 shrink-0"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                strokeWidth={1.5}
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="font-rajdhani text-white/60 text-base">
                                                {feature}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
