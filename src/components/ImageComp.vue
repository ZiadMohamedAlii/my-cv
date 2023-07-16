<template>
  <div class="background-image">
    <div class="overlay">
      <div class="container">
        <div
          class="row vh-100 align-items-center d-flex justify-content-center"
        >
          <div class="col-lg-12 col-md-6 col-sm-6 mt-5">
            <h1 class="test">{{ name }}</h1>
            <div class="animated-text">I'm <span></span></div>
            <h2>happy to see u hear!!</h2>
            <div class="arrow-down-icon mt-5">
              <!-- <a
                class="bi bi-arrow-down-circle text-center text-dark display-6"
                href="#"
              ></a> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: "Hello,",
    };
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&family=Rancho&family=Water+Brush&display=swap");
.background-image {
  position: relative;
  /* background-image: url("@/assets/ImageAssets/WhatsApp Image 2023-07-11 at 02.14.06.png"); */
  background-size: cover;
  background-color: #f0db4f;
}
/* .overlay {
  background-color: rgba(0, 0, 0, 0.3);
} */

.animated-text {
  font-size: 60px;
  font-weight: 600;
  min-width: auto;

  font-family: poppins;
}

.animated-text span {
  position: relative;
}

.animated-text span::before {
  content: "Ziad";
  color: black;
  animation: words 20s infinite;
}

.animated-text span::after {
  content: "";
  position: absolute;
  width: calc(100% + 8px);
  height: 100%;
  background-color: #f0db4f;
  border-left: 3px solid black;
  right: -8px;
  animation: cursor 0.8s infinite, typing 20s steps(14) infinite;
}

@keyframes cursor {
  to {
    border-left: 2px solid #ff7f5000;
  }
}

@keyframes words {
  0%,
  20% {
    content: "Ziad Mohamed";
  }
  21%,
  40% {
    content: "22 years old";
  }
  41%,
  60% {
    content: "a Front-end Developer";
  }
  61%,
  80% {
    content: "a Designer";
  }
  81%,
  100% {
    content: "a Boxer";
  }
}

@keyframes typing {
  10%,
  15%,
  30%,
  35%,
  50%,
  55%,
  70%,
  75%,
  90%,
  95% {
    width: 0;
  }
  5%,
  20%,
  25%,
  40%,
  45%,
  60%,
  65%,
  80%,
  85% {
    width: calc(100% + 8px);
  }
}
</style>
