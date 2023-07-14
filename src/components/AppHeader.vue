<template>
  <header>
    <nav class="navbar navbar-expand-lg bg-transparent fixed-top">
      <div class="container">
        <!-- <a class="navbar-brand" href="#">{{ name }}</a> -->
        <router-link
          class="navbar-brand"
          :to="{ name: 'home' }"
          @click="scrollToTop"
          >{{ name }}</router-link
        >
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse justify-content-lg-end"
          id="navbarNav"
        >
          <ul class="navbar-nav">
            <li class="nav-item ms-lg-3 mx-3">
              <!-- <a class="nav-link active" aria-current="page" href="#">About</a> -->
              <router-link
                class="nav-link active"
                aria-current="page"
                :to="{ name: 'home' }"
                >Home</router-link
              >
            </li>
            <li class="nav-item ms-lg-3 mx-3">
              <a class="nav-link active" aria-current="page" href="#"
                >Contact</a
              >
            </li>
            <li class="nav-item ms-lg-3 mx-3">
              <!-- <a class="nav-link active" aria-current="page" href="#">API</a> -->
              <router-link
                class="nav-link active"
                aria-current="page"
                :to="{ name: 'api' }"
                >API</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- <div class="background-image">
      <div class="overlay d-flex justify-content-center">
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
    </div> -->
  </header>
</template>

<script>
export default {
  name: "AppHeader",
  data() {
    return {
      name: "ZIAD MOHAMED",
      job: "WEBSITE DEVELOPER",
    };
  },
  methods: {
    scrollToTop() {
      if (this.$route.name === "home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        console.log(this.$route);
      }
    },
  },
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
}

nav {
  /* netflex navbar */
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.7) 10%, transparent);
}

.nav-link {
  position: relative;
}

.nav-link::after {
  content: "";
  opacity: 0;
  transition: all 0.2s;
  height: 1px;
  width: 100%;
  background-color: black;
  position: absolute;
  bottom: 0;
  left: 0;
}

.nav-link:hover::after {
  opacity: 1;
}

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

/* nav {
  glass effect
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 0)
  );
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
} */
</style>
