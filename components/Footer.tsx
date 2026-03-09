'use client';
export default function Footer() {
    return (
        <footer className="bg-black border-t border-white/10 py-12">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-white rounded flex items-center justify-center">
                        <span className="text-black font-bold text-xs font-rajdhani">K</span>
                    </div>
                    <span className="font-space font-bold tracking-widest text-white text-sm">KRAKEN</span>
                </div>

                <div className="flex gap-8 text-[10px] font-space text-white/40 tracking-widest">
                    <a href="#" className="hover:text-white transition">PRIVACY</a>
                    <a href="#" className="hover:text-white transition">TERMS</a>
                    <a href="#" className="hover:text-white transition">TRAINING SYLLABUS</a>
                </div>

                <div className="flex gap-6 text-[10px] font-space text-white/40 tracking-widest">
                    <a href="#" className="hover:text-[#4D774E] transition uppercase">Instagram</a>
                    <a href="#" className="hover:text-[#4D774E] transition uppercase">YouTube</a>
                </div>

                <div className="text-[10px] font-space text-white/30 hidden md:block">
                    © 2026 KRAKEN. CLASSIFIED.
                </div>
            </div>
        </footer>
    );
}
