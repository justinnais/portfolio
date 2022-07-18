<script>
  import Section from '$lib/components/Section.svelte';
  import Headshot from '$lib/assets/headshot.jpg';
  export let name;
  export let email;
</script>

<Section title={'Contact'}>
  <div class="flex items-center gap-8">
    <img
      class="h-32 w-32 rounded-full overflow-hidden"
      alt={`Headshot of ${name}`}
      src={Headshot}
    />
    <div>
      <p class="text-xl">{name}</p>
      <p class="font-mono">{email}</p>
    </div>
  </div>
</Section>
