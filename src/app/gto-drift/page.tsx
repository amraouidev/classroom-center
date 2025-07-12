import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'GTO Drift – Unblocked Classic Car Drifting',
  description: 'Play GTO Drift unblocked for free. Drift a classic GTO and master the corners.',
};

export default function GamePage() {
  return (
    <section className="py-12 sm:py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-headline font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            GTO Drift
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
            Get behind the wheel of a classic GTO and drift your way to victory. A fun and stylish unblocked drifting game.
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
