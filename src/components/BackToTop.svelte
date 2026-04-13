<script>
  import { onMount } from "svelte";
  import { fly } from "svelte/transition";

  let visible = false;

  onMount(() => {
    const onScroll = () => {
      visible = window.scrollY > 500;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  });

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
</script>

{#if visible}
  <button
    class="back-to-top"
    on:click={scrollToTop}
    aria-label="Back to top"
    transition:fly={{ y: 20, duration: 300 }}
  >
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
      <path d="M12 19V5M5 12l7-7 7 7" />
    </svg>
  </button>
{/if}

<style>
  .back-to-top {
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: linear-gradient(135deg, #0f9d58, #00d4aa);
    color: white;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 999;
    box-shadow: 0 4px 20px rgba(15, 157, 88, 0.35);
    transition:
      transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1),
      box-shadow 0.3s ease;
  }

  .back-to-top:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 30px rgba(15, 157, 88, 0.5);
  }

  .back-to-top:active {
    transform: translateY(-2px);
  }
</style>
