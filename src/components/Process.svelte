<script>
  export let process;
</script>

<section class="process" id="process">
  <!-- Watermark -->
  <span class="section-watermark">02</span>

  <!-- Floating shapes -->
  <div class="floating-shape shape-ring float-slow" style="width: 70px; height: 70px; top: 10%; right: 8%;"></div>
  <div class="floating-shape shape-dot float-fast" style="width: 8px; height: 8px; bottom: 20%; left: 5%;"></div>
  <div class="floating-shape shape-cross float-medium" style="top: 50%; right: 5%;"></div>

  <h2 class="section-title">{process.title}</h2>
  <span class="section-title-decoration"></span>
  <p class="section-subtitle">
    A streamlined approach that takes your project from concept to clean energy
    production.
  </p>
  <div class="process-timeline">
    {#each process.steps as step, index}
      <div class="timeline-item">
        <div class="timeline-number">{index + 1}</div>
        <div class="timeline-content">
          <h3>{step.title}</h3>
          <p>{step.description}</p>
        </div>
      </div>
    {/each}
  </div>
</section>
