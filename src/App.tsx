import { Header } from './components/header';
import { HeroSection } from './components/sections/hero';
import { AboutMeSection } from './components/sections/about-me';
import { WorkExperienceSection } from './components/sections/work-experience';
import { ProjectsSection } from './components/sections/projects';
import { EducationSection } from './components/sections/education';
import { Footer } from './components/footer';
import { StructuredDataPerson } from './components/seo/structured-data';

export function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <AboutMeSection />
      <WorkExperienceSection />
      <ProjectsSection />
      <EducationSection />
      <Footer />
      <StructuredDataPerson />
    </div>
  );
}