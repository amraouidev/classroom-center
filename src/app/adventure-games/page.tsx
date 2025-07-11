import GameCard from '@/components/game-card';

const adventureGames = [
  {
    title: 'Dungeon Quest',
    description: 'Explore dark dungeons and find legendary treasures.',
    imageSrc: 'https://placehold.co/400x300.png',
    aiHint: 'fantasy dungeon',
    href: '#',
  },
  {
    title: 'Fantasy Explorer',
    description: 'Embark on an epic journey in a magical world.',
    imageSrc: 'https://placehold.co/400x300.png',
    aiHint: 'fantasy world',
    href: '#',
  },
];

export default function AdventureGamesPage() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-headline font-bold tracking-tight text-foreground sm:text-4xl">
            🧭 Adventure & RPG Games
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            Embark on epic quests and explore vast worlds.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {adventureGames.map((game) => (
            <GameCard
              key={game.title}
              imageSrc={game.imageSrc}
              title={game.title}
              description={game.description}
              buttonText="Play Now"
              href={game.href}
              aiHint={game.aiHint}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
