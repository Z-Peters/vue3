<template>
<div class="app">
  <Person/>
</div>
</template>

<script lang="ts">
// import Person from './components/Person.vue'; // 明确写扩展名
import Person from './components/Person.vue'
export default{
  name:'App',
  components:{Person}
}
</script>
<style scoped>
.app{
  color: red;
}
</style>
