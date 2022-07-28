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
      {c.label}
    {:else}
      <a href={c.href}>{c.label}</a> &sol;&nbsp;
    {/if}
  {/each}
</div>
