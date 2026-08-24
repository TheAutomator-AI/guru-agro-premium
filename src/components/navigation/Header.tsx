import React, { useState } from 'react';
import { Menu, ArrowUpRight } from 'lucide-react';
import { COMPANY_INFO, MAIN_NAVIGATION } from '../../data';
import { useScrollProgress } from '../../hooks/useScrollProgress';
import { useSmoothScroll } from '../motion';
import { MobileMenu } from './MobileMenu';
import { Button } from '../ui/Button';

export const Header: React.FC = () => {
  const { isScrolled } = useScrollProgress();
  const { scrollTo } = useSmoothScroll();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    scrollTo(href);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
          isScrolled
            ? 'bg-botanical-950/85 backdrop-blur-md py-3.5 border-b border-ivory-200/10 shadow-2xl shadow-botanical-950/80'
            : 'bg-transparent py-6 border-b border-transparent'
        }`}
        role="banner"
      >
        <div className="container-architectural flex items-center justify-between">
          {/* Company Brand Identity */}
          <a
            href="#root"
            onClick={(e) => handleLinkClick(e, '#root')}
            className="group flex flex-col focus-visible:outline-2 focus-visible:outline-botanical-300 rounded"
            aria-label={`${COMPANY_INFO.name} — Return to top`}
            data-cursor="open"
            data-cursor-text="TOP ↑"
          >
            <span className="font-display font-bold text-lg md:text-xl text-ivory-100 tracking-wider transition-colors group-hover:text-earth-gold">
              GURU AGRO
            </span>
            <span className="text-[9px] md:text-[10px] font-mono tracking-[0.2em] text-earth-gold uppercase">
              SUSTAINABLE ECOSYSTEMS
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav
            className="hidden lg:flex items-center gap-7 text-xs font-sans font-medium tracking-wider"
            aria-label="Main Navigation"
          >
            {MAIN_NAVIGATION.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.href)}
                className="text-sand-300 hover:text-ivory-100 relative py-1 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-botanical-300 rounded"
                aria-label={item.ariaLabel}
                data-cursor="open"
                data-cursor-text="OPEN →"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:block">
              <Button
                variant="outline"
                size="sm"
                href="#contact"
                onClick={(e: React.MouseEvent<HTMLAnchorElement>) => handleLinkClick(e, '#contact')}
                rightIcon={<ArrowUpRight className="w-3.5 h-3.5" />}
                className="text-xs"
              >
                Connect With Us
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden p-2.5 rounded-sm border border-ivory-200/20 text-ivory-100 hover:border-earth-gold hover:text-earth-gold transition-colors focus-visible:outline-2 focus-visible:outline-botanical-300"
              aria-label="Open mobile navigation menu"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-navigation-drawer"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
};
