<script>
  export let name;
  export let date;
  export let tags;
  export let links;
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
