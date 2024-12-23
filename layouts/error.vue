<template>
  <div>
    <h1>Error {{ error.statusCode || '500' }}</h1>
    <p>{{ error.message || 'Something went wrong.' }}</p>
  </div>
</template>

<script setup>
const error = useNuxtApp().$pageState.error
</script>

