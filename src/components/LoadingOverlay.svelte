<script>
  import { onMount } from "svelte";

  let { onLoadingComplete = () => {} } = $props();

  let visible = $state(true);
  let fadeOut = $state(false);
  let alive = $state(false);
  let showText = $state(false);
  let timers = [];

  const letters = "GNESL".split("");

  onMount(() => {
    document.body.style.overflow = "hidden";

    timers = [
      setTimeout(() => { alive = true; }, 1600),
      setTimeout(() => { showText = true; }, 2100),
      setTimeout(() => dismiss(), 3500),
    ];

    return () => {
      timers.forEach(clearTimeout);
      document.body.style.overflow = "";
    };
  });

  function dismiss() {
    if (fadeOut) return;
    fadeOut = true;
    timers.forEach(clearTimeout);
    setTimeout(() => {
      visible = false;
      document.body.style.overflow = "";
      onLoadingComplete();
    }, 900);
  }
</script>

{#if visible}
  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <div class="loader" class:fade-out={fadeOut} onclick={dismiss}>
    <!-- Background -->
    <div class="bg">
      <div class="bg-grid"></div>
      <div class="bg-orb orb-1"></div>
      <div class="bg-orb orb-2"></div>
      <div class="scan-line"></div>
      {#each Array(10) as _, i}
        <div
          class="bg-particle"
          style="left: {5 + i * 9.5}%; animation-delay: {i * 0.55}s; animation-duration: {6 + (i % 4) * 1.5}s;"
        ></div>
      {/each}
    </div>

    <!-- Centered content -->
    <div class="center">
      <div class="turbine" class:alive>
        <svg viewBox="0 0 200 250" class="turbine-svg">
          <defs>
            <linearGradient id="energyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stop-color="#00d4aa" />
              <stop offset="100%" stop-color="#0f9d58" />
            </linearGradient>
          </defs>

          <path
            d="M 10,220 C 40,216 70,223 100,218 C 130,213 160,221 190,217"
            class="draw ground"
            pathLength="1"
          />
          <line
            x1="100" y1="218" x2="100" y2="100"
            class="draw tower"
            pathLength="1"
          />
          <circle
            cx="100" cy="95" r="6"
            class="draw hub-ring"
            pathLength="1"
          />

          <g class="blades">
            <path d="M 100,95 C 99,72 99,48 100,25" class="draw blade b1" pathLength="1" />
            <path d="M 100,95 C 118,108 140,120 161,130" class="draw blade b2" pathLength="1" />
            <path d="M 100,95 C 82,108 60,120 39,130" class="draw blade b3" pathLength="1" />
          </g>

          <circle cx="100" cy="95" r="10" class="pulse p1" />
          <circle cx="100" cy="95" r="10" class="pulse p2" />
          <circle cx="100" cy="95" r="10" class="pulse p3" />

          <circle cx="100" cy="95" r="3.5" class="hub-dot" />
        </svg>
      </div>

      <div class="brand" class:visible={showText}>
        <div class="brand-letters">
          {#each letters as char, i}
            <span class="char" style="--i:{i}">{char}</span>
          {/each}
        </div>
        <p class="tagline">Green &amp; Natural Energy Solutions</p>
      </div>
    </div>

    <span class="skip">Click anywhere to skip</span>

    {#if fadeOut}
      <div class="flash"></div>
    {/if}
  </div>
{/if}

<style>
  /* --- Loader Shell --- */
  .loader {
    position: fixed;
    inset: 0;
    z-index: 9999;
    background: #0a1628;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    overflow: hidden;
    animation: loaderIn 0.4s ease;
  }

  @keyframes loaderIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  .loader.fade-out {
    animation: loaderOut 0.9s ease forwards;
    pointer-events: none;
  }

  @keyframes loaderOut {
    0% { opacity: 1; transform: scale(1); }
    100% { opacity: 0; transform: scale(1.06); }
  }

  /* --- Background --- */
  .bg {
    position: absolute;
    inset: 0;
    overflow: hidden;
  }

  .bg-grid {
    position: absolute;
    inset: 0;
    background-image:
      linear-gradient(rgba(255, 255, 255, 0.018) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 255, 255, 0.018) 1px, transparent 1px);
    background-size: 50px 50px;
    mask-image: radial-gradient(ellipse 60% 60% at 50% 50%, black 20%, transparent 70%);
    -webkit-mask-image: radial-gradient(ellipse 60% 60% at 50% 50%, black 20%, transparent 70%);
  }

  .bg-orb {
    position: absolute;
    border-radius: 50%;
    filter: blur(80px);
    pointer-events: none;
  }

  .orb-1 {
    width: 420px;
    height: 420px;
    top: -12%;
    right: -8%;
    background: radial-gradient(circle, rgba(15, 157, 88, 0.14) 0%, transparent 70%);
    animation: orbDrift 18s ease-in-out infinite;
  }

  .orb-2 {
    width: 350px;
    height: 350px;
    bottom: -10%;
    left: -6%;
    background: radial-gradient(circle, rgba(0, 212, 170, 0.1) 0%, transparent 70%);
    animation: orbDrift 22s ease-in-out infinite reverse;
  }

  @keyframes orbDrift {
    0%, 100% { transform: translate(0, 0) scale(1); }
    50% { transform: translate(25px, -15px) scale(1.05); }
  }

  .scan-line {
    position: absolute;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent 10%, rgba(0, 212, 170, 0.25) 50%, transparent 90%);
    animation: scanDown 1.8s ease-in-out 0.1s forwards;
    opacity: 0;
    pointer-events: none;
  }

  @keyframes scanDown {
    0% { top: 0; opacity: 0; }
    5% { opacity: 1; }
    95% { opacity: 0.3; }
    100% { top: 100%; opacity: 0; }
  }

  .bg-particle {
    position: absolute;
    bottom: -5%;
    width: 2px;
    height: 2px;
    background: rgba(0, 212, 170, 0.35);
    border-radius: 50%;
    box-shadow: 0 0 4px rgba(0, 212, 170, 0.3);
    animation: particleRise linear infinite;
  }

  @keyframes particleRise {
    0% { transform: translateY(0) scale(0); opacity: 0; }
    8% { opacity: 0.5; transform: scale(1); }
    90% { opacity: 0.3; }
    100% { transform: translateY(-105vh) scale(0.4); opacity: 0; }
  }

  /* --- Content Layout --- */
  .center {
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2.5rem;
  }

  /* --- Turbine SVG --- */
  .turbine {
    width: 220px;
    position: relative;
  }

  .turbine-svg {
    width: 100%;
    display: block;
  }

  .draw {
    fill: none;
    stroke: rgba(255, 255, 255, 0.75);
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-dasharray: 1;
    stroke-dashoffset: 1;
    transition: stroke 0.6s ease, filter 0.5s ease;
  }

  .ground {
    stroke-width: 1.2;
    animation: drawPath 0.5s ease-out 0.3s forwards;
  }

  .tower {
    stroke-width: 2.5;
    animation: drawPath 0.5s ease-out 0.55s forwards;
  }

  .hub-ring {
    stroke-width: 1.8;
    fill: transparent;
    transition: fill 0.5s ease, stroke 0.6s ease, filter 0.5s ease;
    animation: drawPath 0.25s ease-out 0.95s forwards;
  }

  .blade { stroke-width: 3; }
  .b1 { animation: drawPath 0.35s ease-out 1.05s forwards; }
  .b2 { animation: drawPath 0.35s ease-out 1.18s forwards; }
  .b3 { animation: drawPath 0.35s ease-out 1.31s forwards; }

  @keyframes drawPath {
    to { stroke-dashoffset: 0; }
  }

  /* --- Alive State --- */
  .alive .draw {
    stroke: url(#energyGrad);
    filter: drop-shadow(0 0 3px rgba(0, 212, 170, 0.35));
  }

  .alive .ground {
    filter: none;
    stroke: rgba(0, 212, 170, 0.35);
  }

  .alive .hub-ring {
    fill: rgba(0, 212, 170, 0.1);
  }

  .blades {
    transform-origin: 100px 95px;
  }

  .alive .blades {
    animation: spin 3s linear infinite;
  }

  .fade-out .alive .blades {
    animation-duration: 1s;
  }

  @keyframes spin {
    to { transform: rotate(360deg); }
  }

  .hub-dot {
    fill: white;
    opacity: 0;
    transition: opacity 0.4s ease, fill 0.3s ease;
  }

  .alive .hub-dot {
    opacity: 1;
    fill: #00d4aa;
    animation: hubGlow 2s ease-in-out infinite;
  }

  @keyframes hubGlow {
    0%, 100% { filter: drop-shadow(0 0 6px rgba(0, 212, 170, 0.7)); }
    50% { filter: drop-shadow(0 0 14px rgba(0, 212, 170, 1)); }
  }

  .pulse {
    fill: none;
    stroke: rgba(0, 212, 170, 0.5);
    stroke-width: 1;
    opacity: 0;
    transform-origin: 100px 95px;
  }

  .alive .pulse { animation: pulsate 2.4s ease-out infinite; }
  .alive .p2 { animation-delay: 0.8s; }
  .alive .p3 { animation-delay: 1.6s; }

  @keyframes pulsate {
    0% { transform: scale(1); opacity: 0.6; stroke-width: 1.5; }
    100% { transform: scale(6); opacity: 0; stroke-width: 0.2; }
  }

  /* --- Brand Text --- */
  .brand {
    text-align: center;
    opacity: 0;
    pointer-events: none;
  }

  .brand.visible { opacity: 1; }

  .brand-letters {
    display: flex;
    justify-content: center;
    gap: 0.3rem;
    margin-bottom: 0.6rem;
  }

  .char {
    font-size: 2.4rem;
    font-weight: 800;
    color: white;
    letter-spacing: 0.12em;
    opacity: 0;
    transform: scale(0) translateY(8px);
  }

  .brand.visible .char {
    animation: letterPop 0.45s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
    animation-delay: calc(var(--i) * 0.07s);
  }

  @keyframes letterPop {
    0% { opacity: 0; transform: scale(0) translateY(8px); }
    100% { opacity: 1; transform: scale(1) translateY(0); }
  }

  .tagline {
    font-size: 0.8rem;
    color: rgba(255, 255, 255, 0.4);
    letter-spacing: 0.22em;
    text-transform: uppercase;
    opacity: 0;
    transform: translateY(6px);
  }

  .brand.visible .tagline {
    animation: tagSlide 0.5s ease 0.45s forwards;
  }

  @keyframes tagSlide {
    to { opacity: 1; transform: translateY(0); }
  }

  /* --- Skip Hint --- */
  .skip {
    position: absolute;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
    font-size: 0.7rem;
    color: rgba(255, 255, 255, 0.2);
    letter-spacing: 0.08em;
    text-transform: uppercase;
    pointer-events: none;
  }

  /* --- Exit Flash --- */
  .flash {
    position: absolute;
    top: 42%;
    left: 50%;
    width: 8vmax;
    height: 8vmax;
    transform: translate(-50%, -50%) scale(0);
    border-radius: 50%;
    background: radial-gradient(
      circle,
      rgba(0, 212, 170, 0.5) 0%,
      rgba(15, 157, 88, 0.15) 50%,
      transparent 100%
    );
    animation: flashBurst 0.8s ease-out forwards;
    z-index: 10;
    pointer-events: none;
  }

  @keyframes flashBurst {
    0% { transform: translate(-50%, -50%) scale(0); opacity: 1; }
    50% { opacity: 0.7; }
    100% { transform: translate(-50%, -50%) scale(14); opacity: 0; }
  }

  /* --- Responsive --- */
  @media (max-width: 768px) {
    .turbine { width: 170px; }
    .char { font-size: 1.9rem; }
    .tagline { font-size: 0.7rem; letter-spacing: 0.15em; }
  }

  @media (max-width: 480px) {
    .turbine { width: 150px; }
    .char { font-size: 1.6rem; }
    .tagline { font-size: 0.65rem; }
  }
</style>
