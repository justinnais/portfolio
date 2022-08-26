<script context="module">
  export const load = ({ url }) => {
    const { pathname } = url;

    return {
      props: {
        pathname,
      },
    };
  };
</script>

<script>
  import { fade } from 'svelte/transition';
  import '$lib/styles/app.css';
  import { Breadcrumb, Header, Footer } from '$lib/components';
  export let pathname;
</script>

<Header />
{#key pathname}
  <main
    in:fade={{ duration: 150, delay: 150 }}
    out:fade={{ duration: 150 }}
    class="px-8 my-8 flex-grow flex w-full flex-col items-center"
  >
    <div class="w-full max-w-4xl">
      {#if pathname !== '/'}
        <Breadcrumb path={pathname} />
      {/if}
      <slot />
    </div>
  </main>
{/key}
<Footer />
