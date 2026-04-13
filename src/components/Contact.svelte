<script>
  export let contact;
</script>

<section class="contact" id="contact">
  <!-- Aurora orbs for contact -->
  <div class="aurora-orb" style="width: 450px; height: 450px; top: -20%; right: -10%; background: radial-gradient(circle, rgba(0, 212, 170, 0.2) 0%, transparent 70%); animation: auroraFloat1 16s ease-in-out infinite;"></div>
  <div class="aurora-orb" style="width: 350px; height: 350px; bottom: -15%; left: -5%; background: radial-gradient(circle, rgba(15, 157, 88, 0.18) 0%, transparent 70%); animation: auroraFloat2 20s ease-in-out infinite;"></div>

  <div class="contact-container">
    <h2>{contact.title}</h2>
    <p>{contact.subtitle}</p>
    <a href="mailto:{contact.primaryEmail}" class="cta-button btn-white">
      {contact.cta}
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M5 12h14M12 5l7 7-7 7" />
      </svg>
    </a>

    <div class="contact-info">
      {#each contact.items as item}
        <div class="contact-item">
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
            <path d={item.svg_icon_path} fill="currentColor" />
          </svg>
          <h3>{item.title}</h3>
          <p>{@html item.html_data}</p>
        </div>
      {/each}
    </div>
  </div>
</section>
