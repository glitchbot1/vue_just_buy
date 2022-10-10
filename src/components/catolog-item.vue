<template>
  <div class="catolog-item">
    <img class="catolog-item__img" v-bind:src="require('../assets/images/' + product_data.image)" alt="Картинка товара">
    <h1 class="catolog-item__name">{{product_data.name}}</h1>
    <p class="catolog-item__price">Цена:{{product_data.price}}P</p>
    <button
        class="catolog-item__add_card btn"
        @click="sendDataToParent">
        Добавить в корзину</button>
  </div>
</template>

<script>
export default {
  name: "catolog-item",
  props:{
    product_data:{
      type:Object,
      default(){
        return{}
      }
    }
  },
  data(){
    return{}
  },
  methods:{
    sendDataToParent(){
    this.$emit('sendArticle', this.product_data.article)
    }
  }
}
</script>

<style lang="scss">
.catolog-item{
  flex-basis: 25%;
  box-shadow: 0 0 8px 0 #e0e0e0;
  padding:$padding*2 ;
  margin-bottom: $margin*2;
  &__img{
    width: 100px;
  }
}
</style>