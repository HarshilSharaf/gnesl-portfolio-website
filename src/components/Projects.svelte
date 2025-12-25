<script>
  export let projects;
</script>

<section class="projects" id="projects">
  <h2 class="section-title">{projects.title}</h2>
  <div class="projects-grid">
    {#each projects.items as project}
      <div class="project-card">
        <div class="project-image">{project.icon}</div>
        <div class="project-content">
          <h3>{project.title}</h3>
          <p>{project.description}</p>

          <div class="project-stats">
            {#each project.stats as stat}
              <div class="project-stat">
                <div class="project-stat-value">{stat.value}</div>
                <div class="project-stat-label">{stat.label}</div>
              </div>
            {/each}
          </div>
        </div>
      </div>
    {/each}
  </div>
</section>
