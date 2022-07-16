<script lang="ts">
  export let name: string;
  export let date: string;
  export let tags: string[];
  export let links: { external: string; github: string };
  const linkMap = new Map(Object.entries(links));
</script>

<h1>{name}</h1>

<p>Published: {date}</p>
<ul>
  {#each tags as tag}
    <li>{tag}</li>
  {/each}
</ul>
{#if links}
  {#each [...linkMap] as [type, url]}
    <a href={url}>{type}</a>
  {/each}
{/if}
<a />
<slot />
