<template>
  <div class="main-wrapper">
  <p>{{title}}</p>
  <the-catalog/>
    <the-card/>
  </div>
</template>

<script>
  import theCatalog from "@/components/the-catalog";
  import theCard from "@/components/the-card";
export default {
  name: "main-wrapper",
  components: {
    theCatalog,
    theCard
  },
  props: {},
  data() {
    return {
    title: "main wrapper"
    };
  },
  computed:{}, 
  methods: {},
  watch:{},
  
};
</script>

<style>
.main-wrapper {

  max-width: 900px;
  margin: 0 auto;
}
</style>
