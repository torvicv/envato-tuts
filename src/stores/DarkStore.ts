import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useDarkStore = defineStore('dark', () => {
  const darkMode = ref(false);

  const toggleDarkMode = () => {
    darkMode.value = !darkMode.value;
    
  };
  const setDarkMode = (value: boolean) => {
    darkMode.value = value;
  };
  const isDarkMode = () => {
    return darkMode.value;
  }
  return {
    darkMode,
    toggleDarkMode,
    setDarkMode,
    isDarkMode
  };
});