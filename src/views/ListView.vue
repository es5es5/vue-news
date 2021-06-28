<template>
  <div>
    <ListItem :items="newsItems" />
  </div>
</template>

<script>
import { fetchNews } from '@/api';
import ListItem from '../components/ListItem.vue';
import bus from '../utils/bus';

export default {
  components: {
    ListItem
  },
  created() {
    this.fetchNewsItems()
  },
  data () {
    return {
      newsItems: []
    }
  },
  methods: {
    async fetchNewsItems() {
      const response = await fetchNews();
      console.log(response.data)
      this.newsItems = response.data
    }
  }
}
</script>

<style>

</style>
