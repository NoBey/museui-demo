<template>
  <ul>
    <li  v-for="item in checkoutList">
    <router-link :to="item.path"> <mu-raised-button @click="changeindexstate"  :label="item.title" fullWidth/></router-link>
     
   </li>
 </ul>
</template>

<style>
ul{
  list-style-type: none;
}
</style>

<script type="text/babel">
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      checkoutList: 'checkoutList',
      indexstate: 'indexstate'
    })
  },
  methods: {
    ...mapActions({
      changeindexstate: 'changeindexstate'
    })
  }
}
</script>
