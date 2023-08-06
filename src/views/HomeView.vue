<template>
  <introduction></introduction>
  <skills-section></skills-section>
  <footer-comp></footer-comp>
</template>

<script>
import introduction from "../components/HeaderComp.vue";
import SkillsSection from "@/components/SkillsSection.vue";
import FooterComp from "@/components/FooterComp.vue";
export default {
  name: "Home",
  components: {
    introduction,
    SkillsSection,
    FooterComp,
  },
};
</script>
<style scoped></style>
