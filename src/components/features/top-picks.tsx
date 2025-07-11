import GameCard from '@/components/game-card';

const topPicks = [
  {
    title: 'Pixel Racer',
    description: 'Weave through traffic in this high-speed retro racer.',
    imageSrc: 'https://placehold.co/400x300.png',
    aiHint: 'pixel art race',
    href: '#',
  },
  {
    title: 'Block Stacker',
    description: 'A challenging puzzle game that will test your logic.',
    imageSrc: 'https://placehold.co/400x300.png',
    aiHint: 'colorful blocks',
    href: '#',
  },
  {
    title: 'Galactic Battle',
    description: 'Fight for survival in this epic space shooter.',
    imageSrc: 'https://placehold.co/400x300.png',
    aiHint: 'space battle',
    href: '#',
  },
  {
    title: 'Soccer Stars',
    description: 'Score amazing goals and become a soccer legend.',
    imageSrc: 'https://placehold.co/400x300.png',
    aiHint: 'soccer game',
    href: '#',
  },
  {
    title: 'Dungeon Quest',
    description: 'Explore dark dungeons and find legendary treasures.',
    imageSrc: 'https://placehold.co/400x300.png',
    aiHint: 'fantasy dungeon',
    href: '#',
  },
    {
    title: 'Hoops Master',
    description: 'Show off your skills and make epic shots.',
    imageSrc: 'https://placehold.co/400x300.png',
    aiHint: 'basketball court',
    href: '#',
  },
];

export default function TopPicks() {
  return (
    <section id="top-picks" className="bg-card py-16 sm:py-20 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-headline font-bold tracking-tight text-foreground sm:text-4xl">
            📈 Top Picks
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            Check out the games that everyone is playing right now.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {topPicks.map((game) => (
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
