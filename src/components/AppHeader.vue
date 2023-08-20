<template>
  <header>
    <nav class="navbar navbar-expand-lg fixed-top custom-navbar">
      <div class="container">
        <router-link
          class="navbar-brand text-color"
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
              <a
                class="nav-link active text-color"
                aria-current="page"
                href="#"
                @click.prevent="toggleAuthModal"
                >Login / Register</a
              >
            </li>
            <li class="nav-item ms-lg-3 mx-3">
              <router-link
                class="nav-link active text-color"
                aria-current="page"
                :to="{ name: 'home' }"
                >{{ Home }}</router-link
              >
            </li>
            <li class="nav-item ms-lg-3 mx-3">
              <router-link
                class="nav-link active text-color"
                aria-current="page"
                :to="{ name: 'api' }"
                >{{ Api }}</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>
<script>
import { mapStores } from "pinia";
import useModalStore from "@/stores/modal";
export default {
  name: "AppHeader",
  computed: {
    ...mapStores(useModalStore),
  },
  data() {
    return {
      name: "ZIAD MOHAMED",
      job: "WEBSITE DEVELOPER",
      Home: "Home",
      Api: "API",
      // contact: "Contact",
    };
  },
  methods: {
    scrollToTop() {
      if (this.$route.name === "home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        console.log(this.$route);
      }
    },
    toggleAuthModal() {
      this.modalStore.isOpen = !this.modalStore.isOpen;
      console.log(this.modalStore.isOpen);
    },
  },
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
}

nav.custom-navbar {
  /* netflex navbar */
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.7) 10%, transparent);
}

nav.custom-navbar .text-color {
  color: #e5e5e5;
}

nav.custom-navbar .text-color:hover {
  color: #909090;
}
</style>
