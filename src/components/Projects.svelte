<script>
  import { tilt } from "../lib/tilt-action.js";

  let { projects } = $props();
</script>

<section class="projects" id="projects">
  <span class="section-watermark">03</span>

  <!-- Floating shapes -->
  <div class="floating-shape shape-circle float-medium" style="width: 60px; height: 60px; top: 15%; right: 6%;"></div>
  <div class="floating-shape shape-dot float-slow" style="width: 10px; height: 10px; bottom: 25%; left: 8%;"></div>
  <div class="floating-shape shape-cross float-fast" style="top: 40%; left: 4%;"></div>

  <h2 class="section-title">{projects.title}</h2>
  <span class="section-title-decoration"></span>
  <p class="section-subtitle">
    Delivering reliable renewable energy solutions across diverse environments
    and scales.
  </p>
  <div class="projects-grid">
    {#each projects.items as project, i}
      <div class="project-card" use:tilt={{ max: 4, glare: true, "max-glare": 0.06 }}>
        <div class="project-image">
          {project.icon}
        </div>
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
