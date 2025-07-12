import GameCard from '@/components/game-card';

const newGames = [
  {
    title: 'Granny Unblocked',
    description: 'The ultimate hub for all versions of the terrifying escape-horror game.',
    imageSrc: 'https://placehold.co/400x300.png',
    aiHint: 'haunted house',
    href: '/granny-unblocked',
  },
  {
    title: 'Granny',
    description: 'Escape the haunted house without getting caught by the terrifying Granny.',
    imageSrc: 'https://placehold.co/400x300.png',
    aiHint: 'scary granny',
    href: '/granny-unblocked-game',
  },
  {
    title: 'Granny 2',
    description: 'The sequel to the suspenseful survival horror game.',
    imageSrc: 'https://placehold.co/400x300.png',
    aiHint: 'dark room',
    href: '/granny-2-unblocked',
  },
  {
    title: 'Granny Creepy House',
    description: 'Explore a terrifying old house full of creepy secrets and twisted rooms.',
    imageSrc: 'https://placehold.co/400x300.png',
    aiHint: 'creepy house',
    href: '/granny-creepy-house-unblocked',
  },
    {
    title: 'Granny Prison Escape',
    description: 'A prison escape version of the thrilling Granny game.',
    imageSrc: 'https://placehold.co/400x300.png',
    aiHint: 'creepy prison',
    href: '/granny-prison-escape-unblocked',
  },
];


export default function NewGamesPage() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-headline font-bold tracking-tight text-foreground sm:text-4xl">
            🔥 New Games
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            Check out the latest additions to our collection.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {newGames.map((game) => (
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