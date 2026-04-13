<script>
  export let hero;
  import TypingText from "./TypingEffect.svelte";
  import ParticleCanvas from "./ParticleCanvas.svelte";
</script>

<section class="hero" id="hero">
  <!-- Aurora orbs -->
  <div class="aurora-orb aurora-orb-1"></div>
  <div class="aurora-orb aurora-orb-2"></div>
  <div class="aurora-orb aurora-orb-3"></div>

  <!-- Interactive particle network -->
  <ParticleCanvas />

  <div class="hero-content">
    <h1>
      {hero.title}
      <br />
      <span class="gradient-text">
        <TypingText texts={hero.typing_texts} />
      </span>
    </h1>

    {@html hero.subtitle_html}
    <a href="#contact" class="cta-button">
      {hero.cta}
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M5 12h14M12 5l7 7-7 7" />
      </svg>
    </a>
  </div>

  <!-- Scroll indicator -->
  <div class="scroll-indicator">
    <span>Scroll</span>
    <div class="scroll-indicator-line"></div>
  </div>
</section>
