<script>
  import '$lib/styles/app.css';
  import { page } from '$app/stores';
  import { Breadcrumb, Header, Footer } from '$lib/components';
</script>

<Header />
<main class="px-8 my-8 flex-grow flex w-full flex-col items-center">
  <div class="w-full max-w-4xl">
    {#if $page.url.pathname !== '/'}
      <Breadcrumb path={$page.url.pathname} />
    {/if}
    <slot />
  </div>
</main>
<Footer />
