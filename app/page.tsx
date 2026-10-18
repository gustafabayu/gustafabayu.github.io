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
                      Beranda
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="#about"
                      className="mx-8 flex py-2 text-base text-dark group-hover:text-primary dark:text-white"
                    >
                      Tentang
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="#portofolio"
                      className="mx-8 flex py-2 text-base text-dark group-hover:text-primary dark:text-white"
                    >
                      Porto
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="#client"
                      className="mx-8 flex py-2 text-base text-dark group-hover:text-primary dark:text-white"
                    >
                      Client
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
                  <li className="mt-3 flex items-center pl-8 lg:mt-0">
                    <div className="flex">
                      <span className="mr-2 text-sm text-slate-500">light</span>
                      <input
                        type="checkbox"
                        className="hidden"
                        id="dark-toggle"
                      />
                      <label htmlFor="dark-toggle">
                        <div className="flex h-5 w-9 cursor-pointer items-center rounded-full bg-slate-500 p-1">
                          <div className="toggle-circle h-4 w-4 rounded-full bg-white transition duration-300 ease-in-out"></div>
                        </div>
                      </label>
                      <span className="ml-2 text-sm text-slate-500">dark</span>
                    </div>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>

      <section id="home" className="pt-36 dark:bg-dark">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full self-center px-4 lg:w-1/2">
              <h1 className="text-base font-semibold text-primary md:text-xl">
                halo 👋, Saya{" "}
                <span className="mt-1 block text-4xl font-bold text-dark dark:text-white lg:text-5xl">
                  Gustafa
                </span>
              </h1>
              <h2 className="mb-5 text-lg font-medium text-secondary dark:text-white lg:text-2xl">
                App developer
              </h2>
              <p className="mb-10 font-medium leading-relaxed text-secondary">
                Belajar programming menyenangkan
              </p>

              <a
                href="#"
                className="rounded-full bg-primary py-3 px-8 text-base font-semibold text-white transition duration-300 ease-in-out hover:opacity-80 hover:shadow-lg"
              >
                Hubungi saya
              </a>
            </div>
            <div className="w-full self-end px-4 lg:w-1/2">
              <div className="relative mt-10 lg:right-0 lg:mt-9">
                <img
                  src="dist/img/programmer.png"
                  alt="gustafa"
                  className="mx-auto max-w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="pt-36 pb-32 dark:bg-dark">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="mb-10 w-full px-4 lg:w-1/2">
              <h4 className="mb-3 text-lg font-bold uppercase text-primary">
                Tentang saya
              </h4>
              <h2 className="mb-5 max-w-md text-xl font-bold text-dark dark:text-white lg:text-4xl">
                Yuk belajar
              </h2>
              <p className="max-w-xl text-base font-medium text-secondary lg:text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo nesciunt omnis odit odio laboriosam ipsum sequi?
              </p>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <h3 className="mb-4 text-2xl font-semibold text-dark dark:text-white lg:pt-10 lg:text-3xl">
                find me
              </h3>
              <p className="mb-6 text-base font-medium text-secondary lg:text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum, voluptate pariatur blanditiis deleniti tempore vitae
                quibusdam dicta amet.
              </p>
              <div className="flex items-center">
                <a
                  href=""
                  target="_blank"
                  className="mr-3 flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white"
                >
                  <svg
                    role="img"
                    width="20"
                    className="fill-current"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>LinkedIn</title>
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href=""
                  target="_blank"
                  className="mr-3 flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white"
                >
                  <svg
                    role="img"
                    width="20"
                    className="fill-current"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Twitter</title>
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="portofolio"
        className="bg-slate-100 pt-36 pb-16 dark:bg-slate-800"
      >
        <div className="container">
          <div className="w-full px-4">
            <div className="mx-auto mb-16 max-w-xl text-center">
              <h4 className="mb-2 text-lg font-semibold text-primary">
                Portofolio
              </h4>
              <h2 className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl lg:text-5xl">
                Project Terbaru
              </h2>
              <p className="text-md font-medium text-secondary md:text-lg">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Adipisci rem praesentium aut quis in impedit necessitatibus
                repellat, suscipit quibusdam nesciunt?
              </p>
            </div>
          </div>

          <div className="flex w-full flex-wrap justify-center px-4 xl:mx-auto xl:w-10/12">
            <div className="mb-12 p-4 md:w-1/2">
              <div className="overflow-hidden rounded-md shadow-md">
                <img
                  src="/dist/img/portofolio/1.jpg"
                  alt="1"
                  className="w-full"
                />
              </div>
              <h3 className="mt-5 mb-3 text-xl font-semibold text-dark dark:text-white">
                Landing Page
              </h3>
              <p className="text-base font-medium text-secondary">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Numquam, nisi. Consectetur rerum tempora reiciendis quos
                laudantium?
              </p>
            </div>
            <div className="mb-12 p-4 md:w-1/2">
              <div className="overflow-hidden rounded-md shadow-md">
                <img
                  src="/dist/img/portofolio/2.jpg"
                  alt="1"
                  className="w-full"
                />
              </div>
              <h3 className="mt-5 mb-3 text-xl font-semibold text-dark dark:text-white">
                Landing Page
              </h3>
              <p className="text-base font-medium text-secondary">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Numquam, nisi. Consectetur rerum tempora reiciendis quos
                laudantium?
              </p>
            </div>
            <div className="mb-12 p-4 md:w-1/2">
              <div className="overflow-hidden rounded-md shadow-md">
                <img
                  src="/dist/img/portofolio/3.jpg"
                  alt="1"
                  className="w-full"
                />
              </div>
              <h3 className="mt-5 mb-3 text-xl font-semibold text-dark dark:text-white">
                Landing Page
              </h3>
              <p className="text-base font-medium text-secondary">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Numquam, nisi. Consectetur rerum tempora reiciendis quos
                laudantium?
              </p>
            </div>
            <div className="mb-12 p-4 md:w-1/2">
              <div className="overflow-hidden rounded-md shadow-md">
                <img
                  src="/dist/img/portofolio/4.jpg"
                  alt="1"
                  className="w-full"
                />
              </div>
              <h3 className="mt-5 mb-3 text-xl font-semibold text-dark dark:text-white">
                Landing Page
              </h3>
              <p className="text-base font-medium text-secondary">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Numquam, nisi. Consectetur rerum tempora reiciendis quos
                laudantium?
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="client"
        className="bg-slate-800 pt-36 pb-32 dark:bg-slate-300"
      >
        <div className="container">
          <div className="w-full px-4">
            <div className="mx-auto mb-16 text-center">
              <h4 className="mb-2 text-lg font-semibold text-primary">
                Clients
              </h4>
              <h2 className="mb-4 text-3xl font-bold text-white dark:text-dark sm:text-4xl lg:text-5xl">
                Pernah Bekerjasama
              </h2>
              <p className="text-md font-medium text-secondary md:text-lg">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Adipisci rem praesentium aut quis in impedit necessitatibus
                repellat, suscipit quibusdam nesciunt?
              </p>
            </div>
          </div>

          <div className="w-full px-4">
            <div className="flex flex-wrap items-center justify-center">
              <a
                href="#"
                className="mx-4 max-w-[120px] py-4 opacity-60 grayscale transition duration-500 hover:opacity-100 hover:grayscale-0 lg:mx-6 xl:mx-8"
              >
                <img src="dist/img/clients/google.svg" alt="Google" />
              </a>
              <a
                href="#"
                className="mx-4 max-w-[120px] py-4 opacity-60 grayscale transition duration-500 hover:opacity-100 hover:grayscale-0 lg:mx-6 xl:mx-8"
              >
                <img src="dist/img/clients/Gojek.png" alt="Google" />
              </a>
              <a
                href="#"
                className="mx-4 max-w-[120px] py-4 opacity-60 grayscale transition duration-500 hover:opacity-100 hover:grayscale-0 lg:mx-6 xl:mx-8"
              >
                <img src="dist/img/clients/Shopee.png" alt="Google" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="blog" className="bg-slate-100 pt-36 pb-32 dark:bg-dark">
        <div className="container">
          <div className="w-full px-4">
            <div className="mx-auto mb-16 max-w-xl text-center">
              <h4 className="mb-2 text-lg font-semibold text-primary">Blog</h4>
              <h2 className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl lg:text-5xl">
                Tulisan Terbaru
              </h2>
              <p className="text-md font-medium text-secondary md:text-lg">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Facilis quam incidunt id aliquam?
              </p>
            </div>
          </div>

          <div className="flex flex-wrap">
            <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
              <div className="mb-10 overflow-hidden rounded-xl bg-white shadow-lg dark:bg-slate-700">
                <img
                  src="https://source.unsplash.com/360x200?programming"
                  alt="Programming"
                  className="w-full"
                />
                <div className="py-8 px-6">
                  <h3>
                    <a
                      href=""
                      className="mb-3 block truncate text-xl font-semibold text-dark hover:text-primary dark:text-white"
                    >
                      {" "}
                      Tips belajar prog{" "}
                    </a>
                  </h3>
                  <p className="mb-6 text-base font-medium text-secondary">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Tempora, necessitatibus?
                  </p>
                  <a
                    href="#"
                    className="rounded-lg bg-primary py-2 px-4 text-sm font-medium text-white hover:opacity-80"
                  >
                    selengkapnya
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
              <div className="mb-10 overflow-hidden rounded-xl bg-white shadow-lg dark:bg-slate-700">
                <img
                  src="https://source.unsplash.com/360x200?mechanical+keyboard"
                  alt="Programming"
                  className="w-full"
                />
                <div className="py-8 px-6">
                  <h3>
                    <a
                      href=""
                      className="mb-3 block truncate text-xl font-semibold text-dark hover:text-primary dark:text-white"
                    >
                      {" "}
                      Tips belajar prog{" "}
                    </a>
                  </h3>
                  <p className="mb-6 text-base font-medium text-secondary">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                    rerum culpa reiciendis!
                  </p>
                  <a
                    href="#"
                    className="rounded-lg bg-primary py-2 px-4 text-sm font-medium text-white hover:opacity-80"
                  >
                    selengkapnya
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
              <div className="mb-10 overflow-hidden rounded-xl bg-white shadow-lg dark:bg-slate-700">
                <img
                  src="https://source.unsplash.com/360x200?monitor"
                  alt="Programming"
                  className="w-full"
                />
                <div className="py-8 px-6">
                  <h3>
                    <a
                      href=""
                      className="mb-3 block truncate text-xl font-semibold text-dark hover:text-primary dark:text-white"
                    >
                      {" "}
                      Tips belajar prog{" "}
                    </a>
                  </h3>
                  <p className="mb-6 text-base font-medium text-secondary">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Totam enim quibusdam sunt aliquid obcaecati.
                  </p>
                  <a
                    href="#"
                    className="rounded-lg bg-primary py-2 px-4 text-sm font-medium text-white hover:opacity-80"
                  >
                    selengkapnya
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="pt-36 pb-32 dark:bg-slate-800">
        <div className="container">
          <div className="w-full px-4">
            <div className="mx-auto mb-16 max-w-xl text-center">
              <h4 className="mb-2 text-lg font-semibold text-primary">
                Contact
              </h4>
              <h2 className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl lg:text-5xl">
                Contact Me
              </h2>
              <p className="text-md font-medium text-secondary md:text-lg">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Facilis quam incidunt id aliquam?
              </p>
            </div>
          </div>

          <form>
            <div className="mb-8 w-full px-4">
              <label
                htmlFor="name"
                className="text-base font-bold text-primary"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full rounded-md bg-slate-200 p-3 text-dark focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
          </form>
        </div>
      </section>

      <footer className="bg-dark pt-24 pb-12">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="mb-12 w-full px-4 font-medium text-slate-300 md:w-1/3">
              <h2 className="mb-5 text-4xl font-bold text-white">test</h2>
              <h3 className="mb-2 text-2xl font-bold">hubungi saya</h3>
              <p>gustafabayu@outlook.com</p>
              <p>Bogor Residence</p>
            </div>
            <div className="mb-12 w-full px-4 md:w-1/3">
              <h3 className="mb-5 text-xl font-semibold text-white">
                Category
              </h3>
              <ul className="text-slate-300">
                <li>
                  <a
                    href="#"
                    className="mb-3 inline-block text-base hover:text-primary"
                  >
                    Programming
                  </a>
                </li>
              </ul>
            </div>
            <div className="mb-12 w-full px-4 md:w-1/3">
              <h3 className="mb-5 text-xl font-semibold text-white">Link</h3>
              <ul className="text-slate-300">
                <li>
                  <a
                    href="#home"
                    className="mb-3 inline-block text-base hover:text-primary"
                  >
                    Beranda
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="mb-3 inline-block text-base hover:text-primary"
                  >
                    About Me
                  </a>
                </li>
                <li>
                  <a
                    href="#protofolio"
                    className="mb-3 inline-block text-base hover:text-primary"
                  >
                    Portofolio
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full border-t border-slate-700 pt-10">
            <div className="mb-5 flex items-center justify-center">
              <a
                href=""
                target="_blank"
                className="mr-3 flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white"
              >
                <svg
                  role="img"
                  width="20"
                  className="fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>LinkedIn</title>
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href=""
                target="_blank"
                className="mr-3 flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white"
              >
                <svg
                  role="img"
                  width="20"
                  className="fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Twitter</title>
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
            </div>
            <p className="text-center text-sm font-medium text-slate-500">
              Made with love <span className="text-red-500">❤</span>, using
              Tailwind CSS.
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
