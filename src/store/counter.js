import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

// ===== store - composition API ====
export const useCounterStore = defineStore('counter', () => {
  const count = ref(0);

  const increment = () => count.value++;
  
  const double = computed(() => count.value * 2);

  return {
    count,
    increment,
    double
  };
});

// ===== store - option API ====
// export const useCounterStore = defineStore('counter', {
//   state: () => ({
//     count: 0
//   }),
//   actions: {
//     increment() {
//       this.count++;
//     }
//   },
//   getters: {
//     double: (state) => state.count * 2
//   }
// });