<template>
  <!-- <div class="app">
  <Person/>
</div> -->
  <!-- <Person />
  <watchEffect /> -->
</template>

<script lang="ts">
import Person from './components/Person.vue'
import watchEffect from './components/watchEffect.vue'
export default {
  name: 'App',
  components: { Person,watchEffect },
}
</script>
<style scoped>
.app {
  color: red;
}
</style>
