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
    name: 'New Games',
    href: '/new-games',
    icon: Sparkles,
    games: [
      { name: 'Survival', href: '#' },
      { name: 'ARC', href: '#' },
      { name: 'Tap Goal', href: '#' },
      { name: 'Death Run', href: '#' },
      { name: 'Stick War', href: '#' },
      { name: 'Pixel Gun', href: '#' },
      { name: 'Mad Stick', href: '#' },
      { name: 'Obby Faster', href: '#' },
      { name: 'Red vs Blue', href: '#' },
      { name: 'Friday Night', href: '#' },
      { name: 'Aquapark Builder', href: '#' },
      { name: 'Google Docs', href: '#' },
      { name: 'roblox', href: '#' },
      { name: 'Doblox', href: '#' },
      { name: 'Sandbox', href: '#' },
      { name: '1.12', href: '#' },
      { name: '1.8.8', href: '#' },
      { name: '!v!.LOL', href: '#' },
      { name: 'Drift RU', href: '#' },
      { name: 'Paper.io 2', href: '#' },
      { name: 'Run 3', href: '#' },
      { name: 'Gunspin', href: '#' },
      { name: 'Translate', href: '#' },
      { name: 'Spiral Roll', href: '#' },
      { name: 'Love Tester', href: '#' },
      { name: 'Schoolboy Escape', href: '#' },
      { name: 'Football & Legends', href: '#' },
      { name: 'Cheese Chompers', href: '#' },
      { name: 'Cluster Rush', href: '#' },
      { name: 'Escape School', href: '#' },
      { name: 'They Are Coming', href: '#' },
      { name: 'Call of Battle', href: '#' },
      { name: "Baldi's Basics", href: '#' },
      { name: 'CrazyCattle3D', href: '#' },
      { name: 'Quiz 2', href: '#' },
      { name: 'Bank of ME', href: '#' },
      { name: 'Snow Rider', href: '#' },
      { name: 'Chicken War', href: '#' },
      { name: 'Phasma', href: '#' },
      { name: 'CS 1.6', href: '#' },
      { name: 'Tube Jumpers', href: '#' },
      { name: 'Escape Road', href: '#' },
      { name: 'Zombie Road', href: '#' },
      { name: '456 Challenge', href: '#' },
      { name: 'The Baby in Yellow', href: '#' },
      { name: 'Squid Playground', href: '#' },
      { name: 'Funny Ragdoll', href: '#' },
      { name: 'America', href: '#' },
      { name: 'War the Knights', href: '#' },
      { name: 'Paint Map Simulator', href: '#' },
      { name: 'Smash Karts', href: '#' },
      { name: 'OvO', href: '#' },
      { name: 'Hanger', href: '#' },
      { name: 'Melon Drop', href: '#' },
      { name: 'Red vs Blue 2', href: '#' },
      { name: 'Noob vs Pro', href: '#' },
      { name: 'Idle Breakout', href: '#' },
      { name: 'Unblocked Games G+', href: '#' },
      { name: 'Bank Breakout 2', href: '#' },
      { name: 'Bounce Blitz', href: '#' },
      { name: 'Robby Blocks', href: '#' },
      { name: 'Basket & Ball', href: '#' },
      { name: 'Pixel Battle', href: '#' },
      { name: 'Block Blast!', href: '#' },
      { name: 'Windows 7 Game', href: '#' },
      { name: 'Crazy Crash Landing', href: '#' },
      { name: 'Pokemon Fire Red', href: '#' },
      { name: 'Sniper v2', href: '#' },
      { name: 'Helix Jump', href: '#' },
      { name: 'Fast Runner', href: '#' },
      { name: 'Diggy', href: '#' },
      { name: 'FNAF', href: '#' },
      { name: 'Wall Paint', href: '#' },
      { name: 'Sky Survival', href: '#' },
      { name: 'BattleSphere.io', href: '#' },
      { name: 'Sweet Swap', href: '#' },
      { name: 'Rapid Descent', href: '#' },
      { name: 'Solo Slugger', href: '#' },
      { name: 'Solo Striker', href: '#' },
      { name: 'Ice Duel', href: '#' },
      { name: '1v1 Soccer', href: '#' },
      { name: '1v1 Tennis', href: '#' },
      { name: 'Pocket Precision', href: '#' },
      { name: 'Madness project nexus', href: '#' },
      { name: 'Pokemon Mystery Dungeon', href: '#' },
      { name: 'Pokemon Great Defense 2', href: '#' },
      { name: 'Pokemon Ultimate Fusion', href: '#' },
      { name: 'Pokemon Tower Defense', href: '#' },
      { name: 'Pokemon Leaf Green', href: '#' },
      { name: 'Pokemon Emerald', href: '#' },
      { name: 'Pokemon Unbound', href: '#' },
      { name: 'Pokemon Sapphire', href: '#' },
      { name: 'Pokemon Ruby', href: '#' },
      { name: 'Pizza Clicker', href: '#' },
      { name: 'Poop Clicker', href: '#' },
      { name: 'Poop Clicker 2', href: '#' },
      { name: 'Cookie Clicker', href: '#' },
      { name: 'Cookie Clicker 2', href: '#' },
      { name: 'Duck Duck Clicker', href: '#' },
      { name: 'Cookie Clicker Flash', href: '#' },
      { name: 'Achievement Unlocked', href: '#' },
      { name: 'Bloons Super Monkey', href: '#' },
      { name: 'Acid Rain', href: '#' },
      { name: "Abobo's Big Adventure", href: '#' },
      { name: 'Big Tower Tiny Square 2', href: '#' },
      { name: 'Blocky Gun Paintball', href: '#' },
      { name: 'Clicker Monsters', href: '#' },
      { name: 'Blast Zone 2', href: '#' },
      { name: "It's Closed", href: '#' },
      { name: 'Jump Sprint', href: '#' },
      { name: 'Bullet Time Fighting', href: '#' },
      { name: 'Business Simulator', href: '#' },
      { name: 'Doom 2D', href: '#' },
      { name: 'Stick Archers Battle', href: '#' },
      { name: 'Battle Sticks', href: '#' },
      { name: 'Pixel Life Quest', href: '#' },
      { name: 'BattleCraft Legends', href: '#' },
      { name: 'Stickman Dirtbike', href: '#' },
      { name: 'Strike Force Kitty', href: '#' },
      { name: 'Submachine 1', href: '#' },
      { name: 'Storm Ops 4', href: '#' },
      { name: 'Super Mario 63', href: '#' },
      { name: 'Super Slugger', href: '#' },
      { name: 'Chatter Paws', href: '#' },
      { name: 'Chatty Cat', href: '#' },
      { name: 'UNO', href: '#' },
      { name: 'Sling Wars 2', href: '#' },
      { name: 'Crazy Football War', href: '#' },
      { name: 'Endless War 5', href: '#' },
      { name: 'Cactus McCoy 2', href: '#' },
      { name: 'Obby %99 will lose', href: '#' },
      { name: "Mom I'm Sleeping!", href: '#' },
      { name: 'Zombie Mission 6', href: '#' },
      { name: "Pico's school", href: '#' },
      { name: 'Gacha Life', href: '#' },
      { name: 'Gacha Club', href: '#' },
      { name: 'Geometry Dash', href: '#' },
      { name: 'Geometry Dash 3D', href: '#' },
      { name: 'Pixel Shooter', href: '#' },
      { name: 'Save my Pet', href: '#' },
      { name: 'Rookie Rivalry', href: '#' },
      { name: 'Turn the Road', href: '#' },
      { name: 'Huggy Wuggy Pixel Nights', href: '#' },
      { name: 'Wall Crusher', href: '#' },
      { name: 'TABS', href: '#' },
      { name: 'Ragdoll.io', href: '#' },
      { name: 'Minecraft Shooter', href: '#' },
      { name: 'Sniper Shot', href: '#' },
      { name: 'Getaway Shootout', href: '#' },
      { name: '2D Shooting Online', href: '#' },
      { name: 'Blob Eater', href: '#' },
      { name: 'Blocky Snakes', href: '#' },
      { name: 'CS Lego Online', href: '#' },
      { name: 'Traffic Run', href: '#' },
      { name: 'CleanUp.io', href: '#' },
      { name: 'Draw Climber', href: '#' },
      { name: 'Fishing.io', href: '#' },
      { name: 'Pac-Man', href: '#' },
      { name: 'Volley Random', href: '#' },
      { name: 'Boxing Random', href: '#' },
      { name: 'Soccer Random', href: '#' },
      { name: 'Basket Random', href: '#' },
      { name: 'Backrooms 24', href: '#' },
      { name: 'Time Shooter 3: SWAT', href: '#' },
      { name: 'Stickman Rope Heroes', href: '#' },
      { name: 'House Of Hazards', href: '#' },
      { name: 'Tanuki Sunset', href: '#' },
      { name: 'Clicker Heroes', href: '#' },
      { name: 'Janissary Battles', href: '#' },
      { name: 'The Enchanted Cave', href: '#' },
      { name: 'BunnyLand', href: '#' },
      { name: 'Big Tall Small', href: '#' },
      { name: 'Effing Hail', href: '#' },
      { name: 'Basketball Physics', href: '#' },
      { name: 'Doodle Jump', href: '#' },
      { name: 'Bad Time Simulator', href: '#' },
      { name: 'Skyway Rush', href: '#' },
      { name: 'Pacman 30th Anniversary', href: '#' },
      { name: 'Paper.io 3D', href: '#' },
      { name: 'Desktop Tower Defense', href: '#' },
      { name: 'Papers.io Mania', href: '#' },
      { name: 'Doomz.io 2', href: '#' },
      { name: 'Ahoy Survival 2', href: '#' },
      { name: 'Civiballs', href: '#' },
      { name: 'Dead Zed', href: '#' },
      { name: 'PolyBilliards', href: '#' },
      { name: 'Taxi Drift', href: '#' },
      { name: 'Dragon Ball Kart', href: '#' },
      { name: 'Dragon Ball Z Flappy Goku', href: '#' },
      { name: 'Drag Racer V3', href: '#' },
      { name: 'Electric Box 2', href: '#' },
      { name: 'Endless War 7', href: '#' },
      { name: 'Factory Balls 3', href: '#' },
      { name: 'Fancy Pants Adventure', href: '#' },
      { name: 'Fire and Ice', href: '#' },
      { name: 'Fireboy and Watergirl', href: '#' },
      { name: 'Fireboy and Watergirl 2', href: '#' },
      { name: 'Fireboy And Watergirl 3', href: '#' },
      { name: 'Age of Defense 4', href: '#' },
      { name: 'Animal Raceway', href: '#' },
      { name: 'Five Day at Freddys', href: '#' },
      { name: 'Flood Runner 2', href: '#' },
      { name: 'Football Running Back', href: '#' },
      { name: 'Funny Shooter 2', href: '#' },
      { name: 'Geometry Dash Nemesis', href: '#' },
      { name: 'Alone in the Madness', href: '#' },
      { name: 'Armor Mayhem', href: '#' },
      { name: 'Woobies', href: '#' },
      { name: 'Among US', href: '#' },
      { name: 'Tic-tac-toe', href: '#' },
      { name: 'Supermario World Flash', href: '#' },
      { name: 'Two Ball 3D', href: '#' },
      { name: 'Fire Balls', href: '#' },
      { name: 'Two Neon Boxes', href: '#' },
      { name: 'JustFall.lol', href: '#' },
      { name: 'Effing Worms Xmas', href: '#' },
      { name: 'Noob Miner', href: '#' },
      { name: 'Snake', href: '#' },
      { name: 'Effing Worms 2', href: '#' },
      { name: 'Chess', href: '#' },
      { name: 'Guitar Hero 2', href: '#' },
      { name: 'Handless Millionaire', href: '#' },
      { name: 'Tetris', href: '#' },
      { name: 'Plazma Burst', href: '#' },
      { name: 'Portal 2', href: '#' },
      { name: 'Murloc', href: '#' },
      { name: 'Snowball.io', href: '#' },
      { name: 'Racing Jump', href: '#' },
      { name: 'Ragdoll Achievement', href: '#' },
      { name: '3 Slices', href: '#' },
      { name: 'Mutilate a Doll 2', href: '#' },
      { name: 'Ping Pong Chaos', href: '#' },
      { name: 'Bloons Tower Defense', href: '#' },
      { name: 'Bloons Tower Defense 2', href: '#' },
      { name: 'Bloons Tower Defense 3', href: '#' },
      { name: 'Bloons Tower Defense 4', href: '#' },
      { name: 'Minicars Soccer', href: '#' },
      { name: 'Climbing Over It', href: '#' },
      { name: 'Stumble Guys', href: '#' },
      { name: '2048', href: '#' },
      { name: 'Worlds Hardest Game 2', href: '#' },
      { name: 'Papa’s Bakeria', href: '#' },
      { name: "Papa's Cupcakeria", href: '#' },
      { name: "Papa's Scooperia", href: '#' },
      { name: "Papa's Taco Mia!", href: '#' },
      { name: "Papa's Freezeria", href: '#' },
      { name: 'Papa Louie 2: When Burgers Attack', href: '#' },
      { name: "Papa's Burgeria", href: '#' },
      { name: "Papa's Donuteria", href: '#' },
      { name: "Papa's Hot Doggeria", href: '#' },
      { name: "Papa's Sushiria", href: '#' },
      { name: "Papa's Taco Mia", href: '#' },
      { name: "Papa's Pizzeria", href: '#' },
      { name: 'Mutilate a Doll', href: '#' },
      { name: '8 Ball Pool', href: '#' },
      { name: '1 On 1 Basketball', href: '#' },
      { name: 'Basketball Stars 2019', href: '#' },
      { name: 'Tiny Fishing', href: '#' },
      { name: 'Elastic Face', href: '#' },
      { name: 'Basket Slam Dunk 2', href: '#' },
      { name: 'Basketball Stars', href: '#' },
      { name: 'Moto X3M Winter', href: '#' },
      { name: 'Moto X3M 4 Winter', href: '#' },
      { name: 'Moto X3M Pool Party', href: '#' },
      { name: 'Moto X3m 3', href: '#' },
      { name: 'Super Smash Flash 2', href: '#' },
      { name: 'Hole.io', href: '#' },
      { name: 'Basketball Legends', href: '#' },
      { name: 'Vex 4', href: '#' },
      { name: 'Vex 5', href: '#' },
      { name: 'Vex 6', href: '#' },
      { name: 'Vex 7', href: '#' },
      { name: 'Vex 8', href: '#' },
      { name: 'Sonic Revert', href: '#' },
      { name: 'Sky Race 3D Unblocked', href: '#' },
    ],
  },
  {
    name: '🏫 Classroom Games',
    href: 'https://sites.google.com/view/classrooms-workspace/',
    icon: School,
    isExternal: true,
    games: [],
  },
   {
    name: '🚗 Driving Games',
    href: '/driving-games-unblocked',
    icon: Car,
    games: [
      { name: 'Gta 1', href: '/driving-games/gta-1' },
      { name: 'Car Crash 2', href: '/driving-games/car-crash-2' },
      { name: 'Car Crash 3', href: '/driving-games/car-crash-3' },
      { name: 'Big Truck 2', href: '/driving-games/big-truck-2' },
      { name: 'Big Truck Adventures', href: '/driving-games/big-truck-adventures' },
      { name: 'Hang ON Motorcycle', href: '/driving-games/hang-on-motorcycle' },
      { name: 'Diesel and Death', href: '/driving-games/diesel-and-death' },
      { name: 'Monster Truck Curfew', href: '/driving-games/monster-truck-curfew' },
      { name: 'FMX Team', href: '/driving-games/fmx-team' },
      { name: 'Big Truck Adventures 2', href: '/driving-games/big-truck-adventures-2' },
      { name: 'Parking Fury 2', href: '/driving-games/parking-fury-2' },
      { name: 'Parking Fury 3', href: '/driving-games/parking-fury-3'},
      { name: 'Car Drawing', href: '/driving-games/car-drawing' },
      { name: '4 Wheel Madness', href: '/driving-games/4-wheel-madness' },
      { name: 'Ben 10 Adventure Ride', href: '/driving-games/ben-10-adventure-ride' },
      { name: 'Dirt Bike 2', href: '/driving-games/dirt-bike-2' },
      { name: 'Traffic Mania', href: '/driving-games/traffic-mania' },
      { name: 'Uphill Rush', href: '/driving-games/uphill-rush' },
      { name: 'Ben 10 Racing', href: '/driving-games/ben-10-racing' },
      { name: 'Action Driving', href: '/driving-games/action-driving' },
      { name: 'Raccoon Racing', href: '/driving-games/raccoon-racing' },
      { name: 'Driving Force 3', href: '/driving-games/driving-force-3' },
      { name: 'GTO Drift', href: '/driving-games/gto-drift' },
      { name: 'Stunt Dirt Bike', href: '/driving-games/stunt-dirt-bike' },
      { name: 'Monster Truck Trials', href: '/driving-games/monster-truck-trials' },
      { name: 'Unicycle Madness', href: '/driving-games/unicycle-madness' },
      { name: 'ATV Extreme', href: '/driving-games/atv-extreme' },
      { name: 'Sky Race 3D', href: '/driving-games/sky-race-3d' },
      { name: 'Racing Arena', href: '/driving-games/racing-arena' },
      { name: 'Monster Truck', href: '/driving-games/monster-truck' },
      { name: 'Wheely', href: '/driving-games/wheely' },
      { name: 'Deadly Stunts', href: '/driving-games/deadly-stunts' },
      { name: 'Rich Cars 3', href: '/driving-games/rich-cars-3' },
      { name: 'Drag Racing Club', href: '/driving-games/drag-racing-club' },
      { name: 'Car Parking Challenge', href: '/driving-games/car-parking-challenge' },
      { name: 'Escape The Car', href: '/driving-games/escape-the-car' },
      { name: 'Car vs Missile', href: '/driving-games/car-vs-missile' },
      { name: 'Eggy Car 2', href: '/driving-games/eggy-car-2' },
      { name: 'Eggy Car', href: '/driving-games/eggy-car' },
      { name: 'Potty Racers 2', href: '/driving-games/potty-racers-2' },
      { name: 'King Of Drift', href: '/driving-games/king-of-drift' },
      { name: 'Drift Runners', href: '/driving-games/drift-runners' },
      { name: 'Drift Boss', href: '/driving-games/drift-boss' },
      { name: 'Bump Battle', href: '/driving-games/bump-battle' },
      { name: 'Coaster Racer', href: '/driving-games/coaster-racer' },
      { name: 'Drifting Mania', href: '/driving-games/drifting-mania' },
      { name: 'Pocket Drift', href: '/driving-games/pocket-drift' },
      { name: 'Big Truck 3', href: '/driving-games/big-truck-3' },
      { name: 'Road Devil Truck', href: '/driving-games/road-devil-truck' },
      { name: 'Coal Express 4', href: '/driving-games/coal-express-4' },
      { name: 'Kamaz Delivy', href: '/driving-games/kamaz-delivy' },
      { name: 'Mining Truck', href: '/driving-games/mining-truck' },
      { name: 'Mountain Bike', href: '/driving-games/mountain-bike' },
      { name: 'Wtruck', href: '/driving-games/wtruck' },
      { name: 'Zoo Transpot', href: '/driving-games/zoo-transpot' },
      { name: 'Car Simulator', href: '/driving-games/car-simulator' },
      { name: 'Cyber Cars', href: '/driving-games/cyber-cars' },
      { name: 'Race: Online City', href: '/driving-games/race-online-city' },
      { name: 'Drive Online', href: '/driving-games/drive-online' },
      { name: 'Slow Roads', href: '/driving-games/slow-roads' },
      { name: 'Extreme Racing', href: '#' },
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
              <a
                href={category.href}
                className="flex items-center gap-3"
                onClick={(e) => {
                  if (!category.isExternal) {
                    e.preventDefault(); 
                    // Let the AccordionTrigger handle the click for internal links
                  }
                  // For external links, the default 'a' tag behavior will trigger
                }}
                target={category.isExternal ? '_blank' : '_self'}
                rel={category.isExternal ? 'noopener noreferrer' : ''}
              >
                <category.icon className="h-5 w-5" />
                {category.name}
              </a>
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
