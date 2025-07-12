import HeroSection from '@/components/features/hero-section';
import GameCategories from '@/components/features/game-categories';
import TopPicks from '@/components/features/top-picks';
import WhyChooseUs from '@/components/features/why-choose-us';
import WelcomeSection from '@/components/features/welcome-section';

export default function Home() {
  return (
    <>
      <HeroSection />
      <GameCategories />
      <TopPicks />
      <WhyChooseUs />
      <WelcomeSection />
    </>
  );
}
