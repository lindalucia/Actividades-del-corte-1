<!-- Footer.vue -->
<template>
  <v-footer class="bg-white border-t mt-12">
    <v-container class="main-container py-4">
      <v-row align="center">
        <v-col cols="12" md="4" class="d-flex align-center">
          <v-icon color="purple" class="mr-2">mdi-heart-outline</v-icon>
          <div>
            <div class="text-subtitle-2 font-weight-bold">Historia del Arte</div>
            <div class="text-caption text-grey">Explora. Aprende. Inspira.</div>
          </div>
        </v-col>
        
        <v-col cols="12" md="4" class="text-center">
          <v-btn variant="text" size="x-small" class="text-none">Inicio</v-btn>
          <v-btn variant="text" size="x-small" class="text-none">Cursos</v-btn>
          <v-btn variant="text" size="x-small" class="text-none">Nosotros</v-btn>
        </v-col>

        <v-col cols="12" md="4" class="text-right">
          <v-btn icon="mdi-instagram" variant="text" size="small"></v-btn>
          <v-btn icon="mdi-facebook" variant="text" size="small"></v-btn>
          <v-btn icon="mdi-youtube" variant="text" size="small"></v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>