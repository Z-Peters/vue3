<template>
  <div>
    {{ message }}
  </div>
</template>

<script lang="ts">
export default {
  name: 'Person',
  components: {},
  props: {},
  data() {
    return {
      message: 'Hello Vue 2!',
    }
  },
  computed: {},
  methods: {},
  mounted() {},
}
</script>

<style scoped></style>
