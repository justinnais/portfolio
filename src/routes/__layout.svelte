<script>
  import '$lib/styles/app.css';
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
</script>

<Header />
<main class="px-8 my-8 flex-grow flex w-full flex-col items-center">
  <div class="w-full max-w-3xl"><slot /></div>
</main>
<Footer />
