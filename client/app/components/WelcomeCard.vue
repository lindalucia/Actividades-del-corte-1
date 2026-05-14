<template>
  <v-container fluid class="py-4 px-md-10 bg-white">
    <div class="d-flex align-center justify-space-between mb-4">
      <h2 class="text-subtitle-1 font-weight-bold" style="color: #2c3e50;">
        Explora las épocas del arte
      </h2>
    </div>
    
    <v-row dense>
      <v-col v-for="era in eras.slice(0, 3)" :key="era.title" cols="12" md="3">
        <v-card variant="outlined" class="rounded-xl overflow-hidden h-100 border-grey-lighten-3">
          <v-img :src="era.image" height="130" cover></v-img>
          <v-card-text class="pa-3">
            <div class="text-subtitle-2 font-weight-bold mb-1" style="color: #333;">
              {{ era.title }}
            </div>
            <p class="text-caption text-grey-darken-1" style="line-height: 1.2;">
              {{ era.subtitle }}
            </p>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="3">
        <v-card 
          color="#F3F0FF" 
          flat 
          class="rounded-xl h-100 d-flex flex-column align-center justify-center text-center pa-4" 
          link
        >
          <v-avatar color="white" size="36" class="mb-3 shadow-sm">
            <v-icon color="#5E4E92" size="20" icon="mdi-eye-outline"></v-icon>
          </v-avatar>
          <div class="text-caption font-weight-bold" style="color: #5E4E92; line-height: 1.2;">
            Ver todas las<br>épocas del arte
          </div>
          <v-icon color="#5E4E92" size="small" class="mt-2">mdi-arrow-right</v-icon>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
defineProps(['eras'])
</script>

<style scoped>
.v-card--variant-outlined {
  border: 1px solid #E0E0E0 !important;
}
</style>
