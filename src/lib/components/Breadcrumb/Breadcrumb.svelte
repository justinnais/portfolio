<script>
  export let path;
  let crumbs;

  $: {
    const tokens = path.split('/').filter((t) => t !== '');

    // Create { label, href } pairs for each token.
    let tokenPath = '';
    crumbs = tokens.map((t) => {
      tokenPath += '/' + t;
      return {
        label: t,
        href: tokenPath,
      };
    });

    // Add a way to get home too.
    crumbs.unshift({ label: 'home', href: '/' });
  }
</script>

<div class="mb-6">
  {#each crumbs as c, i}
    {#if i == crumbs.length - 1}
      <span
        class="font-bold bg-gradient-to-br from-fuchsia-500 to-blue-800 dark:from-orange-400 dark:to-fuchsia-500 bg-clip-text text-transparent"
        >{c.label}</span
      >
    {:else}
      <a href={c.href}>{c.label}</a> &sol;&nbsp;
    {/if}
  {/each}
</div>
