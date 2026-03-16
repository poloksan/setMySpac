'use client';
import React, { useState, useRef, useEffect } from 'react';

const testimonials = [
    {
        text: 'Amet amet eget scelerisque tellus sit neque faucibus non eleifend. Integer eu praesent at a. Ornare arcu gravida natoque erat et cursus tortor consequat at. Vulputate gravida sociis enim nullam ultricies habitant malesuada lorem ac. Tincidunt urna dui pellentesque sagittis.',
        author: 'Judith Black',
        title: 'CEO of Tuple',
        image: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
    {
        text: 'Excepteur veniam labore ullamco eiusmod. Pariatur consequat proident duis dolore nulla veniam reprehenderit nisi officia voluptate incididunt exercitation exercitation elit. Nostrud veniam sint dolor nisi ullamco.',
        author: 'Joseph Rodriguez',
        title: 'CEO of Reform',
        image: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
    {
        text: 'Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean id ultrices tellus. Nullam at rutrum ipsum. Sed tristique aliquet sem nec dictum. Vestibulum suscipit eu dolor et auctor.',
        author: 'Eleanor Pena',
        title: 'Founder',
        image: 'https://randomuser.me/api/portraits/women/68.jpg',
    },
    {
        text: 'Mauris non tempor ante. Nunc eleifend vel risus ac malesuada. Aliquam id sagittis velit. In hac habitasse platea dictumst. Vestibulum rhoncus neque quis pretium ultrices. Vestibulum tristique sapien in tristique iaculis.',
        author: 'Cameron Williamson',
        title: 'Designer',
        image: 'https://randomuser.me/api/portraits/men/15.jpg',
    },
];

const Testimonials = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const scrollRef = useRef<HTMLDivElement>(null);
    const scrollTracker = useRef(false);

    // Auto-slide effect
    useEffect(() => {
        const timer = setInterval(() => {
            setActiveIndex((prev) => {
                const totalSlides = testimonials.length;
                // On desktop (where we might show 2 items) we can still slide to index 0,1,2,3
                const next = (prev + 1) % totalSlides;

                if (scrollRef.current) {
                    const child = scrollRef.current.children[next] as HTMLElement;
                    if (child) {
                        scrollTracker.current = true;
                        scrollRef.current.scrollTo({
                            left: child.offsetLeft - scrollRef.current.offsetLeft,
                            behavior: 'smooth',
                        });
                        setTimeout(() => {
                            scrollTracker.current = false;
                        }, 600);
                    }
                }
                return next;
            });
        }, 5000); // changes every 5 seconds

        return () => clearInterval(timer);
    }, []);

    const scrollToDots = (idx: number) => {
        setActiveIndex(idx);
        if (scrollRef.current) {
            const child = scrollRef.current.children[idx] as HTMLElement;
            if (child) {
                scrollTracker.current = true;
                scrollRef.current.scrollTo({
                    left: child.offsetLeft - scrollRef.current.offsetLeft,
                    behavior: 'smooth',
                });
                setTimeout(() => {
                    scrollTracker.current = false;
                }, 600);
            }
        }
    };

    const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
        if (scrollRef.current && !scrollTracker.current) {
            const scrollLeft = scrollRef.current.scrollLeft;
            const childWidth = (scrollRef.current.children[0] as HTMLElement).offsetWidth || 1;
            const gaps = 30; // standard gap width from our layout

            const newIndex = Math.round(scrollLeft / (childWidth + gaps));
            if (newIndex >= 0 && newIndex < testimonials.length && newIndex !== activeIndex) {
                setActiveIndex(newIndex);
            }
        }
    };

    return (
        <section className="py-[60px] px-[20px] pb-[80px] bg-[var(--color-bg-light)] text-center">
            <h2 className="text-[24px] md:text-[28px] font-bold text-[#222] mb-[40px]">
                What Our Customers Are Saying
            </h2>

            <div className="max-w-[1200px] mx-auto overflow-hidden">
                <div
                    ref={scrollRef}
                    onScroll={handleScroll}
                    className="flex overflow-x-auto snap-x snap-mandatory gap-[30px] mb-[40px] pb-[20px] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']"
                >
                    {testimonials.map((t, idx) => (
                        <div
                            key={idx}
                            className="snap-start w-full md:w-[calc(50%-15px)] shrink-0 bg-white rounded-[12px] p-[30px_20px] md:p-[40px] text-left shadow-[0_4px_15px_rgba(0,0,0,0.03)] flex flex-col justify-between cursor-grab active:cursor-grabbing"
                        >
                            <p className="text-[15px] text-[#555] leading-[1.6] mb-[30px]">
                                {t.text}
                            </p>

                            <div className="flex items-center gap-[16px]">
                                <div
                                    className="w-[50px] h-[50px] rounded-full bg-cover bg-center shrink-0"
                                    style={{ backgroundImage: `url(${t.image})` }}
                                />
                                <div>
                                    <h4 className="text-[14px] font-bold text-primary-pink mb-[2px]">
                                        {t.author}
                                    </h4>
                                    <span className="text-[12px] text-[#555]">{t.title}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center items-center gap-[8px]">
                    {testimonials.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => scrollToDots(idx)}
                            className={`rounded-full cursor-pointer transition-all duration-300 p-0 ${activeIndex === idx ? 'w-[10px] h-[10px] bg-primary-pink border-none' : 'w-2 h-2 bg-transparent border border-[#aaa]'}`}
                            aria-label={`Go to slide ${idx + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
