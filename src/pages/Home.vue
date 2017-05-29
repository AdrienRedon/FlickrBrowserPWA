<template>
  <div>
    <thumbnail v-for="picture in state.pictures" :pic="picture" :key="picture.id"></thumbnail>
  </div>
</template>

<script>
import Thumbnail from '../components/Thumbnail.vue'
import axios from 'axios'
import store from '../store'

export default {
  data () {
    return {
      state: store.state
    }
  },
  store,
  components: {
    Thumbnail
  },
  mounted () {
    axios
    .get('https://api.flickr.com/services/rest/?method=flickr.interestingness.getList&api_key=0c731f4470260b5ff4ccc3d519d07697&format=json&nojsoncallback=1&per_page=500')
    .then(res => store.setPictures(res.data.photos.photo))
  }
}
</script>

<style scoped>

</style>
