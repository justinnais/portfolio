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
  import { About, Hero, user, skillColorMap } from '$lib/data';
  import { Skills, Projects, Contact } from '$lib/pages/index';
  export let projects;

  const map = new Map(Object.entries(skillColorMap));
</script>

<svelte:head>
  <title>Justin Naismith</title>
</svelte:head>

<Hero />
<div class="flex flex-col gap-12">
  <About />
  <Skills {map} />
  <Projects {projects} />
  <Contact {...user} />
</div>
