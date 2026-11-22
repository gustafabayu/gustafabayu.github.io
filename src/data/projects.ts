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

export const projects: Project[] = [
  {
    id: "huntbazaar",
    name: "Huntbazaar 2026",
    category: "Laravel platform",
    description: "Invitation-only event registration with secure links, attendee preferences, admin management, and queued notifications.",
    role: "Full-stack development",
    technologies: ["Laravel", "Blade", "Queues"],
    outcome: "Secure registration and administration for a 2026 event.",
    image: "/dist/img/architecture/stair.jpg",
    links: {
      github: "https://github.com/gustafabayu/huntbazaar-invitation-registration",
    },
  },
  {
    id: "go-bookstore",
    name: "Go Bookstore",
    category: "REST API",
    description: "A MySQL-backed book management service built to practice idiomatic Go, persistence, and API structure.",
    role: "Backend development",
    technologies: ["Go", "MySQL"],
    image: "/dist/img/architecture/building.jpg",
    links: {
      github: "https://github.com/gustafabayu/go-bookstore",
    },
  },
  {
    id: "spring-adminhr",
    name: "Spring Admin HR",
    category: "REST API",
    description: "Spring Boot and PostgreSQL REST API focused on structured administration and backend API conventions.",
    role: "Backend development",
    technologies: ["Java", "Spring", "PostgreSQL"],
    image: "/dist/img/architecture/concrete.jpg",
    links: {
      github: "https://github.com/gustafabayu/spring-adminhr",
    },
  },
  {
    id: "microservice-order",
    name: "Go Order Microservice",
    category: "Microservice",
    description: "An order service built with Go, Chi, and Redis for exploring service boundaries and storage integration.",
    role: "Backend development",
    technologies: ["Go", "Chi", "Redis"],
    image: "/dist/img/architecture/facade.jpg",
    links: {
      github: "https://github.com/gustafabayu/go-miserv-order",
    },
  },
  {
    id: "spring-membership",
    name: "Spring Membership",
    category: "REST API",
    description: "Membership REST service documented with OpenAPI and built around a maintainable Spring project structure.",
    role: "Backend development",
    technologies: ["Java", "Spring", "OpenAPI"],
    image: "/dist/img/architecture/stair.jpg",
    links: {
      github: "https://github.com/gustafabayu/spring-membership",
    },
  },
];
