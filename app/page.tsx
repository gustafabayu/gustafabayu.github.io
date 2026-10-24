import { SiteInteractions } from "../src/components/site-interactions";
import { projects } from "../src/data/projects";

export default function Home() {
  return (
    <>
      <header className="absolute top-0 left-0 z-10 flex w-full items-center bg-transparent">
        <div className="container max-w-container">
          <div className="relative flex items-center justify-between py-6">
            <div>
              <a href="#home" className="text-lg font-semibold text-ink hover:text-accent">
                gustafabayu
              </a>
            </div>
            <div className="flex items-center">
              <button
                id="hamburger"
                name="hamburger"
                type="button"
                aria-label="Toggle navigation menu"
                className="block lg:hidden"
              >
                <span className="hamburger-line"></span>
                <span className="hamburger-line"></span>
                <span className="hamburger-line"></span>
              </button>

              <nav
                id="nav-menu"
                className="absolute right-0 top-full mt-2 hidden w-56 rounded-lg bg-surface py-4 shadow-lg border border-border lg:static lg:mt-0 lg:block lg:w-auto lg:rounded-none lg:bg-transparent lg:shadow-none lg:border-0"
              >
                <ul className="block lg:flex lg:items-center lg:gap-8">
                  <li>
                    <a href="#work" className="block px-6 py-2 text-base text-ink hover:text-accent lg:px-0">
                      Work
                    </a>
                  </li>
                  <li>
                    <a href="#about" className="block px-6 py-2 text-base text-ink hover:text-accent lg:px-0">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#building" className="block px-6 py-2 text-base text-ink hover:text-accent lg:px-0">
                      Building
                    </a>
                  </li>
                  <li>
                    <a href="#contact" className="block px-6 py-2 text-base text-ink hover:text-accent lg:px-0">
                      Contact
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>

      <section id="home" className="pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="container max-w-container">
          <div className="max-w-3xl">
            <h1 className="mb-6 text-5xl font-bold leading-tight text-ink lg:text-6xl xl:text-7xl">
              I build reliable software for real business problems.
            </h1>
            <p className="mb-4 text-lg leading-relaxed text-muted lg:text-xl">
              Backend systems, APIs, and web applications built with a focus on maintainability, performance, and useful product experiences. I also build and explore SaaS ideas of my own.
            </p>
            <p className="mb-10 text-base text-muted font-mono">
              Backend · APIs · Product Engineering
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#work"
                className="inline-flex items-center gap-2 rounded-lg bg-ink px-6 py-3 text-base font-semibold text-white hover:bg-accent transition-colors"
              >
                Explore my work
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-lg border-2 border-ink px-6 py-3 text-base font-semibold text-ink hover:bg-ink hover:text-white transition-colors"
              >
                Discuss a project
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="py-24 lg:py-32 border-t border-border">
        <div className="container max-w-container">
          <div className="mb-16 max-w-3xl">
            <h2 className="mb-4 text-4xl font-bold text-ink lg:text-5xl">
              Selected work
            </h2>
            <p className="text-lg text-muted leading-relaxed">
              A few projects that show how I approach problems, design systems, and turn requirements into working software.
            </p>
          </div>

          <div className="grid gap-12 lg:gap-16">
            {projects.map((project) => (
              <article key={project.id} className="group">
                <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
                  <div className="order-2 lg:order-1">
                    <div className="mb-2 flex items-center gap-3">
                      <h3 className="text-2xl font-bold text-ink lg:text-3xl">
                        {project.name}
                      </h3>
                      <span className="text-sm text-muted font-mono">·</span>
                      <span className="text-sm text-muted">{project.category}</span>
                    </div>
                    <p className="mb-4 text-base leading-relaxed text-ink">
                      {project.description}
                    </p>
                    <p className="mb-4 text-sm text-muted">
                      <span className="font-semibold text-ink">Role:</span> {project.role}
                    </p>
                    <div className="mb-6 flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded bg-dark-surface px-3 py-1 text-sm font-mono text-ink"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    {project.outcome && (
                      <p className="mb-6 text-sm text-muted">
                        <span className="font-semibold text-ink">Outcome:</span> {project.outcome}
                      </p>
                    )}
                    <div className="flex flex-wrap gap-4">
                      {project.links.demo && (
                        <a
                          href={project.links.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-semibold text-accent hover:underline"
                        >
                          Live demo ↗
                        </a>
                      )}
                      {project.links.github && (
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-semibold text-accent hover:underline"
                        >
                          Source ↗
                        </a>
                      )}
                      {project.links.case_study && (
                        <a
                          href={project.links.case_study}
                          className="text-sm font-semibold text-accent hover:underline"
                        >
                          Case study ↗
                        </a>
                      )}
                    </div>
                  </div>
                  <div className="order-1 lg:order-2">
                    {project.image ? (
                      <div className="overflow-hidden rounded-lg border border-border bg-surface">
                        <img
                          src={project.image}
                          alt={`${project.name} screenshot`}
                          className="w-full h-auto object-cover"
                        />
                      </div>
                    ) : (
                      <div className="flex items-center justify-center rounded-lg border border-border bg-dark-surface h-64 lg:h-80">
                        <span className="text-sm text-muted">Project image placeholder</span>
                      </div>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-dark-surface">
        <div className="container max-w-container">
          <div className="mb-16 max-w-3xl">
            <h2 className="mb-4 text-4xl font-bold text-ink lg:text-5xl">
              How I can help
            </h2>
            <p className="text-lg text-muted leading-relaxed">
              From an early product idea to a system that needs to scale, I focus on making the technical work clear, maintainable, and useful to the business.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <h3 className="mb-3 text-xl font-bold text-ink">
                Backend & API engineering
              </h3>
              <p className="text-base leading-relaxed text-muted">
                API design, business logic, integrations, authentication and authorization.
              </p>
            </div>
            <div>
              <h3 className="mb-3 text-xl font-bold text-ink">
                Data & systems
              </h3>
              <p className="text-base leading-relaxed text-muted">
                Data modeling, database design, query performance, reliable background processing, observability.
              </p>
            </div>
            <div>
              <h3 className="mb-3 text-xl font-bold text-ink">
                Product engineering
              </h3>
              <p className="text-base leading-relaxed text-muted">
                MVP implementation, internal tools, web applications, and practical technical decisions from concept to delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 border-t border-border">
        <div className="container max-w-container">
          <div className="mb-16 max-w-3xl">
            <h2 className="mb-4 text-4xl font-bold text-ink lg:text-5xl">
              A clear path from problem to delivery.
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="mb-3 text-2xl font-bold text-accent font-mono">01</div>
              <h3 className="mb-2 text-xl font-bold text-ink">Understand</h3>
              <p className="text-base leading-relaxed text-muted">
                Clarify the users, business constraints, requirements, and definition of success.
              </p>
            </div>
            <div>
              <div className="mb-3 text-2xl font-bold text-accent font-mono">02</div>
              <h3 className="mb-2 text-xl font-bold text-ink">Plan</h3>
              <p className="text-base leading-relaxed text-muted">
                Agree on a pragmatic solution, scope, architecture, and delivery milestones.
              </p>
            </div>
            <div>
              <div className="mb-3 text-2xl font-bold text-accent font-mono">03</div>
              <h3 className="mb-2 text-xl font-bold text-ink">Build</h3>
              <p className="text-base leading-relaxed text-muted">
                Implement in small, testable increments, communicate trade-offs, and validate key flows.
              </p>
            </div>
            <div>
              <div className="mb-3 text-2xl font-bold text-accent font-mono">04</div>
              <h3 className="mb-2 text-xl font-bold text-ink">Deliver & improve</h3>
              <p className="text-base leading-relaxed text-muted">
                Document, deploy within the agreed setup, and identify sensible next steps.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="building" className="py-24 lg:py-32 bg-dark-surface">
        <div className="container max-w-container">
          <div className="max-w-3xl">
            <h2 className="mb-4 text-4xl font-bold text-ink lg:text-5xl">
              Building beyond client work.
            </h2>
            <p className="mb-6 text-lg text-muted leading-relaxed">
              I'm interested in building useful products of my own—finding a real problem, validating the idea, shipping a small first version, and learning from the people who use it.
            </p>
            <p className="text-base text-muted">
              <span className="font-semibold text-ink">Currently exploring:</span> Product ideas in developer tools and workflow automation.
            </p>
          </div>
        </div>
      </section>

      <section id="about" className="py-24 lg:py-32 border-t border-border">
        <div className="container max-w-container">
          <div className="max-w-3xl">
            <h2 className="mb-6 text-4xl font-bold text-ink lg:text-5xl">
              Engineer by craft. Product-minded by curiosity.
            </h2>
            <div className="space-y-4 text-base leading-relaxed text-ink">
              <p>
                I focus on backend systems and APIs—the parts of software that need to be reliable, maintainable, and ready to evolve with the business. I enjoy working through technical trade-offs, designing clear interfaces, and making sure the system does what it's supposed to do.
              </p>
              <p>
                Beyond implementation, I care about why something is being built and who it's for. Good engineering starts with understanding the problem, not just executing a spec. I ask questions, suggest alternatives when I see a simpler path, and communicate clearly about what's feasible and what's not.
              </p>
              <p>
                I'm also interested in building products of my own. Client work teaches execution and reliability; product work teaches ownership and decision-making. Both make me better at what I do.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 lg:py-32 bg-dark-surface">
        <div className="container max-w-container">
          <div className="max-w-3xl">
            <h2 className="mb-4 text-4xl font-bold text-ink lg:text-5xl">
              Have a problem worth solving? Let's talk.
            </h2>
            <p className="mb-10 text-lg text-muted leading-relaxed">
              If you need help with a backend, an integration, an MVP, or a web application, share a little about the problem and what you want to achieve.
            </p>
            <div className="space-y-6">
              <p className="text-base text-ink">
                <span className="font-semibold">Email:</span>{" "}
                <a href="mailto:contact@example.com" className="text-accent hover:underline">
                  contact@example.com
                </a>
                <span className="ml-2 text-sm text-muted">(TODO: Add real email address)</span>
              </p>
              <div className="flex gap-6">
                <a
                  href="https://github.com/gustafabayu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink hover:text-accent transition-colors"
                  aria-label="GitHub"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
                <a
                  href="https://linkedin.com/in/gustafabayu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink hover:text-accent transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-12">
        <div className="container max-w-container">
          <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
            <div>
              <p className="text-sm text-muted">
                © {new Date().getFullYear()} Gustafa Bayu. Independent software engineer.
              </p>
            </div>
            <div className="flex gap-6">
              <a
                href="https://github.com/gustafabayu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted hover:text-accent transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/gustafabayu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted hover:text-accent transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="mailto:contact@example.com"
                className="text-sm text-muted hover:text-accent transition-colors"
              >
                Email
              </a>
            </div>
          </div>
        </div>
      </footer>

      <a
        id="top-page"
        href="#home"
        className="fixed bottom-8 right-8 z-50 hidden h-12 w-12 items-center justify-center rounded-full bg-accent text-white shadow-lg hover:bg-ink transition-colors"
        aria-label="Back to top"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </a>

      <SiteInteractions />
    </>
  );
}