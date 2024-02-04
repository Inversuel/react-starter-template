import { cn } from '@/lib/utils';
import { Icons } from '@/components/icons';
import { Link } from 'react-router-dom';
import { ModeToggle } from './theme-toggle';
import { Button } from './ui/button';
import React from 'react';
import { siteConfig } from '@/config/site';

export function MainNav() {
  return (
    <div className="hidden md:flex justify-between items-center w-full">
      <div className="flex">
        <Link to="/" className="mr-6 flex items-center space-x-2">
          <Icons.logo className="h-6 w-6" />
          <span className="hidden font-bold sm:inline-block">{siteConfig.name}</span>
        </Link>
        <nav className="flex items-center gap-6 text-sm">
          <a
            href="https://github.com/Inversuel"
            className={cn(
              'hidden text-foreground/60 transition-colors hover:text-foreground/80 lg:block'
            )}>
            GitHub
          </a>
        </nav>
      </div>
      <div className="flex items-center justify-between gap-6">
        <Link to="/sign-up">
          <Button variant="default">Sign up</Button>
        </Link>
        <Link to="/sign-in">
          <Button variant="outline">Sign in</Button>
        </Link>
        <ModeToggle />
      </div>
    </div>
  );
}

// <Link
//            to="/docs"
//            className={cn(
//              "transition-colors hover:text-foreground/80",
//              pathname === "/docs" ? "text-foreground" : "text-foreground/60"
//            )}
//          >
//            Docs
//          </Link>
//          <Link
//            to="/docs/components"
//            className={cn(
//              "transition-colors hover:text-foreground/80",
//              pathname?.startsWith("/docs/components")
//                ? "text-foreground"
//                : "text-foreground/60"
//            )}
//          >
//            Components
//          </Link>
//          <Link
//            to="/themes"
//            className={cn(
//              "transition-colors hover:text-foreground/80",
//              pathname?.startsWith("/themes")
//                ? "text-foreground"
//                : "text-foreground/60"
//            )}
//          >
//            Themes
//          </Link>
//          <Link
//            to="/examples"
//            className={cn(
//              "transition-colors hover:text-foreground/80",
//              pathname?.startsWith("/examples")
//                ? "text-foreground"
//                : "text-foreground/60"
//            )}
//          >
//            Examples
//          </Link>
//
