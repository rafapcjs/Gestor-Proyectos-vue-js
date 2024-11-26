<template>
    <div class="flex justify-center mb-4">
      <input
        type="text"
        v-model="query"
        @input="onSearch"
        :placeholder="placeholder"
        class="p-2 w-72 border rounded-md border-gray-300"
      />
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  
  export default defineComponent({
    name: 'SearchBar',
    props: {
      placeholder: {
        type: String,
        default: 'Buscar...',
      },
      value: {
        type: String,
        default: '',
      },
    },
    emits: ['update:value', 'search'],
    setup(props, { emit }) {
      const query = ref(props.value);
  
      const onSearch = () => {
        // Actualiza el valor en el componente padre
        emit('update:value', query.value);
        // Llama al evento de búsqueda
        emit('search', query.value);
        
        // Imprime el valor de búsqueda en la consola
        console.log('Búsqueda realizada: ', query.value);
      };
  
      return {
        query,
        onSearch,
      };
    },
  });
  </script>
  