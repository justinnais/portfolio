<script>
  import Hero from '$lib/components/Hero.svelte';
  import Section from '$lib/components/Section.svelte';
</script>

<svelte:head>
  <title>Justin Naismith</title>
</svelte:head>

<Hero />
<div class="flex flex-col gap-12">
  <Section title={'About'}>
    <article class="flex flex-col gap-4 mb-8">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda hic
        ut molestias pariatur voluptas culpa velit enim at veniam ullam saepe
        reiciendis mollitia dignissimos voluptatibus similique nobis, numquam
        sed fugiat.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda hic
        ut molestias pariatur voluptas culpa velit enim at veniam ullam saepe
        reiciendis mollitia dignissimos voluptatibus similique nobis, numquam
        sed fugiat.
      </p>
    </article>
  </Section>
  <Section title={'Skills'}>some kind of skill tree</Section>
  <Section title={'Projects'}>
    Top 3 projects, then view more link to projects route
    <a href="/projects">View More</a>
  </Section>
  <Section title={'Contact'}>
    <div class="bg-green-500 h-32 w-32 rounded-full">image</div>
    Justin Naismith justin@nais.dev links
  </Section>
</div>
