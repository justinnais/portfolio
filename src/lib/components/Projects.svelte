<script>
  import Section from '$lib/components/Section.svelte';
  import Project from '$lib/components/Project.svelte';

  export let projects;
</script>

<Section title={'Projects'}>
  Some of my recent projects. You can <a href="/project">view more here.</a>
  <!-- TODO fix scrollbar widths -->
  <ul class="flex gap-4 py-4 px-1 overflow-x-scroll">
    {#each projects as project}
      <li class="min-w-fit">
        <Project {project} />
      </li>
    {/each}
  </ul>
</Section>
