<template>
  <div>
    <ListItem :items="newsItems" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { fetchNews, NewsItem } from '@/api';
import ListItem from '../components/ListItem.vue';
import bus from '../utils/bus';
export default Vue.extend({
  components: {
    ListItem
  },
  created() {
    this.fetchNewsItems()
  },
  data () {
    return {
      newsItems: [] as NewsItem[]
    }
  },
  methods: {
    async fetchNewsItems() {
      const response = await fetchNews();
      console.log(response.data)
      this.newsItems = response.data
    }
  }
})
</script>

<style>

</style>
