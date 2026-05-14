<script setup>
import { ref } from 'vue'

const showLogin = ref(false)
const { data: menuItems } = await useFetch('http://localhost:4000/menu')
</script>

<template>
  <v-app-bar flat height="70" border="b" class="bg-white">
    <!-- Contenedor para centrar y limitar el ancho como en el mockup -->
    <v-container class="d-flex align-center pa-0" style="max-width: 1200px;">
      
      <v-app-bar-nav-icon class="d-md-none"></v-app-bar-nav-icon>
      
      <!-- Logo/Título: Quitamos v-toolbar-title para evitar el recorte automático -->
      <div class="font-weight-bold mr-4" style="font-family: 'Playfair Display', serif; font-size: 20px; white-space: nowrap;">
        Historia del Arte
      </div>

      <v-spacer></v-spacer>

      <!-- Menú central: Botones más pequeños y con menos espacio -->
      <div class="d-none d-md-flex">
        <v-btn 
          v-for="item in ['Inicio', 'Historia del Arte', 'Líneas de Tiempo', 'Cursos', 'Blog', 'Recursos', 'Nosotros']" 
          :key="item"
          v-for="item in menuItems" 
          :key="item.id"
          variant="text" 
          class="text-none px-2" 
          style="font-size: 13px; color: #333;"
        >
          {{ item }}
          {{ item.titulo }}
        </v-btn>
      </div>

      <v-spacer></v-spacer>

      <!-- Botón de Acceso -->
      <v-btn 
        variant="text" 
        class="text-none px-4 mr-2" 
        style="font-size: 13px; color: #333;"
        @click="showLogin = true"
      >
        Acceso
      </v-btn>

      <!-- Botón principal: Color exacto y compacto -->
      <v-btn 
        color="#5E4E92" 
        class="text-none rounded-lg px-4" 
        variant="flat" 
        theme="dark"
        size="small"
        style="font-size: 13px;"
      >
        Inscríbete al curso <v-icon end icon="mdi-heart-outline" size="16"></v-icon>
      </v-btn>
    </v-container>

    <!-- Diálogo que contiene tu componente FormLogin -->
    <v-dialog v-model="showLogin" max-width="850">
      <FormLogin @close="showLogin = false" />
    </v-dialog>
  </v-app-bar>
</template>