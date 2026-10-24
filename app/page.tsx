import { SiteInteractions } from "../src/components/site-interactions";

export default function Home() {
  return (
    <>
      <header className="absolute top-0 left-0 z-10 flex w-full items-center bg-transparent">
        <div className="container">
          <div className="relative flex items-center justify-between">
            <div className="px-4">
              <a
                href="#home"
                className="block py-6 text-lg font-bold text-primary"
              >
                gustafabayu
              </a>
            </div>
            <div className="flex items-center px-4">
              <button
                id="hamburger"
                name="hamburger"
                type="button"
                className="absolute right-4 block lg:hidden"
              >
                <span className="hamburger-line origin-top-left transition duration-300 ease-in-out"></span>
                <span className="hamburger-line transition duration-300 ease-in-out"></span>
                <span className="hamburger-line origin-bottom-left transition duration-300 ease-in-out"></span>
              </button>

              <nav
                id="nav-menu"
                className="absolute right-4 top-full hidden w-full max-w-[250px] rounded-lg bg-white py-5 shadow-lg dark:bg-dark dark:shadow-slate-500 lg:static lg:block lg:max-w-full lg:rounded-none lg:bg-transparent lg:shadow-none lg:dark:bg-transparent"
              >
                <ul className="block lg:flex">
                  <li className="group">
                    <a
                      href="#home"
                      className="mx-8 flex py-2 text-base text-dark group-hover:text-primary dark:text-white"
                    >
                      Home
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="#about"
                      className="mx-8 flex py-2 text-base text-dark group-hover:text-primary dark:text-white"
                    >
                      About
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="#portofolio"
                      className="mx-8 flex py-2 text-base text-dark group-hover:text-primary dark:text-white"
                    >
                      Portfolio
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="#client"
                      className="mx-8 flex py-2 text-base text-dark group-hover:text-primary dark:text-white"
                    >
                      Clients
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="#blog"
                      className="mx-8 flex py-2 text-base text-dark group-hover:text-primary dark:text-white"
                    >
                      Blog
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="#contact"
                      className="mx-8 flex py-2 text-base text-dark group-hover:text-primary dark:text-white"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>

      <section id="home" className="relative min-h-screen flex items-center pt-36 pb-20 dark:bg-dark overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 -z-10"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMzYjgyZjYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2djhoOHYtOGgtOHptMTAgNGgtNnY0aDZ2LTR6bS00IDJoMnYtMmgtMnYyem0tOC0yaC0ydjJoMnYtMnptLTQtMmgtMnYyaDJ2LTJ6bS0yLTRoLTJ2Mmgydi0yem00LTJoLTJ2Mmgydi0yek0zNiAwdjRoNFYwaDR2NGg0VjBoNHY0aDR2NGgtNHY0aDR2NGgtNHY0aDR2NGgtNHY0aDR2NGgtNHY0aDR2NGgtNHY0aDR2NGgtNHY0aDR2NGgtNHY0aC00di00aC00djRoLTR2LTRoLTR2NGgtNHYtNGgtNHY0aC00di00aC00djRoLTR2LTRoLTR2NGgtNHYtNEgwdi00aDR2LTRIMHYtNGg0di00SDB2LTRoNHYtNEgwdi00aDR2LTRIMHYtNGg0di00SDB2LTRoNFYwaDF6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-40 dark:opacity-20 -z-10"></div>
        
        <div className="container">
          <div className="flex flex-wrap items-center">
            <div className="w-full self-center px-4 lg:w-1/2 animate-fade-in">
              <div className="inline-block mb-4 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                <span className="text-sm font-semibold text-primary">👋 Available for freelance work</span>
              </div>
              <h1 className="text-5xl font-bold text-dark dark:text-white md:text-6xl lg:text-7xl leading-tight mb-6">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-primary via-blue-500 to-accent bg-clip-text text-transparent">
                  Gustafa
                </span>
              </h1>
              <h2 className="text-2xl font-semibold text-secondary dark:text-slate-300 lg:text-3xl mb-6">
                Full-Stack Developer & Mobile App Specialist
              </h2>
              <p className="text-lg leading-relaxed text-secondary dark:text-slate-400 mb-10 max-w-xl">
                I build web and mobile applications. From API design to polished interfaces, I handle the full stack and ship products that work.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-primary py-4 px-8 text-base font-semibold text-white transition-all duration-300 hover:bg-blue-600 hover:shadow-xl hover:-translate-y-1"
                >
                  Let's Work Together
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
                <a
                  href="#portofolio"
                  className="inline-flex items-center gap-2 rounded-xl border-2 border-primary py-4 px-8 text-base font-semibold text-primary transition-all duration-300 hover:bg-primary hover:text-white"
                >
                  View Portfolio
                </a>
              </div>
            </div>
            <div className="w-full self-center px-4 lg:w-1/2">
              <div className="relative mt-16 lg:mt-0 animate-float">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl"></div>
                <img
                  src="dist/img/programmer.png"
                  alt="gustafa"
                  className="relative mx-auto max-w-full drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-24 dark:bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/50 to-transparent dark:via-blue-900/10"></div>
        
        <div className="container relative z-10">
          <div className="flex flex-wrap items-center gap-8">
            <div className="w-full px-4 lg:w-1/2">
              <div className="inline-block mb-4 px-4 py-2 bg-primary/10 dark:bg-primary/20 rounded-full">
                <span className="text-sm font-semibold text-primary">About Me</span>
              </div>
              <h2 className="mb-6 text-4xl font-bold text-dark dark:text-white lg:text-5xl">
                I Write Code That{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Actually Ships
                </span>
              </h2>
              <p className="mb-6 text-lg leading-relaxed text-secondary dark:text-slate-300">
                Five years building production applications. I work with React, Next.js, Node.js, and React Native—technologies that let me move fast without compromising quality.
              </p>
              <p className="text-lg leading-relaxed text-secondary dark:text-slate-300">
                Whether you need a landing page or a full SaaS platform, I focus on shipping working software, not endless planning cycles.
              </p>
              
              <div className="mt-10 grid grid-cols-3 gap-6">
                <div className="text-center p-4 bg-white dark:bg-slate-800 rounded-xl shadow-sm">
                  <div className="text-3xl font-bold text-primary mb-1">5+</div>
                  <div className="text-sm text-secondary dark:text-slate-400">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-white dark:bg-slate-800 rounded-xl shadow-sm">
                  <div className="text-3xl font-bold text-primary mb-1">50+</div>
                  <div className="text-sm text-secondary dark:text-slate-400">Projects Done</div>
                </div>
                <div className="text-center p-4 bg-white dark:bg-slate-800 rounded-xl shadow-sm">
                  <div className="text-3xl font-bold text-primary mb-1">30+</div>
                  <div className="text-sm text-secondary dark:text-slate-400">Happy Clients</div>
                </div>
              </div>
            </div>
            
            <div className="w-full px-4 lg:w-1/2">
              <div className="bg-gradient-to-br from-white to-blue-50 dark:from-slate-800 dark:to-slate-900 rounded-2xl p-8 shadow-xl">
                <h3 className="mb-6 text-2xl font-bold text-dark dark:text-white">
                  Tech Stack & Skills
                </h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-semibold text-dark dark:text-white">Frontend Development</span>
                      <span className="text-sm font-semibold text-primary">90%</span>
                    </div>
                    <div className="h-3 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-primary to-blue-400 rounded-full" style={{width: '90%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-semibold text-dark dark:text-white">Backend Development</span>
                      <span className="text-sm font-semibold text-primary">85%</span>
                    </div>
                    <div className="h-3 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-primary to-blue-400 rounded-full" style={{width: '85%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-semibold text-dark dark:text-white">Mobile Development</span>
                      <span className="text-sm font-semibold text-primary">80%</span>
                    </div>
                    <div className="h-3 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-primary to-blue-400 rounded-full" style={{width: '80%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-semibold text-dark dark:text-white">UI/UX Design</span>
                      <span className="text-sm font-semibold text-primary">75%</span>
                    </div>
                    <div className="h-3 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-primary to-blue-400 rounded-full" style={{width: '75%'}}></div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-700">
                  <h4 className="mb-4 text-lg font-semibold text-dark dark:text-white">Connect With Me</h4>
                  <div className="flex gap-3">
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 hover:bg-primary hover:text-white hover:shadow-lg hover:-translate-y-1"
                    >
                      <svg role="img" width="20" className="fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                    <a
                      href="https://github.com"
                      target="_blank"
                      className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 hover:bg-primary hover:text-white hover:shadow-lg hover:-translate-y-1"
                    >
                      <svg role="img" width="20" className="fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                      </svg>
                    </a>
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 hover:bg-primary hover:text-white hover:shadow-lg hover:-translate-y-1"
                    >
                      <svg role="img" width="20" className="fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="portofolio"
        className="py-24 bg-white dark:bg-dark relative"
      >
        <div className="container">
          <div className="w-full px-4">
            <div className="mx-auto mb-16 max-w-2xl text-center">
              <div className="inline-block mb-4 px-4 py-2 bg-primary/10 dark:bg-primary/20 rounded-full">
                <span className="text-sm font-semibold text-primary">Portfolio</span>
              </div>
              <h2 className="mb-6 text-4xl font-bold text-dark dark:text-white sm:text-5xl lg:text-6xl">
                Featured{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Projects
                </span>
              </h2>
              <p className="text-lg text-secondary dark:text-slate-300">
                A showcase of my recent work and successful collaborations with clients worldwide.
              </p>
            </div>
          </div>

          <div className="flex w-full flex-wrap justify-center px-4 xl:mx-auto xl:w-11/12">
            <div className="mb-12 p-4 md:w-1/2">
              <div className="group relative overflow-hidden rounded-2xl bg-white dark:bg-slate-800 shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src="/dist/img/portofolio/1.jpg"
                    alt="E-commerce Platform"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-4 left-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="flex gap-2">
                      <span className="px-3 py-1 bg-primary text-white text-xs font-semibold rounded-full">Next.js</span>
                      <span className="px-3 py-1 bg-accent text-white text-xs font-semibold rounded-full">React</span>
                      <span className="px-3 py-1 bg-blue-500 text-white text-xs font-semibold rounded-full">Tailwind</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="mb-3 text-2xl font-bold text-dark dark:text-white group-hover:text-primary transition-colors">
                    E-commerce Platform
                  </h3>
                  <p className="text-base leading-relaxed text-secondary dark:text-slate-400 mb-4">
                    Modern e-commerce solution with seamless checkout, inventory management, and real-time analytics dashboard.
                  </p>
                  <a href="#" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
                    View Project
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mb-12 p-4 md:w-1/2">
              <div className="group relative overflow-hidden rounded-2xl bg-white dark:bg-slate-800 shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src="/dist/img/portofolio/2.jpg"
                    alt="Mobile Banking App"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-4 left-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="flex gap-2">
                      <span className="px-3 py-1 bg-primary text-white text-xs font-semibold rounded-full">React Native</span>
                      <span className="px-3 py-1 bg-accent text-white text-xs font-semibold rounded-full">Node.js</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="mb-3 text-2xl font-bold text-dark dark:text-white group-hover:text-primary transition-colors">
                    Mobile Banking App
                  </h3>
                  <p className="text-base leading-relaxed text-secondary dark:text-slate-400 mb-4">
                    Banking app with fingerprint login, balance checking, and peer-to-peer transfers.
                  </p>
                  <a href="#" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
                    View Project
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mb-12 p-4 md:w-1/2">
              <div className="group relative overflow-hidden rounded-2xl bg-white dark:bg-slate-800 shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src="/dist/img/portofolio/3.jpg"
                    alt="SaaS Dashboard"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-4 left-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="flex gap-2">
                      <span className="px-3 py-1 bg-primary text-white text-xs font-semibold rounded-full">Vue.js</span>
                      <span className="px-3 py-1 bg-accent text-white text-xs font-semibold rounded-full">TypeScript</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="mb-3 text-2xl font-bold text-dark dark:text-white group-hover:text-primary transition-colors">
                    SaaS Analytics Dashboard
                  </h3>
                  <p className="text-base leading-relaxed text-secondary dark:text-slate-400 mb-4">
                    Analytics platform with Chart.js visualizations, CSV exports, and role-based access control.
                  </p>
                  <a href="#" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
                    View Project
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mb-12 p-4 md:w-1/2">
              <div className="group relative overflow-hidden rounded-2xl bg-white dark:bg-slate-800 shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src="/dist/img/portofolio/4.jpg"
                    alt="Social Media Platform"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-4 left-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="flex gap-2">
                      <span className="px-3 py-1 bg-primary text-white text-xs font-semibold rounded-full">React</span>
                      <span className="px-3 py-1 bg-accent text-white text-xs font-semibold rounded-full">Firebase</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="mb-3 text-2xl font-bold text-dark dark:text-white group-hover:text-primary transition-colors">
                    Social Media Platform
                  </h3>
                  <p className="text-base leading-relaxed text-secondary dark:text-slate-400 mb-4">
                    Social network with photo feeds, direct messaging, and push notifications built on Firebase.
                  </p>
                  <a href="#" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
                    View Project
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="client"
        className="py-20 bg-slate-900 dark:bg-slate-800 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        
        <div className="container relative z-10">
          <div className="w-full px-4">
            <div className="mx-auto mb-16 text-center">
              <div className="inline-block mb-4 px-4 py-2 bg-primary/20 rounded-full">
                <span className="text-sm font-semibold text-primary">Trusted By</span>
              </div>
              <h2 className="mb-4 text-4xl font-bold text-white sm:text-5xl">
                Collaboration With{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Great Companies
                </span>
              </h2>
              <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                Companies I've worked with on web and mobile projects.
              </p>
            </div>
          </div>

          <div className="w-full px-4">
            <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12">
              <div className="group relative p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20">
                <img 
                  src="dist/img/clients/google.svg" 
                  alt="Google" 
                  className="h-12 w-auto opacity-70 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <div className="group relative p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20">
                <img 
                  src="dist/img/clients/Gojek.png" 
                  alt="Gojek" 
                  className="h-12 w-auto opacity-70 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <div className="group relative p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20">
                <img 
                  src="dist/img/clients/Shopee.png" 
                  alt="Shopee" 
                  className="h-12 w-auto opacity-70 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="blog" className="py-24 bg-slate-50 dark:bg-slate-900">
        <div className="container">
          <div className="w-full px-4">
            <div className="mx-auto mb-16 max-w-2xl text-center">
              <div className="inline-block mb-4 px-4 py-2 bg-primary/10 dark:bg-primary/20 rounded-full">
                <span className="text-sm font-semibold text-primary">Blog & Insights</span>
              </div>
              <h2 className="mb-6 text-4xl font-bold text-dark dark:text-white sm:text-5xl">
                Latest{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Articles
                </span>
              </h2>
              <p className="text-lg text-secondary dark:text-slate-300">
                Sharing knowledge, tips, and insights about web development and technology.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
              <article className="group mb-10 overflow-hidden rounded-2xl bg-white dark:bg-slate-800 shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src="https://source.unsplash.com/360x200?programming"
                    alt="Programming Tips"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-primary text-white text-xs font-semibold rounded-full">Tutorial</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4 text-sm text-secondary dark:text-slate-400">
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                      5 min read
                    </span>
                    <span>Oct 18, 2026</span>
                  </div>
                  <h3>
                    <a
                      href="#"
                      className="mb-3 block text-xl font-bold text-dark dark:text-white group-hover:text-primary transition-colors"
                    >
                      Modern JavaScript Best Practices
                    </a>
                  </h3>
                  <p className="mb-6 text-base leading-relaxed text-secondary dark:text-slate-400">
                    Learn essential JavaScript patterns and techniques to write cleaner, more efficient code.
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                  >
                    Read More
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </article>
            </div>
            
            <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
              <article className="group mb-10 overflow-hidden rounded-2xl bg-white dark:bg-slate-800 shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src="https://source.unsplash.com/360x200?mechanical+keyboard"
                    alt="Developer Setup"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-accent text-white text-xs font-semibold rounded-full">Tools</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4 text-sm text-secondary dark:text-slate-400">
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                      7 min read
                    </span>
                    <span>Oct 15, 2026</span>
                  </div>
                  <h3>
                    <a
                      href="#"
                      className="mb-3 block text-xl font-bold text-dark dark:text-white group-hover:text-primary transition-colors"
                    >
                      My Developer Setup for 2026
                    </a>
                  </h3>
                  <p className="mb-6 text-base leading-relaxed text-secondary dark:text-slate-400">
                    The VS Code extensions, terminal tools, and workflows I use daily to write better code.
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                  >
                    Read More
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </article>
            </div>
            
            <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
              <article className="group mb-10 overflow-hidden rounded-2xl bg-white dark:bg-slate-800 shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src="https://source.unsplash.com/360x200?monitor"
                    alt="Web Performance"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-blue-500 text-white text-xs font-semibold rounded-full">Performance</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4 text-sm text-secondary dark:text-slate-400">
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                      10 min read
                    </span>
                    <span>Oct 12, 2026</span>
                  </div>
                  <h3>
                    <a
                      href="#"
                      className="mb-3 block text-xl font-bold text-dark dark:text-white group-hover:text-primary transition-colors"
                    >
                      Making Websites Load Faster
                    </a>
                  </h3>
                  <p className="mb-6 text-base leading-relaxed text-secondary dark:text-slate-400">
                    Image optimization, code splitting, and caching strategies that actually moved the needle on load times.
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                  >
                    Read More
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 bg-white dark:bg-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"></div>
        
        <div className="container relative z-10">
          <div className="w-full px-4">
            <div className="mx-auto mb-16 max-w-2xl text-center">
              <div className="inline-block mb-4 px-4 py-2 bg-primary/10 dark:bg-primary/20 rounded-full">
                <span className="text-sm font-semibold text-primary">Get In Touch</span>
              </div>
              <h2 className="mb-6 text-4xl font-bold text-dark dark:text-white sm:text-5xl">
                Start a{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Project
                </span>
              </h2>
              <p className="text-lg text-secondary dark:text-slate-300">
                Got a project? Send me the details and I'll get back to you within 24 hours.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap -mx-4">
            <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
              <div className="bg-gradient-to-br from-primary to-accent p-8 rounded-2xl text-white h-full">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Email</h4>
                      <p className="text-white/90">gustafabayu@outlook.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Location</h4>
                      <p className="text-white/90">Bogor, Indonesia</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Availability</h4>
                      <p className="text-white/90">Open for freelance projects</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8 pt-8 border-t border-white/20">
                  <p className="text-sm text-white/80 mb-4">Connect with me on social media</p>
                  <div className="flex gap-3">
                    <a href="https://linkedin.com" target="_blank" className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                    <a href="https://github.com" target="_blank" className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                      </svg>
                    </a>
                    <a href="https://twitter.com" target="_blank" className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2 px-4">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-dark dark:text-white mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-xl bg-slate-100 dark:bg-slate-800 border border-transparent text-dark dark:text-white placeholder-secondary focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-dark dark:text-white mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-slate-100 dark:bg-slate-800 border border-transparent text-dark dark:text-white placeholder-secondary focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-dark dark:text-white mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    placeholder="Project inquiry"
                    className="w-full px-4 py-3 rounded-xl bg-slate-100 dark:bg-slate-800 border border-transparent text-dark dark:text-white placeholder-secondary focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-dark dark:text-white mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    placeholder="Tell me about your project..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-100 dark:bg-slate-800 border border-transparent text-dark dark:text-white placeholder-secondary focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary to-accent text-white font-semibold py-4 px-8 rounded-xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-slate-900 dark:bg-slate-950 pt-20 pb-12">
        <div className="container">
          <div className="flex flex-wrap pb-12 border-b border-slate-800">
            <div className="w-full md:w-1/3 px-4 mb-8">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
                Gustafa
              </h2>
              <p className="text-slate-400 leading-relaxed mb-6">
                Developer focused on building web and mobile apps that work.
              </p>
              <div className="flex gap-3">
                <a href="https://linkedin.com" target="_blank" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-all">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a href="https://github.com" target="_blank" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-all">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                </a>
                <a href="https://twitter.com" target="_blank" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-all">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-8">
              <h3 className="text-lg font-bold text-white mb-6">Quick Links</h3>
              <ul className="space-y-3">
                <li><a href="#home" className="text-slate-400 hover:text-primary transition-colors">Home</a></li>
                <li><a href="#about" className="text-slate-400 hover:text-primary transition-colors">About</a></li>
                <li><a href="#portofolio" className="text-slate-400 hover:text-primary transition-colors">Portfolio</a></li>
                <li><a href="#blog" className="text-slate-400 hover:text-primary transition-colors">Blog</a></li>
                <li><a href="#contact" className="text-slate-400 hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-8">
              <h3 className="text-lg font-bold text-white mb-6">Services</h3>
              <ul className="space-y-3">
                <li><span className="text-slate-400">Web Development</span></li>
                <li><span className="text-slate-400">Mobile Apps</span></li>
                <li><span className="text-slate-400">UI/UX Design</span></li>
                <li><span className="text-slate-400">Consulting</span></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 text-center">
            <p className="text-slate-500">
              © 2026 Gustafa. Made with <span className="text-red-500">❤</span> using Next.js & Tailwind CSS
            </p>
          </div>
        </div>
      </footer>

      <a
        href="#home"
        className="fixed bottom-4 right-4 z-[9999] hidden h-14 w-14 items-center justify-center rounded-full bg-primary p-4 hover:animate-pulse"
        id="top-page"
      >
        <span className="mt-2 block h-5 w-5 rotate-45 border-t-2 border-l-2"></span>
      </a>
      <SiteInteractions />
    </>
  );
}
