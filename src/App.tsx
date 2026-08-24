import React from 'react';
import { SmoothScrollProvider } from './components/motion/SmoothScrollProvider';
import { CursorProvider, CustomCursor } from './components/cursor';
import { SkipToContent } from './components/ui/SkipToContent';
import { Header, Footer } from './components/navigation';
import {
  HeroSection,
  IntroductionSection,
  AgricultureSection,
  SustainabilitySection,
  ProjectsSection,
  AboutSection,
  ContactSection,
} from './sections';

export function App(): React.ReactElement {
  return (
    <SmoothScrollProvider>
      <CursorProvider>
        {/* Skip Navigation Landmark for Accessibility */}
        <SkipToContent targetId="main-content" />

        {/* Precision Custom Cursor (Only active on fine pointer devices) */}
        <CustomCursor />

        {/* Global Architectural Navigation Header */}
        <Header />

        {/* Semantic Main Content Landmark */}
        <main id="main-content" tabIndex={-1} className="outline-none flex-grow">
          {/* Chapter 01: Hero Experience */}
          <HeroSection id="hero" />

          {/* Chapter 02: Introduction & Agricultural Story */}
          <IntroductionSection id="introduction" />

          {/* Chapter 03: Agriculture Ecosystem & 7 Disciplines Archive */}
          <AgricultureSection id="agriculture" />

          {/* Chapter 04: Sustainability & Forward Vision */}
          <SustainabilitySection id="sustainability" />

          {/* Chapter 05: Demonstration Projects & Initiatives */}
          <ProjectsSection id="projects" />

          {/* Chapter 06: Corporate Heritage & Stewardship */}
          <AboutSection id="about" />

          {/* Chapter 07: Headquarters Contact & Final Chapter */}
          <ContactSection id="contact" />
        </main>

        {/* Corporate Architectural Footer */}
        <Footer />
      </CursorProvider>
    </SmoothScrollProvider>
  );
}

export default App;
