<template>
  <v-card
    class="mx-auto"
    max-width="600"
  >
    <v-img
      class="align-end text-white"
      height="200"
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/250px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg"
      cover
    >
      <v-card-title>Historia del Arte</v-card-title>
    </v-img>

    <v-card-text>
      <div class="font-weight-bold ms-1 my-2">¿que es?</div>
      <p class="mb-4">
        La historia del arte es la crónica de la expresión humana a través de la pintura, la escultura, la arquitectura y otras formas visuales. Cada período refleja las ideas, valores y tecnologías de su tiempo.
      </p>

      <v-timeline align="start" density="compact">
        <v-timeline-item
          v-for="era in eras"
          :key="era.name"
          :dot-color="era.color"
          size="x-small"
        >
          <div class="mb-4">
            <div class="font-weight-normal">
              <strong>{{ era.name }}</strong> @ {{ era.year }}
            </div>
            <div>{{ era.description }}</div>
          </div>
        </v-timeline-item>
      </v-timeline>
    </v-card-text>
  </v-card>
</template>
<script setup>
// 1. PROPS: Aquí recibimos la lista desde afuera
defineProps({
  eras: {
    type: Array,
    required: true
  }
});
</script>
