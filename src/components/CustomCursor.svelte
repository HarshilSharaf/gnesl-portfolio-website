<script>
  import { onMount } from "svelte";

  let dotEl;
  let ringEl;
  let active = false;
  let hovering = false;
  let mouseX = -100;
  let mouseY = -100;
  let ringX = -100;
  let ringY = -100;

  onMount(() => {
    // Only on devices with a mouse
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
      return;
    }

    active = true;

    // Hide default cursor globally
    const style = document.createElement("style");
    style.textContent = `
      *, *::before, *::after { cursor: none !important; }
    `;
    document.head.appendChild(style);

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dotEl) {
        dotEl.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }
    };

    // Detect hover on interactive elements
    const onMouseOver = (e) => {
      const el = e.target.closest(
        "a, button, .cta-button, .service-card, .project-card, .contact-item, .carousel-btn"
      );
      hovering = !!el;
    };

    // Ring follows with lerp
    let frameId;
    const animate = () => {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      if (ringEl) {
        ringEl.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      }
      frameId = requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", onMouseMove, { passive: true });
    document.addEventListener("mouseover", onMouseOver, { passive: true });
    animate();

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseover", onMouseOver);
      cancelAnimationFrame(frameId);
      style.remove();
    };
  });
</script>

<div
  class="cursor-dot"
  class:active
  class:hovering
  bind:this={dotEl}
></div>
<div
  class="cursor-ring"
  class:active
  class:hovering
  bind:this={ringEl}
></div>

<style>
  .cursor-dot,
  .cursor-ring {
    position: fixed;
    top: 0;
    left: 0;
    pointer-events: none;
    z-index: 10000;
    opacity: 0;
    will-change: transform;
  }

  .cursor-dot.active,
  .cursor-ring.active {
    opacity: 1;
  }

  .cursor-dot {
    width: 8px;
    height: 8px;
    margin-left: -4px;
    margin-top: -4px;
    background: #00d4aa;
    border-radius: 50%;
    transition:
      width 0.25s cubic-bezier(0.34, 1.56, 0.64, 1),
      height 0.25s cubic-bezier(0.34, 1.56, 0.64, 1),
      margin 0.25s cubic-bezier(0.34, 1.56, 0.64, 1),
      background 0.25s,
      opacity 0.25s;
    box-shadow: 0 0 12px rgba(0, 212, 170, 0.5);
  }

  .cursor-dot.hovering {
    width: 48px;
    height: 48px;
    margin-left: -24px;
    margin-top: -24px;
    background: rgba(0, 212, 170, 0.12);
    box-shadow: 0 0 30px rgba(0, 212, 170, 0.2);
  }

  .cursor-ring {
    width: 40px;
    height: 40px;
    margin-left: -20px;
    margin-top: -20px;
    border: 1.5px solid rgba(0, 212, 170, 0.35);
    border-radius: 50%;
    transition:
      width 0.35s cubic-bezier(0.34, 1.56, 0.64, 1),
      height 0.35s cubic-bezier(0.34, 1.56, 0.64, 1),
      margin 0.35s cubic-bezier(0.34, 1.56, 0.64, 1),
      border-color 0.3s,
      opacity 0.3s;
  }

  .cursor-ring.hovering {
    width: 64px;
    height: 64px;
    margin-left: -32px;
    margin-top: -32px;
    border-color: rgba(0, 212, 170, 0.5);
  }

  @media (hover: none), (pointer: coarse) {
    .cursor-dot,
    .cursor-ring {
      display: none;
    }
  }
</style>
