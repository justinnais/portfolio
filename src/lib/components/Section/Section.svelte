<script>
  export let title;
  import IntersectionObserver from 'svelte-intersection-observer';
  import { fade } from 'svelte/transition';

  let node;
</script>


<IntersectionObserver once element={node} let:intersecting>
  <div bind:this={node}>
    {#if intersecting}
      <section
        class="md:mb-16"
        id={title.toLowerCase()}
        transition:fade={{ delay: 250 }}
      >
        <h2 class="mb-8">{title}</h2>
        <slot />
      </section>
    {/if}
  </div>
</IntersectionObserver>
