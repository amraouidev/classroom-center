import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Tiny Fishing – Play Unblocked Fishing Game Online',
  description: 'Play Tiny Fishing online for free! This unblocked fishing game works on school Chromebooks, PCs, and mobile. No download or VPN needed.',
};

export default function GamePage() {
  return (
    <section className="py-12 sm:py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-headline font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Tiny Fishing
          </h1>
        </div>
        <div className="mt-10 text-lg leading-8 text-muted-foreground space-y-6">
          <p>
            Tiny Fishing is one of the best free fishing games available online. This game is optimized for smooth performance on school networks and works directly from your browser. No download, no sign-in—just fun!
          </p>
          <div className="text-center mt-8">
            <Button asChild>
                <Link href="/new-games">More New Games</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
