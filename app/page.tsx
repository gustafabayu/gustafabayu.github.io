import { ProjectIndex } from "../src/components/project-index";
import { projects } from "../src/data/projects";

export default function Home() {
  return (
    <div className="print-site">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <header className="print-header">
        <div className="header-inner">
          <a className="wordmark" href="#home" aria-label="Gustafa Bayu, home">
            Gustafa Bayu <span>/ Application developer</span>
          </a>
          <nav className="site-nav" aria-label="Primary navigation">
            <a href="#work">Work</a>
            <a href="#building">Practice</a>
            <a href="#about">About</a>
          </nav>
          <a className="header-contact" href="#contact">
            Let&apos;s talk
          </a>
        </div>
      </header>

      <main id="main-content">
        <section id="home" className="opening-section" aria-labelledby="opening-title">
          <div className="opening-grid">
            <div className="opening-copy">
              <h1 id="opening-title">
                Built in <span>layers.</span>
                <br />
                Made to <span className="title-highlight">work.</span>
              </h1>
              <p className="opening-intro">
                Application developer focused on backend systems, APIs, and web
                applications, with more than 10 years of professional experience.
              </p>
              <div className="opening-actions">
                <a
                  className="primary-action"
                  href="https://linkedin.com/in/gustafabayu"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Start a project conversation
                  <svg aria-hidden="true" viewBox="0 0 20 20">
                    <path d="M4 10h11M10 4l6 6-6 6" />
                  </svg>
                </a>
                <a className="work-action" href="#work">
                  Browse the work
                </a>
              </div>
            </div>

            <div className="print-art" aria-hidden="true">
              <span className="ink-plate ink-plate-pink" />
              <span className="ink-plate ink-plate-yellow" />
              <span className="ink-plate ink-plate-blue" />
              <span className="registration-mark" />
            </div>

            <section id="work" className="work-section" aria-labelledby="work-title">
              <div className="work-heading">
                <div>
                  <h2 id="work-title">Selected work</h2>
                  <p>Choose a record to inspect its scope and stack.</p>
                </div>
                <span className="work-count">
                  {projects.length} public repositories
                </span>
              </div>
              <ProjectIndex projects={projects} />
            </section>
          </div>
        </section>

        <section
          id="building"
          className="practice-section"
          aria-labelledby="practice-title"
        >
          <div className="practice-inner">
            <div>
              <h2 id="practice-title">Building beyond client work.</h2>
              <p className="practice-lead">
                I find real problems, validate an idea, ship a small first
                version, and learn from the people who use it.
              </p>
            </div>
            <p className="practice-focus">
              Currently exploring
              <span>developer tools</span>
              <span>workflow automation</span>
            </p>
          </div>
        </section>

        <section id="about" className="about-section" aria-labelledby="about-title">
          <div className="about-inner">
            <h2 id="about-title">Engineer. Product-minded.</h2>
            <div className="about-copy">
              <p>
                I focus on backend systems and APIs: the parts of software that
                need to be reliable, maintainable, and ready to evolve.
              </p>
              <p>
                Good engineering starts with understanding the problem. I ask
                questions, suggest simpler paths, and communicate clearly about
                what is feasible.
              </p>
              <p>
                Client work teaches execution and reliability. Product work
                teaches ownership and decision-making. Both shape how I build.
              </p>
              <p className="about-signoff">
                Gustafa Bayu
                <span>Application developer</span>
              </p>
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="contact-section"
          aria-labelledby="contact-title"
        >
          <div className="contact-inner">
            <h2 id="contact-title">Have a problem worth solving?</h2>
            <p>
              Share a backend challenge, integration, MVP, or web application
              with me.
            </p>
            <div className="contact-actions">
              <a
                className="primary-action"
                href="https://linkedin.com/in/gustafabayu"
                target="_blank"
                rel="noopener noreferrer"
              >
                Start a conversation
                <svg aria-hidden="true" viewBox="0 0 20 20">
                  <path d="M4 10h11M10 4l6 6-6 6" />
                </svg>
              </a>
              <a
                href="https://github.com/gustafabayu"
                target="_blank"
                rel="noopener noreferrer"
              >
                Browse GitHub
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p>© {new Date().getFullYear()} Gustafa Bayu</p>
        <a href="#home">Back to top</a>
      </footer>
    </div>
  );
}
