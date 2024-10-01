<script lang="ts">
import FooterApp from '@/components/FooterApp.vue'
import HeroPresentation from '@/components/HeroPresentation.vue'
import WorkExperience from '@/components/WorkExperience.vue'
import EducationExperience from '@/components/EducationExperience.vue'

export default {
  name: 'App',
  components: {
    HeroPresentation,
    WorkExperience,
    EducationExperience,
    FooterApp,
  },
}
</script>

<template>
  <HeroPresentation />
  <div class="main">
    <WorkExperience />
    <EducationExperience />
    <FooterApp />
  </div>
</template>

<style scoped></style>
