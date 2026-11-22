import { SiteInteractions } from "../src/components/site-interactions";
import { projects } from "../src/data/projects";

export default function Home() {
  return (
    <>
      <header className="fixed top-0 z-50 hidden w-full lg:block">
        <div className="flex items-center justify-between px-8 py-5">
          <a href="#home" className="text-sm font-semibold text-ink">
            gustafabayu
          </a>
          <nav aria-label="Primary navigation" className="flex items-center gap-7">
            <a href="#work" className="text-sm text-ink hover:text-accent">Work</a>
            <a href="#about" className="text-sm text-ink hover:text-accent">About</a>
            <a href="#building" className="text-sm text-ink hover:text-accent">Building</a>
            <a href="#contact" className="bg-accent px-4 py-2 text-sm font-semibold text-white hover:bg-ink">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main className="site-shell">
        <aside className="fixed-media overflow-visible bg-dark-surface" aria-label="Architecture photography">
          <div className="absolute inset-3 overflow-hidden">
            <img
              id="fixed-project-image"
              src="/dist/img/architecture/stair.jpg"
              alt="Narrow opening above a modern stair"
              width="1600"
              height="1000"
              fetchPriority="high"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute bottom-0 left-0 z-10 hidden px-8 pb-8 lg:block">
            <span className="text-sm font-semibold text-white">Independent software engineer</span>
          </div>
        </aside>

        <div className="bg-bg">
          <section id="home" className="flex min-h-[100svh] flex-col justify-between px-6 py-6 lg:px-16 lg:py-8">
            <div className="flex items-center justify-between lg:hidden">
              <a href="#home" className="text-lg font-semibold text-ink">gustafabayu</a>
              <a href="#contact" className="bg-accent px-4 py-3 text-sm font-semibold text-white">Contact</a>
            </div>

            <div className="my-auto max-w-[48ch]">
              <h1 className="text-balance text-4xl font-semibold leading-[1.02] tracking-tight text-ink sm:text-5xl lg:text-[clamp(3.5rem,4.5vw,4.5rem)]">
                I build software.
              </h1>
              <p className="mt-6 max-w-[38ch] text-lg leading-relaxed text-ink lg:text-xl">
                Backend systems, APIs, and web applications for businesses, from a clear problem to a system built to evolve.
              </p>
              <a
                href="#work"
                className="mt-8 inline-flex min-h-12 items-center bg-ink px-6 py-3 text-base font-semibold text-white hover:bg-accent"
              >
                View selected work
              </a>
            </div>

          </section>

          <section id="work" className="scroll-reveal px-6 py-24 lg:px-16 lg:py-32">
            <div className="max-w-[46rem]">
              <h2 className="mb-3 text-3xl font-semibold tracking-tight text-ink lg:text-4xl">
                Selected work
              </h2>
              <p className="mb-12 max-w-[38ch] text-base leading-relaxed text-ink">
                Real repositories that show API design, persistence, integration, and product delivery.
              </p>

              <div>
                {projects.map((project, index) => (
                  <article key={project.id}>
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-row grid min-h-16 grid-cols-[1fr_auto] items-start gap-4 py-5 text-ink"
                      data-project-image={project.image}
                      data-project-alt={`${project.name} project`}
                    >
                      <div>
                        <h3 className="text-lg font-semibold">{project.name}</h3>
                        <span className="mt-1 block text-sm text-muted lg:hidden">{project.category}</span>
                      </div>
                      <div className="hidden text-right lg:block">
                        <span className="text-sm text-muted">{project.category}</span>
                        <span className="mt-1 block text-sm text-accent">View source</span>
                      </div>
                      <img
                        src={project.image}
                        alt=""
                        width="1600"
                        height="1000"
                        loading={index < 2 ? "eager" : "lazy"}
                        className="col-span-2 mt-3 w-full max-h-48 object-cover"
                      />
                    </a>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section id="building" className="scroll-reveal bg-dark-surface px-6 py-24 lg:px-16 lg:py-32">
            <div className="max-w-[38rem]">
              <h2 className="text-balance text-3xl font-semibold leading-tight tracking-tight text-ink lg:text-4xl">
                Building beyond client work.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-ink">
                I find real problems, validate an idea, ship a small first version, and learn from the people who use it.
              </p>
              <p className="mt-8 max-w-[34ch] text-base leading-relaxed text-muted">
                Currently exploring developer tools and workflow automation.
              </p>
            </div>
          </section>

          <section id="about" className="scroll-reveal px-6 py-24 lg:px-16 lg:py-32">
            <div className="max-w-[38rem]">
              <div className="mb-8 h-11 w-11 bg-accent" aria-label="Gustafa Bayu" role="img"></div>
              <h2 className="mb-8 text-3xl font-semibold leading-tight tracking-tight text-ink lg:text-4xl">
                Engineer. Product-minded.
              </h2>
              <div className="space-y-5 text-base leading-relaxed text-ink">
                <p>
                  I focus on backend systems and APIs: the parts of software that need to be reliable, maintainable, and ready to evolve.
                </p>
                <p>
                  Good engineering starts with understanding the problem. I ask questions, suggest simpler paths, and communicate clearly about what is feasible.
                </p>
                <p>
                  Client work teaches execution and reliability. Product work teaches ownership and decision-making. Both shape how I build.
                </p>
              </div>
              <p className="mt-10 text-xl font-semibold text-ink">
                Gustafa Bayu
                <span className="mt-1 block text-sm font-normal text-muted">Software engineer</span>
              </p>
            </div>
          </section>

          <section id="contact" className="scroll-reveal bg-accent px-6 py-24 text-white lg:px-16 lg:py-32">
            <div className="max-w-[38rem]">
              <h2 className="text-balance text-3xl font-semibold leading-tight tracking-tight lg:text-4xl">
                Have a problem worth solving?
              </h2>
              <p className="mt-6 max-w-[36ch] text-lg leading-relaxed">
                Share a backend challenge, integration, MVP, or web application with me.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="https://github.com/gustafabayu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 items-center bg-white px-6 py-3 font-semibold text-ink hover:bg-bg"
                >
                  GitHub
                </a>
                <a
                  href="https://linkedin.com/in/gustafabayu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 items-center border-2 border-white px-6 py-3 font-semibold text-white hover:bg-white hover:text-ink"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </section>

          <footer className="px-6 py-10 lg:px-16">
            <div className="flex flex-col gap-4 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
              <p>© {new Date().getFullYear()} Gustafa Bayu</p>
              <a href="#home" className="font-semibold text-ink hover:text-accent">Back to top</a>
            </div>
          </footer>
        </div>
      </main>

      <SiteInteractions />
    </>
  );
}
