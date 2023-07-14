<template>
  <div class="container">
    <div class="row">
      <div
        class="col-12 d-flex justify-content-center flex-column align-items-center"
      >
        <h1 class="my-5">{{ product?.title }}</h1>
        <img :src="product?.thumbnail" :alt="product?.title" />
        <h1 class="my-5">{{ product?.description }}</h1>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "ProductsDetails",
  data() {
    return {
      product: null,
    };
  },
  mounted() {
    const id = this.$route.params.id;
    axios(`https://dummyjson.com/products/${id}`).then((res) => {
      const { data: data } = res;
      console.log(data);
      this.product = data;
    });
  },
};
</script>
<style scoped></style>
