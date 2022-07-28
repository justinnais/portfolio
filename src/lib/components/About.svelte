<script>
  import Section from '$lib/components/Section.svelte';
  import Headshot from '$lib/assets/headshot.jpg';
  export let name = 'justin';
  // export let email;
</script>

<Section title={'About'}>
  <div class="flex flex-col sm:flex-row justify-between gap-10">
    <article class="flex flex-col gap-4 max-w-md">
      <slot />
    </article>
    <img
      class="hidden sm:block object-cover sm:w-56 sm:h-72 md:w-72 md:h-96 rounded-lg shadow-lg -translate-y-5"
      alt={`Headshot of ${name}`}
      src={Headshot}
    />
  </div>
</Section>
