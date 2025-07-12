import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Granny Creepy House Unblocked – Horror Game',
  description: 'Play Granny Creepy House Unblocked for free! Explore a terrifying house full of secrets and escape before it’s too late.',
};

export default function GrannyCreepyHouseUnblockedPage() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-headline font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Granny Creepy House Unblocked
          </h1>
        </div>
        <div className="mt-12 text-lg leading-8 text-muted-foreground space-y-6">
            <p>
                Granny Creepy House Unblocked game is free!
            </p>
            <p>
                Enjoy exploring a terrifying old house full of creepy secrets, hidden keys, and twisted rooms. Your mission is to survive and escape before it's too late!
            </p>
        </div>
      </div>
    </section>
  );
}
