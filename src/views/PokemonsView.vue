<script setup>
import { RouterLink } from 'vue-router';
import { useGetData } from '@/composables/getData';

const { data, getData, loading, error } = useGetData();

getData('https://pokeapi.co/api/v2/pokemon');
</script>

<template>
  <div class="about">
    <h1>Pokemons</h1>
    <p v-if="loading">Loading...</p>
    <div class="alert alert-danger mt-2" v-if="error">{{error}}</div>
    <div if="data">
      <ul class="list-group">
        <li v-for="p in data?.results" :key="p.name" class="list-group-item">
          <router-link :to="`/pokemons/${p.name}`">{{p.name}}</router-link>
        </li>
      </ul>

      <div class="mt-2">
        <button 
          :disabled="!data?.previous"
          class="btn btn-primary me-2" 
          @click="getData(data.previous)"
        >
          Prev
        </button>
    
        <button 
          :disabled="!data?.next"
          class="btn btn-primary me-2" 
          @click="getData(data.next)"
        >
          Next
        </button>
      </div>
    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>