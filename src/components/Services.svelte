<script>
  export let services;
  import { tilt } from "../lib/tilt-action.js";
</script>

<section class="services" id="services">
  <!-- Watermark -->
  <span class="section-watermark">01</span>

  <!-- Floating shapes -->
  <div class="floating-shape shape-circle float-slow" style="width: 80px; height: 80px; top: 12%; left: 5%;"></div>
  <div class="floating-shape shape-ring float-medium" style="width: 50px; height: 50px; top: 60%; right: 8%;"></div>
  <div class="floating-shape shape-dot float-fast" style="width: 8px; height: 8px; top: 25%; right: 15%;"></div>
  <div class="floating-shape shape-cross float-medium" style="top: 75%; left: 12%;"></div>
  <div class="floating-shape shape-dot float-slow" style="width: 6px; height: 6px; bottom: 15%; right: 25%;"></div>

  <h2 class="section-title">{services.title}</h2>
  <span class="section-title-decoration"></span>
  <p class="section-subtitle">
    End-to-end wind energy solutions designed for maximum efficiency and
    sustainability.
  </p>
  <div class="services-grid">
    {#each services.items as service}
      <div class="service-card" use:tilt>
        <div class="service-icon">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
            <path d={service.svg_icon_path} />
          </svg>
        </div>
        <h3>{service.title}</h3>
        <p>{service.description}</p>
      </div>
    {/each}
  </div>
</section>
