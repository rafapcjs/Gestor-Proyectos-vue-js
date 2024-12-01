import type { Persona } from '@/models/Persona';
import { defineStore } from 'pinia';
import { ref } from 'vue';
import { useAsociacionStore } from './asosiacionStore';
 
export const usePersonaStore = defineStore('persona', () => {
  const personas = ref<Persona[]>([]);
  const selectedPersona = ref<Persona | null>(null);
  const asociacionStore = useAsociacionStore();

  const addPersona = (persona: Persona) => {
    personas.value.push(persona);
  };

  const updatePersona = (updatedPersona: Persona) => {
    const index = personas.value.findIndex(p => p.id === updatedPersona.id);
    if (index !== -1) {
      personas.value[index] = updatedPersona;
    }
  };

  const deletePersona = (id: number) => {
    const hasAsociaciones = asociacionStore.asociaciones.some(a => a.personaId === id);
    if (!hasAsociaciones) {
      personas.value = personas.value.filter(p => p.id !== id);
      alert('Persona eliminada correctamente.');
    } else {
      alert('No se puede eliminar la persona porque está asociada a un proyecto.');
    }
  };

  const selectPersona = (persona: Persona) => {
    selectedPersona.value = persona;
  };

  return {
    personas,
    selectedPersona,
    addPersona,
    updatePersona,
    deletePersona,
    selectPersona,
  };
});