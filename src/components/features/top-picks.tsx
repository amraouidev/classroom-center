import GameCard from '@/components/game-card';

const topPicks = [
  {
    title: 'Granny Unblocked',
    description: 'The ultimate hub for all versions of the terrifying escape-horror game.',
    imageSrc: 'https://placehold.co/400x300.png',
    aiHint: 'haunted house',
    href: '/granny-unblocked',
  },
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
    title: 'Granny Creepy House',
    description: 'Explore a terrifying old house full of creepy secrets and twisted rooms.',
    imageSrc: 'https://placehold.co/400x300.png',
    aiHint: 'creepy house',
    href: '/granny-creepy-house-unblocked',
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