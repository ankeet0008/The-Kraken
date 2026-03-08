'use client';
import TrainingPage from './TrainingPage';

export default function BasicTraining() {
    return (
        <TrainingPage
            number="TRAINING 01"
            title="BASIC — THREE-DAY BREACHING TRAINING"
            description="For units already performing at the highest level. Three days of theory and practice. Climbing and breaching training based on real failures and near-misses from operations. Realistic scenarios, realistic materials."
            features={[
                'Mechanical and hydraulic breaching',
                'Hands-on with professional equipment',
                'Tested on realistic materials, no cardboard doors',
            ]}
            tags={['3 DAYS', 'FULLY FACILITATED', 'PEOPLE-FOCUSSED']}
            imagePath="/marine.jpg"
            showLangSelector={true}
        />
    );
}
