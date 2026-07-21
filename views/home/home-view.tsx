import { HeroSection } from "@/views/home/hero-section";
import { SkillsView } from "@/views/skill/skill-view";
import { EducationExperienceSection } from "@/views/home/education-experience-section";
import { ProjectsView } from "@/views/projects/projects-view";
import { BlogView } from "@/views/blog/blog-view";
import { ContactView } from "@/views/contact/contact-view";

const HomeView = () => {
  return (
    <>
      <HeroSection />
      <SkillsView />
      <EducationExperienceSection />
      <ProjectsView />
      <BlogView />
      <ContactView />
    </>
  );
};

export default HomeView;