import { Button } from '@/components/ui/button';
import { Bookmark, Puzzle } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center gap-2">
             <Puzzle className="h-6 w-6 text-primary" />
            <span className="text-lg font-semibold font-headline">GameZone Unblocked</span>
          </div>
          <div className="flex items-center gap-4 text-sm">
            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Button variant="outline" size="sm">
              <Bookmark className="mr-2 h-4 w-4" />
              Bookmark Us
            </Button>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} GameZone Unblocked. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
