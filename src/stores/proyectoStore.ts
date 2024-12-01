import type { Proyecto } from '@/models/Proyecto';
import { defineStore } from 'pinia';
import { ref } from 'vue';
import { useAsociacionStore } from './asosiacionStore';
 
export const useProyectoStore = defineStore('proyecto', () => {
  const proyectos = ref<Proyecto[]>([]);
  const selectedProyecto = ref<Proyecto | null>(null);
  const asociacionStore = useAsociacionStore();

  const addProyecto = (proyecto: Proyecto) => {
    proyectos.value.push(proyecto);
  };

  const updateProyecto = (updatedProyecto: Proyecto) => {
    const index = proyectos.value.findIndex(p => p.id === updatedProyecto.id);
    if (index !== -1) {
      proyectos.value[index] = updatedProyecto;
    }
  };

  const deleteProyecto = (id: number) => {
    const hasAsociaciones = asociacionStore.asociaciones.some(a => a.proyectoId === id);
    if (!hasAsociaciones) {
      proyectos.value = proyectos.value.filter(p => p.id !== id);
      alert('Proyecto eliminado correctamente.');
    } else {
      alert('No se puede eliminar el proyecto porque está asociado a una persona.');
    }
  };

  const selectProyecto = (proyecto: Proyecto) => {
    selectedProyecto.value = proyecto;
  };

  return {
    proyectos,
    selectedProyecto,
    addProyecto,
    updateProyecto,
    deleteProyecto,
    selectProyecto,
  };
});