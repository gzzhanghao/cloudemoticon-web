<template>
  <div class="app">
    <div
      v-for="(item, index) in emoticons"
      :key="index"
      class="emoticon-item"
      @click="copyItem($event)"
    >
      {{ item }}
    </div>
    <input
      ref="iptCopy"
      class="ipt-copy"
    >
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  onMounted,
  reactive,
  ref,
} from 'vue';

export interface EmoticonStore {
  categories: EmoticonCategory[];
}

export interface EmoticonCategory {
  name: string;
  entries: EmoticonEntry[];
}

export interface EmoticonEntry {
  emoticon: string;
  description: string;
}

export default defineComponent({
  setup() {
    const iptCopy = ref<HTMLInputElement>();

    const state = reactive({
      state: 'loading',
      emoticons: [] as string[],
    });

    onMounted(async () => {
      const res = await fetch('https://raw.githubusercontent.com/cloud-emoticon/store-repos/master/kt-cia.json');
      const data: EmoticonStore = await res.json();
      state.emoticons = data.categories
        .flatMap((cat) => cat.entries)
        .map((entry) => entry.emoticon);
    });

    function copyItem(event: MouseEvent) {
      if (!iptCopy.value) {
        return;
      }

      const el: HTMLElement = event.currentTarget as any;
      if (!el.textContent) {
        return;
      }

      iptCopy.value.value = el.textContent.trim();
      iptCopy.value.select();

      document.execCommand('copy');

      const active: HTMLInputElement = document.activeElement as any;

      active?.blur();
      window.getSelection()?.removeAllRanges();
    }

    return {
      iptCopy,
      state: computed(() => state.state),
      emoticons: computed(() => state.emoticons),
      copyItem,
    };
  },
});
</script>

<style>
html,
body {
  margin: 0;
  background: #efefef;
  font-family: PingFangSC-Regular, SFUIDisplay, "Source Han Sans CN", Robot, sans-serif;
}

.app {
  padding-bottom: 60px;
}

.emoticon-item {
  margin: 5px;
  padding: 20px;
  text-align: center;
  background: #fff;
  border-radius: 5px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  user-select: none;
}

.emoticon-item:active {
  background: #f8f8f8;
}

.ipt-copy {
  position: fixed;
  top: 0;
  left: 0;
  opacity: 0;
  pointer-events: none;
  transform: translate(-100%, -100%)
}
</style>
