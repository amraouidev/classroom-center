import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import HeroSection from '@/components/features/hero-section';
import GameCategories from '@/components/features/game-categories';
import TopPicks from '@/components/features/top-picks';
import WhyChooseUs from '@/components/features/why-choose-us';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <GameCategories />
        <TopPicks />
        <WhyChooseUs />
      </main>
      <Footer />
    </div>
  );
}
