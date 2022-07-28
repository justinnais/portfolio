<script context="module">
  export const load = async ({ fetch }) => {
    const projects = await fetch('/api/projects.json').then(
      async (res) => await res.json()
    );

    return {
      props: {
        projects,
      },
    };
  };
</script>

<script>
  import { Project } from '$lib/components';
  export let projects;
</script>

<svelte:head>
  <title>Projects - Justin Naismith</title>
</svelte:head>
<ul class="flex flex-col gap-4">
  {#each projects as project}
    <li>
      <Project {project} />
    </li>
  {/each}
</ul>
