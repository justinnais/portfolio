<script>
  export let className;
</script>

<div class={`bg-white shadow overflow-hidden sm:rounded-lg p-4 ${className}`}>
  <slot />
</div>
