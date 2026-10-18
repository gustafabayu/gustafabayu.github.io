"use client";

import { useEffect } from "react";

export function SiteInteractions() {
  useEffect(() => {
    const header = document.querySelector<HTMLElement>("header");
    const hamburger = document.querySelector<HTMLButtonElement>("#hamburger");
    const navMenu = document.querySelector<HTMLElement>("#nav-menu");
    const darkToggle = document.querySelector<HTMLInputElement>("#dark-toggle");
    const topPage = document.querySelector<HTMLAnchorElement>("#top-page");

    if (!header || !hamburger || !navMenu || !darkToggle || !topPage) {
      throw new Error(
        "The page is missing an element required for site interactions."
      );
    }

    const closeMenu = () => {
      hamburger.classList.remove("hamburger-active");
      navMenu.classList.add("hidden");
    };

    const updateScrollState = () => {
      const isScrolled = window.scrollY > header.offsetTop;
      header.classList.toggle("navbar-fixed", isScrolled);
      topPage.classList.toggle("flex", isScrolled);
      topPage.classList.toggle("hidden", !isScrolled);
    };

    const toggleMenu = () => {
      const isOpen = hamburger.classList.toggle("hamburger-active");
      navMenu.classList.toggle("hidden", !isOpen);
    };

    const handleWindowClick = (event: MouseEvent) => {
      if (
        event.target instanceof Node &&
        !hamburger.contains(event.target) &&
        !navMenu.contains(event.target)
      ) {
        closeMenu();
      }
    };

    const handleNavClick = (event: MouseEvent) => {
      if (event.target instanceof Element && event.target.closest("a")) {
        closeMenu();
      }
    };

    const applyTheme = (isDark: boolean) => {
      document.documentElement.classList.toggle("dark", isDark);
      darkToggle.checked = isDark;
    };

    const savedTheme = localStorage.getItem("theme");
    applyTheme(
      savedTheme === "dark" ||
        (savedTheme === null &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
    );

    const handleThemeChange = () => {
      const theme = darkToggle.checked ? "dark" : "light";
      localStorage.setItem("theme", theme);
      applyTheme(theme === "dark");
    };

    hamburger.addEventListener("click", toggleMenu);
    navMenu.addEventListener("click", handleNavClick);
    window.addEventListener("click", handleWindowClick);
    window.addEventListener("scroll", updateScrollState, { passive: true });
    darkToggle.addEventListener("change", handleThemeChange);
    updateScrollState();

    return () => {
      hamburger.removeEventListener("click", toggleMenu);
      navMenu.removeEventListener("click", handleNavClick);
      window.removeEventListener("click", handleWindowClick);
      window.removeEventListener("scroll", updateScrollState);
      darkToggle.removeEventListener("change", handleThemeChange);
    };
  }, []);

  return null;
}
