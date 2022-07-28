<script>
  export let title;
</script>

<section class="md:mb-16" id={title.toLowerCase()}>
  <h2 class="mb-8">{title}</h2>
  <slot />
</section>
