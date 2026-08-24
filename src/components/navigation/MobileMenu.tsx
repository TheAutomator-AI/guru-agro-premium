import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Phone, Mail, MapPin } from 'lucide-react';
import { MAIN_NAVIGATION, COMPANY_INFO } from '../../data';
import { useSmoothScroll } from '../motion';

export interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const { scrollTo } = useSmoothScroll();
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      closeButtonRef.current?.focus();
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleNavClick = (href: string) => {
    onClose();
    setTimeout(() => {
      scrollTo(href);
    }, 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          id="mobile-navigation-drawer"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[200] bg-botanical-950/98 backdrop-blur-xl flex flex-col justify-between p-6 sm:p-10 md:hidden overflow-y-auto"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between border-b border-ivory-200/10 pb-6">
            <div>
              <span className="font-display font-semibold text-lg text-ivory-100 tracking-wider block">
                GURU AGRO
              </span>
              <span className="text-[10px] font-mono tracking-widest text-earth-gold block">
                SUSTAINABLE ECOSYSTEMS
              </span>
            </div>
            <button
              ref={closeButtonRef}
              type="button"
              onClick={onClose}
              className="p-2.5 rounded-full border border-ivory-200/20 text-ivory-100 hover:text-earth-gold hover:border-earth-gold transition-colors focus-visible:ring-2 focus-visible:ring-botanical-400"
              aria-label="Close navigation menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="my-8" aria-label="Mobile Navigation">
            <ul className="space-y-4">
              {MAIN_NAVIGATION.map((item, index) => (
                <li key={item.label}>
                  <button
                    type="button"
                    onClick={() => handleNavClick(item.href)}
                    className="w-full text-left flex items-baseline justify-between group py-2 border-b border-botanical-850"
                  >
                    <span className="text-2xl font-serif-editorial text-ivory-200 group-hover:text-earth-gold transition-colors">
                      {item.label}
                    </span>
                    <span className="font-mono text-xs text-sand-500 group-hover:text-earth-gold">
                      0{index + 1}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Footer Contact Details */}
          <div className="pt-6 border-t border-ivory-200/10 space-y-3 text-xs text-sand-400 font-sans">
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-earth-gold shrink-0" />
              <span>{COMPANY_INFO.headquarters.locality}, {COMPANY_INFO.headquarters.city}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-earth-gold shrink-0" />
              <a href={`tel:${COMPANY_INFO.contact.primaryPhone.replace(/\s+/g, '')}`} className="hover:text-earth-gold">
                {COMPANY_INFO.contact.primaryPhone}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-earth-gold shrink-0" />
              <a href={`mailto:${COMPANY_INFO.contact.email}`} className="hover:text-earth-gold">
                {COMPANY_INFO.contact.email}
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
