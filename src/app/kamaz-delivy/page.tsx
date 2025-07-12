import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Kamaz Delivy – Unblocked Truck Delivery Game',
  description: 'Play Kamaz Delivy unblocked for free. Drive a Kamaz truck and deliver goods.',
};

export default function GamePage() {
  return (
    <section className="py-12 sm:py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-headline font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Kamaz Delivy
          </h1>
        </div>
        <div className="mt-10 text-lg leading-8 text-muted-foreground space-y-6">
          <p>
            Become a delivery driver in Kamaz Delivy. Drive a powerful Kamaz truck and transport goods across challenging terrains. Play unblocked.
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
