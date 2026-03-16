import { StaticImageData } from 'next/image';

import birthdayDecor1 from '@/assets/images/birthday-decoration-one.png';
import birthdayDecor2 from '@/assets/images/birthday-decoration-two.png';
import birthdayDecor3 from '@/assets/images/birthday-decoration-three.png';
import birthdayDecor4 from '@/assets/images/birthday-decoration-four.png';
import birthdayDecor5 from '@/assets/images/birthday-decoration-five.png';
import birthdayDecor6 from '@/assets/images/birthday-decoration-six.png';

export type ContactInfo = {
    email: string;
    phone: string;
    whatsapp: string;
};

export type Professional = {
    image: StaticImageData;
    badges: string[];
    title: string;
    slug: string;
    vendor: string;
    rating: number;
    reviews: number;
    location: string;
    price: string;
    isPrimary?: boolean;
    description?: string;
    contact: ContactInfo;
};

export const professionals: Professional[] = [
    {
        image: birthdayDecor1,
        badges: ['PREMIUM', 'NEW ARRIVAL'],
        title: 'Pastel and Gold Birthday Decor',
        slug: 'pastel-and-gold-birthday-decor',
        vendor: 'Suresh Sitharaman',
        rating: 4.9,
        reviews: 284,
        location: 'Indiranagar, BL',
        price: '1900',
        isPrimary: true,
        description:
            'Transform your birthday celebration with our stunning Pastel and Gold decor package. We create a magical ambiance using soft pastel tones blended with elegant gold accents. Perfect for milestone birthdays, our team handles everything from balloon arrangements to table settings.',
        contact: {
            email: 'suresh.pastel@decorhub.com',
            phone: '+91 98765 43210',
            whatsapp: '+91 98765 43210',
        },
    },
    {
        image: birthdayDecor2,
        badges: ['NEW ARRIVAL'],
        title: 'Minion Themed Birthday Decor',
        slug: 'minion-themed-birthday-decor',
        vendor: 'Suresh Sitharaman',
        rating: 4.9,
        reviews: 284,
        location: 'Indiranagar, BL',
        price: '1900',
        description:
            "Bring your child's favorite characters to life with our Minion Themed Birthday Decor! Featuring vibrant yellow and blue colors, custom banners, balloon sculptures, and themed tableware.",
        contact: {
            email: 'suresh.minion@decorhub.com',
            phone: '+91 98765 43211',
            whatsapp: '+91 98765 43211',
        },
    },
    {
        image: birthdayDecor3,
        badges: [],
        title: 'Black and Gold Birthday Decor',
        slug: 'black-and-gold-birthday-decor',
        vendor: 'Suresh Sitharaman',
        rating: 4.9,
        reviews: 284,
        location: 'Indiranagar, BL',
        price: '1900',
        description:
            'Elevate your celebration with our sophisticated Black and Gold Birthday Decor. This premium package exudes luxury and elegance, perfect for milestone birthdays and adult celebrations.',
        contact: {
            email: 'suresh.blackgold@decorhub.com',
            phone: '+91 98765 43212',
            whatsapp: '+91 98765 43212',
        },
    },
    {
        image: birthdayDecor4,
        badges: ['NEW ARRIVAL'],
        title: 'Flamingo Themed Birthday Decor',
        slug: 'flamingo-themed-birthday-decor',
        vendor: 'Suresh Sitharaman',
        rating: 4.9,
        reviews: 284,
        location: 'Indiranagar, BL',
        price: '1900',
        description:
            'Add a tropical flair to your birthday with our Flamingo Themed Decor! Pink flamingo cutouts, tropical flowers, and pastel balloon arrangements create a fun, vibrant atmosphere.',
        contact: {
            email: 'suresh.flamingo@decorhub.com',
            phone: '+91 98765 43213',
            whatsapp: '+91 98765 43213',
        },
    },
    {
        image: birthdayDecor5,
        badges: [],
        title: 'Beer and Whiskey Themed Birthday Decor',
        slug: 'beer-and-whiskey-themed-birthday-decor',
        vendor: 'Suresh Sitharaman',
        rating: 4.9,
        reviews: 284,
        location: 'Indiranagar, BL',
        price: '1900',
        description:
            'Perfect for the beer and whiskey enthusiast! Our themed decor features rustic barrel accents, hops-inspired arrangements, and custom signage.',
        contact: {
            email: 'suresh.beerwhiskey@decorhub.com',
            phone: '+91 98765 43214',
            whatsapp: '+91 98765 43214',
        },
    },
    {
        image: birthdayDecor6,
        badges: ['PREMIUM'],
        title: 'Moustache Themed Birthday Decor',
        slug: 'moustache-themed-birthday-decor',
        vendor: 'Suresh Sitharaman',
        rating: 4.9,
        reviews: 284,
        location: 'Indiranagar, BL',
        price: '1900',
        description:
            'Add a quirky and fun touch to your birthday celebration with our Moustache Themed Decor! Featuring playful moustache props, black and white color scheme with gold accents.',
        contact: {
            email: 'suresh.moustache@decorhub.com',
            phone: '+91 98765 43215',
            whatsapp: '+91 98765 43215',
        },
    },
];

export const highlights = [
    { icon: '🎨', label: 'Custom Design' },
    { icon: '⏱️', label: 'Setup in 2 Hours' },
    { icon: '✅', label: 'Professional Team' },
    { icon: '📦', label: 'All Items Included' },
    { icon: '📸', label: 'Photo Ready Setup' },
    { icon: '🔄', label: 'Easy Cancellation' },
];

export const filters = [
    'Birthday Special Decors',
    'Candlelight Dinners',
    'Birthday Cakes',
    'Birthday Surprises',
    'Couple Activities',
    'Birthday Special Decors',
    'Candlelight Dinners',
    'Birthday Cakes',
    'Birthday Surprises',
    'Couple Activities',
    'Birthday Special Decors',
    'Candlelight Dinners',
    'Birthday Cakes',
    'Birthday Surprises',
];
