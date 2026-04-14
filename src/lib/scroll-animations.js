import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* ================================
   Configuration
   ================================ */
const REVEAL_START = "top 85%";
const REVEAL_START_LATE = "top 90%";

/* ================================
   Public API
   ================================ */
export function initScrollAnimations() {
  heroAnimations();
  sectionTextAnimations();
  statAnimations();
  serviceAnimations();
  processAnimations();
  projectAnimations();
  contactAnimations();
  teamAnimations();
  marqueeAnimations();
  footerAnimations();
  floatingShapeAnimations();
  activeNavHighlighting();

  ScrollTrigger.refresh();
}

/* ================================
   Hero
   ================================ */
function heroAnimations() {
  const hero = document.querySelector(".hero");
  if (!hero) return;

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

/* ================================
   Section Titles — word-by-word reveal
   ================================ */
function sectionTextAnimations() {
  gsap.utils.toArray(".section-title").forEach((title) => {
    const words = title.textContent.trim().split(/\s+/);
    title.innerHTML = words
      .map(
        (w) =>
          `<span class="word-wrap"><span class="word-inner">${w}</span></span>`
      )
      .join(" ");

    gsap.from(title.querySelectorAll(".word-inner"), {
      yPercent: 110,
      duration: 0.7,
      ease: "power3.out",
      stagger: 0.04,
      scrollTrigger: { trigger: title, start: REVEAL_START },
    });
  });

  gsap.utils.toArray(".section-subtitle").forEach((el) => {
    gsap.fromTo(
      el,
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        delay: 0.15,
        ease: "power3.out",
        scrollTrigger: { trigger: el, start: REVEAL_START_LATE },
      }
    );
  });

  gsap.utils.toArray(".section-title-decoration").forEach((el) => {
    gsap.fromTo(
      el,
      { scaleX: 0, opacity: 0 },
      {
        scaleX: 1,
        opacity: 1,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: { trigger: el, start: REVEAL_START_LATE },
      }
    );
  });
}

/* ================================
   Stats
   ================================ */
function statAnimations() {
  staggerReveal(".stats-container", ".stat-item", {
    from: { y: 40, opacity: 0 },
    to: { y: 0, opacity: 1, duration: 0.7, ease: "back.out(1.4)" },
    stagger: 0.1,
  });

  gsap.utils.toArray(".stat-accent").forEach((accent) => {
    gsap.fromTo(
      accent,
      { scaleX: 0 },
      {
        scaleX: 1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: accent.closest(".stat-item"),
          start: "top 80%",
        },
      }
    );
  });

  ScrollTrigger.create({
    trigger: ".stats",
    start: "top 70%",
    onEnter: animateCounters,
    once: true,
  });
}

/* ================================
   Services
   ================================ */
function serviceAnimations() {
  staggerReveal(".services-grid", ".service-card", {
    from: { y: 60, opacity: 0, scale: 0.95 },
    to: { y: 0, opacity: 1, scale: 1, duration: 0.8, ease: "power3.out" },
    stagger: 0.08,
  });
}

/* ================================
   Process Timeline
   ================================ */
function processAnimations() {
  const timelineFill = document.querySelector(".timeline-progress-fill");
  if (timelineFill) {
    gsap.fromTo(
      timelineFill,
      { scaleY: 0 },
      {
        scaleY: 1,
        ease: "none",
        scrollTrigger: {
          trigger: ".process-timeline",
          start: "top 70%",
          end: "bottom 50%",
          scrub: true,
        },
      }
    );
  }

  gsap.utils.toArray(".timeline-item").forEach((item) => {
    gsap.fromTo(
      item,
      { opacity: 0.3, x: -40 },
      {
        opacity: 1,
        x: 0,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: { trigger: item, start: "top 75%" },
      }
    );

    const num = item.querySelector(".timeline-number");
    if (num) {
      gsap.fromTo(
        num,
        {
          scale: 0.8,
          boxShadow:
            "0 0 0 6px var(--surface), 0 0 0px rgba(0,212,170,0)",
        },
        {
          scale: 1,
          boxShadow:
            "0 0 0 6px var(--surface), 0 0 25px rgba(0,212,170,0.3)",
          duration: 0.6,
          ease: "back.out(1.6)",
          scrollTrigger: { trigger: item, start: "top 75%" },
        }
      );
    }
  });
}

/* ================================
   Projects
   ================================ */
