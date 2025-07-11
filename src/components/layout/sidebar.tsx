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
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Sheet, SheetContent } from '@/components/ui/sheet';
import { ScrollArea } from '@/components/ui/scroll-area';

const gameCategories = [
    {
    name: '🔥 New Releases',
    href: '/new-games',
    icon: Sparkles,
    games: [{ name: 'Pixel Racer', href: '#' }, { name: 'Block Stacker', href: '#' }],
  },
  {
    name: '🏫 Classroom Games',
    href: '/classroom',
    icon: School,
    games: [{ name: 'Math Blaster', href: '#' }, { name: 'Word Finder', href: '#' }],
  },
   {
    name: '🚗 Driving Games',
    href: '/driving-games',
    icon: Car,
    games: [{ name: 'Pixel Racer', href: '#' }, { name: 'Moto X3M', href: '#' }],
  },
  {
    name: '🎮 Action Games',
    href: '/action-games',
    icon: Gamepad2,
    games: [{ name: 'Galactic Battle', href: '#' }, { name: 'Stickman Fight', href: '#' }],
  },
  {
    name: '🧠 Puzzle & Strategy',
    href: '/puzzle-games',
    icon: Brain,
    games: [{ name: 'Block Stacker', href: '#' }, { name: 'Sudoku', href: '#' }],
  },
  {
    name: '🏀 Sports & Basketball',
    href: '/sports-games',
    icon: Dribbble,
    games: [{ name: 'Soccer Stars', href: '#' }, { name: 'Hoops Master', href: '#' }],
  },
  {
    name: '🧭 Adventure & RPG',
    href: '/adventure-games',
    icon: Compass,
    games: [{ name: 'Dungeon Quest', href: '#' }, { name: 'Fantasy Explorer', href: '#' }],
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
          <AccordionItem value={category.href} key={category.href}>
            <AccordionTrigger className="text-base hover:no-underline">
              <Link
                href={category.href}
                className="flex items-center gap-3"
                onClick={(e) => {
                  e.stopPropagation(); // Prevent accordion from toggling
                  setOpen(false);
                }}
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
                      className="block text-muted-foreground transition-colors hover:text-foreground"
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
        <SheetContent side="left" className="w-64 p-0 lg:hidden">
          <SidebarContent setOpen={setOpen} />
        </SheetContent>
      </Sheet>

      {/* Desktop Sidebar */}
      <div className="hidden h-screen w-56 border-r bg-card lg:block sticky top-0">
        <SidebarContent setOpen={setOpen} />
      </div>
    </>
  );
}
