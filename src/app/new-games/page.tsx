
import type { Metadata } from 'next';
import GameCard from '@/components/game-card';

export const metadata: Metadata = {
  title: 'New Unblocked Games – Play Latest Games at School (No VPN)',
  description: 'Explore the newest unblocked games for school and work. Free, no download, and updated weekly with titles like Granny, Eggy Car, and Slope.',
};

const newGames = [
  {
    title: 'Happy Wheels',
    description: 'A bloody and hilarious physics-based vehicle game.',
    imageSrc: 'https://placehold.co/400x300.png',
    aiHint: 'ragdoll physics',
    href: '/new-games/happy-wheels',
  },
  {
    title: 'Slope',
    description: 'Roll down a randomized slope and avoid obstacles.',
    imageSrc: 'https://placehold.co/400x300.png',
    aiHint: '3d slope',
    href: '/new-games/slope',
  },
  {
    title: '1v1.lol',
    description: 'A fast-paced third-person shooter and builder game.',
    imageSrc: 'https://placehold.co/400x300.png',
    aiHint: 'fortnite style',
    href: '/new-games/1v1-lol',
  },
  {
    title: 'Run 3',
    description: 'Run and jump through a series of challenging tunnels in space.',
    imageSrc: 'https://placehold.co/400x300.png',
    aiHint: 'space tunnel',
    href: '/new-games/run-3',
  },
  {
    title: 'Moto X3M',
    description: 'Perform crazy stunts in this exciting bike racing game.',
    imageSrc: 'https://placehold.co/400x300.png',
    aiHint: 'motocross stunt',
    href: '/new-games/moto-x3m',
  },
  {
    title: 'Drift Hunters',
    description: 'Master the art of drifting in a variety of awesome cars.',
    imageSrc: 'https://placehold.co/400x300.png',
    aiHint: 'drifting car',
    href: '/new-games/drift-hunters',
  },
  {
    title: 'Paper.io 2',
    description: 'Capture as much territory as you can in this slick multiplayer game.',
    imageSrc: 'https://placehold.co/400x300.png',
    aiHint: 'colorful shapes',
    href: '/new-games/paper-io-2',
  },
  {
    title: 'Smash Karts',
    description: 'A wild and chaotic kart-based battle arena game.',
    imageSrc: 'https://placehold.co/400x300.png',
    aiHint: 'kart battle',
    href: '/new-games/smash-karts',
  },
  {
    title: 'Minecraft Classic',
    description: 'The original creative building game, right in your browser.',
    imageSrc: 'https://placehold.co/400x300.png',
    aiHint: 'pixel blocks',
    href: '/new-games/minecraft-classic',
  },
  {
    title: 'Cookie Clicker',
    description: 'The classic idle game that started it all. Click for cookies!',
    imageSrc: 'https://placehold.co/400x300.png',
    aiHint: 'giant cookie',
    href: '/new-games/cookie-clicker',
  },
  {
    title: 'Getaway Shootout',
    description: 'A chaotic, physics-based race to the getaway vehicle.',
    imageSrc: 'https://placehold.co/400x300.png',
    aiHint: 'pixel shootout',
    href: '/new-games/getaway-shootout',
  },
  {
    title: 'Retro Bowl',
    description: 'A retro-style American football game for the modern era.',
    imageSrc: 'https://placehold.co/400x300.png',
    aiHint: 'pixel football',
    href: '/new-games/retro-bowl',
  },
  {
    title: 'Basket Random',
    description: 'Hilarious physics-based basketball with random challenges.',
    imageSrc: 'https://placehold.co/400x300.png',
    aiHint: 'ragdoll basketball',
    href: '/new-games/basket-random',
  },
  {
    title: 'Soccer Random',
    description: 'Crazy, physics-based soccer with unpredictable fun.',
    imageSrc: 'https://placehold.co/400x300.png',
    aiHint: 'ragdoll soccer',
    href: '/new-games/soccer-random',
  },
  {
    title: 'Vex 6',
    description: 'The latest installment in the challenging Vex stickman platformer series.',
    imageSrc: 'https://placehold.co/400x300.png',
    aiHint: 'stickman parkour',
    href: '/new-games/vex-6',
  },
  {
    title: 'Fireboy and Watergirl',
    description: 'Solve puzzles together in this classic co-op platformer.',
    imageSrc: 'https://placehold.co/400x300.png',
    aiHint: 'elemental characters',
    href: '/new-games/fireboy-and-watergirl',
  },
  {
    title: 'Idle Breakout',
    description: 'An idle take on the classic Breakout game.',
    imageSrc: 'https://placehold.co/400x300.png',
    aiHint: 'breaking blocks',
    href: '/new-games/idle-breakout',
  },
  {
    title: '2048',
    description: 'Slide tiles and combine them to reach the 2048 tile.',
    imageSrc: 'https://placehold.co/400x300.png',
    aiHint: 'number puzzle',
    href: '/new-games/2048',
  },
  {
    title: 'Tetris',
    description: 'The timeless puzzle game of fitting blocks together.',
    imageSrc: 'https://placehold.co/400x300.png',
    aiHint: 'falling blocks',
    href: '/new-games/tetris',
  },
  {
    title: 'Pac-Man',
    description: 'The classic arcade game. Gobble pellets and avoid ghosts!',
    imageSrc: 'https://placehold.co/400x300.png',
    aiHint: 'retro arcade',
    href: '/new-games/pac-man',
  },
  {
    title: 'Tunnel Rush',
    description: 'A fast-paced dodging game in a colorful, spinning tunnel.',
    imageSrc: 'https://placehold.co/400x300.png',
    aiHint: 'psychedelic tunnel',
    href: '/new-games/tunnel-rush',
  },
  {
    title: 'Death Run 3D',
    description: 'An extremely fast-paced game that tests your reflexes.',
    imageSrc: 'https://placehold.co/400x300.png',
    aiHint: 'neon tunnel',
    href: '/new-games/death-run-3d',
  },
  {
    title: 'Agar.io',
    description: 'The classic .io game where you eat to grow bigger.',
    imageSrc: 'https://placehold.co/400x300.png',
    aiHint: 'colorful cells',
    href: '/new-games/agar-io',
  },
  {
    title: 'Slither.io',
    description: 'A modern take on Snake. Grow your slithering creature.',
    imageSrc: 'https://placehold.co/400x300.png',
    aiHint: 'glowing snakes',
    href: '/new-games/slither-io',
  },
  {
    title: 'Among Us',
    description: 'Work together and betray your friends in this hit social deduction game.',
    imageSrc: 'https://placehold.co/400x300.png',
    aiHint: 'space crewmates',
    href: '/new-games/among-us',
  },
  {
    title: 'Friday Night Funkin\'',
    description: 'A rhythm game that will test your musical skills.',
    imageSrc: 'https://placehold.co/400x300.png',
    aiHint: 'cartoon rap',
    href: '/new-games/friday-night-funkin',
  },
  {
    title: 'Geometry Dash',
    description: 'Jump and fly your way through danger in this rhythm-based action platformer.',
    imageSrc: 'https://placehold.co/400x300.png',
    aiHint: 'geometric shapes',
    href: '/new-games/geometry-dash',
  },
  {
    title: 'The Impossible Quiz',
    description: 'A famously difficult quiz that will test your wits and patience.',
    imageSrc: 'https://placehold.co/400x300.png',
    aiHint: 'question mark',
    href: '/new-games/the-impossible-quiz',
  },
  {
    title: 'Learn to Fly 2',
    description: 'Help a penguin learn to fly in this addictive launch game.',
    imageSrc: 'https://placehold.co/400x300.png',
    aiHint: 'flying penguin',
    href: '/new-games/learn-to-fly-2',
  },
  {
    title: 'Duck Life 4',
    description: 'Train your duck and compete in races to become the champion.',
    imageSrc: 'https://placehold.co/400x300.png',
    aiHint: 'racing duck',
    href: '/new-games/duck-life-4',
  },
  {
    title: 'Age of War',
    description: 'A classic strategy game where you evolve and battle through the ages.',
    imageSrc: 'https://placehold.co/400x300.png',
    aiHint: 'caveman battle',
    href: '/new-games/age-of-war',
  },
  {
    title: 'Bloons Tower Defense 5',
    description: 'The classic tower defense game with monkeys and balloons.',
    imageSrc: 'https://placehold.co/400x300.png',
    aiHint: 'monkey darts',
    href: '/new-games/bloons-tower-defense-5',
  },
  {
    title: 'Jacksmith',
    description: 'Craft weapons for your warriors in this hands-on crafting game.',
    imageSrc: 'https://placehold.co/400x300.png',
    aiHint: 'blacksmith donkey',
    href: '/new-games/jacksmith',
  },
  {
    title: 'Papa\'s Pizzeria',
    description: 'Take orders, bake pizzas, and serve customers in this classic restaurant sim.',
    imageSrc: 'https://placehold.co/400x300.png',
    aiHint: 'cartoon pizza',
    href: '/new-games/papas-pizzeria',
  },
  {
    title: 'Rooftop Snipers',
    description: 'A chaotic, physics-based sniping game for one or two players.',
    imageSrc: 'https://placehold.co/400x300.png',
    aiHint: 'pixel snipers',
    href: '/new-games/rooftop-snipers',
  },
  {
    title: 'Shell Shockers',
    description: 'A multiplayer .io FPS where you play as heavily armed eggs.',
    imageSrc: 'https://placehold.co/400x300.png',
    aiHint: 'egg shooter',
    href: '/new-games/shell-shockers',
  },
  {
    title: 'ZombsRoyale.io',
    description: 'A fast-paced 2D battle royale game.',
    imageSrc: 'https://placehold.co/400x300.png',
    aiHint: '2d battle',
    href: '/new-games/zombsroyale-io',
  },
  {
    title: 'Krunker.io',
    description: 'A fast-paced pixelated first-person shooter.',
    imageSrc: 'https://placehold.co/400x300.png',
    aiHint: 'pixel fps',
    href: '/new-games/krunker-io',
  },
  {
    title: 'Surviv.io',
    description: 'The original 2D battle royale game.',
    imageSrc: 'https://placehold.co/400x300.png',
    aiHint: 'top down',
    href: '/new-games/surviv-io',
  },
  {
    title: 'Tiny Fishing',
    description: 'A simple and relaxing fishing game with upgrades.',
    imageSrc: 'https://placehold.co/400x300.png',
    aiHint: 'pixel fishing',
    href: '/new-games/tiny-fishing',
  },
  {
    title: 'Moto X3M Pool Party',
    description: 'The summer edition of Moto X3M with new, crazy levels.',
    imageSrc: 'https://placehold.co/400x300.png',
    aiHint: 'beach motocross',
    href: '/new-games/moto-x3m-pool-party',
  },
  {
    title: 'Madalin Stunt Cars 2',
    description: 'A 3D stunt driving game with amazing cars and open worlds.',
    imageSrc: 'https://placehold.co/400x300.png',
    aiHint: 'supercar stunt',
    href: '/new-games/madalin-stunt-cars-2',
  },
  {
    title: 'Earn to Die 2',
    description: 'Drive through a zombie apocalypse, upgrading your car along the way.',
    imageSrc: 'https://placehold.co/400x300.png',
    aiHint: 'zombie car',
    href: '/new-games/earn-to-die-2',
  },
  {
    title: 'Bad Ice-Cream 3',
    description: 'A puzzle game where you control a sentient ice cream.',
    imageSrc: 'https://placehold.co/400x300.png',
    aiHint: 'pixel icecream',
    href: '/new-games/bad-ice-cream-3',
  },
  {
    title: 'A Dance of Fire and Ice',
    description: 'A strict rhythm game. Hit the beat to move along the path.',
    imageSrc: 'https://placehold.co/400x300.png',
    aiHint: 'rhythm planets',
    href: '/new-games/a-dance-of-fire-and-ice',
  },
  {
    title: 'Stickman Hook',
    description: 'Swing through levels like a spider-stickman.',
    imageSrc: 'https://placehold.co/400x300.png',
    aiHint: 'swinging stickman',
    href: '/new-games/stickman-hook',
  },
  {
    title: 'Super Smash Flash 2',
    description: 'The ultimate fan-made Smash Bros. game.',
    imageSrc: 'https://placehold.co/400x300.png',
    aiHint: 'character brawl',
    href: '/new-games/super-smash-flash-2',
  },
  {
    title: 'World\'s Hardest Game',
    description: 'It\'s in the name. A game of squares, circles, and rage.',
    imageSrc: 'https://placehold.co/400x300.png',
    aiHint: 'red square',
    href: '/new-games/worlds-hardest-game',
  },
  {
    title: 'Cut the Rope',
    description: 'Feed Om Nom candy by cutting ropes in this classic physics puzzler.',
    imageSrc: 'https://placehold.co/400x300.png',
    aiHint: 'green monster',
    href: '/new-games/cut-the-rope',
  },
  {
    title: 'Red Ball 4',
    description: 'Help the red ball defeat the evil squares in this platformer.',
    imageSrc: 'https://placehold.co/400x300.png',
    aiHint: 'red ball',
    href: '/new-games/red-ball-4',
  },
  {
    title: 'Granny Unblocked',
    description: 'The ultimate hub for all versions of the terrifying escape-horror game.',
    imageSrc: 'https://placehold.co/400x300.png',
    aiHint: 'haunted house',
    href: '/granny-unblocked',
  },
  {
    title: 'Granny',
    description: 'Escape the haunted house without getting caught by the terrifying Granny.',
    imageSrc: 'https://placehold.co/400x300.png',
    aiHint: 'scary granny',
    href: '/granny-unblocked-game',
  },
  {
    title: 'Granny 2',
    description: 'The sequel to the suspenseful survival horror game.',
    imageSrc: 'https://placehold.co/400x300.png',
    aiHint: 'dark room',
    href: '/granny-2-unblocked',
  },
  {
    title: 'Granny Creepy House',
    description: 'Explore a terrifying old house full of creepy secrets and twisted rooms.',
    imageSrc: 'https://placehold.co/400x300.png',
    aiHint: 'creepy house',
    href: '/granny-creepy-house-unblocked',
  },
  {
    title: 'Granny Prison Escape',
    description: 'A prison escape version of the thrilling Granny game.',
    imageSrc: 'https://placehold.co/400x300.png',
    aiHint: 'creepy prison',
    href: '/granny-prison-escape-unblocked',
  },
  {
    title: 'Granny Online',
    description: 'Play the horror escape game free in your browser.',
    imageSrc: 'https://placehold.co/400x300.png',
    aiHint: 'horror escape',
    href: '/granny-online',
  },
];

