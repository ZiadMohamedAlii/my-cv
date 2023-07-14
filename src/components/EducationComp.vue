<template>
  <div class="container my-5">
    <div class="row">
      <div class="col-md-6">
        <strong>{{ educationData.title }}</strong>
      </div>
      <div class="col-md-6">
        <div class="text-md my-5">
          <h4>{{ educationData.school }}</h4>
          <p>{{ educationData.major }}</p>
          <p>{{ educationData.country }} . {{ educationData.date }}</p>
        </div>
      </div>
    </div>
  </div>
  <div class="container my-5">
    <div class="row">
      <div class="col-md-6">
        <strong>{{ courseData.title }}</strong>
      </div>
      <div class="col-md-6">
        <div class="text-md my-5">
          <h4>{{ courseData.courseTitle }}</h4>
          <p>{{ courseData.proficient }}</p>
          <h4 class="mt-5">{{ courseData.courseTitle2 }}</h4>
          <p class="p-size">{{ courseData.courseDetails }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "EducationCompounent",
  data() {
    const educationData = {
      title: "- Education",
      major: "Software Engineering",
      school: "Sadat Academy for Management Sciences",
      country: "Cairo, Egypt",
      date: "2019-present",
    };
    const courseData = {
      title: "- Courses",
      courseTitle: "-Front-end development",
      proficient: `Frontend Developer skilled in HTML, CSS, and JavaScript. Proficient in Vue.js framework for building dynamic
                      and scalable web applications, with expertise in integrating Bootstrap and Tailwind frameworks. Utilizes Pinia for
                     state management and VeeValidate for form validation. Experienced in backend integration with Firebase.`,
      courseTitle2: "-Flutter for Mobile Development",
      courseDetails: `Flutter for mobile development
                    Flutter is a powerful framework for building cross-platform mobile applications, and the course provided me with
                    a solid understanding of its concepts and capabilities`,
    };
    return {
      educationData,
      courseData,
    };
  },
};
</script>
<style scoped>
strong {
  font-size: 24px;
  color: #7b88a8;
}
.text-md p:nth-child(1) {
  font-size: 24px;
}

.text-md p:nth-child(2) {
  font-size: 18px;
}

.text-md p:nth-child(3) {
  font-size: 14px;
}

.text-md p:nth-child(4) {
  font-size: 18px;
}
</style>