function projectAnimations() {
  staggerReveal(".projects-grid", ".project-card", {
    from: { y: 60, opacity: 0, scale: 0.95 },
    to: { y: 0, opacity: 1, scale: 1, duration: 0.8, ease: "power3.out" },
    stagger: 0.15,
  });

  gsap.utils.toArray(".project-card").forEach((card) => {
    const image = card.querySelector(".project-image");
    if (image) {
      gsap.to(image, {
        yPercent: -10,
        ease: "none",
        scrollTrigger: {
          trigger: card,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }
  });
}

/* ================================
   Contact
   ================================ */
function contactAnimations() {
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
          scrollTrigger: { trigger: ".contact", start: "top 80%" },
        }
      );
    });

  staggerReveal(".contact-info", ".contact-item", {
    from: { y: 40, opacity: 0 },
    to: { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" },
    stagger: 0.1,
  });
}

/* ================================
   Team
   ================================ */
function teamAnimations() {
  const wrapper = document.querySelector(".carousel-wrapper");
  if (!wrapper) return;

  gsap.fromTo(
    wrapper,
    { y: 40, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: { trigger: ".team", start: "top 80%" },
    }
  );
}

/* ================================
   Marquee
   ================================ */
function marqueeAnimations() {
  const marquee = document.querySelector(".marquee-section");
  if (!marquee) return;

  gsap.fromTo(
    marquee,
    { opacity: 0 },
    {
      opacity: 1,
      duration: 0.6,
      scrollTrigger: { trigger: marquee, start: "top 95%" },
    }
  );
}

/* ================================
   Footer
   ================================ */
function footerAnimations() {
  const footer = document.querySelector("footer");
  if (!footer) return;

  const trigger = { trigger: footer, start: "top 92%" };

  gsap.fromTo(
    ".footer-brand",
    { y: 20, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.6, ease: "power3.out", scrollTrigger: trigger }
  );

  gsap.fromTo(
    ".footer-links a",
    { y: 15, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.5, stagger: 0.05, ease: "power3.out", scrollTrigger: trigger }
  );

  gsap.fromTo(
    ".footer-divider",
    { scaleX: 0 },
    { scaleX: 1, duration: 0.6, delay: 0.3, ease: "power2.out", scrollTrigger: trigger }
  );
}

/* ================================
   Floating Shapes Parallax
   ================================ */
function floatingShapeAnimations() {
  gsap.utils.toArray(".floating-shape").forEach((shape) => {
    const speed = shape.classList.contains("float-slow")
      ? 30
      : shape.classList.contains("float-fast")
        ? 80
        : 50;

    gsap.to(shape, {
      y: -speed,
      ease: "none",
      scrollTrigger: {
        trigger: shape.closest("section"),
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  });
}

/* ================================
   Active Nav Highlighting
   ================================ */
function activeNavHighlighting() {
  document.querySelectorAll("section[id]").forEach((section) => {
    ScrollTrigger.create({
      trigger: section,
      start: "top center",
      end: "bottom center",
      onToggle: ({ isActive }) => {
        if (!isActive) return;
        const id = section.getAttribute("id");
        const link = document.querySelector(`nav a[href="#${id}"]`);
        if (link) {
          document
            .querySelectorAll("nav a")
            .forEach((l) => l.classList.remove("active"));
          link.classList.add("active");
        }
      },
    });
  });
}

/* ================================
   Helpers
   ================================ */
function staggerReveal(containerSelector, itemSelector, { from, to, stagger }) {
  const container = document.querySelector(containerSelector);
  const items = gsap.utils.toArray(`${containerSelector} ${itemSelector}`);
  if (!container || !items.length) return;

  gsap.fromTo(items, from, {
    ...to,
    stagger,
    scrollTrigger: { trigger: container, start: REVEAL_START },
  });
}

function animateCounters() {
  document.querySelectorAll(".stat-number").forEach((stat) => {
    const text = stat.textContent;
    const hasPlus = text.includes("+");
    const hasMW = text.includes("MW");
    const hasPercent = text.includes("%");
    const target = parseInt(text.replace(/\D/g, ""), 10);

    const obj = { val: 0 };
    gsap.to(obj, {
      val: target,
      duration: 2,
      ease: "power2.out",
      onUpdate() {
        let display = Math.floor(obj.val).toString();
        if (hasPlus) display += "+";
        if (hasMW) display += "MW";
        if (hasPercent) display += "%";
        stat.textContent = display;
      },
    });
  });
}
