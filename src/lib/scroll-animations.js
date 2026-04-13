import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function initScrollAnimations() {
  // ================================
  // Hero Parallax
  // ================================
  const hero = document.querySelector(".hero");
  if (hero) {
    gsap.to(".hero", {
      backgroundPositionY: "40%",
      ease: "none",
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: 1.5,
      },
    });

    gsap.to(".hero-content", {
      y: -100,
      opacity: 0,
      ease: "none",
      scrollTrigger: {
        trigger: ".hero",
        start: "20% top",
        end: "70% top",
        scrub: 1,
      },
    });

    gsap.to(".scroll-indicator", {
      opacity: 0,
      ease: "none",
      scrollTrigger: {
        trigger: ".hero",
        start: "10% top",
        end: "25% top",
        scrub: true,
      },
    });
  }

  // ================================
  // Section Title Reveals
  // ================================
  gsap.utils
    .toArray(".section-title, .section-subtitle, .section-title-decoration")
    .forEach((el) => {
      gsap.fromTo(
        el,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
          },
        }
      );
    });

  // ================================
  // Stat Items — stagger from container
  // ================================
  staggerFromContainer(
    ".stats-container",
    ".stat-item",
    { y: 40, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.7, ease: "back.out(1.4)" },
    0.1
  );

  // ================================
  // Service Cards — stagger
  // ================================
  staggerFromContainer(
    ".services-grid",
    ".service-card",
    { y: 60, opacity: 0, scale: 0.95 },
    { y: 0, opacity: 1, scale: 1, duration: 0.8, ease: "power3.out" },
    0.08
  );

  // ================================
  // Timeline Items — slide in from left
  // ================================
  staggerFromContainer(
    ".process-timeline",
    ".timeline-item",
    { x: -50, opacity: 0 },
    { x: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
    0.12
  );

  // ================================
  // Project Cards — stagger
  // ================================
  staggerFromContainer(
    ".projects-grid",
    ".project-card",
    { y: 60, opacity: 0, scale: 0.95 },
    { y: 0, opacity: 1, scale: 1, duration: 0.8, ease: "power3.out" },
    0.15
  );

  // ================================
  // Contact reveals
  // ================================
  gsap.utils
    .toArray(
      ".contact-container h2, .contact-container > p, .contact .cta-button"
    )
    .forEach((el, i) => {
      gsap.fromTo(
        el,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: i * 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".contact",
            start: "top 80%",
          },
        }
      );
    });

  staggerFromContainer(
    ".contact-info",
    ".contact-item",
    { y: 40, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" },
    0.1
  );

  // ================================
  // Team section
  // ================================
  const carouselWrapper = document.querySelector(".carousel-wrapper");
  if (carouselWrapper) {
    gsap.fromTo(
      carouselWrapper,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".team",
          start: "top 80%",
        },
      }
    );
  }

  // ================================
  // Marquee parallax-speed effect
  // ================================
  const marquee = document.querySelector(".marquee-section");
  if (marquee) {
    gsap.fromTo(
      marquee,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.6,
        scrollTrigger: {
          trigger: marquee,
          start: "top 95%",
        },
      }
    );
  }

  // ================================
  // Stats Counter Animation
  // ================================
  ScrollTrigger.create({
    trigger: ".stats",
    start: "top 70%",
    onEnter: animateStats,
    once: true,
  });

  // ================================
  // Active Nav Highlighting
  // ================================
  document.querySelectorAll("section[id]").forEach((section) => {
    ScrollTrigger.create({
      trigger: section,
      start: "top center",
      end: "bottom center",
      onToggle: ({ isActive }) => {
        const id = section.getAttribute("id");
        const link = document.querySelector(`nav a[href="#${id}"]`);
        if (link && isActive) {
          document
            .querySelectorAll("nav a")
            .forEach((l) => l.classList.remove("active"));
          link.classList.add("active");
        }
      },
    });
  });

  // Recalculate positions
  ScrollTrigger.refresh();
}

// ================================
// Helpers
// ================================
function staggerFromContainer(
  containerSelector,
  itemSelector,
  fromVars,
  toVars,
  stagger
) {
  const container = document.querySelector(containerSelector);
  const items = gsap.utils.toArray(
    `${containerSelector} ${itemSelector}`
  );
  if (!container || !items.length) return;

  gsap.fromTo(items, fromVars, {
    ...toVars,
    stagger,
    scrollTrigger: {
      trigger: container,
      start: "top 85%",
    },
  });
}

function animateStats() {
  document.querySelectorAll(".stat-number").forEach((stat) => {
    const text = stat.textContent;
    const hasPlus = text.includes("+");
    const hasMW = text.includes("MW");
    const hasPercent = text.includes("%");
    const target = parseInt(text.replace(/\D/g, ""));

    const obj = { val: 0 };
    gsap.to(obj, {
      val: target,
      duration: 2,
      ease: "power2.out",
      onUpdate: () => {
        let d = Math.floor(obj.val).toString();
        if (hasPlus) d += "+";
        if (hasMW) d += "MW";
        if (hasPercent) d += "%";
        stat.textContent = d;
      },
    });
  });
}
