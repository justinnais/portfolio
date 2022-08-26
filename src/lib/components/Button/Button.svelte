<script>
  export let href;
  export let icon;
  export let underline;
</script>

<!-- TODO don't like this, work out how to use as property properly -->
{#if href}
  <a class:icon class:no-underline={underline === false} {href}>
    <slot />
  </a>
{:else}
  <button class:icon>
    <slot>Button</slot>
  </button>
{/if}

<style>
  a,
  button {
    @apply bg-neutral-300 dark:bg-neutral-800 font-mono px-2 py-1 shadow hover:shadow-lg;
  }

  .icon {
    @apply bg-transparent dark:bg-transparent;
  }
</style>
