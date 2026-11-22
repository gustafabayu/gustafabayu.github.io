"use client";

import { useEffect } from "react";

export function SiteInteractions() {
  useEffect(() => {
    document.documentElement.classList.add("js");

    const header = document.querySelector<HTMLElement>("header");
    const fixedImage = document.querySelector<HTMLImageElement>(
      "#fixed-project-image"
    );
    const projectRows = Array.from(
      document.querySelectorAll<HTMLAnchorElement>("[data-project-image]")
    );
    const reveals = Array.from(
      document.querySelectorAll<HTMLElement>(".scroll-reveal")
    );
    const projectRevealRows = Array.from(
      document.querySelectorAll<HTMLElement>(".project-row")
    );

    if (header) {
      const updateHeader = () => {
        header.classList.toggle("navbar-fixed", window.scrollY > 24);
      };
      window.addEventListener("scroll", updateHeader, { passive: true });
      updateHeader();
    }

    if (fixedImage) {
      projectRows.forEach((row) => {
        const showProjectImage = () => {
          const image = row.dataset.projectImage;
          if (image && fixedImage.getAttribute("src") !== image) {
            fixedImage.style.opacity = "0";
            fixedImage.style.transition = "opacity 150ms ease";
            window.setTimeout(() => {
              fixedImage.src = image;
              fixedImage.alt = row.dataset.projectAlt || "Project preview";
              fixedImage.style.opacity = "1";
            }, 150);
          }
          projectRows.forEach((otherRow) => {
            otherRow.classList.toggle("is-muted", otherRow !== row);
          });
        };
        row.addEventListener("mouseenter", showProjectImage);
        row.addEventListener("focus", showProjectImage);
      });
    }

    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14 }
    );
    reveals.forEach((section) => revealObserver.observe(section));
    projectRevealRows.forEach((row) => revealObserver.observe(row));

    return () => {
      revealObserver.disconnect();
      document.documentElement.classList.remove("js");
    };
  }, []);

  return null;
}
