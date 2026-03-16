import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Categories from '@/components/Categories';
import ProfessionalsGrid from '@/components/ProfessionalsGrid';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <Hero />
            <Categories />
            <ProfessionalsGrid />
            <Testimonials />
            <Footer />
        </div>
    );
}
