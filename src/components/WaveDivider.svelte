<script>
  export let fill = "var(--surface, #ffffff)";
  export let flip = false;
</script>

<div class="wave" class:flip>
  <svg viewBox="0 0 1440 70" preserveAspectRatio="none">
    <path
      d="M0,35 C180,70 360,0 540,35 C720,70 900,0 1080,35 C1260,70 1380,45 1440,35 L1440,70 L0,70 Z"
      {fill}
    />
  </svg>
</div>

<style>
  .wave {
    line-height: 0;
    margin-top: -1px;
    position: relative;
    z-index: 2;
    pointer-events: none;
  }

  .wave.flip {
    transform: scaleY(-1);
    margin-top: 0;
    margin-bottom: -1px;
  }

  svg {
    width: 100%;
    height: 50px;
    display: block;
  }

  @media (max-width: 768px) {
    svg {
      height: 30px;
    }
  }
</style>
