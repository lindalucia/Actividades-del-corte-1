<template>
  <div class="art-login-container">
    <!-- Panel Izquierdo: Visual y temático -->
    <div class="artistic-panel">
      <h1 class="art-title">Portal de Arte</h1>
      <p class="art-quote">"El pintor tiene el universo en su mente y en sus manos." - Leonardo da Vinci</p>
    </div>

    <!-- Panel Derecho: Formulario de Login -->
    <div class="login-panel">
      <div class="login-form">
        <h2 class="form-title">Bienvenido, Artista</h2>
        
        <!-- AQUI ESTA EL CAMBIO: Llamamos al componente con v-model -->
        <FormLogin 
          v-model:email="userEmail" 
          v-model:password="userPassword" 
          @intentarLogin="loginFinal"
        />

        <div class="form-footer">
          <a href="#">¿Olvidaste tu contraseña?</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const userEmail = ref('')
const userPassword = ref('')

const loginFinal = () => {
  alert(`Intentando entrar con: ${userEmail.value}`);
}

definePageMeta({
  layout: false,
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Lato:wght@400&display=swap');

.art-login-container {
  display: flex;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

.artistic-panel {
  flex: 1.2;
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=1887') no-repeat center center;
  background-size: cover;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px;
  text-align: center;
  font-family: 'Lato', sans-serif;
}

.art-title {
  font-family: 'Playfair Display', serif;
  font-size: 3.5rem;
  text-shadow: 2px 2px 8px rgba(0,0,0,0.7);
  margin-bottom: 20px;
}

.art-quote { font-size: 1.25rem; font-style: italic; max-width: 85%; }

.login-panel {
  flex: 1;
  background-color: #f4f1ea;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
}

.login-form { max-width: 380px; width: 100%; }

.form-title {
  font-family: 'Playfair Display', serif;
  font-size: 2.2rem;
  color: #4a4a4a;
  text-align: center;
  margin-bottom: 50px;
}

.form-footer { margin-top: 30px; text-align: center; }
.form-footer a { color: #795548; text-decoration: none; font-size: 0.9rem; }
</style>