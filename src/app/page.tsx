import HeroSection from '@/components/features/hero-section';
import GameCategories from '@/components/features/game-categories';
import TopPicks from '@/components/features/top-picks';
import WhyChooseUs from '@/components/features/why-choose-us';
import Footer from '@/components/layout/footer';

export default function Home() {
  return (
    <>
      <HeroSection />
      <GameCategories />
      <TopPicks />
      <WhyChooseUs />
      <Footer />
    </>
  );
}
