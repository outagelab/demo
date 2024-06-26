<script setup>
import ServiceStatus from './components/ServiceStatus.vue'
</script>

<template>
  <ServiceStatus name="product-search-service" path="/webapi/product-search" />
  <ServiceStatus name="recommendations-service" path="/webapi/recommendations" />
  <ServiceStatus name="product-details-service" path="/webapi/product-details" />
  <ServiceStatus name="order-history-service" path="/webapi/orders" />
  <ServiceStatus name="shopping-cart-service" path="/webapi/shopping-cart" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
