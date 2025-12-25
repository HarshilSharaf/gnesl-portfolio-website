<script>
  export let process;
</script>

<section class="process" id="process">
  <h2 class="section-title">{process.title}</h2>
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
