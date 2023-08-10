<script setup lang="ts">
import { ref, reactive, watch, onBeforeMount } from 'vue';
import { RouterView, useRouter, useRoute } from 'vue-router';
const router = useRouter();
const route = useRoute();
const onItemClick = (item: any) => {
  console.log('route', route.path)
  router.push(item.path)
}
const state = reactive({
  menus: [{
    path: 'menu1',
    name: 'interface的使用444'
  },{
    path: 'menu2',
    name: '继承与重载'
  }],
  showMenu: ref(true)
})

watch(() => route, (newV, oldV) => {
  console.log('newV', newV.path, 'oldV', oldV?.path)
}, {
  immediate: true, deep: true
})

const closeOrShow = () => {
  state.showMenu = !state.showMenu
}
// onBeforeMount((i) = {})

</script>

<template>
  <div class="app-content">
    <aside class="aside" :class="[state.showMenu ? 'show-menu': 'hide-menu']">
      <div class="logo" @click="router.push('/dashbroad')">
        Vite + Vue3 + TS
      </div>
      <ul>
        <li v-for="(item, index) in state.menus" :key="index" @click="onItemClick(item)">
          <p>【{{ index + 1 }}】{{ item.name }}</p>
        </li>
      </ul>
      <div class="close" @click="closeOrShow">{{ state.showMenu ? '关' : '开'}}</div>
    </aside>
    <main class="main-container" :class="{'full-size': !state.showMenu}">
      <header class="header">我是一个header</header>
      <nav class="nav">
        <strong>首页{{ route.path }}</strong>
      </nav>
      <main class="main-content">
        <RouterView></RouterView>
      </main>
    </main>
 </div>
</template>
<style lang="scss" scoped>
.main-container {
  width: 100%;
  height: 100%;
  padding-left: 180px;
  transition: padding 0.5s ease-in;

  &.full-size {
    padding-left: 0;
  }

  .nav {
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid gainsboro;
  }
  .header {
    height: 36px;
    line-height: 36px;
    background-color: cornflowerblue;
  }
}
.app-content {
  height: 100%;
  position: relative;
  box-sizing: border-box;
}

.app-content .aside {
  position: fixed;
  top: 0;
  left: 180px;
  height: 100%;
  background-color: whitesmoke;
  width: 180px;
  transition: left 0.5s ease-in-out;

  &.show-menu {
    left: 0;
  }

  &.hide-menu {
    left: -180px;
  }

  .close {
    position: absolute;
    right: -4em;
    top: calc(50% - 2em);
    width: 4em;
    height: 4em;
    line-height: 4em;
    text-align: center;
    background-color: aqua;
    border-radius: 50%;
    font-size: 16px;
  }

  .logo {
    width: 100%;
    height: 36px;
    line-height: 36px;
    text-align: center;
    color: white;
    background-color: cornflowerblue;
  }

  ul {
    list-style: none;
    height: 40px;
    border-bottom: 1px solid whitesmoke;
    text-align: start;
    width: 100%;
    padding-inline: 0;

    li {
      line-height: 40px;
      list-style: none;
      width: 100%;
      cursor: pointer;
      transition: all 0.5s cubic-bezier(0.445, 0.05, 0.55, 0.95);
      background-color: white;

      p {
        width: 100%;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
    }

    li:hover {
      background-color: rgba(75, 150, 150, 0.445);
    }
  }
}
</style>