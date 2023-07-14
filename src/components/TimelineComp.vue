<template>
  <section class="d-flex align-items-center vh-100 text-center">
    <div class="container">
      <div class="row">
        <div class="box-wrap">
          <div class="box col-sm-6 mb-3 mb-sm-0">
            <h5>Sadat Academy for Management Sciences</h5>
            <p>Software Engineering</p>
            <p class="">Cairo, Egypt . 2019-present</p>
          </div>
          <p>course</p>
          <div class="box">
            <h5 class="card-title">-Front-end development</h5>
            <p class="card-text">
              Frontend Developer skilled in HTML, CSS, and JavaScript.
              Proficient in Vue.js framework for building dynamic and scalable
              web applications, with expertise in integrating Bootstrap and
              Tailwind frameworks. Utilizes Pinia for state management and
              VeeValidate for form validation. Experienced in backend
              integration with Firebase.
            </p>
          </div>
          <div class="box">
            <h5 class="card-title">-Flutter for Mobile Development</h5>
            <p class="card-text">
              Flutter for mobile development Flutter is a powerful framework for
              building cross-platform mobile applications, and the course
              provided me with a solid understanding of its concepts and
              capabilities
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "TimelineComp",
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap");
section {
  justify-content: center;
}
body {
  background: #f1f1f1;
  font-family: "Inconsolata", monospace;
  font-weight: bold;
  color: gray;
  text-align: center;
  -webkit-font-smoothing: antialiased;
}
.box-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
}
.box {
  padding: 30px;
  margin: 2%;
  background: white;
  width: 30%;
  border: 1px solid #d6d6d6;
  box-shadow: 0 2px 3px 0px rgba(0, 0, 0, 0.25);
  border-radius: 3px;
  transition: 0.2s all;
}
.box-wrap:hover .box {
  filter: blur(3px);
  opacity: 0.5;
  transform: scale(0.98);
  box-shadow: none;
}
.box-wrap:hover .box:hover {
  transform: scale(1);
  filter: blur(0px);
  opacity: 1;
  box-shadow: 0 8px 20px 0px rgba(0, 0, 0, 0.125);
}
</style>
