<template>
  <div class="row">
    <h1>Counter App</h1>
    <h2>{{ cnt }}</h2>
      <button class="btn" @click="increment">Add</button>
      <button class="btn" @click="decrement">Subtract</button>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {},
    computed: {
      cnt() {
        return this.$store.state.cnt;
      }
    },
    methods: {
      increment() {
        this.$store.dispatch('increment')
      },
      decrement() {
        this.$store.dispatch('decrement')
      },
    }
  }

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.row{
  background: linear-gradient(90deg, rgb(155, 187, 247) 0%, #fdcf6c 100%);
  padding: 20px;
  margin: auto;
  width: 500px;
  align-items: center;
  border-radius: 20px;
  box-shadow: #999 10px 10px 10px 0px;
}
.btn{
  margin: 10px;
  width: 100px;
  padding: 5px;
  border-radius: 10px;
  background-color: seashell;
  border: none;
  font-size: small;
}
</style>
