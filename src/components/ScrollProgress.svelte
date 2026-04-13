<script>
  import { onMount } from "svelte";

  let progress = 0;

  onMount(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  });
</script>

<div class="scroll-progress" style="width: {progress}%"></div>

<style>
  .scroll-progress {
    position: fixed;
    top: 0;
    left: 0;
    height: 3px;
    background: linear-gradient(90deg, #0f9d58, #00d4aa);
    z-index: 1001;
    transition: width 0.05s linear;
    box-shadow: 0 0 10px rgba(0, 212, 170, 0.5);
    pointer-events: none;
  }
</style>
