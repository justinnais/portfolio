<script>
  import { skillColorMap, pickTextColorBasedOnBg } from '$lib/data';
  export let name;
  export let backgroundColor;

  if (!backgroundColor) {
    backgroundColor = skillColorMap[name] ?? '#EAEAEA';
  }

  const textColor = pickTextColorBasedOnBg(backgroundColor);
</script>

<div
  style={`background-color: ${backgroundColor}`}
  class={`w-min px-2 py-1 ${textColor} shadow-md whitespace-nowrap`}
>
  {name}
</div>
