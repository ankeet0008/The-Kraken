'use client';
import { useState } from 'react';

export default function ContactSection() {
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
        <div className="w-full min-h-screen bg-[#7A8B6A] flex flex-col justify-center px-6 py-20 relative overflow-hidden">
            {/* Grid overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(61,74,54,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(61,74,54,0.08)_1px,transparent_1px)] bg-[size:80px_80px] pointer-events-none" />

            <div className="max-w-7xl mx-auto w-full relative z-10">
                {/* Header */}
                <div className="mb-16">
                    <p className="text-[#3D4A36] font-space font-bold tracking-[0.4em] mb-6 text-xs section-title">
                        SECURE COMMS
                    </p>
                    <h2 className="text-5xl md:text-8xl font-bold font-rajdhani tracking-tighter leading-[0.85] text-[#F0EDE4] section-heading">
                        MAKE<br />
                        <span className="text-[#F0EDE4]">
                            CONTACT
                        </span>
                    </h2>
                </div>

                {/* Form + Info Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-[10px] font-space text-[#3D4A36] uppercase tracking-widest mb-2">
                                    Operator Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-[#6B7C5C] border border-[#3D4A36]/30 rounded-xl px-5 py-4 text-[#F0EDE4] font-rajdhani text-sm focus:border-[#3D4A36]/60 focus:outline-none transition-colors placeholder:text-[#F0EDE4]/40"
                                    placeholder="Full name"
                                />
                            </div>
                            <div>
                                <label className="block text-[10px] font-space text-[#3D4A36] uppercase tracking-widest mb-2">
                                    Callsign
                                </label>
                                <input
                                    type="text"
                                    name="callsign"
                                    value={formData.callsign}
                                    onChange={handleChange}
                                    className="w-full bg-[#6B7C5C] border border-[#3D4A36]/30 rounded-xl px-5 py-4 text-[#F0EDE4] font-rajdhani text-sm focus:border-[#3D4A36]/60 focus:outline-none transition-colors placeholder:text-[#F0EDE4]/40"
                                    placeholder="Optional"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-[10px] font-space text-[#3D4A36] uppercase tracking-widest mb-2">
                                Encrypted Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full bg-[#6B7C5C] border border-[#3D4A36]/30 rounded-xl px-5 py-4 text-[#F0EDE4] font-rajdhani text-sm focus:border-[#3D4A36]/60 focus:outline-none transition-colors placeholder:text-[#F0EDE4]/40"
                                placeholder="your@email.com"
                            />
                        </div>

                        <div>
                            <label className="block text-[10px] font-space text-[#3D4A36] uppercase tracking-widest mb-2">
                                Mission Brief
                            </label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows={4}
                                className="w-full bg-[#6B7C5C] border border-[#3D4A36]/30 rounded-xl px-5 py-4 text-[#F0EDE4] font-rajdhani text-sm focus:border-[#3D4A36]/60 focus:outline-none transition-colors resize-none placeholder:text-[#F0EDE4]/40"
                                placeholder="Describe your training requirements..."
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full sm:w-auto px-12 py-4 bg-[#3D4A36] text-[#F0EDE4] font-bold font-space text-xs tracking-widest rounded-xl hover:bg-[#2C3527] transition-all hover:shadow-[0_0_30px_rgba(61,74,54,0.4)] disabled:opacity-40"
                            disabled={submitted}
                        >
                            {submitted ? 'TRANSMISSION SENT ✓' : 'TRANSMIT'}
                        </button>
                    </form>

                    {/* Info Panel */}
                    <div className="space-y-8">
                        <div className="bg-[#6B7C5C] border border-[#3D4A36]/20 rounded-2xl p-8">
                            <h3 className="text-xl font-bold font-rajdhani text-[#F0EDE4] mb-6">OPERATION HQ</h3>
                            <div className="space-y-5">
                                {[
                                    { label: 'LOCATION', value: 'CLASSIFIED — NEED TO KNOW BASIS' },
                                    { label: 'FREQUENCY', value: 'SECURE CHANNEL 7.42' },
                                    { label: 'RESPONSE TIME', value: '< 24 HOURS' },
                                    { label: 'OPERATIONAL STATUS', value: 'ACTIVE', highlight: true },
                                ].map((item) => (
                                    <div key={item.label} className="flex justify-between items-center border-b border-[#3D4A36]/20 pb-3">
                                        <span className="text-[10px] font-space text-[#3D4A36] uppercase tracking-widest">{item.label}</span>
                                        <span className={`text-sm font-space font-bold ${item.highlight ? 'text-[#F0EDE4]' : 'text-[#F0EDE4]/70'}`}>
                                            {item.value}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-[#6B7C5C] border border-[#3D4A36]/20 rounded-2xl p-8">
                            <h3 className="text-xl font-bold font-rajdhani text-[#F0EDE4] mb-3">CLEARANCE NOTICE</h3>
                            <p className="text-[#2C3527] font-rajdhani text-sm leading-relaxed">
                                All inquiries are subject to preliminary background verification.
                                Response is not guaranteed. Only those who meet our minimum operational
                                criteria will be contacted for the next phase of assessment.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer bar at bottom */}
            <div className="max-w-7xl mx-auto w-full mt-20 pt-8 border-t border-[#3D4A36]/30 flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
                <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-[#F0EDE4] rounded flex items-center justify-center">
                        <span className="text-[#3D4A36] font-bold text-xs font-rajdhani">K</span>
                    </div>
                    <span className="font-space font-bold tracking-widest text-[#F0EDE4] text-sm">KRAKEN</span>
                </div>
                <div className="flex gap-8 text-[10px] font-space text-[#3D4A36] tracking-widest">
                    <a href="#" className="hover:text-[#F0EDE4] transition">PRIVACY</a>
                    <a href="#" className="hover:text-[#F0EDE4] transition">TERMS</a>
                    <a href="#" className="hover:text-[#F0EDE4] transition">TRAINING SYLLABUS</a>
                </div>
                <div className="text-[10px] font-space text-[#3D4A36]/60">
                    © 2026 KRAKEN. CLASSIFIED.
                </div>
            </div>
        </div>
    );
}
