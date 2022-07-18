<script>
  import { skillColorMap } from '../../data/skills';
  export let name;
  export let backgroundColor;

  if (!backgroundColor) {
    backgroundColor = skillColorMap[name] ?? '#EAEAEA';
  }

  function pickTextColorBasedOnBg(
    bgColor,
    lightColor = 'text-white',
    darkColor = 'text-black'
  ) {
    const color = bgColor.charAt(0) === '#' ? bgColor.substring(1, 7) : bgColor;
    const r = parseInt(color.substring(0, 2), 16); // hexToR
    const g = parseInt(color.substring(2, 4), 16); // hexToG
    const b = parseInt(color.substring(4, 6), 16); // hexToB
    return r * 0.299 + g * 0.587 + b * 0.114 > 150 ? darkColor : lightColor;
  }
  const textColor = pickTextColorBasedOnBg(backgroundColor);
</script>

<div
  style={`background-color: ${backgroundColor}`}
  class={`w-min px-2 py-1 ${textColor} shadow-md whitespace-nowrap`}
>
  {name}
</div>
