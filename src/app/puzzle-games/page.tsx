import GameCard from '@/components/game-card';

const puzzleGames = [
  {
    title: 'Block Stacker',
    description: 'A challenging puzzle game that will test your logic.',
    imageSrc: 'https://placehold.co/400x300.png',
    aiHint: 'colorful blocks',
    href: '#',
  },
  {
    title: 'Sudoku',
    description: 'The classic number puzzle for all skill levels.',
    imageSrc: 'https://placehold.co/400x300.png',
    aiHint: 'sudoku board',
    href: '#',
  },
];

export default function PuzzleGamesPage() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-headline font-bold tracking-tight text-foreground sm:text-4xl">
            🧠 Puzzle & Strategy Games
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            Challenge your mind with these brain-teasing games.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {puzzleGames.map((game) => (
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
