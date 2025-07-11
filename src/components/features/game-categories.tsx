import { Gamepad2 } from 'lucide-react';
import GameCard from '@/components/game-card';

const categories = [
  {
    title: 'Puzzle & Logic',
    imageSrc: 'https://placehold.co/400x300.png',
    aiHint: 'abstract puzzle',
    href: '/puzzle-games',
  },
  {
    title: 'Action & Fighting',
    imageSrc: 'https://placehold.co/400x300.png',
    aiHint: 'dynamic fight',
    href: '/action-games',
  },
  {
    title: 'Racing & Driving',
    id: 'driving-games',
    imageSrc: 'https://placehold.co/400x300.png',
    aiHint: 'fast car',
    href: '/driving-games',
  },
  {
    title: 'Sports & Basketball',
    imageSrc: 'https://placehold.co/400x300.png',
    aiHint: 'basketball action',
    href: '/sports-games',
  },
  {
    title: 'Adventure & RPG',
    imageSrc: 'https://placehold.co/400x300.png',
    aiHint: 'fantasy landscape',
    href: '/adventure-games',
  },
];

export default function GameCategories() {
  return (
    <section id="categories" className="py-16 sm:py-20 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-headline font-bold tracking-tight text-foreground sm:text-4xl">
            🎮 Game Categories
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            Find your new favorite game from our diverse collection.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {categories.map((category) => (
            <div id={category.id} key={category.title} className="scroll-mt-20">
              <GameCard
                imageSrc={category.imageSrc}
                title={category.title}
                buttonText="Explore"
                href={category.href}
                aiHint={category.aiHint}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
