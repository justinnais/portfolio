<script>
  import Hero from '../data/Hero.md';
  import Section from '$lib/components/Section.svelte';
  import Skill from '$lib/components/Skill.svelte';
  import { skillColorMap } from '../data/skills';
  const map = new Map(Object.entries(skillColorMap));
  import About from '../data/About.md';
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
    some kind of skill tree
    <div class="flex gap-2 flex-wrap">
      {#each [...map] as [skill, color]}
        <Skill name={skill} backgroundColor={color} />
      {/each}
    </div>
  </Section>
  <Section title={'Projects'}>
    Top 3 projects, then view more link to projects route
    <a href="/project">View More</a>
  </Section>
  <Section title={'Contact'}>
    <div class="bg-green-500 h-32 w-32 rounded-full">image</div>
    Justin Naismith justin@nais.dev links
  </Section>
</div>
