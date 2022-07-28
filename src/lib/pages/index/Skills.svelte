<script>
  import { Section, Tag } from '$lib/components';
  export let map;
</script>

<Section title={'Skills'}>
  <div class="flex gap-2 flex-wrap max-w-lg">
    {#each [...map] as [skill, color]}
      <Tag name={skill} backgroundColor={color} />
    {/each}
  </div>
</Section>
