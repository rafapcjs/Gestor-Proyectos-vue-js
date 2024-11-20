import CrearAsociacion from '@/components/CrearAsociacion.vue';
import CrearPersona from '@/components/CrearPersona.vue';
import CrearProyecto from '@/components/CrearProyecto.vue';
import ListadoAsociaciones from '@/components/ListadoAsociaciones.vue';
import ListadoPersonas from '@/components/ListadoPersonas.vue';
import ListadoProyectos from '@/components/ListadoProyectos.vue';
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
      path: '/listar-asociacion',
      name: 'ListadoAsociaciones',
      component: ListadoAsociaciones,  // Componente que se renderiza en la ruta raíz
    },
    {
      path: '/listar-proyecto',
      name: 'ListadoProyectos',
      component: ListadoProyectos,
    },
    {
      path: '/listar-persona',
      name: 'ListadoPersonas',
      component: ListadoPersonas,
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
