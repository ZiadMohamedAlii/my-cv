<template>
  <div class="background-color">
    <div class="container my-5">
      <div class="row align-items-center">
        <div class="col-lg-6">
          <div class="text-container">
            <h1 class="text-center mb-4">
              {{ introduction }}
            </h1>
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
</template>

<script>
export default {
  name: "MainContainer",
  components: {},
  data() {
    return {
      introduction:
        " Hi, I am ziad u can call me zizo, a majestic Web Developer",
    };
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

.img-border {
  border-radius: 10%;
  height: 752px;
  width: 600px;
}
</style>
