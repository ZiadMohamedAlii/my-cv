<template>
  <test></test>
  <About-container></About-container>
  <timeline-comp></timeline-comp>
  <skills-section></skills-section>
  <footer-comp></footer-comp>
</template>

<script>
import AboutContainer from "@/components/AboutContainer.vue";
import SkillsSection from "@/components/SkillsSection.vue";
import TimelineComp from "@/components/TimelineComp.vue";
import FooterComp from "@/components/FooterComp.vue";
import Test from "../components/Test.vue";
export default {
  name: "Home",
  components: {
    AboutContainer,
    SkillsSection,
    TimelineComp,
    FooterComp,
    Test,
  },
};
</script>
<style scoped></style>
