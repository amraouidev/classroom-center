
'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Script from 'next/script';
import { useRef, useCallback } from 'react';

export default function GamePage() {
  const gameContainerRef = useRef<HTMLDivElement>(null);

  const onRuffleLoad = useCallback(() => {
    const RufflePlayer = (window as any).RufflePlayer;
    if (RufflePlayer && gameContainerRef.current) {
      const ruffle = RufflePlayer.newest();
      const player = ruffle.createPlayer();
      
      gameContainerRef.current.innerHTML = '';
      gameContainerRef.current.appendChild(player);
      
      player.load("https://cdn.jsdelivr.net/gh/sema-ver-sem/x6@main/bash-the-computer.swf");

      player.style.width = '100%';
      player.style.height = '100%';
    }
  }, []);

  return (
    <>
      <Script src="https://unpkg.com/@ruffle-rs/ruffle" strategy="lazyOnload" onReady={onRuffleLoad} />
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-headline font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Break Your Computer
            </h1>
          </div>

          <div className="mt-10 rounded-lg border bg-card text-card-foreground shadow-sm aspect-video overflow-hidden">
            <div ref={gameContainerRef} className="w-full h-full flex items-center justify-center">
              <p className="text-muted-foreground">Loading Game...</p>
            </div>
          </div>
          
          <div className="mt-8 text-center">
              <div className="adsense-container h-24 bg-muted/50 flex items-center justify-center rounded-md">
                  <span className="text-muted-foreground">AdSense Placeholder</span>
              </div>
          </div>

          <div className="mt-10 text-lg leading-8 text-muted-foreground space-y-6">
            <p>
              A fun stress-relief game where you get to smash a virtual computer.
            </p>
            <div className="text-center mt-8">
              <Button asChild>
                  <Link href="/new-games">More New Games</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
