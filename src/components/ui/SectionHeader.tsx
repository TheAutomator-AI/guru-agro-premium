import React from 'react';
import { TextReveal } from '../motion/TextReveal';
import { FadeUp } from '../motion/FadeUp';
import { Badge } from './Badge';
import { cn } from '../../lib/utils';

export interface SectionHeaderProps {
  badgeText?: string;
  tagline?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badgeText,
  tagline,
  title,
  subtitle,
  align = 'left',
  className = '',
}) => {
  const isCentered = align === 'center';

  return (
    <div
      className={cn(
        'mb-12 md:mb-16',
        isCentered ? 'text-center mx-auto max-w-3xl' : 'max-w-4xl',
        className
      )}
    >
      {(badgeText || tagline) && (
        <FadeUp delay={0.05}>
          <div
            className={cn(
              'flex items-center gap-3 mb-4',
              isCentered ? 'justify-center' : 'justify-start'
            )}
          >
            {badgeText && <Badge variant="gold">{badgeText}</Badge>}
            {tagline && <span className="editorial-subtitle">{tagline}</span>}
          </div>
        </FadeUp>
      )}

      <TextReveal
        text={title}
        as="h2"
        className="text-display-lg text-ivory-100 font-display font-normal tracking-tight mb-4"
        delay={0.1}
      />

      {subtitle && (
        <FadeUp delay={0.25}>
          <p className="text-body-lg text-sand-300 font-sans leading-relaxed">
            {subtitle}
          </p>
        </FadeUp>
      )}
    </div>
  );
};
