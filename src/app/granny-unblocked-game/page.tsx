import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Granny Unblocked – Play Free Online',
  description: 'Play the original Granny Unblocked online for free. Escape the haunted house, solve puzzles, and survive the nightmare—no downloads required.',
};

export default function GrannyUnblockedGamePage() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-headline font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Granny Unblocked
          </h1>
        </div>
        <div className="mt-12 text-lg leading-8 text-muted-foreground space-y-6">
            <p>
                Granny Unblocked is an engaging and suspenseful online game that challenges your survival and problem-solving skills. Trapped in a haunted house, your mission is to escape without being caught by Granny, a terrifying character who will do everything to stop you.
            </p>
            <p>
                This unblocked version allows you to play anywhere, whether at school, home, or work, without restrictions. With its thrilling gameplay, spine-chilling atmosphere, and clever puzzles, Granny Unblocked keeps you on edge every moment.
            </p>
            <p>
                Perfect for fans of horror and escape room games, Granny Unblocked provides hours of entertainment while improving your critical thinking skills.
            </p>
            <p className="font-bold text-accent">
                Start your escape adventure now and play Granny Unblocked for free!
            </p>
        </div>
      </div>
    </section>
  );
}
