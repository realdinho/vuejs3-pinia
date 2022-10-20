<script setup>
import { storeToRefs } from 'pinia';
import { RouterLink } from 'vue-router';
import { useFavoritesStore } from '@/store/favorites';

const useFavorites = useFavoritesStore();

const { favorites } = storeToRefs(useFavorites);
const { remove } = useFavorites;
</script>

<template>
  <h1>Favorites</h1>  
  <p v-if="favorites?.length === 0">no favorites selected...</p>
  <ul class="list-group" v-else>
    <li v-for="fav in favorites" :key="fav.id" class="list-group-item">
      <div>{{ fav.name }}</div>
      <div>
        <router-link class="btn btn-sm btn-primary me-2" :to="`/pokemons/${fav.name}`">more info</router-link>
        <button class="btn btn-sm btn-danger" @click="remove(fav.id)">remove</button>
      </div>
    </li>
  </ul>
</template>