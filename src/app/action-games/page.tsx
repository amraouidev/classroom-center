import GameCard from '@/components/game-card';

const actionGames = [
  {
    title: 'Galactic Battle',
    description: 'Fight for survival in this epic space shooter.',
    imageSrc: 'https://placehold.co/400x300.png',
    aiHint: 'space battle',
    href: '#',
  },
  {
    title: 'Stickman Fight',
    description: 'Engage in fast-paced stickman combat.',
    imageSrc: 'https://placehold.co/400x300.png',
    aiHint: 'stickman fight',
    href: '#',
  },
];

export default function ActionGamesPage() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-headline font-bold tracking-tight text-foreground sm:text-4xl">
            🎮 Action Games
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            Get ready for intense battles and thrilling adventures.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {actionGames.map((game) => (
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
