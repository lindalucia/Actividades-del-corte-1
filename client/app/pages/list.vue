<template>
  <div>
    <ListVideo :eras="eras" />
  </div>
</template>

<script setup>
import ListVideo from '~/components/ListVideo.vue'

const eras = [
  {
    name: 'Renacimiento',
    year: '1400-1600',
    description: 'Un florecimiento del arte y la ciencia, inspirado en la antigüedad clásica.',
    color: 'primary'
  },
  {
    name: 'Barroco',
    year: '1600-1750',
    description: 'Caracterizado por su dramatismo, emoción y grandiosidad.',
    color: 'secondary'
  },
  {
    name: 'Impresionismo',
    year: '1860-1880',
    description: 'Los artistas capturan la luz y el momento, a menudo pintando al aire libre.',
    color: 'accent'
  },
  {
    name: 'Cubismo',
    year: '1907-1914',
    description: 'Una revolución en la pintura, que representa objetos desde múltiples puntos de vista.',
    color: 'info'
  }
];
</script>
