<!-- src/components/Header.svelte -->
<script>
  export let header;
</script>

<header>
  <nav class="navbar">
    <div class="logo">{header.title}</div>
    <ul>
    {#each header.nav as item}
      <li>
        <a href={`#${item.id}`}>{item.label}</a>
      </li>
    {/each}
    </ul>
  </nav>
</header>