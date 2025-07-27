import { FileText, Download, Palette, Zap, User, Briefcase, GraduationCap, Code, FolderOpen } from "lucide-react";
import PersonalInfoForm from "../components/forms/PersonalInfoForm";
import ExperienceForm from "../components/forms/ExperienceForm";
import EducationalForm from "../components/forms/EducationalForm";
import SkillsForm from "../components/forms/SkillsForm";
import ProjectForm from "../components/forms/ProjectForm";

export const mockData = {
  features: [
    {
      icon: FileText,
      title: "20+ Professional Templates",
      description:
        "Choose from a wide variety of professionally designed templates for every industry.",
    },
    {
      icon: Palette,
      title: "Full Customization",
      description:
        "Customize colors, fonts, spacing, and layout to match your personal brand.",
    },
    {
      icon: Download,
      title: "PDF Download",
      description:
        "Download your resume as a high-quality PDF ready for printing or sharing.",
    },
    {
      icon: Zap,
      title: "Quick & Easy",
      description:
        "Build your professional resume in minutes with our intuitive form builder.",
    },
  ],
  formTabs: [
    {
      id: "personal-info",
      label: "Personal",
      icon: User,
      component: PersonalInfoForm,
    },
    {
      id: "experience",
      label: "Experience",
      icon: Briefcase,
      component: ExperienceForm,
    },
    {
      id: "education",
      label: "Education",
      icon: GraduationCap,
      component: EducationalForm,
    },
    {
      id: "skills",
      label: "Skills",
      icon: Code,
      component: SkillsForm,
    },
    {
      id: "projects",
      label: "Projects",
      icon: FolderOpen,
      component: ProjectForm,
    },
  ],
};
