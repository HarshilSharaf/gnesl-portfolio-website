<script>
  export let hero;
  import TypingText from "./TypingEffect.svelte";
</script>

<section class="hero" id="hero">
  <h1>
    {hero.title}
    <TypingText texts={hero.typing_texts} />
  </h1>

  {@html hero.subtitle_html}
  <a href="#contact" class="cta-button">{hero.cta}</a>
</section>
