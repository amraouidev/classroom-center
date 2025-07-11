'use client';
import { useState } from 'react';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import HeroSection from '@/components/features/hero-section';
import GameCategories from '@/components/features/game-categories';
import TopPicks from '@/components/features/top-picks';
import WhyChooseUs from '@/components/features/why-choose-us';
import Sidebar from '@/components/layout/sidebar';
import BookmarkButton from '@/components/bookmark-button';

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
      <div className="flex flex-1 flex-col">
        <Header onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
        <main className="flex-grow">
          <HeroSection />
          <GameCategories />
          <TopPicks />
          <WhyChooseUs />
        </main>
        <Footer />
      </div>
      <BookmarkButton />
    </div>
  );
}
