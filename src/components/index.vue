<template>
  <ul class="menus">
    <li  v-for="item in checkoutList" class="menu-item">
       <mu-raised-button  :href="item.path" :label="item.title" fullWidth/>
   </li>
 </ul>
</template>

<style>
ul{
  list-style-type: none;
}
</style>

<script type="text/babel">
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      checkoutList: 'checkoutList'
    })
  }
}
</script>

<style>
  .menus {
    margin: 0;
    padding: 0;
    display: block
  }
  .menu-item {
    padding: 8px;
  }
</style>
