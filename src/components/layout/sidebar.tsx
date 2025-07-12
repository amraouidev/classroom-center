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
    games: [
      { name: 'Granny Unblocked', href: '/granny-unblocked' }, 
      { name: 'Granny', href: '/granny-unblocked-game' }, 
      { name: 'Granny 2', href: '/granny-2-unblocked' },
      { name: 'Granny Creepy House', href: '/granny-creepy-house-unblocked' },
      { name: 'Granny Prison Escape', href: '/granny-prison-escape-unblocked' },
      { name: 'Granny Online', href: '/granny-online' },
    ],
  },
  {
    name: '🏫 Classroom Games',
    href: '/classroom',
    icon: School,
    games: [{ name: 'Math Blaster', href: '#' }, { name: 'Word Finder', href: '#' }],
  },
   {
    name: '🚗 Driving Games',
    href: '/driving-games-unblocked',
    icon: Car,
    games: [
      { name: '4 Wheel Madness', href: '/driving-games/4-wheel-madness' },
      { name: 'Action Driving', href: '/driving-games/action-driving' },
      { name: 'ATV Extreme', href: '/driving-games/atv-extreme' },
      { name: 'Ben 10 Adventure Ride', href: '/driving-games/ben-10-adventure-ride' },
      { name: 'Ben 10 Racing', href: '/driving-games/ben-10-racing' },
      { name: 'Big Truck 2', href: '/driving-games/big-truck-2' },
      { name: 'Big Truck 3', href: '/driving-games/big-truck-3' },
      { name: 'Big Truck Adventures', href: '/driving-games/big-truck-adventures' },
      { name: 'Big Truck Adventures 2', href: '/driving-games/big-truck-adventures-2' },
      { name: 'Bump Battle', href: '/driving-games/bump-battle' },
      { name: 'Car Crash 2', href: '/driving-games/car-crash-2' },
      { name: 'Car Crash 3', href: '/driving-games/car-crash-3' },
      { name: 'Car Drawing', href: '/driving-games/car-drawing' },
      { name: 'Car Parking Challenge', href: '/driving-games/car-parking-challenge' },
      { name: 'Car Simulator', href: '/driving-games/car-simulator' },
      { name: 'Car vs Missile', href: '/driving-games/car-vs-missile' },
      { name: 'Coal Express 4', href: '/driving-games/coal-express-4' },
      { name: 'Coaster Racer', href: '/driving-games/coaster-racer' },
      { name: 'Cyber Cars', href: '/driving-games/cyber-cars' },
      { name: 'Deadly Stunts', href: '/driving-games/deadly-stunts' },
      { name: 'Diesel and Death', href: '/driving-games/diesel-and-death' },
      { name: 'Dirt Bike 2', href: '/driving-games/dirt-bike-2' },
      { name: 'Drag Racing Club', href: '/driving-games/drag-racing-club' },
      { name: 'Drift Boss', href: '/driving-games/drift-boss' },
      { name: 'Drift Runners', href: '/driving-games/drift-runners' },
      { name: 'Drifting Mania', href: '/driving-games/drifting-mania' },
      { name: 'Drive Online', href: '/driving-games/drive-online' },
      { name: 'Driving Force 3', href: '/driving-games/driving-force-3' },
      { name: 'Eggy Car', href: '/driving-games/eggy-car' },
      { name: 'Eggy Car 2', href: '/driving-games/eggy-car-2' },
      { name: 'Escape The Car', href: '/driving-games/escape-the-car' },
      { name: 'FMX Team', href: '/driving-games/fmx-team' },
      { name: 'Gta 1', href: '/driving-games/gta-1' },
      { name: 'GTO Drift', href: '/driving-games/gto-drift' },
      { name: 'Hang ON Motorcycle', href: '/driving-games/hang-on-motorcycle' },
      { name: 'Kamaz Delivy', href: '/driving-games/kamaz-delivy' },
      { name: 'King Of Drift', href: '/driving-games/king-of-drift' },
      { name: 'Mining Truck', href: '/driving-games/mining-truck' },
      { name: 'Monster Truck', href: '/driving-games/monster-truck' },
      { name: 'Monster Truck Curfew', href: '/driving-games/monster-truck-curfew' },
      { name: 'Monster Truck Trials', href: '/driving-games/monster-truck-trials' },
      { name: 'Mountain Bike', href: '/driving-games/mountain-bike' },
      { name: 'Parking Fury 2', href: '/driving-games/parking-fury-2' },
      { name: 'Parking Fury 3', href: '/driving-games/parking-fury-3'},
      { name: 'Pocket Drift', href: '/driving-games/pocket-drift' },
      { name: 'Poly Track', href: '/driving-games/poly-track'},
      { name: 'Potty Racers 2', href: '/driving-games/potty-racers-2' },
      { name: 'Raccoon Racing', href: '/driving-games/raccoon-racing' },
      { name: 'Race: Online City', href: '/driving-games/race-online-city' },
      { name: 'Racing Arena', href: '/driving-games/racing-arena' },
      { name: 'Rich Cars 3', href: '/driving-games/rich-cars-3' },
      { name: 'Road Devil Truck', href: '/driving-games/road-devil-truck' },
      { name: 'Sky Race 3D', href: '/driving-games/sky-race-3d' },
      { name: 'Slow Roads', href: '/driving-games/slow-roads' },
      { name: 'Stunt Dirt Bike', href: '/driving-games/stunt-dirt-bike' },
      { name: 'Traffic Mania', href: '/driving-games/traffic-mania' },
      { name: 'Unicycle Madness', href: '/driving-games/unicycle-madness' },
      { name: 'Uphill Rush', href: '/driving-games/uphill-rush' },
      { name: 'Wheely', href: '/driving-games/wheely' },
      { name: 'Wtruck', href: '/driving-games/wtruck' },
      { name: 'Zoo Transpot', href: '/driving-games/zoo-transpot' },
    ],
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
  <div className="flex h-full flex-col text-card-foreground bg-card">
    <div className="flex h-16 items-center border-b border-border px-4">
      <Link href="/" className="flex items-center gap-2 font-semibold">
        <Puzzle className="h-6 w-6 text-primary" />
        <span className="text-foreground">Unblocked Games G+</span>
      </Link>
    </div>
    <ScrollArea className="flex-1">
      <Accordion type="multiple" className="w-full px-4 py-2">
        {gameCategories.map((category) => (
          <AccordionItem value={category.href} key={category.href} className="border-b-border">
            <AccordionTrigger className="text-base hover:no-underline text-foreground hover:text-primary">
              <Link
                href={category.href}
                className="flex items-center gap-3"
                onClick={(e) => {
                  e.stopPropagation(); 
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
                      className="block text-muted-foreground transition-colors hover:text-primary"
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
        <SheetContent side="left" className="w-52 p-0 lg:hidden bg-card border-r-0">
          <SidebarContent setOpen={setOpen} />
        </SheetContent>
      </Sheet>

      {/* Desktop Sidebar */}
      <div className="hidden h-screen w-52 border-r border-border bg-card lg:block sticky top-0">
        <SidebarContent setOpen={setOpen} />
      </div>
    </>
  );
}
