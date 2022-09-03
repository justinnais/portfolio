export const skillColorMap = {
  TypeScript: '#3178C6',
  JavaScript: '#F7DF1E',
  React: '#61DAFB',
  Svelte: '#FF3E00',
  NodeJS: '#339933',
  'React Native': '#61DAFB',
  Expo: '#000020',
  Sass: '#CC6699',
  Java: '#5382a1', // #f89820
  AWS: '#232F3E',
  GCP: '#4285F4',
  Terraform: '#7B42BC',
  Docker: '#2496ED',
  Git: '#F05032',
  'GitHub Actions': '#2088FF',
  Puppeteer: '#40B5A4',
  d3: '#F9A03C',
  Python: '#3776AB',
  Flask: '#000000',
  Ethereum: '#3C3C3D',
  Solidity: '#363636',
  CircleCI: '#343434',
};

export function pickTextColorBasedOnBg(
  bgColor,
  lightColor = 'text-neutral-200',
  darkColor = 'text-neutral-900'
) {
  const color = bgColor.charAt(0) === '#' ? bgColor.substring(1, 7) : bgColor;
  const r = parseInt(color.substring(0, 2), 16); // hexToR
  const g = parseInt(color.substring(2, 4), 16); // hexToG
  const b = parseInt(color.substring(4, 6), 16); // hexToB
  return r * 0.299 + g * 0.587 + b * 0.114 > 150 ? darkColor : lightColor;
}
