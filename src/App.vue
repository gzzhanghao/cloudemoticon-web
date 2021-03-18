<template>
  <div class="app">
    <header class="head">
      <nav class="nav">
        <a
          class="nav-item"
          href="#/emoticons"
        >
          表情
        </a>
        <a
          class="nav-item"
          href="#/favorites"
        >
          收藏
        </a>
        <a
          class="nav-item"
          href="#/config"
        >
          配置
        </a>
      </nav>
    </header>

    <div class="pages">
      <section class="page">
        Page1
      </section>
      <section class="page">
        Page2
      </section>
      <section class="page">
        <input>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  onBeforeUnmount,
  onMounted,
  reactive,
} from 'vue';

import { useStore } from './lib/store';

export default defineComponent({
  setup() {
    const store = useStore();

    const route = reactive({
      path: window.location.hash.slice(1),
    });

    function onPopState() {
      route.path = window.location.hash.slice(1);
    }

    onMounted(async () => {
      window.addEventListener('popstate', onPopState);
    });

    onBeforeUnmount(() => {
      window.removeEventListener('popstate', onPopState);
    });

    store.addStore('https://raw.githubusercontent.com/cloud-emoticon/store-repos/master/kt-cia.json');

    console.log(BUILD_VERSION);

    return {
      route,
    };
  },
});
</script>

<style>
html,
body {
  margin: 0;
  background: #efefef;
}
</style>

<style scoped>
.head {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  backdrop-filter: blur(5px);
  background: #fff7;
}

.nav {
  display: flex;
}

.nav-item {
  display: inline-block;
  flex: 0 0 auto;
  color: #333;
  text-decoration: none;
}

.pages {
  display: flex;
  margin-top: 20px;
}

.page {
  width: 100%;
}
</style>
