import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card text-card-foreground border-t border-border" id="classroom-center">
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="space-y-8 text-center">
          <h2 className="text-2xl font-bold text-foreground">
            ❄️ Unblocked Games Classroom Center G+ – The Go-To Destination for Free Online Fun ❄️
          </h2>
          <p className="text-muted-foreground">
            Welcome to Unblocked Games G+, where an ever-expanding library of free, unblocked titles is ready to entertain you anytime, anywhere. From iconic classics to trending new games, our platform is built to deliver nonstop fun—whether you’re on a school Chromebook or relaxing at home.
          </p>
          <p className="text-muted-foreground">
            Searching for exciting Google+ games that run smoothly at school or on your Chromebook? You’re in the right place.
          </p>
          <p className="text-muted-foreground">
            Unblocked Games G+ ensures a hassle-free, restriction-free gaming experience. Love action-packed titles like Survival Race? Prefer timeless favorites like Minecraft or Roblox? No matter your taste, we’ve got you covered.
          </p>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-foreground">🎯 Why Unblocked Games Classroom Center?</h3>
            <ul className="list-disc list-inside space-y-2 text-left mx-auto max-w-md text-muted-foreground">
              <li>Massive collection of action, strategy, racing, and adventure games</li>
              <li>Fully optimized for school networks and Chromebooks, including Classroom 6x</li>
              <li>100% classroom-safe and teacher-friendly</li>
              <li>No VPN required — instant access with just one click</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-foreground">📈 Popular HTML5 Games Students Can’t Get Enough Of:</h3>
            <ul className="list-none space-y-1 text-muted-foreground">
              <li>1v1.lol</li>
              <li>Roblox</li>
              <li>Granny</li>
              <li>Gunspin</li>
              <li>CS 1.6</li>
            </ul>
          </div>
          
          <p className="text-muted-foreground">
            At Unbanned Games Google Plus, we make it easy to enjoy top-tier games without interruptions. Whether you’re sneaking in a quick session between classes or chilling after homework, our site is your go-to spot for all things unblocked.
          </p>
          <p className="text-muted-foreground">
            From educational titles to fun multiplayer experiences, everything is here—ready when you are.
          </p>

          <p className="font-bold text-foreground">
            🔖 Bookmark Unblocked Games G+ today and unlock a world of excitement in just one click!
          </p>

          <div className="space-y-4 pt-4 border-t border-border mt-8">
            <h3 className="text-xl font-bold text-foreground">🏫 Classroom Center</h3>
            <p className="text-muted-foreground">
              Explore a diverse selection of unblocked games designed specifically for safe and engaging play at school. Ideal for students of all ages, our collection blends entertainment with learning—turning every break into a fun and meaningful experience!
            </p>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="flex items-center gap-4 text-sm">
                <Link href="#" className="hover:text-primary transition-colors">Docs</Link>
                <Link href="#" className="hover:text-primary transition-colors">Contact</Link>
                <Link href="/classroom" className="hover:text-primary transition-colors">Classroom</Link>
            </div>
            <div className="text-center text-sm text-muted-foreground">
                <p>&copy; {currentYear} Unblocked Games G+. All rights reserved.</p>
            </div>
        </div>
      </div>
    </footer>
  );
}
