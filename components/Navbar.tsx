'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const navLinks = [
    { label: 'HOME', index: 0 },
    { label: 'ABOUT', index: 1 },
    { label: 'PROGRAMS', index: 2 },
    { label: 'CADRE', index: 5 },
    { label: 'SHOP', index: 8 },
    { label: 'FAQ', index: 9 },
    { label: 'CONTACT', index: 10 },
];

export default function Navbar() {
    const [activeSection, setActiveSection] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('.scroll-section');
            sections.forEach((section, index) => {
                const rect = section.getBoundingClientRect();
                if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                    setActiveSection(index);
                }
            });
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (index: number) => {
        const sections = document.querySelectorAll('.scroll-section');
        if (sections[index]) {
            sections[index].scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            {/* Top-left logo */}
            <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="fixed top-8 left-8 z-50"
            >
                <button
                    onClick={() => scrollToSection(0)}
                    className="flex items-center gap-3 group cursor-pointer"
                >
                    <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center transition-transform group-hover:rotate-45">
                        <span className="text-black font-bold font-rajdhani">K</span>
                    </div>
                </button>
            </motion.div>

            {/* Right-side vertical nav */}
            <motion.nav
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="fixed top-8 right-8 z-50 hidden md:flex flex-col items-end gap-2"
            >
                {navLinks.map((item, i) => (
                    <motion.button
                        key={item.label}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 + i * 0.1 }}
                        onClick={() => scrollToSection(item.index)}
                        className={`font-space font-bold text-xs tracking-[0.2em] transition-all duration-300 py-1.5 ${activeSection === item.index
                            ? 'text-white'
                            : 'text-white/40 hover:text-white/70'
                            }`}
                    >
                        {item.label}
                    </motion.button>
                ))}
            </motion.nav>
        </>
    );
}
