"use client";

import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-card pt-24 sm:pt-32 lg:pt-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 text-center">
          <h1 className="text-4xl font-headline font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Explore the Best Free <br />
            <span className="text-primary">Unblocked Games</span> Online!
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
            Your ultimate destination for fun, free, and unblocked HTML5 games. Perfect for school, home, or anywhere you want to play!
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button asChild size="lg" variant="outline" className="transition-transform duration-300 hover:scale-105">
              <Link href="/new-games">🎯 New Games</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="transition-transform duration-300 hover:scale-105">
              <a href="https://sites.google.com/view/classrooms-workspace/" target="_blank" rel="noopener noreferrer">🏫 Classrooms</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="transition-transform duration-300 hover:scale-105">
              <a href="https://sites.google.com/view/docs-document/" target="_blank" rel="noopener noreferrer">📄 Document</a>
            </Button>
             <Button asChild size="lg" variant="outline" className="transition-transform duration-300 hover:scale-105">
              <Link href="/driving-games-unblocked">🚗 Driving Games</Link>
            </Button>
          </div>
        </div>
        <div className="relative mt-16 sm:mt-20">
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
          <div
            className="mx-auto w-full max-w-5xl rounded-t-2xl border-x border-t border-border bg-card shadow-2xl"
            style={{
              WebkitMaskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)',
              maskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)',
            }}
          >
             <div className="h-48 bg-grid-pattern [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
          </div>
        </div>
      </div>
       <style jsx>{`
        .bg-grid-pattern {
          background-image:
            linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--border)) 1px, transparent 1px);
          background-size: 40px 40px;
        }
      `}</style>
    </section>
  );
}
