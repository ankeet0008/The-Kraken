export const droneData = {
    hero: {
        title: "THE KRAKEN",
        subtitle: "Tier 1 Special Operations Training. Push beyond human limits.",
        videoPath: "/videos/hero/hero-video.mp4",
    },
    gallery: [
        {
            videoPath: "/videos/closeups/vulcan-cannon.mp4",
            title: "CQC MASTERY",
            subtitle: "Close Quarters Combat. Lethal efficiency in confined environments."
        },
        {
            videoPath: "/videos/closeups/rotor-assembly.mp4",
            title: "STEALTH INFILTRATION",
            subtitle: "Zero visibility operations. Move without a trace.",
            align: "left"
        },
        {
            imagePath: "https://cdn.prod.website-files.com/6966447cccb15d7eecb8777e/698c84853c82c1b0af61c661_Liike-TheKraken-0401530.avif",
            title: "SITUATIONAL AWARENESS", // Note: The file might not exist yet, need to verify
            subtitle: "Process battlefield data instantly. Never be outflanked.",
            align: "right"
        }
    ],
    pricing: [
        {
            id: "alpha",
            name: "Alpha Protocol",
            price: "BASIC",
            features: ["CQC Fundamentals", "Fitness Conditioning", "Field Navigation"]
        },
        {
            id: "tier1",
            name: "Tier 1 Operator",
            price: "ELITE",
            features: ["Advanced Weapons Handling", "Hostage Rescue", "Night Operations"]
        },
        {
            id: "command",
            name: "Black Site Command",
            price: "CLASSIFIED",
            features: ["Tactical Leadership", "Interrogation Evasion", "Strategic Planning"]
        }
    ]
};
