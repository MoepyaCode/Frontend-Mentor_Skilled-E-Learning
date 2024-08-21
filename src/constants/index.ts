import { Assets } from "../assets"

interface SkillsCard {
    title: string,
    description: string,
    icon: string
}

export const skillsCardDetails: SkillsCard[] = [
    {
        title: 'Animation',
        description: 'Learn the latest animation techniques to create stunning motion design and captivate your audience.',
        icon: Assets.iconAnimation
    },
    {
        title: 'Design',
        description: 'Create beautiful, usable interfaces to help shape the future of how the web looks.',
        icon: Assets.iconDesign
    },
    {
        title: 'Photography',
        description: 'Explore critical fundamentals like lighting, composition, and focus to capture exceptional photos.',
        icon: Assets.iconPhotography
    },
    {
        title: 'Crypto',
        description: 'All you need to know to get started investing in crypto. Go from beginner to advanced with this 54 hour course.',
        icon: Assets.iconCrypto
    },
    {
        title: 'Business',
        description: 'A step-by-step playbook to help you start, scale, and sustain your business without outside investment.',
        icon: Assets.iconBusiness
    }
]