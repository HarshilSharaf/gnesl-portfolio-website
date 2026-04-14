<script>
  import Carousel from "svelte-carousel";
  import { onMount } from "svelte";

  let { team } = $props();

  let carousel = $state(null);
  let itemsToShow = $state(2);

  onMount(() => {
    const updateLayout = () => {
      itemsToShow = window.innerWidth < 640 ? 1 : 2;
      if (carousel) carousel.goTo(0);
    };

    updateLayout();
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  });

  function handlePrev() {
    if (carousel) carousel.goToPrev();
  }

  function handleNext() {
    if (carousel) carousel.goToNext();
  }
</script>

<section class="team" id="team">
  <h2 class="section-title">Our Team</h2>
  <span class="section-title-decoration"></span>
  <p class="section-subtitle">Meet the experts driving our mission for a sustainable future.</p>

  <div class="carousel-wrapper">
    <Carousel
      bind:this={carousel}
      particlesToShow={itemsToShow}
      particlesToScroll={1}
      infinite={true}
      autoplay={true}
      duration={500}
      dots={true}
      arrows={true}
    >
      <button
        slot="prev"
        class="carousel-btn prev"
        onclick={handlePrev}
        aria-label="Previous"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>

      {#each team.members_info as member (member.name)}
        <div class="carousel-item">
          <div class="team-card">
            <div class="team-image">
              <img src={member.image} alt={member.name} />
            </div>
            <div class="team-content">
              <h3>{member.name}</h3>
              <span class="team-role">{member.role}</span>
              <p>{member.bio}</p>
              <div class="team-actions">
                {#if member.linkedin}
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    LinkedIn
                  </a>
                {/if}
                {#if member.email}
                  <a href={member.email} aria-label="Email">Email</a>
                {/if}
              </div>
            </div>
          </div>
        </div>
      {/each}

      <button
        slot="next"
        class="carousel-btn next"
        onclick={handleNext}
        aria-label="Next"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>
    </Carousel>
  </div>
</section>

<style>
  /* --- Section Layout --- */
  .team {
    padding: 6rem 2rem;
    background: var(--surface, #ffffff);
  }

  .carousel-wrapper {
    max-width: 1100px;
    margin: 0 auto;
    position: relative;
    padding: 0 60px;
  }

  .carousel-item {
    padding: 1rem;
    box-sizing: border-box;
  }

  /* --- Team Cards --- */
  .team-card {
    background: var(--surface, white);
    padding: 2.5rem 2rem;
    border-radius: var(--radius-lg, 24px);
    border: 1px solid var(--surface-muted, #f1f5f9);
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 100%;
    height: 100%;
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1),
      box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1),
      border-color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .team-card:hover {
    transform: translateY(-6px);
    box-shadow: var(--shadow-lg, 0 8px 40px rgba(0, 0, 0, 0.12)),
      var(--shadow-glow, 0 0 30px rgba(15, 157, 88, 0.15));
    border-color: #34c38f;
  }

  .team-image img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 1.5rem;
    outline: 3px solid #34c38f;
    outline-offset: 3px;
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .team-card:hover .team-image img {
    transform: scale(1.05);
  }

  .team-content h3 {
    margin: 0;
    font-size: 1.4rem;
    font-weight: 700;
    color: var(--text-primary, #1a1a2e);
  }

  .team-role {
    display: inline-block;
    margin: 0.5rem 0 1rem;
    font-weight: 600;
    font-size: 0.85rem;
    color: #0f9d58;
    background: rgba(15, 157, 88, 0.08);
    padding: 0.25rem 0.75rem;
    border-radius: 9999px;
  }

  .team-content p {
    color: var(--text-secondary, #64748b);
    line-height: 1.7;
    margin: 0.5rem 0;
    font-size: 0.95rem;
  }

  .team-actions {
    margin-top: 1.5rem;
    display: flex;
    gap: 0.75rem;
    justify-content: center;
    flex-wrap: wrap;
  }

  .team-actions a {
    text-decoration: none;
    font-weight: 600;
    font-size: 0.85rem;
    color: #0f9d58;
    padding: 0.4rem 1rem;
    border-radius: 9999px;
    border: 1px solid rgba(15, 157, 88, 0.2);
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .team-actions a:hover {
    background: #0f9d58;
    color: white;
    border-color: #0f9d58;
  }

  /* --- Carousel Navigation --- */
  .carousel-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: var(--surface, white);
    color: var(--text-primary, #1a1a2e);
    border: 1px solid var(--surface-muted, #f1f5f9);
    width: 44px;
    height: 44px;
    border-radius: 50%;
    font-size: 1.2rem;
    cursor: pointer;
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: var(--shadow-sm, 0 2px 8px rgba(0, 0, 0, 0.06));
  }

  .carousel-btn:hover {
    background: #0f9d58;
    color: white;
    border-color: #0f9d58;
    box-shadow: 0 0 30px rgba(15, 157, 88, 0.25);
  }

  .carousel-btn.prev { left: -5px; }
  .carousel-btn.next { right: -5px; }

  /* --- svelte-carousel overrides --- */
  :global(.sc-carousel__carousel-container) { padding: 1rem 0; }
  :global(.sc-carousel__content-container) { width: 100%; }
  :global(.sc-carousel__pages) { display: flex; align-items: stretch; }
  :global(.sc-carousel-page__container) { display: flex !important; gap: 0 !important; }

  :global(.sc-carousel__dots) {
    margin-top: 2rem !important;
    display: flex;
    justify-content: center;
    gap: 8px;
  }

  :global(.sc-carousel-dot__dot) {
    background: #e2e8f0 !important;
    width: 10px !important;
    height: 10px !important;
    border-radius: 50% !important;
    border: none !important;
    padding: 0 !important;
    cursor: pointer !important;
    transition: all 0.3s ease !important;
  }

  :global([data-theme="dark"] .sc-carousel-dot__dot) {
    background: #334155 !important;
  }

  :global(.sc-carousel-dot__dot.sc-carousel-dot__dot_active) {
    background: #0f9d58 !important;
    width: 28px !important;
    border-radius: 5px !important;
  }

  :global(.sc-carousel__arrow) { display: none !important; }

  /* --- Responsive --- */
  @media (max-width: 1023px) {
    .carousel-wrapper { max-width: 800px; padding: 0 55px; }
  }

  @media (max-width: 639px) {
    .carousel-wrapper { max-width: 400px; padding: 0 50px; }
    .carousel-item { padding: 0 0.5rem; }
    .team-card { padding: 2rem 1.5rem; }
    .team-image img { width: 100px; height: 100px; }
    .carousel-btn { width: 36px; height: 36px; }
    .carousel-btn.prev { left: -5px; }
    .carousel-btn.next { right: -5px; }
  }

  @media (max-width: 399px) {
    .carousel-wrapper { max-width: 340px; padding: 0 40px; }
    .team-card { padding: 1.5rem 1rem; }
    .carousel-btn { width: 32px; height: 32px; }
  }
</style>
