import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Granny Online – Play the Horror Escape Game Free',
  description: 'Play Granny Online instantly and for free in your browser. No downloads, no restrictions—escape Granny’s creepy house now!',
};

const relatedGames = [
  {
    title: 'Granny Unblocked',
    href: '/granny-unblocked',
    description: 'The ultimate hub for all Granny games.',
  },
  {
    title: 'Granny 2 Unblocked',
    href: '/granny-2-unblocked',
    description: 'The suspenseful sequel with even more challenges.',
  },
  {
    title: 'Granny Creepy House',
    href: '/granny-creepy-house-unblocked',
    description: 'Explore a house full of secrets and twisted rooms.',
  },
];

export default function GrannyOnlinePage() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-headline font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Granny Online
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

        <div className="mt-12 text-lg leading-8 text-muted-foreground space-y-6">
            <p>
                Granny Online is a free-to-play horror game you can enjoy right in your browser—no downloads, no signups, and no restrictions. As you wake up trapped inside Granny’s creepy house, your mission is simple: find your way out without being caught.
            </p>
            <p>
                The tension is real, the puzzles are tricky, and Granny is always watching. This unblocked version works perfectly on school devices, Chromebooks, and public networks.
            </p>
            <p>
                Whether you’ve played before or you’re new to the game, Granny Online offers a thrilling escape-room experience you won’t forget.
            </p>
            <p className="font-bold text-accent">
                Start your horror survival adventure now and play Granny Online for free!
            </p>
        </div>

        <div className="mt-16">
            <div className="text-center">
                 <h2 className="text-3xl font-headline font-bold tracking-tight text-foreground sm:text-4xl">
                    Related Granny Games
                </h2>
            </div>
            <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {relatedGames.map((game) => (
                    <Card key={game.title} className="flex flex-col">
                    <CardHeader>
                        <CardTitle className="text-xl">{game.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                        <p className="text-muted-foreground">{game.description}</p>
                    </CardContent>
                    <div className="p-6 pt-0">
                        <Button asChild className="w-full">
                        <Link href={game.href}>Play Now</Link>
                        </Button>
                    </div>
                    </Card>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
}
