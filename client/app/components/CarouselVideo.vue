<template>
  <v-carousel
    height="200"
    show-arrows="hover"
    cycle
    hide-delimiters
  >
    <v-carousel-item
      v-for="(slide, i) in slides"
      :key="i"
      :src="slide.src"
      cover
      @click="onSlideClick(slide)"
    >
      <!-- Se ha eliminado el título que aparecía sobre la imagen -->
    </v-carousel-item>
  </v-carousel>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

// Define las props que el componente espera recibir
const props = defineProps({
  slides: {
    type: Array,
    required: true,
    default: () => []
  }
});

// Define los eventos que el componente puede emitir
const emit = defineEmits(['select-video']);

// Función que se llama al hacer clic en un slide
function onSlideClick(slide) {
  // Emite el evento 'select-video' y pasa el objeto 'slide' como dato
  emit('select-video', slide);
}
</script>
