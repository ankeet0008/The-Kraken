'use client';
import { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { droneData } from '@/data/droneData';

const ShowcaseSection = ({ videoPath, imagePath, title, subtitle, align = 'center' }: { videoPath?: string, imagePath?: string, title: string, subtitle: string, align?: string }) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const isInView = useInView(videoRef, { margin: "200px 0px 200px 0px" });

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
        <section className="relative w-full h-[110vh] bg-black overflow-hidden flex flex-col items-center justify-center border-t border-white/5">
            {imagePath ? (
                <img
                    src={imagePath}
                    alt={title}
                    className="absolute inset-0 w-full h-full object-cover opacity-90"
                />
            ) : (
                <video
                    ref={videoRef}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    className="absolute inset-0 w-full h-full object-cover opacity-50"
                >
                    <source src={videoPath} type="video/mp4" />
                </video>
            )}

            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/80 pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ margin: "-20%" }}
                transition={{ duration: 1 }}
                className={`relative z-10 max-w-7xl mx-auto px-6 w-full ${align === 'left' ? 'text-left' : align === 'right' ? 'text-right' : 'text-center'
                    }`}
            >
                <div className={`inline-block ${align === 'center' ? 'mx-auto' : align === 'right' ? 'ml-auto' : ''}`}>
                    <h2 className="text-6xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40 tracking-tighter mb-6 drop-shadow-2xl font-space uppercase">
                        {title}
                    </h2>
                    <p className="text-2xl md:text-3xl text-gray-300 font-medium max-w-2xl leading-relaxed font-rajdhani">
                        {subtitle}
                    </p>
                </div>
            </motion.div>
        </section>
    );
};

export default function CloseupGalleryVideo() {
    const galleryItems = droneData.gallery;

    return (
        <div className="bg-black text-white relative z-20">
            <div className="py-40 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(77,119,78,0.1)_0%,transparent_70%)]" />
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative z-10"
                >
                    <h3 className="text-sm font-bold font-space text-exec-blue mb-6 tracking-[0.3em] uppercase">Engineering Mastery</h3>
                    <p className="text-5xl md:text-7xl font-bold tracking-tight text-white font-rajdhani">
                        Forged from discipline.<br />
                        <span className="text-exec-platinum">Powered by instinct.</span>
                    </p>
                </motion.div>
            </div>

            {galleryItems.map((item, index) => (
                <ShowcaseSection
                    key={index}
                    videoPath={'videoPath' in item ? item.videoPath : undefined}
                    imagePath={'imagePath' in item ? item.imagePath : undefined}
                    title={item.title}
                    subtitle={item.subtitle}
                    align={item.align}
                />
            ))}

            {/* Spotlight CTA */}
            <section className="py-40 bg-black text-center px-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-[90rem] mx-auto rounded-[3rem] bg-exec-carbon border border-white/10 p-20 md:p-32 overflow-hidden relative group"
                >
                    <div className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] bg-gradient-to-b from-white/5 to-transparent rotate-45 pointer-events-none transition-transform duration-[20s] group-hover:rotate-90" />
                    <div className="relative z-10">
                        <h2 className="text-6xl md:text-8xl font-bold text-white mb-8 tracking-tighter font-rajdhani">Prove your worth.</h2>
                        <button className="px-12 py-6 bg-exec-blue text-white text-lg font-bold font-space rounded-full hover:scale-105 transition-all shadow-[0_0_50px_rgba(77,119,78,0.5)] hover:shadow-[0_0_80px_rgba(77,119,78,0.8)]">
                            ENROLL TODAY
                        </button>
                    </div>
                </motion.div>
            </section>
        </div>
    );
}
