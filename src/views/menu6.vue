<script setup lang="ts">
import * as myModule from 'myModule'
const namespace = () => {

}
const module = () => {
  console.log('myModule', myModule)
}
</script>

<template>
  <div class="menu2">
    <button class="btn btn-primary" @click="namespace">模块</button>
    <button class="btn btn-primary" @click="module">命名空间</button>
  </div>
</template>

<style></style>
