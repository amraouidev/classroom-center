import { Menu, Puzzle } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

type HeaderProps = {
  onMenuClick: () => void;
};

export default function Header({ onMenuClick }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={onMenuClick}
            className="lg:hidden"
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </Button>
          <Link href="/" className="flex items-center gap-2">
            <Puzzle className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold font-headline text-foreground">
              Unblocked Games G+
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}
