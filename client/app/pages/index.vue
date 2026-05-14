<template>
  <div>
    <CarouselVideo 
      :slides="carouselSlides" 
      @select-video="handleVideoSelection" 
    />
    <AppBar />
    <Welcome />

    <!-- Pasamos la lista completa de 6 eras -->
    <WelcomeCard 
      :eras="listaDeEras" 
      @explorarEra="handleEraSelection"
    />
    <SlideGroup />
    <Footer />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { erasData } from '~/app/shared/types'; // Importamos los datos centralizados

const carouselSlides = ref([
  { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/1920px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg', title: 'La Noche Estrellada' },
  { src: 'https://wp.es.aleteia.org/wp-content/uploads/sites/7/2018/03/web3-the-last-supper-public-domain.jpg', title: 'La Última Cena' },
]);

// Usamos los datos importados directamente del archivo de tipos
const listaDeEras = ref(erasData);

function handleVideoSelection(slide) {
  console.log('Slide seleccionado:', slide.title);
}

function handleEraSelection(era) {
  console.log("Era seleccionada desde el hijo:", era.title);
}
</script>