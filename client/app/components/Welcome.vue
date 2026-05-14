<template>
  <v-container fluid class="py-4 px-md-10 bg-white">
    <v-row class="d-flex align-center">
      
      <!-- 1. TARJETA DE BIENVENIDA (más compacta y horizontal) -->
      <v-col cols="12" md="4" class="d-flex flex-column justify-center">
        <v-card 
          color="#F3F0FF" 
          flat 
          class="rounded-xl pa-4 d-flex flex-column justify-center h-100"
          style="min-height: 220px;" 
        >
          <div class="d-flex align-start mb-2">
            <v-avatar color="transparent" size="32" class="mr-2">
              <v-icon size="24" color="#5E4E92">mdi-palette-outline</v-icon>
            </v-avatar>
            <div>
              <h1 class="text-h6 font-weight-bold mb-1" 
                  style="color: #1A1A1A; font-family: 'serif'; line-height: 1.1;">
                Bienvenido a <br> Historia del Arte
              </h1>
              <p class="text-caption font-weight-bold" style="color: #5E4E92; font-size: 12px;">
                Un recorrido por la creatividad humana a través del tiempo.
              </p>
            </div>
          </div>
          
          <p class="text-caption text-grey-darken-2 mb-3" style="line-height: 1.3; font-size: 12px;">
            Exploraremos los principales movimientos artísticos, sus obras más representativas y los artistas que marcaron la historia. Desde el arte clásico hasta el contemporáneo...
          </p>
          
          <div>
            <v-btn color="#5E4E92" variant="flat" class="text-none rounded-lg px-4" theme="dark" size="x-small">
              Comienza a explorar <v-icon end icon="mdi-arrow-right" size="12"></v-icon>
            </v-btn>
          </div>
        </v-card>
      </v-col>

      <!-- 2. LAS CUATRO CATEGORÍAS (alineadas horizontalmente) -->
      <v-col cols="12" md="8" class="d-flex flex-column justify-center">
        <h2 class="text-subtitle-2 font-weight-bold mb-4 ml-4">
          ¿Qué te gustaría explorar hoy?
        </h2>
        
        <v-row no-gutters>
          <v-col v-for="(item, i) in categorias" :key="i" cols="12" sm="3" class="px-3 border-right">
            <div class="d-flex flex-column align-start">
              <v-avatar :color="item.bgColor" size="40" class="mb-3 shadow-sm">
                <v-icon :icon="item.icon" color="white" size="20"></v-icon>
              </v-avatar>
              
              <h3 class="text-body-2 font-weight-bold mb-1" style="color: #1A1A1A;">
                {{ item.title }}
              </h3>
              
              <p class="text-caption text-grey-darken-1 mb-2" style="line-height: 1.2; font-size: 12px;">
                {{ item.desc }}
              </p>
              
              <v-btn 
                variant="text" 
                density="compact" 
                color="#5E4E92" 
                class="text-none px-0 font-weight-bold"
                style="font-size: 10px;"
              >
                {{ item.link }} <v-icon size="12" icon="mdi-arrow-right" class="ms-1"></v-icon>
              </v-btn>
            </div>
          </v-col>
        </v-row>
      </v-col>

    </v-row>
  </v-container>
</template>

<script setup>
const categorias = [
  { title: 'Historia del Arte', desc: 'Conoce las grandes etapas y movimientos que han marcado...', link: 'Explorar', icon: 'mdi-pillar', bgColor: '#B39DDB' },
  { title: 'Líneas de Tiempo', desc: 'Visualiza los movimientos artísticos y sus contextos...', link: 'Ver líneas de tiempo', icon: 'mdi-timeline-clock-outline', bgColor: '#FFB74D' },
  { title: 'Blog y Artículos', desc: 'Lee artículos, análisis y curiosidades sobre obras...', link: 'Leer artículos', icon: 'mdi-pencil-outline', bgColor: '#A5D6A7' },
  { title: 'Recursos Educativos', desc: 'Encuentra material educativo, guías y herramientas...', link: 'Ver recursos', icon: 'mdi-book-open-variant', bgColor: '#EF9A9A' },
]
</script>

<style scoped>
.border-right {
  border-right: 1px solid #F0F0F0;
}
.border-right:last-child {
  border-right: none;
}
</style>
