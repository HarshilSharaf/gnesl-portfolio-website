<script>
  export let header;
  import logo from "../assets/images/logo.png";
  import { onMount } from "svelte";

  let menuOpen = false;
  let scrolled = false;

  function toggleMenu() {
    menuOpen = !menuOpen;
  }

  function closeMenu() {
    menuOpen = false;
  }

  onMount(() => {
    const onScroll = () => {
      scrolled = window.scrollY > 50;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  });
</script>

<header class:scrolled>
  <nav class="navbar">
    <a href="#hero" class="logo" on:click={closeMenu}>
      <img src={logo} alt={header.title} class="logo-image" />
    </a>

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
