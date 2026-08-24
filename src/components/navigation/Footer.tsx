import React from 'react';
import { ArrowUp, Phone, Mail, MapPin } from 'lucide-react';
import { COMPANY_INFO } from '../../data';
import { useSmoothScroll } from '../motion';

const FOOTER_NAV = [
  { label: 'ABOUT', href: '#about' },
  { label: 'AGRICULTURE', href: '#agriculture' },
  { label: 'SUSTAINABILITY', href: '#sustainability' },
  { label: 'PROJECTS', href: '#projects' },
  { label: 'CONTACT', href: '#contact' },
];

export const Footer: React.FC = () => {
  const { scrollTo } = useSmoothScroll();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    scrollTo(href);
  };

  return (
    <footer
      className="bg-botanical-950 border-t border-ivory-200/10 pt-20 sm:pt-24 pb-12 text-sand-300 relative z-10 select-none"
      role="contentinfo"
    >
      <div className="container-architectural space-y-16">
        {/* Top Grid: Brand & Direct Contacts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-ivory-200/10">
          {/* Brand & Ethos Column */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="font-display font-medium text-3xl sm:text-4xl text-ivory-100 uppercase tracking-tight block">
                {COMPANY_INFO.name}
              </span>
              <span className="text-xs font-mono tracking-[0.2em] text-earth-gold uppercase block mt-1.5 font-medium">
                {COMPANY_INFO.tagline}
              </span>
            </div>
            <p className="text-sm text-sand-300 font-sans leading-relaxed max-w-md">
              {COMPANY_INFO.mission}
            </p>
          </div>

          {/* Direct Navigation Links */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-mono tracking-[0.2em] uppercase text-earth-gold font-medium">
              Navigation
            </h3>
            <nav className="flex flex-col space-y-2.5" aria-label="Footer Navigation">
              {FOOTER_NAV.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item.href)}
                  data-cursor="open"
                  data-cursor-text="OPEN →"
                  className="text-xs font-sans text-sand-300 hover:text-ivory-100 transition-colors uppercase tracking-wider focus-visible:outline-2 focus-visible:outline-botanical-300 w-fit"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Headquarters & Contacts */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-mono tracking-[0.2em] uppercase text-earth-gold font-medium">
              Chennai Headquarters
            </h3>
            <address className="not-italic space-y-3 text-xs font-sans text-sand-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-3.5 h-3.5 text-earth-gold shrink-0 mt-0.5" />
                <span>
                  {COMPANY_INFO.headquarters.addressLine1}, {COMPANY_INFO.headquarters.locality},<br />
                  {COMPANY_INFO.headquarters.city} - {COMPANY_INFO.headquarters.postalCode},<br />
                  {COMPANY_INFO.headquarters.state}, {COMPANY_INFO.headquarters.country}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-3.5 h-3.5 text-earth-gold shrink-0" />
                <a
                  href={`tel:${COMPANY_INFO.contact.primaryPhone.replace(/\s+/g, '')}`}
                  data-cursor="call"
                  data-cursor-text="CALL →"
                  className="hover:text-earth-gold transition-colors"
                >
                  {COMPANY_INFO.contact.primaryPhone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-3.5 h-3.5 text-earth-gold shrink-0" />
                <a
                  href={`mailto:${COMPANY_INFO.contact.email}`}
                  data-cursor="open"
                  data-cursor-text="OPEN →"
                  className="hover:text-earth-gold transition-colors"
                >
                  {COMPANY_INFO.contact.email}
                </a>
              </div>
            </address>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-sand-400">
          <p>© {new Date().getFullYear()} {COMPANY_INFO.name}. All Rights Reserved.</p>
          <button
            type="button"
            onClick={() => scrollTo(0)}
            data-cursor="open"
            data-cursor-text="TOP ↑"
            className="inline-flex items-center gap-2 hover:text-earth-gold transition-colors cursor-pointer"
            aria-label="Scroll back to top of page"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
