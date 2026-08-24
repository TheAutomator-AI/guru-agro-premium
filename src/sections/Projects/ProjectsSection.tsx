import React from 'react';
import { ProjectsHeader } from './ProjectsHeader';
import { DesktopProjectsJournal } from './DesktopProjectsJournal';
import { MobileProjectsJournal } from './MobileProjectsJournal';

export interface ProjectsSectionProps {
  id?: string;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ id = 'projects' }) => {
  return (
    <section
      id={id}
      aria-labelledby="projects-heading"
      className="relative bg-botanical-950 text-ivory-100 overflow-hidden border-t border-ivory-200/10"
    >
      {/* 01: Projects Section Editorial Header */}
      <ProjectsHeader />

      {/* 02: Desktop Case Study Journal (>= 1024px) */}
      <div className="hidden lg:block">
        <DesktopProjectsJournal />
      </div>

      {/* 02: Mobile & Tablet Vertical Case Study Flow (< 1024px) */}
      <div className="block lg:hidden">
        <MobileProjectsJournal />
      </div>
    </section>
  );
};
