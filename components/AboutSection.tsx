'use client';

export default function AboutSection() {
    return (
        <div className="w-full bg-[#7A8B6A] text-white relative overflow-hidden" style={{ minHeight: '100vh' }}>

            {/* ===== TOP HALF: Headline + About Text ===== */}
            <div className="max-w-[1400px] mx-auto px-8 md:px-16 pt-24 md:pt-32 pb-16">

                {/* Large Bold Headline */}
                <h2
                    className="font-rajdhani font-bold uppercase leading-[0.95] tracking-tight mb-20 ml-auto text-right"
                    style={{
                        fontSize: 'clamp(2.5rem, 6vw, 5.5rem)',
                        color: '#F0EDE4',
                        maxWidth: '900px',
                    }}
                >
                    TACTICAL FACILITATOR FOR SPECIAL OPERATIONS UNIT TRAINING, SHAPED BY DECADES OF EXPERIENCE
                </h2>

                {/* About Us + Body Text Row */}
                <div className="flex flex-col md:flex-row gap-8 md:gap-24">

                    {/* Left: ABOUT US label */}
                    <div className="md:w-[200px] shrink-0">
                        <p
                            className="font-space font-bold uppercase tracking-[0.35em] text-xs"
                            style={{ color: '#3D4A36' }}
                        >
                            ABOUT US
                        </p>
                    </div>

                    {/* Right: Body text + Read More */}
                    <div className="flex-1 max-w-[580px]">
                        <p
                            className="font-rajdhani text-base md:text-[17px] leading-[1.7] mb-10"
                            style={{ color: '#2C3527' }}
                        >
                            With a background in reconnaissance and special operations, decades of tactical experience, and structural engineering expertise, our team understands how to breach any barrier and why systems fail. That&apos;s why we&apos;ve supported training for intervention units across the globe. They attended one session; we observed hundreds. Now we know better than anyone how to push every operator beyond their limits.
                        </p>

                        {/* Read More button + Signature */}
                        <div className="flex items-center gap-8">
                            <button
                                className="px-6 py-3 border font-space font-bold text-xs tracking-[0.15em] transition-all duration-300 hover:bg-[#3D4A36] hover:border-[#3D4A36] hover:text-[#F0EDE4]"
                                style={{
                                    borderColor: '#3D4A36',
                                    color: '#3D4A36',
                                }}
                            >
                                Read more
                            </button>

                            {/* Signature-style element */}
                            <div
                                className="font-rajdhani italic text-3xl md:text-4xl select-none"
                                style={{ color: '#3D4A36', fontWeight: 300 }}
                            >
                                Kraken
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ===== BOTTOM HALF: Photo + Credential Tags ===== */}
            <div className="max-w-[1400px] mx-auto px-8 md:px-16 pb-24 md:pb-32">
                <div className="flex flex-col md:flex-row gap-12 md:gap-24 items-start">

                    {/* Left: Photo */}
                    <div className="w-full md:w-[320px] shrink-0">
                        <div
                            className="w-full aspect-[3/4] bg-[#4A5A3E] overflow-hidden relative"
                            style={{ maxHeight: '420px' }}
                        >
                            {/* Dark overlay gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10" />
                            {/* Marine photo */}
                            <img
                                src="/marine.jpg"
                                alt="Marine tactical operator"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                            {/* Subtle crosshair overlay */}
                            <div className="absolute inset-0 flex items-center justify-center z-20 opacity-20">
                                <div className="w-16 h-[1px] bg-white/50" />
                                <div className="absolute w-[1px] h-16 bg-white/50" />
                            </div>
                        </div>
                    </div>

                    {/* Right: Credential Tags */}
                    <div className="flex flex-col gap-3 pt-4 md:pt-8">
                        {[
                            'BASED IN OPERATIONS WORLDWIDE',
                            '20+ YEARS OF TACTICAL EXPERIENCE',
                            'STRUCTURAL ENGINEERING BACKGROUND',
                            'SPECIAL OPERATIONS VETERAN',
                        ].map((tag) => (
                            <div
                                key={tag}
                                className="inline-block border px-5 py-2.5 font-space font-bold text-[11px] tracking-[0.2em] uppercase w-fit transition-colors duration-300 hover:bg-[#3D4A36]/20"
                                style={{
                                    borderColor: '#3D4A36',
                                    color: '#3D4A36',
                                }}
                            >
                                {tag}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Big PROGRAM heading — flush at bottom edge */}
            <div className="max-w-[1400px] mx-auto px-8 md:px-16 pb-0">
                <h2
                    className="font-rajdhani font-bold uppercase leading-[0.85] tracking-tighter program-title-text"
                    style={{
                        fontSize: 'clamp(5rem, 15vw, 14rem)',
                        color: '#F0EDE4',
                        marginBottom: '-0.1em',
                    }}
                >
                    PROGRAM
                </h2>
            </div>
        </div>
    );
}
