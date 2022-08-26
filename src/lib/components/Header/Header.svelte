<script>
  const navLinks = [
    {
      label: 'about',
      href: '/#about',
    },
    {
      label: 'projects',
      href: '/projects',
    },
    {
      label: 'contact',
      href: '/#contact',
    },
  ];
</script>

<header class="px-8 py-4 w-full flex flex-col sm:flex-row justify-center">
  <div class="flex justify-between items-center max-w-4xl w-full">
    <div class="flex flex-1 justify-center">
      <a class="mr-auto text-3xl font-semibold no-underline" href="/">nais</a>
    </div>

    <nav>
      <ul>
        {#each navLinks as { label, href }}
          <li>
            <a class="text-md font-semibold no-underline" {href}>{label}</a>
          </li>
        {/each}
      </ul>
    </nav>
  </div>
</header>

<style>
  /* nav button {
    @apply md:hidden;
  } */

  nav ul {
    @apply flex p-2 list-none flex-row gap-4 md:gap-8;
    /* @apply flex flex-col items-end p-2 gap-4 list-none md:flex-row md:gap-8; */
  }
</style>
