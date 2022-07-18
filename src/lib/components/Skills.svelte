<script>
  import Section from '$lib/components/Section.svelte';
  import Skill from '$lib/components/Skill.svelte';
  export let map;
</script>

<Section title={'Skills'}>
  <div class="flex gap-2 flex-wrap">
    {#each [...map] as [skill, color]}
      <Skill name={skill} backgroundColor={color} />
    {/each}
  </div>
</Section>
