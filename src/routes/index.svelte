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
  import Skill from '$lib/components/Skill.svelte';
  import Project from '$lib/components/Project.svelte';
  export let projects;

  import { skillColorMap } from '../data/skills';
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
  <Section title={'Skills'}>
    <div class="flex gap-2 flex-wrap">
      {#each [...map] as [skill, color]}
        <Skill name={skill} backgroundColor={color} />
      {/each}
    </div>
  </Section>
  <Section title={'Projects'}>
    Some of my recent projects. You can <a href="/project">view more here.</a>
    <ul class="flex gap-4 py-4 px-1 overflow-y-scroll">
      {#each projects as project}
        <li class="min-w-fit">
          <Project {project} />
        </li>
      {/each}
    </ul>
  </Section>
  <Section title={'Contact'}>
    <div class="bg-green-500 h-32 w-32 rounded-full">image</div>
    Justin Naismith justin@nais.dev links
  </Section>
</div>
