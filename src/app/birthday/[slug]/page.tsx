// app/birthday/[slug]/page.tsx
import Image from 'next/image';
import Link from 'next/link';
import { ReactNode } from 'react';

import birthdayDecor1 from '@/assets/images/birthday-decoration-one.png';
import birthdayDecor2 from '@/assets/images/birthday-decoration-two.png';
import birthdayDecor3 from '@/assets/images/birthday-decoration-three.png';
import birthdayDecor4 from '@/assets/images/birthday-decoration-four.png';
import birthdayDecor5 from '@/assets/images/birthday-decoration-five.png';
import birthdayDecor6 from '@/assets/images/birthday-decoration-six.png';

const professionals = [
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
            'Transform your birthday celebration with our stunning Pastel and Gold decor package. We create a magical ambiance using soft pastel tones blended with elegant gold accents. Perfect for milestone birthdays, our team handles everything from balloon arrangements to table settings, ensuring a picture-perfect event that your guests will remember forever.',
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
            "Bring your child's favorite characters to life with our Minion Themed Birthday Decor! Featuring vibrant yellow and blue colors, custom banners, balloon sculptures, and themed tableware. Our professional team will transform your venue into a Minion paradise that kids absolutely love.",
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
            'Elevate your celebration with our sophisticated Black and Gold Birthday Decor. This premium package exudes luxury and elegance, perfect for milestone birthdays and adult celebrations. Includes custom backdrop, balloon arrangements, candle centerpieces, and premium table settings.',
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
            'Add a tropical flair to your birthday with our Flamingo Themed Decor! Pink flamingo cutouts, tropical flowers, and pastel balloon arrangements create a fun, vibrant atmosphere. Ideal for summer birthdays, pool parties, and anyone who loves a touch of the tropics.',
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
            "Perfect for the beer and whiskey enthusiast! Our themed decor features rustic barrel accents, hops-inspired arrangements, and custom signage. A unique and fun decoration choice for adult birthday parties that reflects the guest of honor's personality.",
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
            'Add a quirky and fun touch to your birthday celebration with our Moustache Themed Decor! Featuring playful moustache props, black and white color scheme with gold accents, custom photo booth setup, and themed tableware. Great for all ages!',
    },
];

const highlights = [
    { icon: '🎨', label: 'Custom Design' },
    { icon: '⏱️', label: 'Setup in 2 Hours' },
    { icon: '✅', label: 'Professional Team' },
    { icon: '📦', label: 'All Items Included' },
    { icon: '📸', label: 'Photo Ready Setup' },
    { icon: '🔄', label: 'Easy Cancellation' },
];

type ContactItem = {
    type: ReactNode;
    value: string;
};

import { FaPhone } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import { FaLocationDot } from 'react-icons/fa6';
const contact: ContactItem[] = [
    {
        type: <FaPhone />,
        value: '+91 98765 43210',
    },
    {
        type: <MdEmail />,
        value: 'suresh.pastel@decorhub.com',
    },
    {
        type: <FaLocationDot />,
        value: 'Indiranagar, Bangalore',
    },
];

// ✅ params এখন Promise type
type Props = {
    params: Promise<{ slug: string }>;
};

