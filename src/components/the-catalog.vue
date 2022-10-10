<template>
  <div class="the-catalog">
    <h1>Каталог</h1>
    <div class="the-catalog__list">
      <catolog-item
        v-for="product in this.$store.state.products"
        :key="product.article"
        v-bind:product_data="product"
        @sendArticle ="showChildArticle"
      />
    </div>
  </div>
</template>

<script>
  import CatologItem from "@/components/catolog-item";
  import {mapActions} from 'vuex'
  export default {
  name: "the-catalog",
  components: {
    CatologItem
  },
  data() {
    return{

    }
  },
  methods:{
    ...mapActions([
      'GET_PRODUCTS_FROM_API'
    ]),
    showChildArticle(data){
      console.log(data)

    }
  },
    mounted() {
    this.GET_PRODUCTS_FROM_API()
    }
  }
</script>

<style lang="scss">
  .the-catalog{
    &__list{
       display: flex;
       flex-wrap: wrap;
       justify-content: space-between;
       align-items: center;

     }
  }
</style>