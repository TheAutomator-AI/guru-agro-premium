import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, ArrowUpRight } from 'lucide-react';
import { COMPANY_INFO } from '../../data';
import { Container, Button } from '../../components/ui';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { TRANSITION_EASINGS } from '../../lib/motion';

export interface ContactSectionProps {
  id?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ id = 'contact' }) => {
  const prefersReduced = useReducedMotion();

  return (
    <section
      id={id}
      aria-labelledby="contact-heading"
      className="relative bg-botanical-950 text-ivory-100 overflow-hidden border-t border-ivory-200/10"
    >
      {/* 01: Visual Transition Statement: LET'S GROW SOMETHING MEANINGFUL. */}
      <div className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-botanical-950 via-botanical-900 to-botanical-950 border-b border-ivory-200/10">
        <Container size="architectural">
          <div className="max-w-4xl space-y-4">
            <span className="font-mono text-xs text-earth-gold tracking-[0.25em] uppercase block">
              INITIATE COLLABORATION
            </span>
            <motion.h3
              initial={{ opacity: 0, y: prefersReduced ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.7, ease: TRANSITION_EASINGS.editorial }}
              className="font-display font-medium text-[clamp(2.5rem,7vw,5.5rem)] text-ivory-100 uppercase tracking-[-0.03em] leading-[0.94] select-none"
            >
              LET&apos;S <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-ivory-100 via-ivory-200 to-earth-gold">
                GROW SOMETHING
              </span> <br />
              MEANINGFUL.
            </motion.h3>
          </div>
        </Container>
      </div>

      {/* 02: Core Contact Section */}
      <div className="py-16 sm:py-20 md:py-24">
        <Container size="architectural">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left Column: Heading & Action Buttons */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-3">
                <span className="font-mono text-xs text-earth-gold tracking-widest uppercase block">
                  DIRECT ACCESS
                </span>
                <h2
                  id="contact-heading"
                  className="font-display font-medium text-3xl sm:text-4xl md:text-5xl text-ivory-100 uppercase tracking-tight leading-[0.98]"
                >
                  START A <br />
                  <span className="text-earth-gold">CONVERSATION</span>
                </h2>
                <p className="text-sm sm:text-base font-sans text-sand-300 leading-relaxed pt-1">
                  For enquiries and information about Guru Agro Products, get in touch with our Chennai administration desk.
                </p>
              </div>

              {/* Direct Communication Action CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Button
                  variant="gold"
                  size="md"
                  href={`mailto:${COMPANY_INFO.contact.email}`}
                  data-cursor="open"
                  data-cursor-text="OPEN →"
                  rightIcon={<ArrowUpRight className="w-4 h-4" />}
                >
                  Email Our Team
                </Button>
                <Button
                  variant="outline"
                  size="md"
                  href={`tel:${COMPANY_INFO.contact.primaryPhone.replace(/\s+/g, '')}`}
                  data-cursor="call"
                  data-cursor-text="CALL →"
                  rightIcon={<Phone className="w-3.5 h-3.5" />}
                >
                  Call Primary Line
                </Button>
              </div>
            </div>

            {/* Right Column: Verified Contact Information Grid */}
            <div className="lg:col-span-7 space-y-8 border-t lg:border-t-0 lg:border-l border-ivory-200/10 pt-8 lg:pt-0 lg:pl-12">
              {/* Postal Address */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono text-earth-gold uppercase tracking-wider">
                  <MapPin className="w-4 h-4 text-earth-gold" />
                  <span>Headquarters Postal Address</span>
                </div>
                <p className="font-display font-medium text-lg sm:text-xl text-ivory-100 leading-snug">
                  {COMPANY_INFO.headquarters.addressLine1}, {COMPANY_INFO.headquarters.locality},<br />
                  {COMPANY_INFO.headquarters.city} - {COMPANY_INFO.headquarters.postalCode},<br />
                  {COMPANY_INFO.headquarters.state}, {COMPANY_INFO.headquarters.country}
                </p>
              </div>

              {/* Electronic Mail */}
              <div className="space-y-2 border-t border-ivory-200/10 pt-6">
                <div className="flex items-center gap-2 text-xs font-mono text-earth-gold uppercase tracking-wider">
                  <Mail className="w-4 h-4 text-earth-gold" />
                  <span>Electronic Mail</span>
                </div>
                <a
                  href={`mailto:${COMPANY_INFO.contact.email}`}
                  data-cursor="open"
                  data-cursor-text="OPEN →"
                  className="font-display font-medium text-lg sm:text-xl text-ivory-100 hover:text-earth-gold transition-colors inline-block"
                >
                  {COMPANY_INFO.contact.email}
                </a>
              </div>

              {/* Telephone Contacts */}
              <div className="space-y-2 border-t border-ivory-200/10 pt-6">
                <div className="flex items-center gap-2 text-xs font-mono text-earth-gold uppercase tracking-wider">
                  <Phone className="w-4 h-4 text-earth-gold" />
                  <span>Direct Telephones</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 pt-1">
                  <a
                    href={`tel:${COMPANY_INFO.contact.primaryPhone.replace(/\s+/g, '')}`}
                    data-cursor="call"
                    data-cursor-text="CALL →"
                    className="font-display font-medium text-lg sm:text-xl text-ivory-100 hover:text-earth-gold transition-colors inline-flex items-center gap-2"
                  >
                    <span>{COMPANY_INFO.contact.primaryPhone}</span>
                    <span className="text-xs font-mono text-sand-400 font-normal uppercase">(Primary)</span>
                  </a>
                  <a
                    href={`tel:${COMPANY_INFO.contact.secondaryPhone.replace(/\s+/g, '')}`}
                    data-cursor="call"
                    data-cursor-text="CALL →"
                    className="font-display font-medium text-lg sm:text-xl text-ivory-100 hover:text-earth-gold transition-colors inline-flex items-center gap-2"
                  >
                    <span>{COMPANY_INFO.contact.secondaryPhone}</span>
                    <span className="text-xs font-mono text-sand-400 font-normal uppercase">(Secondary)</span>
                  </a>
                </div>
              </div>

              {/* Operational Hours */}
              <div className="space-y-2 border-t border-ivory-200/10 pt-6">
                <div className="flex items-center gap-2 text-xs font-mono text-earth-gold uppercase tracking-wider">
                  <Clock className="w-4 h-4 text-earth-gold" />
                  <span>Desk Operating Hours</span>
                </div>
                <p className="font-sans text-sm sm:text-base text-sand-300">
                  {COMPANY_INFO.contact.hours}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* 03: Final Monumental CTA & Closing Statement */}
      <div className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-botanical-950 via-botanical-900 to-botanical-950 border-t border-ivory-200/10">
        <Container size="architectural">
          <div className="max-w-4xl space-y-6">
            <span className="font-mono text-xs text-earth-gold tracking-[0.25em] uppercase block">
              FINAL CHAPTER // GURU AGRO PRODUCTS
            </span>

            <h2 className="font-display font-medium text-[clamp(2.75rem,8vw,6.5rem)] text-ivory-100 uppercase tracking-[-0.03em] leading-[0.92] select-none">
              GROWING <br />
              A BETTER <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-ivory-100 via-ivory-200 to-earth-gold">
                TOMORROW.
              </span>
            </h2>

            <div className="pt-2">
              <Button
                variant="gold"
                size="lg"
                href={`mailto:${COMPANY_INFO.contact.email}`}
                data-cursor="open"
                data-cursor-text="OPEN →"
                rightIcon={<ArrowUpRight className="w-4 h-4" />}
              >
                Contact Guru Agro
              </Button>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};
