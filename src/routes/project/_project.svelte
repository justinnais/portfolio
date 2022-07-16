<script>
  export let name;
  export let date;
  export let tags;
</script>

<h1>{name}</h1>

<p>Published: {date}</p>
<ul>
  {#each tags as tag}
    <li>{tag}</li>
  {/each}
</ul>
<slot />
