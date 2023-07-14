<template>
  <div class="background-color">
    <div class="container my-5">
      <div class="row vh-100 d-flex justify-content-center align-items-center">
        <div class="col-lg-6">
          <div class="text-container">
            <h1 class="text-center mb-4">Api test test test</h1>
          </div>
        </div>
        <!-- <div class="col-lg-6">
          <div class="page-header min-vh-100 align-items-center d-flex">
            <img
              src="../assets/ImageAssets/WhatsApp Image 2020-11-19 at 6.14.21 PM (1).jpeg"
              alt=""
              class="img-fluid img-border"
            />
          </div>
        </div> -->
      </div>
    </div>
  </div>
  <!-- Cards -->
  <api-cards></api-cards>
</template>
<script>
import ApiCards from "../components/ApiCards.vue";
export default {
  name: "ApiView",
  components: {
    ApiCards,
  },
};
</script>
<style scoped>
.background-color {
  background-color: #7f0b28;
  width: 100%;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
}
</style>
