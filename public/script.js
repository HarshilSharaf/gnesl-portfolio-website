// Smooth scrolling for navigation links
document.addEventListener("DOMContentLoaded", function () {
  // Smooth scroll for anchor links
  const navLinks = document.querySelectorAll('nav a[href^="#"]');

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

  // Animate stats on scroll
  const observerOptions = {
    threshold: 0.5,
    rootMargin: "0px 0px -100px 0px",
  };

  const statsObserver = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateStats();
        statsObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const statsSection = document.querySelector(".stats");
  if (statsSection) {
    statsObserver.observe(statsSection);
  }

  // Animate service cards on scroll
  const cardObserver = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  const serviceCards = document.querySelectorAll(".service-card");
  serviceCards.forEach((card, index) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    card.style.transition = `all 0.6s ease ${index * 0.1}s`;
    cardObserver.observe(card);
  });

  // Animate project cards on scroll
  const projectCards = document.querySelectorAll(".project-card");
  projectCards.forEach((card, index) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    card.style.transition = `all 0.6s ease ${index * 0.1}s`;
    cardObserver.observe(card);
  });

  // Animate timeline items on scroll
  const timelineItems = document.querySelectorAll(".timeline-item");
  timelineItems.forEach((item, index) => {
    item.style.opacity = "0";
    item.style.transform = "translateX(-30px)";
    item.style.transition = `all 0.6s ease ${index * 0.1}s`;
    cardObserver.observe(item);
  });

  // Add active state to navigation on scroll
  window.addEventListener("scroll", function () {
    const sections = document.querySelectorAll("section[id]");
    const scrollY = window.pageYOffset;

    sections.forEach((section) => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 100;
      const sectionId = section.getAttribute("id");
      const correspondingLink = document.querySelector(
        `nav a[href="#${sectionId}"]`
      );

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        if (correspondingLink) {
          document.querySelectorAll("nav a").forEach((link) => {
            link.style.color = "white";
          });
          correspondingLink.style.color = "#05BFDB";
        }
      }
    });
  });
});

// Animate statistics numbers
function animateStats() {
  const statNumbers = document.querySelectorAll(".stat-number");

  statNumbers.forEach((stat) => {
    const text = stat.textContent;
    const hasPlus = text.includes("+");
    const hasMW = text.includes("MW");
    const hasPercent = text.includes("%");

    let targetNumber = parseInt(text.replace(/\D/g, ""));
    let currentNumber = 0;
    const increment = targetNumber / 50;
    const duration = 1500;
    const stepTime = duration / 50;

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

// Add hover effect enhancement for CTA buttons
const ctaButtons = document.querySelectorAll(".cta-button");
ctaButtons.forEach((button) => {
  button.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-2px) scale(1.05)";
  });

  button.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0) scale(1)";
  });
});

// Mobile menu toggle (for future implementation)
function createMobileMenu() {
  const nav = document.querySelector("nav");
  const navUl = document.querySelector("nav ul");

  // Create hamburger menu button
  const menuButton = document.createElement("button");
  menuButton.className = "mobile-menu-button";
  menuButton.innerHTML = "☰";
  menuButton.style.display = "none";
  menuButton.style.background = "none";
  menuButton.style.border = "none";
  menuButton.style.color = "white";
  menuButton.style.fontSize = "2rem";
  menuButton.style.cursor = "pointer";

  // Toggle menu on button click
  menuButton.addEventListener("click", function () {
    navUl.classList.toggle("active");
  });

  // Show/hide mobile menu button based on screen size
  function checkScreenSize() {
    if (window.innerWidth <= 768) {
      menuButton.style.display = "block";
      navUl.style.display = navUl.classList.contains("active")
        ? "flex"
        : "none";
    } else {
      menuButton.style.display = "none";
      navUl.style.display = "flex";
    }
  }

  nav.insertBefore(menuButton, navUl);

  window.addEventListener("resize", checkScreenSize);
  checkScreenSize();
}

// Initialize mobile menu
createMobileMenu();
