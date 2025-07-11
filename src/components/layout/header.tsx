import { Puzzle } from 'lucide-react';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <Puzzle className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold font-headline text-foreground">
            GameZone Unblocked
          </span>
        </Link>
      </div>
    </header>
  );
}
