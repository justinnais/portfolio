<script>
  export let className;
</script>

<div
  class={`bg-gray-100 shadow overflow-hidden sm:rounded-lg p-4 ${className}`}
>
  <slot />
</div>
