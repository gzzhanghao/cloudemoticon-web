import { openDB } from 'idb';
import { computed, reactive } from 'vue';

export interface EmoticonStore {
  information: string[];
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

export function useStore() {
  const state = reactive({
    status: 'loading',
    emoticons: [],
  });

  const dbPromise = openDB('cloudemoticon-db', 1, {
    upgrade(db) {
      db.createObjectStore('emoticon-store', { keyPath: 'url' });
    },
  });

  dbPromise.then(async (db) => {
    const store = db.transaction('emoticon-store', 'readonly').objectStore('emoticon-store');
    const all = await store.getAll();
    console.log(all);
    state.status = 'ready';
  }, async (error) => {
    // @todo
    state.status = 'error';
  });

  return {
    emoticons: computed(() => state.emoticons),
    async addStore(url: string) {
      const res = await fetch(url);
      const data: EmoticonStore = await res.json();

      const db = await dbPromise;
      const store = db.transaction('emoticon-store', 'readwrite').objectStore('emoticon-store');

      await store.put({ url, data });
    },
  };
}
