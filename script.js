// ================================
// Scroll Reveal Animation System
// ================================
document.addEventListener("DOMContentLoaded", function () {
  // Smooth scroll for anchor links
  const navLinks = document.querySelectorAll('a[href^="#"]');

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        const headerOffset = 70;
        const elementPosition = targetSection.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    });
  });

  // ================================
  // Intersection Observer for reveal animations
  // ================================
  const revealObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          // Don't unobserve — keep it revealed
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: "0px 0px -60px 0px",
    }
  );

  // Observe all reveal elements
  const revealElements = document.querySelectorAll(
    ".reveal, .reveal-left, .reveal-scale"
  );
  revealElements.forEach((el) => revealObserver.observe(el));

  // ================================
  // Stats counter animation
  // ================================
  const statsObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateStats();
          statsObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.3 }
  );

  const statsSection = document.querySelector(".stats");
  if (statsSection) {
    statsObserver.observe(statsSection);
  }

  // ================================
  // Active navigation on scroll
  // ================================
  const sections = document.querySelectorAll("section[id]");

  window.addEventListener(
    "scroll",
    function () {
      const scrollY = window.pageYOffset;

      sections.forEach((section) => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute("id");
        const correspondingLink = document.querySelector(
          `nav a[href="#${sectionId}"]`
        );

        if (correspondingLink) {
          if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelectorAll("nav a").forEach((link) => {
              link.classList.remove("active");
            });
            correspondingLink.classList.add("active");
          }
        }
      });
    },
    { passive: true }
  );

  // ================================
  // MutationObserver for dynamically added elements
  // ================================
  const mutationObserver = new MutationObserver(function (mutations) {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        if (node.nodeType === 1) {
          const reveals = node.querySelectorAll
            ? node.querySelectorAll(".reveal, .reveal-left, .reveal-scale")
            : [];
          reveals.forEach((el) => revealObserver.observe(el));
          if (
            node.classList &&
            (node.classList.contains("reveal") ||
              node.classList.contains("reveal-left") ||
              node.classList.contains("reveal-scale"))
          ) {
            revealObserver.observe(node);
          }
        }
      });
    });
  });

  mutationObserver.observe(document.body, {
    childList: true,
    subtree: true,
  });
});

// ================================
// Animate statistics numbers
// ================================
function animateStats() {
  const statNumbers = document.querySelectorAll(".stat-number");

  statNumbers.forEach((stat) => {
    const text = stat.textContent;
    const hasPlus = text.includes("+");
    const hasMW = text.includes("MW");
    const hasPercent = text.includes("%");

    let targetNumber = parseInt(text.replace(/\D/g, ""));
    let currentNumber = 0;
    const duration = 2000;
    const steps = 60;
    const increment = targetNumber / steps;
    const stepTime = duration / steps;

    const timer = setInterval(() => {
      currentNumber += increment;

      if (currentNumber >= targetNumber) {
        currentNumber = targetNumber;
        clearInterval(timer);
      }

      let displayText = Math.floor(currentNumber).toString();
      if (hasPlus) displayText += "+";
      if (hasMW) displayText += "MW";
      if (hasPercent) displayText += "%";

      stat.textContent = displayText;
    }, stepTime);
  });
}
