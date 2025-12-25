<script>
  import content from "./locales/en_us.json";
  import Header from "./components/Header.svelte";
  import Hero from "./components/Hero.svelte";
  import Stats from "./components/Stats.svelte";
  import Services from "./components/Services.svelte";
  import Process from "./components/Process.svelte";
  import Projects from "./components/Projects.svelte";
  import Contact from "./components/Contact.svelte";
  import Footer from "./components/Footer.svelte";
</script>

<Header header={content.header} />
<main>
  <Hero hero={content.hero} />
  <Stats stats={content.stats} />
  <Services services={content.services} />
  <Process process={content.process} />
  <Projects projects={content.projects} />
  <Contact contact={content.contact} />
</main>
<Footer footer={content.footer} />
