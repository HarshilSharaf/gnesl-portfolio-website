<script>
  export let services;
</script>

<section class="services" id="services">
  <h2 class="section-title">{services.title}</h2>
  <div class="services-grid">
    {#each services.items as service}
      <div class="service-card">
        <div class="service-icon">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="white">
            <path d={service.svg_icon_path}/>
          </svg>
          {@html service.icon}
        </div>
        <h3>{service.title}</h3>
        <p>{service.description}</p>
      </div>
    {/each}
  </div>
</section>
