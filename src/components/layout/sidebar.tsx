'use client';
import Link from 'next/link';
import {
  Puzzle,
  Gamepad2,
  Brain,
  Dribbble,
  Car,
  Compass,
  School,
  Sparkles,
  X,
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent } from '@/components/ui/sheet';
import { ScrollArea } from '@/components/ui/scroll-area';

const gameCategories = [
  {
    name: '🎮 Action Games',
    id: 'action-games',
    icon: Gamepad2,
    games: [{ name: 'Galactic Battle', href: '#' }, { name: 'Stickman Fight', href: '#' }],
  },
  {
    name: '🧠 Puzzle & Strategy',
    id: 'puzzle-strategy',
    icon: Brain,
    games: [{ name: 'Block Stacker', href: '#' }, { name: 'Sudoku', href: '#' }],
  },
  {
    name: '🏀 Sports & Basketball',
    id: 'sports-basketball',
    icon: Dribbble,
    games: [{ name: 'Soccer Stars', href: '#' }, { name: 'Hoops Master', href: '#' }],
  },
  {
    name: '🛣️ Racing & Driving',
    id: 'racing-driving',
    icon: Car,
    games: [{ name: 'Pixel Racer', href: '#' }, { name: 'Moto X3M', href: '#' }],
  },
  {
    name: '🧭 Adventure & RPG',
    id: 'adventure-rpg',
    icon: Compass,
    games: [{ name: 'Dungeon Quest', href: '#' }, { name: 'Fantasy Explorer', href: '#' }],
  },
  {
    name: '📚 Classroom Games',
    id: 'classroom-games',
    icon: School,
    games: [{ name: 'Math Blaster', href: '#' }, { name: 'Word Finder', href: '#' }],
  },
  {
    name: '🔥 New Releases',
    id: 'top-picks',
    icon: Sparkles,
    games: [{ name: 'Pixel Racer', href: '#' }, { name: 'Block Stacker', href: '#' }],
  },
];

type SidebarProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

const SidebarContent = ({ setOpen }: { setOpen: (open: boolean) => void }) => (
  <div className="flex h-full flex-col">
    <div className="flex h-16 items-center border-b px-4">
      <Link href="/" className="flex items-center gap-2 font-semibold">
        <Puzzle className="h-6 w-6 text-primary" />
        <span>Unblocked Games G+</span>
      </Link>
    </div>
    <ScrollArea className="flex-1">
      <Accordion type="multiple" className="w-full px-4 py-2">
        {gameCategories.map((category) => (
          <AccordionItem value={category.id} key={category.id}>
            <AccordionTrigger className="text-base hover:no-underline">
              <Link
                href={`#${category.id === 'action-games' ? 'categories' : category.id}`}
                className="flex items-center gap-3"
                onClick={() => setOpen(false)}
              >
                <category.icon className="h-5 w-5" />
                {category.name}
              </Link>
            </AccordionTrigger>
            <AccordionContent>
              <ul className="space-y-2 pl-8">
                {category.games.map((game) => (
                  <li key={game.name}>
                    <Link
                      href={game.href}
                      className="block text-muted-foreground hover:text-foreground transition-colors"
                      onClick={() => setOpen(false)}
                    >
                      {game.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </ScrollArea>
  </div>
);


export default function Sidebar({ open, setOpen }: SidebarProps) {
  return (
    <>
      {/* Mobile Sidebar */}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="left" className="p-0 w-80 lg:hidden">
          <SidebarContent setOpen={setOpen} />
        </SheetContent>
      </Sheet>

      {/* Desktop Sidebar */}
      <div className="hidden lg:block w-80 border-r bg-card h-screen sticky top-0">
        <SidebarContent setOpen={setOpen} />
      </div>
    </>
  );
}
