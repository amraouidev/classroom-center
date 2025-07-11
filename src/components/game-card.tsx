import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

type GameCardProps = {
  imageSrc: string;
  title: string;
  description?: string;
  buttonText: string;
  href: string;
  aiHint?: string;
};

export default function GameCard({ imageSrc, title, description, buttonText, href, aiHint }: GameCardProps) {
  return (
    <Card className="flex h-full flex-col overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
      <CardHeader className="p-0">
        <div className="relative aspect-[4/3] w-full">
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            data-ai-hint={aiHint}
          />
        </div>
      </CardHeader>
      <CardContent className="flex-grow p-4">
        <CardTitle className="text-lg font-bold font-headline">{title}</CardTitle>
        {description && (
          <CardDescription className="mt-2 text-sm">
            {description}
          </CardDescription>
        )}
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button asChild className="w-full" variant="secondary">
          <Link href={href}>
            {buttonText}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
