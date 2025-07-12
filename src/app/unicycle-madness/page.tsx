import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Unicycle Madness – Unblocked Skill Game',
  description: 'Play Unicycle Madness unblocked for free. A challenging and fun unicycle game.',
};

export default function GamePage() {
  return (
    <section className="py-12 sm:py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-headline font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Unicycle Madness
          </h1>
        </div>

        <div className="mt-10 rounded-lg border bg-card text-card-foreground shadow-sm">
          <div className="flex aspect-video items-center justify-center">
            <p className="text-muted-foreground">Game embed will be here</p>
          </div>
        </div>
        
        <div className="mt-8 text-center">
            <div className="adsense-container h-24 bg-muted/50 flex items-center justify-center rounded-md">
                <span className="text-muted-foreground">AdSense Placeholder</span>
            </div>
        </div>

        <div className="mt-10 text-lg leading-8 text-muted-foreground space-y-6">
          <p>
            Test your balancing skills in Unicycle Madness. A very challenging but rewarding unblocked game.
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
