import React from 'react';

interface SkipToContentProps {
  targetId?: string;
  label?: string;
}

export const SkipToContent: React.FC<SkipToContentProps> = ({
  targetId = 'main-content',
  label = 'Skip to main content',
}) => {
  return (
    <a
      href={`#${targetId}`}
      className="sr-only sr-only-focusable fixed top-4 left-4 z-[99999] px-5 py-3 bg-earth-gold text-botanical-950 font-sans font-semibold text-sm rounded shadow-xl outline-none focus:ring-4 focus:ring-botanical-400 transition-transform"
    >
      {label}
    </a>
  );
};
