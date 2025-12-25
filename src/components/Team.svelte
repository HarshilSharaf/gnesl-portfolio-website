<script>
  export let team;
</script>

<section class="team" id="team">
  <h2 class="section-title">Our Team</h2>

  <div class="team-grid">
    {#each team.members_info as member (member.name)}
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
              <a href={member.linkedin} target="_blank" aria-label="LinkedIn">
                🔗 LinkedIn
              </a>
            {/if}

            {#if member.email}
              <a href={member.email} aria-label="Email"> ✉️ Email </a>
            {/if}
          </div>
        </div>
      </div>
    {/each}
  </div>
</section>
