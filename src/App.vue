<script lang="ts">
import TechStackFooter from '@/components/TechStackFooter.vue'
import HeroPresentation from '@/components/HeroPresentation.vue'
import WorkExperience from '@/components/WorkExperience.vue'
import EducationExperience from '@/components/EducationExperience.vue'
import ProjectsShowcase from '@/components/ProjectsShowcase.vue'
export default {
  name: 'App',
  components: {
    HeroPresentation,
    WorkExperience,
    EducationExperience,
    ProjectsShowcase,
    TechStackFooter,
  },
}
</script>

<template>
  <HeroPresentation />
  <main>
    <ProjectsShowcase />
    <WorkExperience />
    <EducationExperience />
  </main>
  <TechStackFooter />
</template>

<style scoped></style>
