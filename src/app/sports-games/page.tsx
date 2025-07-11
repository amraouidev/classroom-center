import GameCard from '@/components/game-card';

const sportsGames = [
  {
    title: 'Soccer Stars',
    description: 'Score amazing goals and become a soccer legend.',
    imageSrc: 'https://placehold.co/400x300.png',
    aiHint: 'soccer game',
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

export default function SportsGamesPage() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-headline font-bold tracking-tight text-foreground sm:text-4xl">
            🏀 Sports & Basketball Games
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            Compete for glory in your favorite sports.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {sportsGames.map((game) => (
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
