import type { Metadata } from 'next';
import GameCard from '@/components/game-card';

export const metadata: Metadata = {
  title: 'Driving Games Unblocked – 60+ Free Racing & Car Games Online',
  description:
    'Play top-tier driving games unblocked at school or home. From Eggy Car to Drift Boss, access 60+ car, truck, and racing titles for free with no download.',
};

const drivingGames = [
  { title: 'Gta 1', href: '/gta-1' },
  { title: 'Car Crash 2', href: '/car-crash-2' },
  { title: 'Car Crash 3', href: '/car-crash-3' },
  { title: 'Big Truck 2', href: '/big-truck-2' },
  { title: 'Big Truck Adventures', href: '/big-truck-adventures' },
  { title: 'Hang ON Motorcycle', href: '/hang-on-motorcycle' },
  { title: 'Diesel and Death', href: '/diesel-and-death' },
  { title: 'Monster Truck Curfew', href: '/monster-truck-curfew' },
  { title: 'FMX Team', href: '/fmx-team' },
  { title: 'Big Truck Adventures 2', href: '/big-truck-adventures-2' },
  { title: 'Parking Fury 2', href: '/parking-fury-2' },
  { title: 'Parking Fury 3', href: '/parking-fury-3' },
  { title: 'Car Drawing', href: '/car-drawing' },
  { title: '4 Wheel Madness', href: '/4-wheel-madness' },
  { title: 'Ben 10 Adventure Ride', href: '/ben-10-adventure-ride' },
  { title: 'Dirt Bike 2', href: '/dirt-bike-2' },
  { title: 'Traffic Mania', href: '/traffic-mania' },
  { title: 'Uphill Rush', href: '/uphill-rush' },
  { title: 'Ben 10 Racing', href: '/ben-10-racing' },
  { title: 'Action Driving', href: '/action-driving' },
  { title: 'Raccoon Racing', href: '/raccoon-racing' },
  { title: 'Driving Force 3', href: '/driving-force-3' },
  { title: 'GTO Drift', href: '/gto-drift' },
  { title: 'Stunt Dirt Bike', href: '/stunt-dirt-bike' },
  { title: 'Monster Truck Trials', href: '/monster-truck-trials' },
  { title: 'Unicycle Madness', href: '/unicycle-madness' },
  { title: 'ATV Extreme', href: '/atv-extreme' },
  { title: 'Sky Race 3D', href: '/sky-race-3d' },
  { title: 'Racing Arena', href: '/racing-arena' },
  { title: 'Monster Truck', href: '/monster-truck' },
  { title: 'Wheely', href: '/wheely' },
  { title: 'Deadly Stunts', href: '/deadly-stunts' },
  { title: 'Rich Cars 3', href: '/rich-cars-3' },
  { title: 'Poly Track', href: '/poly-track' },
  { title: 'Drag Racing Club', href: '/drag-racing-club' },
  { title: 'Car Parking Challenge', href: '/car-parking-challenge' },
  { title: 'Escape The Car', href: '/escape-the-car' },
  { title: 'Car vs Missile', href: '/car-vs-missile' },
  { title: 'Eggy Car 2', href: '/eggy-car-2' },
  { title: 'Eggy Car', href: '/eggy-car' },
  { title: 'Potty Racers 2', href: '/potty-racers-2' },
  { title: 'King Of Drift', href: '/king-of-drift' },
  { title: 'Drift Runners', href: '/drift-runners' },
  { title: 'Drift Boss', href: '/drift-boss' },
  { title: 'Bump Battle', href: '/bump-battle' },
  { title: 'Coaster Racer', href: '/coaster-racer' },
  { title: 'Drifting Mania', href: '/drifting-mania' },
  { title: 'Pocket Drift', href: '/pocket-drift' },
  { title: 'Big Truck 3', href: '/big-truck-3' },
  { title: 'Road Devil Truck', href: '/road-devil-truck' },
  { title: 'Coal Express 4', href: '/coal-express-4' },
  { title: 'Kamaz Delivy', href: '/kamaz-delivy' },
  { title: 'Mining Truck', href: '/mining-truck' },
  { title: 'Mountain Bike', href: '/mountain-bike' },
  { title: 'Wtruck', href: '/wtruck' },
  { title: 'Zoo Transpot', href: '/zoo-transpot' },
  { title: 'Car Simulator', href: '/car-simulator' },
  { title: 'Cyber Cars', href: '/cyber-cars' },
  { title: 'Race: Online City', href: '/race-online-city' },
  { title: 'Drive Online', href: '/drive-online' },
  { title: 'Slow Roads', href: '/slow-roads' },
];

export default function DrivingGamesUnblockedPage() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-headline font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            🚗 Driving Games Unblocked
          </h1>
          <p className="mt-6 mx-auto max-w-3xl text-lg leading-8 text-muted-foreground">
            Welcome to the ultimate Driving Games Unblocked center! This section is packed with more than 60 of the best unblocked racing, drifting, car simulator, and monster truck games—perfect for Chromebooks, schools, and browsers with restrictions.
            <br /><br />
            Whether you're a fan of wild stunts, intense parking challenges, or open-road racing, you'll find it all here. Click on any title below to play instantly—no downloads, no ads, no lag.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {drivingGames.map((game) => (
            <GameCard
              key={game.title}
              imageSrc="https://placehold.co/400x300.png"
              title={game.title}
              buttonText="Play Now"
              href={game.href}
              aiHint="racing car"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
