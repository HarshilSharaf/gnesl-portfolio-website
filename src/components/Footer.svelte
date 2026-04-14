<script>
  let { footer } = $props();
</script>

<footer>
  <div class="footer-glow"></div>
  <div class="footer-content">
    <div class="footer-brand">GNESL</div>
    <nav class="footer-links">
      <a href="#services">Services</a>
      <a href="#process">Process</a>
      <a href="#projects">Projects</a>
      <a href="#team">Team</a>
      <a href="#contact">Contact</a>
    </nav>
    <div class="footer-divider"></div>
    <p class="footer-copyright">{footer.copyright}</p>
  </div>
</footer>
