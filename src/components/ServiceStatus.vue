<script setup>
import { ref } from 'vue'

const props = defineProps({
  name: String,
  path: String
})

const result = ref(null);
const isOk = ref(true);

fetch(props.path).then(x => {
  result.value = x;
});

</script>

<template>
 <div :class="result?.status < 400 ? 'ok' : 'broken'" v-if="result">
  {{ name }} status: {{ result?.status }}
 </div>
</template>

<style scoped>

.broken {
  background-color: rgb(240, 131, 131);
}

</style>
