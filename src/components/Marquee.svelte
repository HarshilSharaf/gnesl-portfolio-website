<div class="marquee-section">
  <div class="marquee-track">
    {#each Array(3) as _}
      <div class="marquee-content">
        <span>Clean Energy</span>
        <span class="marquee-dot"></span>
        <span>Wind Power</span>
        <span class="marquee-dot"></span>
        <span>Sustainable Solutions</span>
        <span class="marquee-dot"></span>
        <span>Grid Integration</span>
        <span class="marquee-dot"></span>
        <span>500MW+ Commissioned</span>
        <span class="marquee-dot"></span>
        <span>25+ Years Experience</span>
        <span class="marquee-dot"></span>
        <span>Turbine Engineering</span>
        <span class="marquee-dot"></span>
        <span>Carbon Neutral Future</span>
        <span class="marquee-dot"></span>
      </div>
    {/each}
  </div>
</div>

<style>
  .marquee-section {
    background: linear-gradient(135deg, #0a1628 0%, #162038 100%);
    padding: 1.25rem 0;
    overflow: hidden;
    border-top: 1px solid rgba(255, 255, 255, 0.05);
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  }

  :global([data-theme="dark"]) .marquee-section {
    background: linear-gradient(135deg, #060d1a 0%, #0c1525 100%);
  }

  .marquee-track {
    display: flex;
    width: max-content;
    animation: marquee 40s linear infinite;
  }

  .marquee-track:hover {
    animation-play-state: paused;
  }

  .marquee-content {
    display: flex;
    align-items: center;
    gap: 2.5rem;
    padding-right: 2.5rem;
    white-space: nowrap;
  }

  .marquee-content span {
    font-size: 0.9rem;
    font-weight: 600;
    color: rgba(255, 255, 255, 0.6);
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .marquee-dot {
    width: 5px;
    height: 5px;
    min-width: 5px;
    background: #00d4aa;
    border-radius: 50%;
    display: inline-block;
    box-shadow: 0 0 8px rgba(0, 212, 170, 0.4);
  }

  @keyframes marquee {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-33.333%);
    }
  }
</style>