// ✅ async function
export default async function BirthdayDetailsPage({ params }: Props) {
    const { slug } = await params; // ✅ await করতে হবে
    const prof = professionals.find((p) => p.slug === slug);

    if (!prof) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center gap-4">
                <h1 className="text-[28px] font-bold text-[#222]">Page Not Found</h1>
                <p className="text-[#777]">This decoration package does not exist.</p>
                <Link
                    href="/"
                    className="bg-[var(--color-primary-pink)] text-white px-6 py-3 rounded-[8px] font-semibold hover:opacity-90 transition"
                >
                    Go Back Home
                </Link>
            </div>
        );
    }

    return (
        <main className="w-full max-w-[1440px] mx-auto px-[20px] lg:px-[60px] py-[40px] lg:py-[60px]">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-[8px] text-[13px] text-[#888] mb-[32px]">
                <Link href="/" className="hover:text-[var(--color-primary-pink)] transition-colors">
                    Home
                </Link>
                <span>/</span>
                <Link
                    href="/birthday"
                    className="hover:text-[var(--color-primary-pink)] transition-colors"
                >
                    Birthday Decors
                </Link>
                <span>/</span>
                <span className="text-[#222] font-medium truncate">{prof.title}</span>
            </nav>

            {/* Top Section: Image + Info */}
            <div className="flex flex-col lg:flex-row gap-[40px] mb-[60px]">
                {/* Left: Image */}
                <div className="w-full lg:w-[55%] relative rounded-[16px] overflow-hidden h-[340px] md:h-[480px] lg:h-[520px] shrink-0">
                    <Image
                        src={prof.image}
                        alt={prof.title}
                        fill
                        className="object-cover object-center"
                    />
                    <div className="absolute top-[16px] left-[16px] flex gap-[8px]">
                        {prof.badges.map((b) => (
                            <span
                                key={b}
                                className="text-[10px] font-bold py-[5px] px-[10px] rounded-[4px] bg-[var(--color-primary-pink)] text-white tracking-wide"
                            >
                                {b}
                            </span>
                        ))}
                    </div>
                    <div className="absolute bottom-0 right-0 bg-[var(--color-secondary-purple)] text-white py-[8px] px-[20px] rounded-tl-[12px] text-[18px] font-bold">
                        Rs. {prof.price}
                    </div>
                </div>

                {/* Right: Details */}
                <div className="flex-1 flex flex-col justify-between gap-[24px]">
                    <div>
                        <h1 className="text-[26px] md:text-[32px] font-bold text-[#111] leading-[1.3] mb-[16px]">
                            {prof.title}
                        </h1>

                        <div className="flex items-center gap-[10px] mb-[16px]">
                            <div
                                className="w-[40px] h-[40px] rounded-full bg-cover bg-center border-2 border-[var(--color-primary-pink)]"
                                style={{
                                    backgroundImage:
                                        "url('https://randomuser.me/api/portraits/men/32.jpg')",
                                }}
                            />
                            <div>
                                <p className="text-[14px] font-semibold text-[#222]">
                                    {prof.vendor}
                                </p>
                                <p className="text-[12px] text-[#888]">Verified Vendor</p>
                            </div>
                        </div>

                        <div className="flex flex-wrap items-center gap-[20px] mb-[20px]">
                            <div className="flex items-center gap-[6px] bg-[#fff8e1] border border-[#fabb05] px-[12px] py-[6px] rounded-[6px]">
                                <svg
                                    className="text-[#fabb05]"
                                    width="14"
                                    height="14"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                >
                                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                </svg>
                                <span className="text-[13px] font-bold text-[#222]">
                                    {prof.rating}
                                </span>
                                <span className="text-[12px] text-[#888]">
                                    ({prof.reviews} reviews)
                                </span>
                            </div>
                            <div className="flex items-center gap-[6px] text-[13px] text-[#555]">
                                <svg
                                    className="text-[var(--color-primary-pink)]"
                                    width="14"
                                    height="14"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                    <circle cx="12" cy="10" r="3" />
                                </svg>
                                {prof.location}
                            </div>
                        </div>

                        <p className="text-[14px] text-[#555] leading-[1.8] mb-[24px]">
                            {prof.description}
                        </p>

                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-[12px] mb-[28px]">
                            {highlights.map((h) => (
                                <div
                                    key={h.label}
                                    className="flex items-center gap-[8px] bg-[#fdf4ff] border border-[#e8d5f5] rounded-[8px] px-[12px] py-[10px]"
                                >
                                    <span className="text-[18px]">{h.icon}</span>
                                    <span className="text-[12px] font-medium text-[#444]">
                                        {h.label}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-[12px]">
                        <button className="flex-1 bg-[var(--color-primary-pink)] text-white py-[14px] px-[24px] rounded-[8px] font-bold text-[14px] hover:opacity-90 transition cursor-pointer">
                            Book Now
                        </button>
                        <button className="flex-1 bg-transparent border border-[var(--color-primary-pink)] text-[var(--color-primary-pink)] py-[14px] px-[24px] rounded-[8px] font-bold text-[14px] hover:bg-[var(--color-primary-pink)] hover:text-white transition cursor-pointer">
                            Contact Vendor
                        </button>
                        <button className="w-[52px] h-[52px] shrink-0 flex items-center justify-center border border-[#ddd] rounded-[8px] hover:border-[var(--color-primary-pink)] transition cursor-pointer">
                            <svg
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                fill="white"
                                stroke="var(--color-primary-pink)"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <hr className="border-[#f0f0f0] mb-[60px]" />

            <div className="mb-[60px]">
                <h2 className="text-[22px] font-bold text-[#111] mb-[24px]">Contact Us</h2>
                <div className="grid grid-cols-1 max-w-1/2 gap-[16px]">
                    {Object.values(contact).map((item) => (
                        <div
                            key={item.value}
                            className="flex items-center gap-[10px] bg-white border border-[#f0f0f0] rounded-[8px] px-[16px] py-[12px] shadow-sm"
                        >
                            <span className="text-[13px] text-[#444]">{item.type}</span>
                            <span className="text-[13px] text-[#444]">{item.value}</span>
                        </div>
                    ))}
                </div>
            </div>

            <hr className="border-[#f0f0f0] mb-[60px]" />

            <div>
                <h2 className="text-[22px] font-bold text-[#111] mb-[24px]">
                    Other Packages You May Like
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[24px]">
                    {professionals
                        .filter((p) => p.slug !== slug)
                        .slice(0, 3)
                        .map((p) => (
                            <Link
                                key={p.slug}
                                href={`/birthday/${p.slug}`}
                                className="group bg-white border border-[#f0f0f0] rounded-[10px] overflow-hidden hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition-all duration-200 hover:bg-[#F1D2D9]"
                            >
                                <div className="relative h-[180px]">
                                    <Image
                                        src={p.image}
                                        alt={p.title}
                                        fill
                                        className="object-cover object-center"
                                    />
                                    <div className="absolute bottom-0 right-0 bg-[var(--color-secondary-purple)] text-white py-[4px] px-[10px] rounded-tl-[8px] text-[12px] font-bold">
                                        Rs. {p.price}
                                    </div>
                                </div>
                                <div className="p-[14px]">
                                    <h3 className="text-[14px] font-bold text-[#111] mb-[6px] leading-[1.4]">
                                        {p.title}
                                    </h3>
                                    <div className="flex items-center gap-[4px] text-[12px] text-[#888]">
                                        <svg
                                            className="text-[#fabb05]"
                                            width="11"
                                            height="11"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                        >
                                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                        </svg>
                                        <b className="text-[#222]">{p.rating}</b> ({p.reviews})
                                    </div>
                                </div>
                            </Link>
                        ))}
                </div>
            </div>
        </main>
    );
}
