<template>
  <v-app> <!-- Importante: Vuetify necesita v-app para escalar bien -->
    <AppHeader />
    <!-- Usamos v-main para que Vuetify gestione el espacio del Header -->
    <v-main class="bg-grey-lighten-5">
      <!-- Este container limita el ancho a 1200px para que no se vea gigante -->
      <v-container class="pa-0" style="max-width: 1200px;">
        <slot />
      </v-container>
    </v-main>
    <AppFooter />
  </v-app>
</template>
