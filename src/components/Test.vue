<template>
  <div class="background-image">
    <div class="overlay">
      <div class="container">
        <div
          class="row vh-100 align-items-center text-center d-flex justify-content-center"
        >
          <div class="col-lg-12 col-md-6 col-sm-6 mt-5">
            <h4 class="text-center">{{ name }}</h4>
            <span class="display-2 text-center">{{ job }}</span>
            <div class="arrow-down-icon mt-5">
              <a
                class="bi bi-arrow-down-circle text-center text-dark display-6"
                href="#"
              ></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "test",
};
</script>
<style scoped>
.background-image {
  width: 100vw;
  height: 100vh;
  position: relative;
  background-image: url("@/assets/ImageAssets/WhatsApp Image 2023-07-11 at 02.14.06.png");
  background-size: cover;
}
.overlay {
  background-color: rgba(0, 0, 0, 0.3);
}
</style>
