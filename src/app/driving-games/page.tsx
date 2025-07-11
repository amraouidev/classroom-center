import GameCard from '@/components/game-card';

const drivingGames = [
  {
    title: 'Pixel Racer',
    description: 'Weave through traffic in this high-speed retro racer.',
    imageSrc: 'https://placehold.co/400x300.png',
    aiHint: 'pixel art race',
    href: '#',
  },
  {
    title: 'Moto X3M',
    description: 'Perform crazy stunts in this exciting bike racing game.',
    imageSrc: 'https://placehold.co/400x300.png',
    aiHint: 'motocross stunt',
    href: '#',
  },
   {
    title: 'Drift Hunters',
    description: 'Master the art of drifting in a variety of awesome cars.',
    imageSrc: 'https://placehold.co/400x300.png',
    aiHint: 'drifting car',
    href: '#',
  },
];

export default function DrivingGamesPage() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-headline font-bold tracking-tight text-foreground sm:text-4xl">
            🚗 Driving Games
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            Get behind the wheel and start your engine!
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {drivingGames.map((game) => (
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
