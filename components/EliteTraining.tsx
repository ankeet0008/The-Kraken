'use client';
import TrainingPage from './TrainingPage';

export default function EliteTraining() {
    return (
        <TrainingPage
            number="TRAINING 03"
            title="ELITE — TWELVE-DAY COMMAND CERTIFICATION"
            description="The definitive special operations certification. Twelve days of escalating intensity covering every domain of modern warfare — from urban combat to wilderness survival, leadership under fire, and strategic mission planning."
            features={[
                'Full-spectrum mission planning and execution',
                'Leadership under extreme duress',
                'Interrogation resistance and evasion',
                'Joint operations with multi-agency coordination',
                'Final 72-hour uninterrupted field exercise',
            ]}
            tags={['12 DAYS', 'ELITE CERTIFICATION', 'COMMAND-LEVEL']}
            imagePath="/marine.jpg"
        />
    );
}
