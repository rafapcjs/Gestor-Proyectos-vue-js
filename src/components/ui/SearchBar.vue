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
import { defineComponent, ref, watch } from 'vue';

export default defineComponent({
  name: 'SearchBar',
  props: {
    placeholder: {
      type: String,
      default: 'Buscar...',
    },
    modelValue: {
      type: String,
      default: '',
    },
  },
  emits: ['update:modelValue', 'search'],
  setup(props, { emit }) {
    const query = ref(props.modelValue);

    watch(query, (newValue) => {
      emit('update:modelValue', newValue);
    });

    const onSearch = () => {
      emit('search', query.value);
    };

    watch(() => props.modelValue, (newValue) => {
      query.value = newValue;
    });

    return {
      query,
      onSearch,
    };
  },
});
</script>