<script>
  import Card from '$lib/components/Card.svelte';
  import Skill from '$lib/components/Skill.svelte';
  export let project;
  const { name, summary, tags, category } = project.meta;
</script>

<Card>
  <p class="font-mono">{category}</p>
  <h2>
    <a href={project.path}>
      {name}
    </a>
  </h2>

  <p class="my-3">{summary}</p>
  <div class="flex gap-2 flex-wrap">
    {#each tags as tag}
      <Skill name={tag} />
    {/each}
  </div>
</Card>
