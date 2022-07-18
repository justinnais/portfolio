<script context="module">
  export const load = async ({ fetch }) => {
    let projects = await fetch('/api/projects.json').then(
      async (res) => await res.json()
    );

    projects = projects.filter((project) => project.meta.featured);

    return {
      props: {
        projects,
      },
    };
  };
</script>

<script>
  import About from '../data/About.md';
  import Hero from '../data/Hero.md';
  import Section from '$lib/components/Section.svelte';
  import Skills from '$lib/components/Skills.svelte';
  import Projects from '$lib/components/Projects.svelte';
  import Contact from '$lib/components/Contact.svelte';
  export let projects;

  import { skillColorMap } from '../data/skills';
  import { user } from '../data/user';
  const map = new Map(Object.entries(skillColorMap));
</script>

<svelte:head>
  <title>Justin Naismith</title>
</svelte:head>

<Hero />
<div class="flex flex-col gap-12">
  <Section title={'About'}>
    <About />
  </Section>
  <Skills {map} />
  <Projects {projects} />
  <Contact {...user} />
</div>
