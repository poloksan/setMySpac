import React from 'react';

import husbandBirthday from '@/assets/images/husband-birthday.png';
import wifeBirthday from '@/assets/images/wife-birthday.png';
import kidsBirthday from '@/assets/images/kids-birthday.png';
import Image from 'next/image';

const categories = [
    {
        title: "Husband's Birthday Party",
        image: husbandBirthday,
        gradient: 'linear-gradient(to top, rgba(121, 169, 219, 0.9), rgba(121, 169, 219, 0.5))',
    },
    {
        title: "Wife's Birthday Party",
        image: wifeBirthday,
        gradient: 'linear-gradient(to top, rgba(197, 83, 151, 0.9), rgba(197, 83, 151, 0.5))',
    },
    {
        title: "Kids' Birthday Party",
        image: kidsBirthday,
        gradient: 'linear-gradient(to top, rgba(114, 184, 137, 0.9), rgba(114, 184, 137, 0.5))',
    },
];

const Categories = () => {
    return (
        <section className="relative z-10 bg-transparent px-[20px] md:px-[40px] pb-[40px] mt-[20px] md:-mt-[60px]">
            <div className="max-w-[1440px] mx-auto lg:px-[32px]">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-[15px] md:gap-[30px]">
                    {categories.map((cat, idx) => (
                        <div
                            key={idx}
                            className="w-full max-w-[443px] relative rounded-[12px] overflow-hidden h-[120px] md:h-[142px] cursor-pointer shadow-[0_10px_20px_rgba(0,0,0,0.08)] transition-transform duration-300 hover:-translate-y-[5px] relative"
                        >
                            {/* ✅ backgroundImage এর বদলে img tag */}
                            <Image
                                src={cat.image}
                                alt={cat.title}
                                className="absolute inset-0 w-full h-full object-cover object-center z-[1]"
                            />
                            <div
                                className="absolute inset-0 w-full h-full z-[2] mix-blend-multiply opacity-85"
                                style={{ background: cat.gradient }}
                            />
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[3] flex justify-between gap-10 items-center">
                                <h3 className="shrink-0 text-white text-[18px] md:text-[20px] font-semibold drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
                                    {cat.title}
                                </h3>
                                <span className="text-white text-[24px] font-light">→</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Categories;
