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

<script lang="ts">
  import type { ProjectResponse } from '$lib/types';

  export let projects: ProjectResponse[];
</script>

<svelte:head>
  <title>Projects - Justin Naismith</title>
</svelte:head>
<div>Projects Page</div>
<ul>
  {#each projects as project}
    <li>
      <h2>
        <a href={project.path}>
          {project.meta.name}
        </a>
      </h2>
      Published {project.meta.date}

      <p>{project.meta.summary}</p>
    </li>
  {/each}
</ul>
