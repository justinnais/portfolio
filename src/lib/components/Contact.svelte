<script>
  import Section from '$lib/components/Section.svelte';
  import Headshot from '$lib/assets/headshot.jpg';
  export let name;
  export let email;
</script>

<Section title={'Contact'}>
  <div class="flex items-center gap-8 lg:justify-center">
    <img
      class="h-32 w-32 rounded-full overflow-hidden"
      alt={`Headshot of ${name}`}
      src={Headshot}
    />
    <div>
      <p class="text-xl mb-2">{name}</p>
      <p class="hidden md:block">You can reach me at</p>
      <a href={`mailto:${email}`} class="font-mono">{email}</a>
    </div>
  </div>
</Section>
