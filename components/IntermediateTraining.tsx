'use client';
import TrainingPage from './TrainingPage';

export default function IntermediateTraining() {
    return (
        <TrainingPage
            number="TRAINING 02"
            title="INTERMEDIATE — SEVEN-DAY TACTICAL OPERATIONS"
            description="A comprehensive week-long immersion into advanced tactical methodologies. Operators train across dynamic entry, hostage scenarios, vehicle interdiction, and coordinated multi-element assaults under realistic conditions."
            features={[
                'Dynamic CQB and room clearing',
                'Vehicle assault and convoy ambush drills',
                'Night vision operations and low-light tactics',
                'Stress inoculation under live-fire conditions',
            ]}
            tags={['7 DAYS', 'ADVANCED LEVEL', 'TEAM-INTEGRATED']}
            imagePath="/marine.jpg"
        />
    );
}
