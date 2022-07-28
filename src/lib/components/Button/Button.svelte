<script>
  export let href;

  const classList =
    'bg-neutral-300 dark:bg-neutral-800 font-mono px-2 py-1 shadow hover:shadow-lg';
</script>

<!-- TODO don't like this, work out how to use as property properly -->
{#if href}
  <a class={classList} {href}>
    <slot />
  </a>
{:else}
  <button class={classList}>
    <slot>Button</slot>
  </button>
{/if}
