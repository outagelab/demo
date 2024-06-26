<script setup>
import { ref } from 'vue'

const props = defineProps({
  name: String,
  path: String
})

const result = ref(null);

fetch(props.path).then(x => result.value = x);

</script>

<template>
 <div>
  {{ name }} status: {{ result?.status }}
 </div>
</template>

<style scoped>

</style>
