<template>
  <v-card class="rounded-xl overflow-hidden" elevation="10">
    <v-row no-gutters>
      <!-- Panel Izquierdo: Visual (Copiado de login.vue) -->
      <v-col cols="12" md="6" class="d-none d-md-flex">
        <v-img
          src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=1887"
          cover
          class="align-center text-white"
        >
          <div class="pa-8 text-center d-flex flex-column justify-center h-100" style="background: rgba(0, 0, 0, 0.5);">
            <h1 class="text-h3 font-weight-bold mb-4" style="font-family: 'Playfair Display', serif;">Portal de Arte</h1>
            <p class="text-h6 font-italic">"El pintor tiene el universo en su mente y en sus manos."</p>
            <p class="text-subtitle-1 mt-2">— Leonardo da Vinci</p>
          </div>
        </v-img>
      </v-col>

      <!-- Panel Derecho: Formulario -->
      <v-col cols="12" md="6">
        <div class="pa-8 pa-md-12 h-100 position-relative" style="background-color: #f4f1ea;">
          <!-- Botón para cerrar el modal -->
          <v-btn 
            icon="mdi-close" 
            variant="text" 
            position="absolute" 
            location="top right" 
            class="mt-2 mr-2"
            @click="$emit('close')"
          ></v-btn>

          <h2 class="text-h4 text-center mb-10" style="font-family: 'Playfair Display', serif; color: #4a4a4a;">
            Bienvenido, Artista
          </h2>

          <v-card-text class="pa-0">
            <div class="input-group">
              <input type="email" id="email" v-model="email" required />
              <label for="email">Correo electrónico</label>
            </div>
            <div class="input-group">
              <input type="password" id="password" v-model="password" required />
              <label for="password">Contraseña</label>
            </div>
            <button @click="$emit('intentarLogin')" class="login-button">Entrar</button>

            <div class="text-center mt-6">
              <a href="#" style="color: #795548; text-decoration: none; font-size: 0.9rem;">¿Olvidaste tu contraseña?</a>
            </div>
          </v-card-text>
        </div>
      </v-col>
    </v-row>
  </v-card>
</template>

<script setup>
// Aquí aplicamos el concepto que pidió el profesor
const email = defineModel('email')
const password = defineModel('password')
defineEmits(['intentarLogin', 'close'])
</script>

<style scoped>
/* Movemos aquí solo los estilos de los inputs y el botón */
.input-group {
  position: relative;
  margin-bottom: 40px;
}
.input-group input {
  width: 100%;
  padding: 10px 5px;
  border: none;
  border-bottom: 2px solid #ccc;
  background-color: transparent;
  font-size: 1rem;
  color: #333;
}
.input-group input:focus {
  outline: none;
  border-bottom-color: #795548;
}
.input-group label {
  position: absolute;
  top: 10px;
  left: 5px;
  color: #999;
  font-size: 1rem;
  pointer-events: none;
  transition: all 0.3s ease;
}
.input-group input:focus + label,
.input-group input:valid + label {
  top: -20px;
  font-size: 0.8rem;
  color: #795548;
}
.login-button {
  width: 100%;
  padding: 15px;
  background: linear-gradient(45deg, #6d4c41, #9c786c);
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
  box-shadow: 0 4px 15px rgba(0,0,0,0.2);
}
.login-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0,0,0,0.25);
}
</style>