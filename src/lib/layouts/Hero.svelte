<script>
  export let greeting;
  export let emoji;
  export let name;
  export let role;
  export let links;
  const linkMap = new Map(Object.entries(links));
</script>

<section class="min-h-[clamp(300px,50vh,600px)] flex flex-col justify-center">
  <h1 class="flex flex-col gap-1">
    <span>{greeting} {emoji}</span>
    <span>I'm {name}</span>
  </h1>
  <p class="text-2xl font-semibold mt-3">{role}</p>
  <ul class="flex gap-4 text-lg mt-10">
    {#each [...linkMap] as [name, path]}
      <li>
        <a
          href={path}
          class="bg-neutral-300 dark:bg-neutral-800 font-mono px-2 py-1 shadow hover:shadow-lg"
          >{name}</a
        >
      </li>
    {/each}
  </ul>
</section>
