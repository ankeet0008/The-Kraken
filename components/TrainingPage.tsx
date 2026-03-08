'use client';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface TrainingPageProps {
    number: string;
    title: string;
    description: string;
    features: string[];
    tags: string[];
    imagePath: string;
    showLangSelector?: boolean;
}

export default function TrainingPage({
    number,
    title,
    description,
    features,
    tags,
    imagePath,
    showLangSelector = false,
}: TrainingPageProps) {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const section = sectionRef.current;
            if (!section) return;

            const heading = section.querySelector('.training-heading');
            const tagEls = section.querySelector('.training-tags');
            const image = section.querySelector('.training-image');
            const textContent = section.querySelector('.training-text');
            const featureEls = section.querySelectorAll('.training-feature');

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: section,
                    start: 'top 75%',
                    end: 'top 20%',
                    toggleActions: 'play none none reverse',
                },
            });

            if (heading) {
                tl.fromTo(heading, { y: 80, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }, 0);
            }
            if (tagEls) {
                tl.fromTo(tagEls, { x: -60, opacity: 0 }, { x: 0, opacity: 1, duration: 0.7, ease: 'power3.out' }, 0.15);
            }
            if (image) {
                tl.fromTo(image, { scale: 0.85, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.9, ease: 'power2.out' }, 0.2);
            }
            if (textContent) {
                tl.fromTo(textContent, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out' }, 0.35);
            }
            if (featureEls.length) {
                tl.fromTo(featureEls, { x: 30, opacity: 0 }, { x: 0, opacity: 1, duration: 0.5, ease: 'power2.out', stagger: 0.1 }, 0.5);
            }
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const [titlePrefix, titleSuffix] = title.split('—').map((s) => s.trim());

    return (
        <div ref={sectionRef} className="w-full bg-[#1E2A1A] text-white relative overflow-hidden" style={{ minHeight: '100vh' }}>
            {/* Top padding for overlap space */}
            <div className="pt-32 md:pt-44" />

            <div className="max-w-[1400px] mx-auto px-8 md:px-16 pb-20 md:pb-32">
                {/* Language selector */}
                {showLangSelector && (
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
                    {titlePrefix} —<br />
                    {titleSuffix}
                </h2>

                {/* Tags — far left */}
                <div className="training-tags flex flex-col gap-2 mb-12 md:mb-16">
                    {tags.map((tag) => (
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
                                src={imagePath}
                                alt={title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#1E2A1A]/60 to-transparent" />
                        </div>
                    </div>

                    {/* Right: Text content */}
                    <div className="training-text flex-1 flex flex-col justify-center">
                        <p className="font-space font-bold text-xs tracking-[0.3em] text-white/30 mb-8 uppercase">
                            {number}
                        </p>
                        <p className="font-rajdhani text-base md:text-lg leading-[1.8] mb-10" style={{ color: '#A0A89A' }}>
                            {description}
                        </p>
                        <p className="font-rajdhani font-semibold text-white/70 text-base mb-6">
                            Whats included:
                        </p>
                        <div className="space-y-5">
                            {features.map((feature) => (
                                <div key={feature} className="training-feature flex items-start gap-4">
                                    <svg className="w-5 h-5 text-white/40 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="font-rajdhani text-white/60 text-base">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
