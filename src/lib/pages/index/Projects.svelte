<script>
  import { Section, Project } from '$lib/components';

  export let projects;
</script>

<Section title={'Projects'}>
  Some of my recent projects. You can <a href="/projects">view more here.</a>
  <ul class="flex gap-4 py-4 px-1 overflow-x-scroll snap-x snap-mandatory">
    {#each projects as project}
      <li class="min-w-fit snap-center snap-always">
        <Project {project} className="max-w-md" />
      </li>
    {/each}
  </ul>
</Section>
