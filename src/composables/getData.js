import axios from 'axios';
import { ref } from 'vue';

export const useGetData = () => {
  const data = ref(null);
  const error = ref(null);
  const loading = ref(true);

  const getData = async (url) => {
    loading.value = true;
    try {
      const res = await axios.get(url);
      data.value = res.data;
    } catch (e) {
      error.value = '500: server error';
      // console.log(e);
    } finally {
      loading.value = false;
    }
  };

  return { 
    getData,
    data,
    loading,
    error
  }
}