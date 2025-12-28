<script>
  export let team;
  import Carousel from "svelte-carousel";

  let carousel;
  let particlesToShow = 2;

  // Update particles to show based on window size
  import { onMount } from "svelte";

  onMount(() => {
    const updateParticles = () => {
      const width = window.innerWidth;

      if (width >= 1024) {
        particlesToShow = 2; // Desktop
      } else if (width >= 640) {
        particlesToShow = 2; // Tablet
      } else {
        particlesToShow = 1; // Mobile
      }

      // Force carousel to update
      if (carousel) {
        carousel.goTo(0);
      }
    };

    updateParticles();
    window.addEventListener("resize", updateParticles);

    return () => window.removeEventListener("resize", updateParticles);
  });

  const handlePrev = () => {
    if (carousel) {
      carousel.goToPrev();
    }
  };

  const handleNext = () => {
    if (carousel) {
      carousel.goToNext();
    }
  };
</script>

<section class="team" id="team">
  <h2 class="section-title">Our Team</h2>

  <div class="carousel-wrapper">
    <Carousel
      bind:this={carousel}
      {particlesToShow}
      particlesToScroll={1}
      infinite={true}
      autoplay={true}
      duration={500}
      dots={true}
      arrows={true}
    >
      <!-- Custom Previous Button -->
      <button
        slot="prev"
        class="carousel-btn prev"
        on:click={handlePrev}
        aria-label="Previous"
      >
        ❮
      </button>

      <!-- Team Cards -->
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
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    🔗 LinkedIn
                  </a>
                {/if}

                {#if member.email}
                  <a href={member.email} aria-label="Email">✉️ Email</a>
                {/if}
              </div>
            </div>
          </div>
        </div>
      {/each}

      <!-- Custom Next Button -->
      <button
        slot="next"
        class="carousel-btn next"
        on:click={handleNext}
        aria-label="Next"
      >
        ❯
      </button>
    </Carousel>
  </div>
</section>

<style>
  .team {
    padding: 5rem 2rem;
    background: #f8f9fa;
  }

  .section-title {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 3rem;
    color: var(--primary-color, #333);
  }

  .carousel-wrapper {
    max-width: 1100px;
    margin: 0 auto;
    position: relative;
    padding: 0 60px;
  }

  /* Carousel Item Wrapper */
  .carousel-item {
    padding: 1rem 1rem;
    box-sizing: border-box;
  }

  /* Team Card */
  .team-card {
    background: white;
    padding: 2rem;
    border-radius: 15px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 100%;
    height: 100%;
    transition:
      transform 0.3s ease,
      box-shadow 0.3s ease;
  }

  .team-image img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 1.5rem;
  }

  .team-content h3 {
    margin: 0;
    font-size: 1.4rem;
    color: var(--primary-color, #007bff);
  }

  .team-role {
    display: block;
    margin: 0.5rem 0 1rem;
    font-weight: 600;
    font-size: 0.9rem;
    color: var(--secondary-color, #6c757d);
  }

  .team-content p {
    color: #555;
    line-height: 1.6;
    margin: 1rem 0;
    font-size: 0.95rem;
  }

  .team-actions {
    margin-top: 1.5rem;
    display: flex;
    gap: 1.5rem;
    justify-content: center;
    flex-wrap: wrap;
  }

  .team-actions a {
    text-decoration: none;
    font-weight: 600;
    font-size: 0.9rem;
    color: var(--primary-color, #007bff);
    transition: color 0.3s;
  }

  .team-actions a:hover {
    color: var(--accent-color, #0056b3);
  }

  /* Custom Navigation Buttons */
  .carousel-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(0, 0, 0, 0.5);
    color: white;
    border: none;
    width: 45px;
    height: 45px;
    border-radius: 50%;
    font-size: 1.5rem;
    cursor: pointer;
    transition: background 0.3s ease;
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .carousel-btn:hover {
    background: rgba(0, 0, 0, 0.8);
  }

  .carousel-btn.prev {
    left: -30px;
  }

  .carousel-btn.next {
    right: -30px;
  }

  /* Override default svelte-carousel styles */
  :global(.sc-carousel__carousel-container) {
    padding: 1rem 0;
  }

  :global(.sc-carousel__content-container) {
    width: 100%;
  }

  :global(.sc-carousel__pages) {
    display: flex;
    align-items: stretch;
  }

  :global(.sc-carousel-page__container) {
    display: flex !important;
    gap: 0 !important;
  }

  :global(.sc-carousel__dots) {
    margin-top: 2rem !important;
    display: flex;
    justify-content: center;
    gap: 8px;
  }

  :global(.sc-carousel-dot__dot) {
    background: #ccc !important;
    width: 12px !important;
    height: 12px !important;
    border-radius: 50% !important;
    border: none !important;
    padding: 0 !important;
    cursor: pointer !important;
    transition: all 0.3s ease !important;
  }

  :global(.sc-carousel-dot__dot.sc-carousel-dot__dot_active) {
    background: var(--primary-color, #007bff) !important;
    width: 30px !important;
    border-radius: 6px !important;
  }

  /* Hide default arrows */
  :global(.sc-carousel__arrow) {
    display: none !important;
  }

  /* ================= TABLET / iPAD ================= */
  @media (max-width: 1023px) {
    .carousel-wrapper {
      max-width: 800px;
      padding: 0 55px;
    }

    .team-card {
      padding: 1.8rem;
    }

    .team-image img {
      width: 110px;
      height: 110px;
    }

    .team-content h3 {
      font-size: 1.3rem;
    }

    .carousel-btn {
      width: 40px;
      height: 40px;
      font-size: 1.3rem;
    }
  }

  /* ================= MOBILE ================= */
  @media (max-width: 639px) {
    .team {
      padding: 4rem 1.5rem;
    }

    .section-title {
      font-size: 2rem;
      margin-bottom: 2rem;
    }

    .carousel-wrapper {
      max-width: 400px;
      padding: 0 50px;
    }

    .carousel-item {
      padding: 0 0.5rem;
    }

    .team-card {
      padding: 2rem 1.5rem;
    }

    .team-image img {
      width: 100px;
      height: 100px;
    }

    .team-content h3 {
      font-size: 1.3rem;
    }

    .team-content p {
      font-size: 0.9rem;
    }

    .carousel-btn {
      width: 35px;
      height: 35px;
      font-size: 1.2rem;
    }

    .carousel-btn.prev {
      left: -25px;
    }

    .carousel-btn.next {
      right: -25px;
    }
  }

  /* ================= SMALL MOBILE ================= */
  @media (max-width: 399px) {
    .carousel-wrapper {
      max-width: 340px;
      padding: 0 40px;
    }

    .team-card {
      padding: 1.5rem 1rem;
    }

    .carousel-btn {
      width: 32px;
      height: 32px;
      font-size: 1.1rem;
    }
  }
</style>
