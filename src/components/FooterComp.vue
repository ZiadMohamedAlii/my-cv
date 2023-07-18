<template>
  <footer class="footer">
    <div class="container">
      <div class="row d-flex justify-content-center align-items-center">
        <div class="footer-col">
          <h2 class="text-center">Find me on these platforms</h2>
          <ul class="text-center">
            <a
              href="https://www.linkedin.com/in/ziad-mohamed-4a64b2247"
              target="_blank"
            >
              <i class="bi mx-4 text-white bi-linkedin"></i>
            </a>
            <a href="https://github.com/ZiadMohamedAlii" target="_blank">
              <i class="bi mx-4 text-white bi-github"></i>
            </a>
            <a
              href="https://www.instagram.com/ziadmohamedalii/?hl=en"
              target="_blank"
            >
              <i class="bi mx-4 text-white bi-instagram"></i>
            </a>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  name: "FooterComp",
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap");
body {
  line-height: 1.5;
  font-family: "Poppins", sans-serif;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

ul {
  list-style: none;
}
.footer {
  background-color: #24262b;
  padding: 70px 0;
}
ul i {
  font-size: 20px;
}

.footer-col h2 {
  font-size: 25px;
  color: #ffffff;
  text-transform: capitalize;
  margin-bottom: 35px;
  font-weight: 500;
  position: relative;
  text-align: center;
}
.footer-col h2::before {
  content: "";
  position: absolute;
  left: 50%;
  bottom: -10px;
  transform: translateX(-50%);
  background-color: #e91e63;
  height: 2px;
  box-sizing: border-box;
  width: 50px;
}
.footer-col ul li:not(:last-child) {
  margin-bottom: 10px;
}

@media (max-width: 767px) {
  .footer-col {
    width: 50%;
    margin-bottom: 30px;
  }
}
@media (max-width: 574px) {
  .footer-col {
    width: 100%;
  }
}
</style>
