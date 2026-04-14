<script>
  import { onMount } from "svelte";

  const CONNECTION_DIST = 130;
  const CONNECTION_DIST_SQ = CONNECTION_DIST * CONNECTION_DIST;
  const MOUSE_DIST = 160;
  const MOUSE_DIST_SQ = MOUSE_DIST * MOUSE_DIST;

  let canvas = $state(null);
  let ctx;
  let particles = [];
  let mouseX = null;
  let mouseY = null;
  let animId;

  class Particle {
    constructor(w, h) {
      this.x = Math.random() * w;
      this.y = Math.random() * h;
      this.vx = (Math.random() - 0.5) * 0.35;
      this.vy = (Math.random() - 0.5) * 0.35;
      this.radius = Math.random() * 2 + 0.8;
      this.baseOpacity = Math.random() * 0.5 + 0.15;
    }

    update(w, h) {
      if (mouseX !== null) {
        const dx = mouseX - this.x;
        const dy = mouseY - this.y;
        const distSq = dx * dx + dy * dy;
        if (distSq < MOUSE_DIST_SQ) {
          const dist = Math.sqrt(distSq);
          const force = (MOUSE_DIST - dist) / MOUSE_DIST;
          this.vx -= (dx / dist) * force * 0.25;
          this.vy -= (dy / dist) * force * 0.25;
        }
      }

      this.x += this.vx;
      this.y += this.vy;

      if (this.x < -10) this.x = w + 10;
      if (this.x > w + 10) this.x = -10;
      if (this.y < -10) this.y = h + 10;
      if (this.y > h + 10) this.y = -10;

      this.vx *= 0.997;
      this.vy *= 0.997;
      this.vx += (Math.random() - 0.5) * 0.008;
      this.vy += (Math.random() - 0.5) * 0.008;
    }

    draw(c) {
      c.beginPath();
      c.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      c.fillStyle = `rgba(0, 212, 170, ${this.baseOpacity})`;
      c.fill();
    }
  }

  function drawConnections() {
    for (let i = 0, len = particles.length; i < len; i++) {
      const a = particles[i];
      for (let j = i + 1; j < len; j++) {
        const b = particles[j];
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const distSq = dx * dx + dy * dy;

        if (distSq < CONNECTION_DIST_SQ) {
          const opacity = (1 - Math.sqrt(distSq) / CONNECTION_DIST) * 0.12;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = `rgba(0, 212, 170, ${opacity})`;
          ctx.lineWidth = 0.6;
          ctx.stroke();
        }
      }
    }

    if (mouseX !== null) {
      for (let i = 0, len = particles.length; i < len; i++) {
        const p = particles[i];
        const dx = mouseX - p.x;
        const dy = mouseY - p.y;
        const distSq = dx * dx + dy * dy;
        if (distSq < MOUSE_DIST_SQ) {
          const opacity = (1 - Math.sqrt(distSq) / MOUSE_DIST) * 0.2;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouseX, mouseY);
          ctx.strokeStyle = `rgba(0, 212, 170, ${opacity})`;
          ctx.lineWidth = 0.4;
          ctx.stroke();
        }
      }
    }
  }

  function animate() {
    const w = canvas.width;
    const h = canvas.height;
    ctx.clearRect(0, 0, w, h);
    for (let i = 0, len = particles.length; i < len; i++) {
      particles[i].update(w, h);
      particles[i].draw(ctx);
    }
    drawConnections();
    animId = requestAnimationFrame(animate);
  }

  function resize() {
    const parent = canvas.parentElement;
    canvas.width = parent.offsetWidth;
    canvas.height = parent.offsetHeight;
  }

  onMount(() => {
    ctx = canvas.getContext("2d");
    resize();

    const particleCount = window.innerWidth > 768 ? 70 : 35;
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle(canvas.width, canvas.height));
    }

    animate();

    const handleMouse = (e) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
        mouseX = x;
        mouseY = y;
      } else {
        mouseX = null;
        mouseY = null;
      }
    };

    window.addEventListener("mousemove", handleMouse, { passive: true });
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", handleMouse);
      window.removeEventListener("resize", resize);
    };
  });
</script>

<canvas bind:this={canvas}></canvas>

<style>
  canvas {
    position: absolute;
    inset: 0;
    z-index: 2;
    pointer-events: none;
  }
</style>
