<script>
  import '$lib/styles/app.css';
  import { Header, Footer } from '$lib/components';
</script>

<Header />
<main class="px-8 my-8 flex-grow flex w-full flex-col items-center">
  <div class="w-full max-w-4xl"><slot /></div>
</main>
<Footer />
