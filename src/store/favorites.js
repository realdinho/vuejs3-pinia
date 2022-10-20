import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useFavoritesStore = defineStore('favorites', () => {
  const favorites = ref([]);

  if (localStorage.getItem('favorites')) {
    favorites.value = JSON.parse(localStorage.getItem('favorites'));
  }

  const add = (poke) => {
    favorites.value.push(poke);
    localStorage.setItem('favorites', JSON.stringify(favorites.value));
  }

  const remove = (id) => {
    favorites.value = favorites.value.filter(item => item.id !== id);
    localStorage.setItem('favorites', JSON.stringify(favorites.value));
  }

  const findByName = (name) => favorites.value.find(item => item.name === name);

  return {
    add,
    remove,
    findByName,
    favorites
  }
})