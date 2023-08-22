<script setup lang="ts">
import * as B from 'my-module'
const namespace = () => {

}
const module = () => {
  // console.log('myModule', myMoqdule)
  console.log('My', B)
}
</script>

<template>
  <div class="menu2">
    <button class="btn btn-primary" @click="namespace">模块</button>
    <button class="btn btn-primary" @click="module">命名空间</button>
  </div>
</template>

<style></style>
