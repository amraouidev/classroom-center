import type { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import BookmarkButton from '@/components/bookmark-button';

export const metadata: Metadata = {
  title: 'Granny Unblocked – Play Free Online Horror Survival Games',
  description: 'Play Granny Unblocked games online for free! Escape the haunted house, solve puzzles, and survive the nightmare—no restrictions, no downloads.',
};

const grannyGames = [
  {
    title: 'Granny Unblocked',
    href: '/granny-unblocked-game',
    description: 'The original terrifying escape game.',
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
  {
    title: 'Granny Prison Escape',
    href: '/granny-prison-escape-unblocked',
    description: 'Break out of a horrifying prison in this Granny chapter.',
  },
  {
    title: 'Granny Online',
    href: '/granny-online',
    description: 'Play the horror escape game free in your browser.',
  },
];

export default function GrannyUnblockedPillarPage() {
  return (
    <>
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-headline font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            🧟 Granny Unblocked Games
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Welcome to the ultimate Granny Unblocked hub! Here you’ll find all versions of the terrifying and addictive escape-horror game, playable 100% free online—perfect for school, Chromebooks, or any restricted network.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2">
          {grannyGames.map((game) => (
            <Card key={game.title} className="flex flex-col">
              <CardHeader>
                <CardTitle className="text-2xl">{game.title}</CardTitle>
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

        <div className="mt-16 space-y-8">
            <Card>
                <CardHeader>
                    <CardTitle className="text-2xl font-bold">🤔 Why Students Love Granny Unblocked</CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
                        <li>
                            <strong>Thrilling Gameplay:</strong> It’s a heart-pounding mix of puzzle-solving, stealth, and survival horror that keeps you on the edge of your seat.
                        </li>
                        <li>
                            <strong>Play Anywhere:</strong> Being unblocked means you can enjoy a quick, scary escape session during breaks at school without any hassle.
                        </li>
                        <li>
                            <strong>Challenges Your Brain:</strong> You need to think critically to solve puzzles, find keys, and plan your escape route, all while avoiding Granny.
                        </li>
                    </ul>
                </CardContent>
            </Card>


          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold">🙋‍♀️ Frequently Asked Questions</CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Can I play Granny Unblocked at school?</AccordionTrigger>
                  <AccordionContent>
                    Yes! All our Granny games are unblocked, meaning they are designed to work on school networks and Chromebooks without needing a VPN or any special software.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Is Granny 2 harder than the original?</AccordionTrigger>
                  <AccordionContent>
                    Many players find Granny 2 to be more challenging. It introduces Grandpa as a second antagonist and features a larger house with more complex puzzles to solve.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Do I need to download Granny games?</AccordionTrigger>
                  <AccordionContent>
                    No downloads are required. All games are playable directly in your web browser. Just click and play instantly!
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
    <BookmarkButton />
    </>
  );
}
