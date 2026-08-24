import React from 'react';
import { ExternalLink } from 'lucide-react';
import { cn } from '../../lib/utils';

export interface AccessibleLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  isExternal?: boolean;
  showExternalIcon?: boolean;
  className?: string;
  children: React.ReactNode;
}

export const AccessibleLink: React.FC<AccessibleLinkProps> = ({
  href,
  isExternal = false,
  showExternalIcon = false,
  className = '',
  children,
  ...props
}) => {
  return (
    <a
      href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      className={cn(
        'inline-flex items-center gap-1.5 text-sand-300 hover:text-earth-gold transition-colors duration-200 outline-none focus-visible:ring-2 focus-visible:ring-botanical-400 focus-visible:ring-offset-2 focus-visible:ring-offset-botanical-950 rounded-sm',
        className
      )}
      {...props}
    >
      <span>{children}</span>
      {isExternal && showExternalIcon && (
        <ExternalLink className="w-3.5 h-3.5 opacity-70 shrink-0" aria-hidden="true" />
      )}
      {isExternal && <span className="sr-only">(opens in a new tab)</span>}
    </a>
  );
};
