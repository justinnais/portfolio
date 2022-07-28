<script>
  import { Burger } from '$lib/components';
  let menuOpen = false;

  const handleClick = () => (menuOpen = !menuOpen);
</script>

<header class="px-8 py-4 w-full flex justify-center">
  <div class="flex justify-between items-center max-w-4xl w-full">
    <div class="flex flex-1 justify-center">
      <a class="mr-auto text-3xl font-semibold" href="/">nais</a>
    </div>

    <div class="flex-1 justify-center hidden md:flex">
      <nav>
        <ul class="flex gap-8 list-none">
          <li>
            <a href="#about">about</a>
          </li>
          <li>
            <a href="/project">projects</a>
          </li>
          <li>
            <a href="#contact">contact</a>
          </li>
        </ul>
      </nav>
    </div>
    <div class="flex flex-1 justify-center md:hidden">
      <button
        on:click={handleClick}
        class="ml-auto w-auto rounded bg-neutral-300 dark:bg-neutral-800"
        ><Burger /></button
      >
    </div>
  </div>

  {#if menuOpen}
    <nav>
      <ul class="flex flex-col gap-4 list-none items-end p-2">
        <li>
          <a href="#about">about</a>
        </li>
        <li>
          <a href="/project">projects</a>
        </li>
        <li>
          <a href="#contact">contact</a>
        </li>
      </ul>
    </nav>
  {/if}
</header>
