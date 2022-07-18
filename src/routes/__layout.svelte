<script>
  import '$lib/styles/app.css';
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
</script>

<Header />
<!-- TODO fix self-center as breaks on smaller screens -->
<main class="px-8 my-8 flex-grow max-w-3xl">
  <slot />
</main>
<Footer />
