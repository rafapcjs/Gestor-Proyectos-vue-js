 import type { Asociacion } from '@/models/Asosiacion';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useAsociacionStore = defineStore('asociacion', () => {
  const asociaciones = ref<Asociacion[]>([]);
  const selectedAsociacion = ref<Asociacion | null>(null);

  const addAsociacion = (asociacion: Asociacion) => {
    asociaciones.value.push(asociacion);
  };

  const updateAsociacion = (updatedAsociacion: Asociacion) => {
    const index = asociaciones.value.findIndex((a) => a.id === updatedAsociacion.id);
    if (index !== -1) {
      asociaciones.value[index] = updatedAsociacion;
    }
  };

  const deleteAsociacion = (id: number) => {
    const index = asociaciones.value.findIndex((a) => a.id === id);
    if (index !== -1) {
      asociaciones.value.splice(index, 1);
      alert('Asociación eliminada correctamente.');
    } else {
      alert('Asociación no encontrada.');
    }
  };

  const selectAsociacion = (asociacion: Asociacion) => {
    selectedAsociacion.value = asociacion;
  };

  const clearSelectedAsociacion = () => {
    selectedAsociacion.value = null;
  };

  return {
    asociaciones,
    selectedAsociacion,
    addAsociacion,
    updateAsociacion,
    deleteAsociacion,
    selectAsociacion,
    clearSelectedAsociacion,
  };
});