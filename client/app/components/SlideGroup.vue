<template>
  <v-container fluid class="py-4 px-md-10 bg-white">
    
    <!-- Encabezado -->
    <div class="d-flex justify-space-between align-center mb-4">
      <h2 class="text-subtitle-1 font-weight-bold" style="color: #2c3e50;">
        Grandes exponentes del arte
      </h2>
    </div>

    <!-- FILA PRINCIPAL -->
    <v-row 
      dense 
      class="flex-nowrap align-center"
      style="overflow-x: auto;"
    >
      
      <!-- Artistas -->
      <v-col 
        v-for="artista in listaArtistas" 
        :key="artista.id" 
        cols="auto"
      >
        <v-card 
          flat 
          class="d-flex align-center pa-3 border rounded-lg bg-white"
          style="width: 220px; height: 100px;"
        >
          <v-avatar size="55" class="mr-3">
            <v-img :src="artista.imagen" cover></v-img>
          </v-avatar>

          <div class="d-flex flex-column" style="line-height: 1.2;">
            <span class="text-caption font-weight-bold" style="color: #2c3e50;">
              {{ artista.nombre }}
            </span>
            <span class="text-grey-darken-1" style="font-size: 11px;">
              {{ artista.movimiento }}
            </span>
          </div>
        </v-card>
      </v-col>

      <!-- BOTÓN (AHORA NO SE BAJA) -->
      <v-col cols="auto">
        <v-card 
          flat 
          class="d-flex align-center justify-center pa-3 rounded-lg text-center"
          color="#F3E5F5"
          style="width: 220px; height: 100px;"
          link
        >
          <span 
            class="text-caption font-weight-bold"
            style="color: #5E4E92;"
          >
            Ver más exponentes
          </span>

          <v-icon 
            color="#6A1B9A" 
            size="small" 
            class="ml-2"
          >
            mdi-arrow-right
          </v-icon>
        </v-card>
      </v-col>

    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'

const listaArtistas = ref([
  { id: 1, nombre: "Vincent van Gogh", movimiento: "Postimpresionismo", imagen: "https://static.wixstatic.com/media/21c73d_57a5299a3e274374be424c6e80cc4edf~mv2.jpg/v1/fill/w_534,h_576,al_c,lg_1,q_80,enc_avif,quality_auto/21c73d_57a5299a3e274374be424c6e80cc4edf~mv2.jpg" },
  { id: 2, nombre: "Leonardo da Vinci", movimiento: "Renacimiento", imagen: "https://www.todocuadros.es/cdn/shop/files/leonardo-da-vinci-retrato-grabado-v2_5de238c9-2e25-4fd0-9973-50b5609e8df4.jpg?v=1715329428" },
  { id: 3, nombre: "Frida Kahlo", movimiento: "Arte Moderno", imagen: "https://imagessl.casadellibro.com/img/autores/w/91212.webp" },
  { id: 4, nombre: "Pablo Picasso", movimiento: "Cubismo", imagen: "https://upload.wikimedia.org/wikipedia/commons/9/98/Pablo_picasso_1.jpg" }
])
</script>

<style scoped>
.border {
  border: 1px solid #EDEDED !important;
}
</style>