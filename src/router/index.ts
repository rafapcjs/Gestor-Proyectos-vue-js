import CrearAsociacion from '@/components/CrearAsociacion.vue';
import CrearPersona from '@/components/CrearPersona.vue';
import CrearProyecto from '@/components/CrearProyecto.vue';
import DashBoard from '@/views/DashBoard.vue';
import { createRouter, createWebHistory } from 'vue-router';

 
 
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), // Usa el historial de navegación
  routes: [
    // Definir las rutas que utilizarás en la aplicación
  
    {
      path: '/crear-proyecto', // Ruta para crear un proyecto
      name: 'CrearProyecto',
      component: CrearProyecto, // Componente para crear un proyecto
    },
    {
      path: '/',
      redirect: '/dashBoard',  // Redirige automáticamente a /dashBoard
    },
    {
      path: '/crear-asociacion', // Ruta para crear un proyecto
      name: 'CrearAsociacion',
      component: CrearAsociacion, // Componente para crear un proyecto
    },
    {
      path: '/crear-persona', // Ruta para crear un proyecto
      name: 'CrearPersona',
      component: CrearPersona, // Componente para crear un proyecto
    },

    {
      path: '/dashBoard', // Ruta para crear un proyecto
      name: 'DashBoard',
      component: DashBoard, // Componente para crear un proyecto
    },
  ],
});

export default router;
