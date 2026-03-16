'use client';
import React from 'react';
import Link from 'next/link';
type NavLink = {
    href: string;
    label: string;
    active?: boolean;
};
const navLinks: NavLink[] = [
    { href: '/', label: 'Home', active: true },
    { href: '/space', label: 'Spaces' },
    { href: '/celebrations', label: 'Celebrations' },
    { href: '/professionals', label: 'Professionals' },
    { href: '/vendors', label: 'Vendors' },
    { href: '/blog', label: 'Blog' },
];

const Header = () => {
    return (
        <header className="shadow-[0_2px_4px_rgba(0,0,0,0.05)] sticky top-0 z-100 w-full ">
            <div className="w-full max-w-360 mx-auto px-3.75 py-3 sm:px-[32px] sm:py-3.75 flex justify-between items-center box-border flex-wrap sm:flex-nowrap gap-2.5 sm:gap-0">
                <Link
                    href={'/'}
                    className="leading-none lg:text-[20px] font-normal shrink-0 select-none cursor-pointer"
                >
                    <span>SET</span>
                    <span className="text-primary-pink font-bold hover:text-primary-pink-hover">
                        MySpace
                    </span>
                </Link>
                <nav className="hidden lg:flex gap-[30px]">
                    {navLinks.map((link) => (
                        <Link
                            key={link.label}
                            href={link.href}
                            className={`text-[14px] font-medium transition-all hover:text-primary-pink ${
                                link.active ? 'text-primary-pink font-semibold' : ''
                            }`}
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>
                <div className="flex items-center gap-3 sm:gap-6">
                    <div className="hidden lg:flex items-center gap-[8px] text-[12px] font-semibold text-[#333] cursor-pointer hover:text-primary-pink group">
                        <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="var(--color-primary-pink)"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                            <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                        <span className="group-hover:text-[var(--color-primary-pink)] transition-colors">
                            BECOME A PROFESSIONAL
                        </span>
                    </div>
                    <button className="bg-foreground text-custom-white py-[6px] px-[14px] sm:py-[8px] sm:px-[24px] rounded-[4px] text-[13px] sm:text-[14px] font-medium transition-colors hover:bg-[#555] shrink-0 min-w-0">
                        Login
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
