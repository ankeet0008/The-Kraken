'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
    {
        q: "WHAT ARE THE PHYSICAL PREREQUISITES?",
        a: "Candidates must be able to complete a 5-mile run in under 40 minutes, execute 80 push-ups in two minutes, 80 sit-ups in two minutes, and 15 strict pull-ups. This is the minimum baseline. We expect you to exceed it."
    },
    {
        q: "IS PREVIOUS MILITARY EXPERIENCE REQUIRED?",
        a: "No. However, a Tier 1 mindset is non-negotiable. We accept civilians who demonstrate extreme resilience, unyielding discipline, and the capacity to operate under severe psychological and physical stress."
    },
    {
        q: "WHAT GEAR IS ISSUED VS. REQUIRED?",
        a: "We provide tactical firearms (simunitions), breaching tools, and specialized combat tech. Candidates are responsible for bringing approved combat footwear, a high-capacity hydration system, and weather-appropriate base layers. Detailed packing lists are provided upon enlistment."
    },
    {
        q: "WHAT IF I INJURE MYSELF OR FAIL?",
        a: "Training is dangerous by design. Medical staff are on standby 24/7. If you DOR (Drop On Request) or are removed for medical reasons, you will be extracted immediately. There are no refunds for failure."
    }
];

export default function FaqSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="relative w-full min-h-screen bg-black overflow-hidden py-32 px-6 border-t border-white/5 font-space flex items-center">
            <div className="max-w-4xl mx-auto relative z-10 w-full">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20 text-center"
                >
                    <p className="text-[#4D774E] tracking-[0.3em] text-xs font-bold mb-4 uppercase">
                        // INTEL BRIEFING
                    </p>
                    <h2 className="text-4xl md:text-6xl font-rajdhani font-bold text-white tracking-tighter mb-4">
                        FREQUENTLY ASKED QUESTIONS
                    </h2>
                </motion.div>

                <div className="border border-white/10 bg-[#020202] p-2 md:p-8">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="border-b border-white/10 last:border-b-0"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between py-6 px-4 hover:bg-white/[0.02] transition-colors group cursor-crosshair text-left"
                            >
                                <div className="flex items-center gap-4">
                                    <span className="text-white/30 font-bold font-rajdhani text-xl">
                                        0{index + 1}
                                    </span>
                                    <h3 className="text-white font-bold tracking-widest text-xs md:text-sm group-hover:text-exec-blue transition-colors">
                                        {faq.q}
                                    </h3>
                                </div>
                                <span className="text-white/50 text-2xl font-light transform transition-transform duration-300">
                                    {openIndex === index ? "−" : "+"}
                                </span>
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="p-4 pt-0 pb-8 text-white/60 text-sm leading-relaxed border-l-2 border-exec-blue ml-12">
                                            {faq.a}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
