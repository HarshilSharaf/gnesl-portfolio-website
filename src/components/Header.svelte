<!-- src/components/Header.svelte -->
<script>
  export let header;
  import logo from "../assets/images/logo_new_3.png";

  let menuOpen = false;

  function toggleMenu() {
    menuOpen = !menuOpen;
  }

  function closeMenu() {
    menuOpen = false;
  }
</script>

<header>
  <nav class="navbar">
    <div class="logo">
      <img src={logo} alt={header.title} class="logo-image" />
    </div>

    <!-- Hamburger -->
    <button
      class="hamburger"
      aria-label="Toggle navigation"
      aria-expanded={menuOpen}
      on:click={toggleMenu}
    >
      <span class:open={menuOpen}></span>
      <span class:open={menuOpen}></span>
      <span class:open={menuOpen}></span>
    </button>

    <!-- Navigation -->
    <ul class:open={menuOpen}>
      {#each header.nav as item}
        <li>
          <a href={`#${item.id}`} on:click={closeMenu}>
            {item.label}
          </a>
        </li>
      {/each}
    </ul>
  </nav>
</header>
