<script setup>
import { useRoute, useRouter } from 'vue-router';
import { useGetData } from '@/composables/getData';
import { useFavoritesStore } from '@/store/favorites';

const route = useRoute();
const router = useRouter();
const useFavorites = useFavoritesStore();

const { data, getData, loading, error } = useGetData();
const { add, findByName } = useFavorites;

const back = () => { router.push('/pokemons'); }

getData(`https://pokeapi.co/api/v2/pokemon/${route.params.pokeName}`);
</script>

<template>
  <p v-if="loading">Loading...</p>
  <div class="alert alert-danger mt-2" v-if="error">Pokemon not found!</div>
  <div v-if="data">
    <img :src="data.sprites?.front_default" :alt="data.name">
    <h1>Poke name: {{data.name}}</h1>
    <button :disabled="findByName(data.name)" class="btn btn-primary" @click="add(data)">Like</button>
  </div>
  <button @click="back" class="btn btn-outline-primary">voltar</button>
</template>