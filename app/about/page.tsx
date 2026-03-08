import Navbar from '@/components/Navbar';
import AboutSection from '@/components/AboutSection';
import Footer from '@/components/Footer';

export const metadata = {
    title: 'KRAKEN | About',
    description: 'Learn about KRAKEN Special Operations Training. We don\'t train. We evolve.',
};

export default function AboutPage() {
    return (
        <main className="bg-[#1D2420] text-white min-h-screen">
            <Navbar />
            <AboutSection />
            <Footer />
        </main>
    );
}
