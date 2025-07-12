import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Slope – Play Unblocked Running Game Online',
  description: 'Play Slope online for free! This unblocked running game works on school Chromebooks, PCs, and mobile. No download or VPN needed.',
};

export default function GamePage() {
  return (
    <section className="py-12 sm:py-16 text-center">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="game-container flex justify-center">
          <iframe 
            src="https://html5.gamedistribution.com/rvvASMiV/0e52484c1e3e4b82aa6b647b0dc9c5fb/index.html" 
            width="960" 
            height="600" 
            frameBorder="0" 
            scrolling="no" 
            allowFullScreen
            title="Play Slope Game Online">
          </iframe>
        </div>

        <div className="mt-8 text-center">
            <div className="adsense-container h-24 bg-muted/50 flex items-center justify-center rounded-md">
                <span className="text-muted-foreground">AdSense Placeholder</span>
            </div>
        </div>

        <div className="mt-10 text-lg leading-8 text-muted-foreground space-y-6 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground">Play Slope Game Unblocked – Fast Reflex Challenge</h2>
          <p>
            Slope is a thrilling 3D unblocked game where you guide a neon ball down a never-ending slope filled with obstacles. 
            Perfect for Chromebook users, school networks, and fast gaming breaks. 
            No downloads or VPN needed — just pure adrenaline!
          </p>
        </div>
      </div>
    </section>
  );
}
