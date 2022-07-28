<script>
  import { Card, Tag } from '$lib/components';
  export let project;
  export let className;
  const { name, summary, tags, category } = project.meta;
</script>

<Card className={`flex flex-col h-full ${className}`} href={project.path}>
  <p class="font-mono">{category}</p>
  <h2 class="mb-3 text-2xl">
    <a href={project.path}>
      {name}
    </a>
  </h2>

  <p class="grow">{summary}</p>
  <div class="mt-6 flex gap-2 flex-wrap max-w-[70%]">
    {#each tags as tag}
      <Tag name={tag} />
    {/each}
  </div>
</Card>
