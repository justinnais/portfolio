<script>
  import { Section } from '$lib/components';
  import { Headshot, GitHub, Mail, LinkedIn } from '$lib/assets';
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
      <p class="text-xl mb-2">{name}</p>
      <p>You can reach me at</p>
      <a href={`mailto:${email}`} class="font-mono">{email}</a>
    </div>
    <!-- <div>
      <GitHub />
      <LinkedIn />
      <Mail />
    </div> -->
  </div>
</Section>
