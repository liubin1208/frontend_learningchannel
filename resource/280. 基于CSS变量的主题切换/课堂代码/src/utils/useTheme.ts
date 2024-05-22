import { ref, watchEffect } from 'vue';

const LOCAL_KEY = '__theme__';
type Theme = 'light' | 'dark';

const theme = ref<Theme>((localStorage.getItem(LOCAL_KEY) as Theme) || 'light');

watchEffect(() => {
  document.documentElement.dataset.theme = theme.value;
  localStorage.setItem(LOCAL_KEY, theme.value);
});

export default function useTheme() {
  return {
    theme,
  };
}