export default function NewGamesPage() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-headline font-bold tracking-tight text-foreground sm:text-4xl">
            🎮🎄Unblocked Games G+🎄🎮
          </h1>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {newGames.map((game) => (
            <GameCard
              key={game.title}
              imageSrc={game.imageSrc}
              title={game.title}
              description={game.description}
              buttonText="Play Now"
              href={game.href}
              aiHint={game.aiHint}
            />
          ))}
        </div>
        <div className="mt-16 bg-card p-8 rounded-lg border border-border">
          <div className="mx-auto max-w-4xl text-muted-foreground space-y-6">
            <h2 className="text-center text-3xl font-headline font-bold text-foreground sm:text-4xl">
              🎮 What Are Unblocked Games and Why Are They So Popular?
            </h2>
            
            <p className="text-lg leading-relaxed">
              Unblocked games are free online games that work on school Chromebooks and network-restricted devices — no downloads, no VPNs required. Whether you’re at school, at work, or just taking a break, these browser-based games are perfect for fast, stress-free entertainment.
            </p>

            <p className="text-lg leading-relaxed">
              From high-speed racing and mind-bending puzzles to retro arcade and adventure titles, <strong>New Unblocked Games</strong> let you enjoy fun, creativity, and skill-building — right from your browser. No installations, just click and play.
            </p>

            <h3 className="text-2xl font-bold text-foreground pt-4">✨ Why Students & Gamers Love New Unblocked Games:</h3>
            <ul className="list-disc list-inside space-y-2 text-lg">
              <li>⚡ Play instantly — perfect for Chromebooks and school use</li>
              <li>🔒 Safe and teacher-approved gaming</li>
              <li>🧠 Boost focus, logic, and creative thinking</li>
              <li>🎨 Includes puzzle, strategy, arcade, and casual games</li>
              <li>🌐 100% browser-based – no downloads or setup</li>
            </ul>

            <h3 className="text-2xl font-bold text-foreground pt-4">🚀 Top New Unblocked Games You Should Try:</h3>
            <ul className="list-disc list-inside space-y-2 text-lg">
              <li>2048 – addictive math puzzle fun</li>
              <li>Run 3 – endless running in outer space</li>
              <li>Happy Wheels – physics-based racing madness</li>
              <li>Roblox – social sandbox experience</li>
              <li>Shell Shockers – egg-based FPS action</li>
            </ul>

            <h3 className="text-2xl font-bold text-foreground pt-4">🛡️ How to Play Unblocked Games Safely:</h3>
            <ul className="list-disc list-inside space-y-2 text-lg">
              <li>✅ Stick to HTTPS websites (secure connections)</li>
              <li>✅ Avoid downloads — use only web-based HTML5 games</li>
              <li>✅ Don’t enter personal information</li>
              <li>✅ Set a time limit and balance study & play</li>
              <li>✅ Use ad-blockers if needed to avoid distractions</li>
            </ul>

            <p className="text-lg leading-relaxed pt-4">
              Whether you're looking for quick breaks between classes or hours of fun after school, our <strong>New Unblocked Games</strong> section has you covered. Perfectly optimized for <strong>Google Chrome, School Chromebooks, and Classroom 6x</strong> setups — no VPN or firewall bypass needed.
            </p>

            <p className="text-xl font-bold text-center text-primary pt-6">
              🎯 Ready to start playing? Bookmark our <strong>New Unblocked Games</strong> page and enjoy your favorite games—anytime, anywhere.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
