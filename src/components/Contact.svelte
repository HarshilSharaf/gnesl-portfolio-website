<script>
  export let contact;
</script>

<section class="contact" id="contact">
  <div class="contact-container">
    <h2>{contact.title}</h2>
    <p>{contact.subtitle}</p>
    <a href="mailto:{contact.primaryEmail}" class="cta-button btn-white">
      {contact.cta}
    </a>

    <div class="contact-info">
      {#each contact.items as item}
        <div class="contact-item">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="white">
            <path d={item.svg_icon_path} />
          </svg>
          <h3>{item.title}</h3>
          <p>{@html item.html_data}</p>
        </div>
      {/each}
    </div>
  </div>
</section>
