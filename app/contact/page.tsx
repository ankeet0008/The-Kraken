'use client';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PricingTiers from '@/components/PricingTiers';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        callsign: '',
        message: '',
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 4000);
    };

    return (
        <main className="bg-black text-white min-h-screen">
            <Navbar />

            {/* Hero Banner */}
            <section className="relative pt-40 pb-20 px-6 overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(77,119,78,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(77,119,78,0.03)_1px,transparent_1px)] bg-[size:80px_80px] pointer-events-none" />

                <div className="max-w-7xl mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <p className="text-[#8C9890] font-space font-bold tracking-[0.4em] mb-6 text-xs">
                            SECURE COMMS
                        </p>
                        <h1 className="text-6xl md:text-9xl font-bold font-rajdhani tracking-tighter leading-[0.85]">
                            MAKE<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4D774E] via-[#6B9A6C] to-[#4D774E]">
                                CONTACT
                            </span>
                        </h1>
                    </motion.div>
                </div>
            </section>

            {/* Contact Form + Info */}
            <section className="px-6 pb-20">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Form */}
                    <motion.form
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        onSubmit={handleSubmit}
                        className="space-y-6"
                    >
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-[10px] font-space text-[#66726A] uppercase tracking-widest mb-2">
                                    Operator Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-[#0A0A0A] border border-white/10 rounded-xl px-5 py-4 text-white font-rajdhani text-sm focus:border-[#4D774E]/50 focus:outline-none transition-colors placeholder:text-white/20"
                                    placeholder="Full name"
                                />
                            </div>
                            <div>
                                <label className="block text-[10px] font-space text-[#66726A] uppercase tracking-widest mb-2">
                                    Callsign
                                </label>
                                <input
                                    type="text"
                                    name="callsign"
                                    value={formData.callsign}
                                    onChange={handleChange}
                                    className="w-full bg-[#0A0A0A] border border-white/10 rounded-xl px-5 py-4 text-white font-rajdhani text-sm focus:border-[#4D774E]/50 focus:outline-none transition-colors placeholder:text-white/20"
                                    placeholder="Optional"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-[10px] font-space text-[#66726A] uppercase tracking-widest mb-2">
                                Encrypted Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full bg-[#0A0A0A] border border-white/10 rounded-xl px-5 py-4 text-white font-rajdhani text-sm focus:border-[#4D774E]/50 focus:outline-none transition-colors placeholder:text-white/20"
                                placeholder="your@email.com"
                            />
                        </div>

                        <div>
                            <label className="block text-[10px] font-space text-[#66726A] uppercase tracking-widest mb-2">
                                Mission Brief
                            </label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows={5}
                                className="w-full bg-[#0A0A0A] border border-white/10 rounded-xl px-5 py-4 text-white font-rajdhani text-sm focus:border-[#4D774E]/50 focus:outline-none transition-colors resize-none placeholder:text-white/20"
                                placeholder="Describe your training requirements..."
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full sm:w-auto px-12 py-4 bg-[#4D774E] text-white font-bold font-space text-xs tracking-widest rounded-xl hover:bg-[#3E6140] transition-all hover:shadow-[0_0_30px_rgba(77,119,78,0.3)] disabled:opacity-40"
                            disabled={submitted}
                        >
                            {submitted ? 'TRANSMISSION SENT ✓' : 'TRANSMIT'}
                        </button>
                    </motion.form>

                    {/* Info Panel */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-10"
                    >
                        <div className="bg-[#0A0A0A] border border-white/5 rounded-2xl p-8">
                            <h3 className="text-xl font-bold font-rajdhani text-white mb-6">OPERATION HQ</h3>
                            <div className="space-y-5">
                                {[
                                    { label: 'LOCATION', value: 'CLASSIFIED — NEED TO KNOW BASIS' },
                                    { label: 'FREQUENCY', value: 'SECURE CHANNEL 7.42' },
                                    { label: 'RESPONSE TIME', value: '< 24 HOURS' },
                                    { label: 'OPERATIONAL STATUS', value: 'ACTIVE', highlight: true },
                                ].map((item) => (
                                    <div key={item.label} className="flex justify-between items-center border-b border-white/5 pb-3">
                                        <span className="text-[10px] font-space text-[#66726A] uppercase tracking-widest">{item.label}</span>
                                        <span className={`text-sm font-space font-bold ${item.highlight ? 'text-[#4D774E]' : 'text-white/70'}`}>
                                            {item.value}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-[#0A0A0A] border border-white/5 rounded-2xl p-8">
                            <h3 className="text-xl font-bold font-rajdhani text-white mb-3">CLEARANCE NOTICE</h3>
                            <p className="text-white/40 font-rajdhani text-sm leading-relaxed">
                                All inquiries are subject to preliminary background verification.
                                Response is not guaranteed. Only those who meet our minimum operational
                                criteria will be contacted for the next phase of assessment.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Pricing Section */}
            <PricingTiers />

            <Footer />
        </main>
    );
}
