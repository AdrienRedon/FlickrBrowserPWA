<template>
  <div @click="show()">
    <img :src="url">
    <p>{{ pic.title }}</p>
  </div>
</template>

<script>
export default {
  props: ['pic'],
  data () {
    return {
      url: `https://farm${this.pic.farm}.staticflickr.com/${this.pic.server}/${this.pic.id}_${this.pic.secret}_q.jpg`
    }
  },
  methods: {
    show () {
      this.$router.push({name: 'Picture', params: { id: this.pic.id }})
    }
  }
}
</script>

<style scoped>
div {
  display: -webkit-flex;
  display: -moz-flex;
  display: -ms-flex;
  display: -o-flex;
  display: flex;
  width: 100%;
}
div > * {
  flex: 1;
  align-self: center;
  text-align: center;
}
p {
  font-size: 16px;
}
</style>
