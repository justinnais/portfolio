<script>
  import { Tag } from '$lib/components';
  export let name;
  export let date;
  export let tags;
  export let links;
  const linkMap = new Map(Object.entries(links));
</script>

<svelte:head>
  <title>{name} - Justin Naismith</title>
</svelte:head>

<h1 class="mb-2">{name}</h1>

<p>Created {date}</p>
<ul class="flex gap-2 flex-wrap">
  {#each tags as tag}
    <li>
      <Tag name={tag} />
    </li>
  {/each}
</ul>
{#if links}
  {#each [...linkMap] as [type, url]}
    <a href={url}>{type}</a>
  {/each}
{/if}
<slot />
