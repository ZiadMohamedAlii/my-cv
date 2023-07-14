<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-3 mb-3" v-for="product in products" :key="product.id">
        <div class="card h-100" style="width: 18rem">
          <img
            class="card-img-top"
            :src="product.thumbnail"
            alt="Card image cap"
          />
          <div class="card-body">
            <h5 class="card-title">{{ product.title }}</h5>
            <p class="card-text">{{ product.description }}</p>

            <router-link
              class="btn btn-primary mt-auto"
              :to="{
                name: 'details',
                params: { name: product.title, id: product.id },
              }"
              >Go somewhere</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "ApiCards",
  data() {
    return {
      products: [],
    };
  },

  mounted() {
    axios("https://dummyjson.com/products").then((res) => {
      // destructor
      console.log(res);
      const {
        data: { products: data },
      } = res;
      this.products = data;
      console.log(this.products);

      // console.log(res);
      // const data = res.data.products.title;
      // console.log(data);
    });
  },
};
</script>
<style scoped>
img {
  height: 150px;
}
</style>
