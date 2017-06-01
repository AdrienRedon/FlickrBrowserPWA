<template>
  <div>
    <img :src="url" alt="Picture from Flickr">
  </div>
</template>

<script>
import store from '../store'

export default {
  data () {
    return {
      pic: null,
      url: ''
    }
  },
  mounted () {
    this.pic = store.state.pictures.find(pic => pic.id === this.$route.params.id)
    this.url = `https://farm${this.pic.farm}.staticflickr.com/${this.pic.server}/${this.pic.id}_${this.pic.secret}_b.jpg`
  }
}
</script>

<style scoped>
img {
  max-width: 100%;
  max-height: 100%;
}
</style>
