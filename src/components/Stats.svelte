<script>
  let { stats } = $props();
</script>

<section class="stats">
  <div class="stats-container">
    {#each stats as stat}
      <div class="stat-item">
        <div class="stat-accent"></div>
        <div class="stat-number">{stat.value}</div>
        <div class="stat-label">{stat.label}</div>
      </div>
    {/each}
  </div>
</section>
