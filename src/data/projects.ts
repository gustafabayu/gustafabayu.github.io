export type Project = {
  id: string;
  name: string;
  category: string;
  description: string;
  role: string;
  technologies: string[];
  outcome?: string;
  image?: string;
  links: {
    demo?: string;
    github?: string;
    case_study?: string;
  };
};

// TODO: Replace with real project data
// Current placeholders need verification and actual project details
export const projects: Project[] = [
  {
    id: "project-1",
    name: "Project Name Here",
    category: "Web Application",
    description: "Brief description of the problem this project solves and what was built. This is a placeholder that needs real project information.",
    role: "Full-stack development, API design, deployment",
    technologies: ["React", "Node.js", "PostgreSQL"],
    outcome: "Add real outcome or metrics here if available",
    image: "/dist/img/portofolio/1.jpg",
    links: {
      // demo: "https://example.com",
      // github: "https://github.com/username/repo",
      // case_study: "#",
    },
  },
  {
    id: "project-2",
    name: "Another Project",
    category: "API Integration",
    description: "Another placeholder project description. Replace with actual project details, problem statement, and solution.",
    role: "Backend development, API integration",
    technologies: ["Node.js", "Express", "MongoDB"],
    image: "/dist/img/portofolio/2.jpg",
    links: {},
  },
  {
    id: "project-3",
    name: "Third Project",
    category: "Internal Tool",
    description: "Third placeholder. Add real project information including the business problem, technical approach, and measurable results if available.",
    role: "Full-stack development",
    technologies: ["TypeScript", "Next.js", "Prisma"],
    image: "/dist/img/portofolio/3.jpg",
    links: {},
  },
];
