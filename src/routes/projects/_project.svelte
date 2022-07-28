<script>
  import { Button, Tag } from '$lib/components';
  export let name;
  export let date;
  export let tags;
  export let links;
  const linkMap = new Map(Object.entries(links || {}));
</script>

<svelte:head>
  <title>{name} - Justin Naismith</title>
</svelte:head>

<h1 class="mb-2">{name}</h1>

<p class="mb-8 text-sm">{date}</p>
<div class="flex flex-row justify-between">
  <ul class="flex gap-2 flex-wrap">
    {#each tags as tag}
      <li>
        <Tag name={tag} />
      </li>
    {/each}
  </ul>

  {#if links}
    <ul class="flex gap-2 flex-wrap">
      {#each [...linkMap] as [type, url]}
        <li><Button href={url}>{type}</Button></li>
      {/each}
    </ul>
  {/if}
</div>

<article class="flex flex-col gap-6 mt-10">
  <slot />
</article>
