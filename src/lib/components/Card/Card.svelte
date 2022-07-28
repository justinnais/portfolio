<script>
  export let className;
</script>

<div
  class={`bg-neutral-300 dark:bg-neutral-800 shadow overflow-hidden rounded-md p-6 ${className}`}
>
  <slot />
</div>
