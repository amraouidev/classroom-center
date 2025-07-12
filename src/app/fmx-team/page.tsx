import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'FMX Team – Unblocked Freestyle Motocross',
  description: 'Play FMX Team unblocked for free. Join a freestyle motocross team and perform amazing stunts.',
};

export default function GamePage() {
  return (
    <section className="py-12 sm:py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-headline font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            FMX Team
          </h1>
        </div>
        <div className="mt-10 text-lg leading-8 text-muted-foreground space-y-6">
          <p>
            Join the FMX Team and show off your freestyle motocross skills. Perform incredible stunts and impress the judges. Play unblocked.
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
