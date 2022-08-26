// On page load or when changing themes, best to add inline in `head` to avoid FOUC
const systemPrefersDark = window.matchMedia(
  '(prefers-color-scheme: dark)'
).matches;
const noThemeSet = !('theme' in localStorage);

if (localStorage.theme === 'dark' || (noThemeSet && systemPrefersDark)) {
  document.documentElement.classList.add('dark');
} else {
  document.documentElement.classList.remove('dark');
}

// Whenever the user explicitly chooses light mode
localStorage.theme = 'light';

// Whenever the user explicitly chooses dark mode
localStorage.theme = 'dark';

// Whenever the user explicitly chooses to respect the OS preference
localStorage.removeItem('theme');
