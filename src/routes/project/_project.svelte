<script>
  import Skill from '$lib/components/Skill.svelte';
  export let name;
  export let date;
  export let tags;
  export let links;
  const linkMap = new Map(Object.entries(links));
</script>

<h1>{name}</h1>

<p>Created {date}</p>
<ul class="flex gap-2 flex-wrap">
  {#each tags as tag}
    <li>
      <Skill name={tag} />
    </li>
  {/each}
</ul>
{#if links}
  {#each [...linkMap] as [type, url]}
    <a href={url}>{type}</a>
  {/each}
{/if}
<a />
<slot />
