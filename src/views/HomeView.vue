<script setup>
import { useCounterStore } from '../store/counter';
import { storeToRefs } from 'pinia';

const useCounter = useCounterStore();

const { double, count } = storeToRefs(useCounter);
const { increment } = useCounter;
</script>

<template>
 <h1>Home counter: {{ count }}</h1>
 <h2>Double: {{ double }}</h2>
 <button @click="increment">Increment</button>
</template>
