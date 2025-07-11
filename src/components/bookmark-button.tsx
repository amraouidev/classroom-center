'use client';

import { Bookmark } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { useState, useEffect } from 'react';

export default function BookmarkButton() {
  const [tooltipText, setTooltipText] = useState('Bookmark this site');
  const [isMac, setIsMac] = useState(false);

  useEffect(() => {
    // This check runs only on the client-side
    setIsMac(navigator.platform.toUpperCase().indexOf('MAC') >= 0);
  }, []);

  const handleBookmarkClick = () => {
    if (isMac) {
      setTooltipText('Press ⌘+D to bookmark');
    } else {
      setTooltipText('Press CTRL+D to bookmark');
    }
  };

  const handleMouseLeave = () => {
    // Reset tooltip text after a short delay
    setTimeout(() => {
      setTooltipText('Bookmark this site');
    }, 300);
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            size="lg"
            className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full shadow-lg transition-transform duration-300 hover:scale-110"
            aria-label="Bookmark this site"
            onClick={handleBookmarkClick}
            onMouseLeave={handleMouseLeave}
          >
            <Bookmark className="h-6 w-6" />
          </Button>
        </TooltipTrigger>
        <TooltipContent side="left" className="bg-foreground text-background">
          <p>{tooltipText}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
