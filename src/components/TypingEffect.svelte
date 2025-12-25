<script>
  import { onMount } from "svelte";

  export let texts = [];
  export let typingSpeed = 120;
  export let deletingSpeed = 60;
  export let pause = 1100;

  let displayed = "";
  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  onMount(() => {
    const type = () => {
      const current = texts[textIndex];

      if (!isDeleting) {
        displayed = current.slice(0, ++charIndex);
        if (charIndex === current.length) {
          setTimeout(() => (isDeleting = true), pause);
        }
      } else {
        displayed = current.slice(0, --charIndex);
        if (charIndex === 0) {
          isDeleting = false;
          textIndex = (textIndex + 1) % texts.length;
        }
      }

      setTimeout(type, isDeleting ? deletingSpeed : typingSpeed);
    };

    type();
  });
</script>

<span class="typing">{displayed}</span>
