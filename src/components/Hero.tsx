'use client';
import { useState } from 'react';
import heroBg from '@/assets/images/hero-bg.png';

const Hero = () => {
    const [activeTab, setActiveTab] = useState('Hire Professionals');

    return (
        <section
            style={{ backgroundImage: `url(${heroBg.src})` }}
            className="relative bg-cover bg-center flex items-center min-h-100 md:min-h-137.5 h-auto md:h-[65vh]"
        >
            <div className="w-full max-w-360 mx-auto relative px-5 py-15 md:px-10 md:py-0 lg:px-[32px] z-2">
                <h1 className="text-[26px] md:text-[32px] lg:text-[42px] font-light text-[#333] mb-[24px] lg:mb-[40px] leading-[1.2]">
                    We set up your space to
                    <br />
                    celebrate your <span className="font-bold text-[##1E1E1E]">Birthday Party</span>
                </h1>

                <div className="flex flex-col w-full">
                    <div className="flex gap-3.75 lg:gap-7.5 overflow-x-auto md:overflow-x-visible whitespace-nowrap pb-0 md:pb-0 mb-2.5 md:mb-0 scrollbar-hide">
                        {['Browse gallery', 'Find Inspiration', 'Hire Professionals'].map((tab) => (
                            <button
                                key={tab}
                                className={`bg-transparent text-[13px] lg:text-[15px] font-semibold flex items-center gap-2 pb-2 lg:pb-3 border-b-[3px] transition-colors ${activeTab === tab ? 'text-primary-pink border-primary-pink' : 'text-[#555] border-transparent'}`}
                                onClick={() => setActiveTab(tab)}
                            >
                                {tab === 'Browse gallery' && (
                                    <svg
                                        width="18"
                                        height="18"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <rect
                                            x="3"
                                            y="3"
                                            width="18"
                                            height="18"
                                            rx="2"
                                            ry="2"
                                        ></rect>
                                        <circle cx="8.5" cy="8.5" r="1.5"></circle>
                                        <polyline points="21 15 16 10 5 21"></polyline>
                                    </svg>
                                )}
                                {tab === 'Find Inspiration' && (
                                    <svg
                                        width="18"
                                        height="18"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M9 18h6"></path>
                                        <path d="M10 22h4"></path>
                                        <path d="M12 2a4 4 0 0 0-4 4c0 2 1.5 3 2 5v2a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2v-2c.5-2 2-3 2-5a4 4 0 0 0-4-4z"></path>
                                    </svg>
                                )}
                                {tab === 'Hire Professionals' && (
                                    <svg
                                        width="18"
                                        height="18"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                        <circle cx="9" cy="7" r="4"></circle>
                                        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                                    </svg>
                                )}
                                {tab}
                            </button>
                        ))}
                    </div>

                    <div className="max-w-[566px] flex flex-col md:flex-row bg-white rounded-[4px] p-[10px] md:p-[8px_16px] items-start md:items-center shadow-[0_4px_20px_rgba(0,0,0,0.06)] mt-[5px] mb-[15px]">
                        <div className="flex-1 flex items-center justify-between">
                            <input
                                type="text"
                                placeholder="Search Service, Professional etc."
                                className="border-none outline-none w-full py-[10px] px-0 text-[13px] bg-transparent"
                            />
                            <svg
                                className="text-[#777] ml-[10px] shrink-0"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <circle cx="11" cy="11" r="8"></circle>
                                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                            </svg>
                        </div>
                        <div className="w-full md:w-[1px] h-[1px] md:h-[30px] bg-[#ddd] my-[10px] md:my-0 md:mx-[20px]"></div>
                        <div className="flex-1 flex items-center justify-between">
                            <input
                                type="text"
                                placeholder="Enter Location"
                                className="border-none outline-none w-full py-[10px] px-0 text-[13px] bg-transparent"
                            />
                            <svg
                                className="text-[#777] ml-[10px] shrink-0"
                                width="20"
                                height="20"
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
                        </div>
                    </div>

                    <button className="w-full md:w-auto text-center bg-[var(--color-primary-pink)] text-white rounded-[4px] py-[12px] px-[24px] text-[14px] font-semibold md:self-start transition-colors hover:bg-[var(--color-primary-pink-hover)]">
                        Search Professionals
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
