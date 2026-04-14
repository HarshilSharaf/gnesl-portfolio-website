<script>
  import { onMount } from "svelte";

  let { texts = [], typingSpeed = 120, deletingSpeed = 60, pause = 1100 } = $props();

  let displayed = $state("");
  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let timerId;

  onMount(() => {
    function type() {
      const current = texts[textIndex];

      if (!isDeleting) {
        displayed = current.slice(0, ++charIndex);
        if (charIndex === current.length) {
          timerId = setTimeout(() => {
            isDeleting = true;
            timerId = setTimeout(type, deletingSpeed);
          }, pause);
          return;
        }
      } else {
        displayed = current.slice(0, --charIndex);
        if (charIndex === 0) {
          isDeleting = false;
          textIndex = (textIndex + 1) % texts.length;
        }
      }

      timerId = setTimeout(type, isDeleting ? deletingSpeed : typingSpeed);
    }

    type();

    return () => clearTimeout(timerId);
  });
</script>

<span class="typing">{displayed}</span>
