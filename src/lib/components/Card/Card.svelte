<script>
  export let className;
  export let href;
</script>

<!-- TODO as not working fix this, also do hover grouping so the underline occurs when hovering card -->
<div
  as={href ? 'a' : undefined}
  {href}
  class={`bg-neutral-300 dark:bg-neutral-800 shadow overflow-hidden rounded-md p-6 bg-gradient-to-br hover:from-orange-400/20 hover:via-fuchsia-500/20 hover:to-blue-800/20 ${className}`}
>
  <slot />
</div>
