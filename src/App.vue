<template>
  <div class="box"></div>
  <router-view/>
</template>

<script setup>
const boxWidht = '100px'
</script>

<style lang="scss">
.box{
  width: v-bind(boxWidht);
  height: 100px;
  background-color: red;
}
</style>
