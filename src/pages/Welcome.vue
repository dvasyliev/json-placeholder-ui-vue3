<template>
  <h1>Welcome</h1>
  <p>This app created for learning Vue 3 + Vite + Pinia</p>

  <button @click="$router.push({ name: 'login' })">Choose User</button>
  <button @click="$router.push({ name: 'posts' })">Continue as Guest</button>
</template>
