<script>
  export let hero;
  import TypingText from "./TypingEffect.svelte";
</script>

<section class="hero" id="hero">
  <h1>
    Powering the future with&nbsp;
    <TypingText
      texts={hero.typing_texts}
    />
  </h1>

  <p>{hero.typing_text_subtitle}</p>
  <!-- <h1>{hero.title}</h1>
  <p>{hero.subtitle}</p> -->
  <a href="#contact" class="cta-button">{hero.cta}</a>
</section>
