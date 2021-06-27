<template>
  <div>
    <list-item></list-item>
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
  methods: {
    async fetchNewsItems() {
      const response = await fetchNews();
      console.log(response.data)
    }
  }
}
</script>

<style>

</style>
