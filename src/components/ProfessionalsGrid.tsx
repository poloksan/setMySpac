    'use client';
    import React, { useState } from 'react';

    const filters = [
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

    import birthdayDecor1 from '@/assets/images/birthday-decoration-one.png';
    import birthdayDecor2 from '@/assets/images/birthday-decoration-two.png';
    import birthdayDecor3 from '@/assets/images/birthday-decoration-three.png';
    import birthdayDecor4 from '@/assets/images/birthday-decoration-four.png';
    import birthdayDecor5 from '@/assets/images/birthday-decoration-five.png';
    import birthdayDecor6 from '@/assets/images/birthday-decoration-six.png';
    import Image from 'next/image';
    import Link from 'next/link';

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
            isPrimary: false,
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
            isPrimary: false,
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
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...',
            isPrimary: false,
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
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...',
            isPrimary: false,
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
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...',
            isPrimary: false,
        },
    ];

    const ProfessionalsGrid = () => {
        const [activeFilter, setActiveFilter] = useState('Birthday Surprises');

        return (
            <section className="flex flex-col md:flex-row gap-[24px] md:gap-[32px] w-full max-w-[1440px] mx-auto p-[20px] lg:p-[40px] xl:p-[40px_60px_80px] box-border">
                {/* Sidebar Filters */}
                <aside className="w-full md:w-[200px] lg:w-[240px] shrink-0 mt-0 md:mt-[56px]">
                    <div className="flex flex-row md:flex-col overflow-x-auto md:overflow-x-visible pb-[10px] md:pb-0 gap-[12px] scrollbar-hide">
                        {filters.map((filter, idx) => {
                            const isActive = activeFilter === filter;
                            return (
                                <button
                                    key={idx}
                                    className={`flex-none md:flex-auto flex justify-between items-center text-left py-[10px] px-[16px] rounded-[6px] text-[#8a48c9] hover:text-white hover:bg-[#8a48c9] border border-[#8a48c9] text-[14px] cursor-pointer transition-colors whitespace-nowrap 
                                        `}
                                    onClick={() => setActiveFilter(filter)}
                                >
                                    <span className="whitespace-nowrap overflow-hidden text-ellipsis">
                                        {filter}
                                    </span>
                                </button>
                            );
                        })}
                        <button className="w-full max-w-[94px] border border-[#8a48c9] flex-none md:flex-auto flex justify-center items-center text-center py-[10px] px-[16px] rounded-[6px] text-[14px] cursor-pointer transition-colors whitespace-nowrap bg-[#f3e8fc] text-[var(--color-secondary-purple)] font-semibold hover:bg-[#ebdafc]">
                            More +
                        </button>
                    </div>
                </aside>

                {/* Main Grid Content */}
                <div className="flex-1 min-w-0">
                    <div className="flex flex-col flex-wrap lg:flex-nowrap md:flex-row justify-between items-start md:items-center gap-[16px] md:gap-0 mb-[24px]">
                        <h2 className="text-[20px] font-bold text-[#222]">
                            Top professionals for Birthday Decorations
                        </h2>
                        <button className="bg-white border border-[#000] py-[8px] px-[14px] rounded-[6px] text-[13px] text-[var(--color-primary-pink)] font-medium flex items-center gap-[8px] cursor-pointer transition-colors">
                            Sort
                            <svg
                                width="14"
                                height="14"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <line x1="21" y1="10" x2="3" y2="10"></line>
                                <line x1="21" y1="6" x2="3" y2="6"></line>
                                <line x1="21" y1="14" x2="3" y2="14"></line>
                                <line x1="21" y1="18" x2="3" y2="18"></line>
                            </svg>
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
                        {professionals.map((prof, idx) => (
                            <div
                                key={idx}
                                className="bg-white hover:bg-[#F1D2D9] rounded-[8px] overflow-hidden border border-[#f0f0f0] flex flex-col transition-all duration-200  hover:shadow-[0_10px_25px_rgba(0,0,0,0.06)] group/card"
                            >
                                <div className="relative h-[338px]">
                                    <Image
                                        src={prof.image}
                                        alt={prof.title}
                                        className="w-full h-full object-cover object-center"
                                    />

                                    <div className="absolute top-[12px] left-[12px] flex gap-[6px]">
                                        {prof.badges.map((b) => (
                                            <span
                                                key={b}
                                                className="text-[9px] font-bold py-[4px] px-[8px] rounded-[4px] bg-[var(--color-primary-pink)] text-white"
                                            >
                                                {b}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="absolute top-[12px] right-[12px] bg-white w-[30px] h-[30px] rounded-full flex justify-center items-center shadow-[0_2px_8px_rgba(0,0,0,0.1)] cursor-pointer transition-transform duration-200">
                                        <svg
                                            width="16"
                                            height="16"
                                            viewBox="0 0 24 24"
                                            fill="white"
                                            stroke="var(--color-primary-pink)"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                                        </svg>
                                    </div>

                                    <div className="absolute bottom-0 right-0 bg-[var(--color-secondary-purple)] text-white py-[6px] px-[12px] rounded-tl-[8px] text-[14px] font-bold z-[2]">
                                        Rs. {prof.price}
                                    </div>
                                </div>

                                <div className="p-[16px] flex flex-col flex-1">
                                    <h3 className="text-[15px] font-bold text-[#111] mb-[12px] leading-[1.3]">
                                        {prof.title}
                                    </h3>

                                    <div className="flex items-center gap-[8px] mb-[12px]">
                                        <div className="w-[24px] h-[24px] bg-[#eee] rounded-full bg-[url('https://randomuser.me/api/portraits/men/32.jpg')] bg-cover"></div>
                                        <span className="text-[13px] text-[#555] font-medium">
                                            {prof.vendor}
                                        </span>
                                    </div>

                                    <div className="flex items-center gap-[16px] mb-[16px] whitespace-nowrap">
                                        <div className="flex items-center gap-[4px]">
                                            <svg
                                                className="text-[#fabb05]"
                                                width="12"
                                                height="12"
                                                viewBox="0 0 24 24"
                                                fill="currentColor"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                            </svg>
                                            <span className="text-[12px] text-[#222]">
                                                <b>{prof.rating}</b>{' '}
                                                <span className="text-[#888]">({prof.reviews})</span>
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-[4px]">
                                            <svg
                                                className="text-[var(--color-primary-pink)]"
                                                width="12"
                                                height="12"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                                <circle cx="12" cy="10" r="3"></circle>
                                            </svg>
                                            <span className="text-[12px] text-[#555]">
                                                {prof.location}
                                            </span>
                                        </div>
                                    </div>

                                    {prof.description && (
                                        <p className="text-[12px] text-[#777] leading-[1.5] mb-[20px] flex-1">
                                            {prof.description}
                                        </p>
                                    )}
                                    <Link href={`/birthday/${prof.slug}`}>
                                        <button
                                            className={`w-full p-[12px] rounded-[6px] text-[13px] font-bold flex justify-center items-center gap-[6px] text-center transition-all duration-200 mt-auto cursor-pointer group/btn border border-[var(--color-primary-pink)] hover:bg-[var(--color-primary-pink)] hover:text-white
                                    
                                            `}
                                        >
                                            CONTACT NOW
                                            {prof.description && (
                                                <svg
                                                    className="opacity-0 -translate-x-[5px] transition-all duration-200 group-hover/btn:opacity-100 group-hover/btn:translate-x-0"
                                                    width="14"
                                                    height="14"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                >
                                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                                    <polyline points="12 5 19 12 12 19"></polyline>
                                                </svg>
                                            )}
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    };

    export default ProfessionalsGrid;
