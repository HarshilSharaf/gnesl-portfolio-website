<script>
  import content from "./locales/en_us.json";
  import LoadingOverlay from "./components/LoadingOverlay.svelte";
  import ScrollProgress from "./components/ScrollProgress.svelte";
  import CustomCursor from "./components/CustomCursor.svelte";
  import Header from "./components/Header.svelte";
  import Hero from "./components/Hero.svelte";
  import Stats from "./components/Stats.svelte";
  import Marquee from "./components/Marquee.svelte";
  import WaveDivider from "./components/WaveDivider.svelte";
  import Services from "./components/Services.svelte";
  import Process from "./components/Process.svelte";
  import Projects from "./components/Projects.svelte";
  import Team from "./components/Team.svelte";
  import Contact from "./components/Contact.svelte";
  import Footer from "./components/Footer.svelte";
  import BackToTop from "./components/BackToTop.svelte";

  function onLoadingComplete() {
    Promise.all([
      import("./lib/smooth-scroll.js"),
      import("./lib/scroll-animations.js"),
    ]).then(([{ initSmoothScroll }, { initScrollAnimations }]) => {
      initSmoothScroll();
      requestAnimationFrame(() => {
        initScrollAnimations();
      });
    });
  }
</script>

<LoadingOverlay {onLoadingComplete} />
<ScrollProgress />
<CustomCursor />

<Header header={content.header} />
<main>
  <Hero hero={content.hero} />
  <Stats stats={content.stats} />
  <Marquee />
  <WaveDivider fill="var(--surface-muted, #f1f5f9)" />
  <Services services={content.services} />
  <WaveDivider fill="var(--surface, #ffffff)" />
  <Process process={content.process} />
  <WaveDivider fill="var(--surface-muted, #f1f5f9)" />
  <Projects projects={content.projects} />
  <WaveDivider fill="var(--surface, #ffffff)" />
  <Team team={content.team} />
  <Contact contact={content.contact} />
</main>
<Footer footer={content.footer} />
<BackToTop />
