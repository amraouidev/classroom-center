import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Eggy Car – Unblocked Driving Game',
  description: 'Play Eggy Car online for free. Drive carefully and protect the egg across hilly terrain in this fun, unblocked driving game!',
  keywords: 'Eggy Car, driving game, unblocked games, free online games, car balance, egg driving',
};

export default function GamePage() {
  return (
    <section className="py-12 sm:py-16 text-center">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-headline font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl mb-10">
            Eggy Car
        </h1>
        <div className="game-container flex justify-center">
          <iframe
            src="https://html5.gamedistribution.com/2efcf1db5ef44d67933b2220c4f5d02a/"
            width="960"
            height="600"
            frameBorder="0"
            scrolling="no"
            allowFullScreen
            title="Eggy Car"
          ></iframe>
        </div>

        <div className="mt-8 text-center">
          <div className="adsense-container h-24 bg-muted/50 flex items-center justify-center rounded-md">
            <span className="text-muted-foreground">AdSense Placeholder</span>
          </div>
        </div>

        <div className="mt-10 text-lg leading-8 text-muted-foreground space-y-6 max-w-4xl mx-auto">
          <p>
            <strong>Eggy Car</strong> is an addictive hill-climb driving game where your goal is to keep an egg safe while navigating bumpy roads. Use your skills to balance speed and stability. Play now for free on any device — no download needed!
          </p>
           <div className="text-center mt-8">
            <Button asChild>
                <Link href="/driving-games-unblocked">More Driving Games</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
