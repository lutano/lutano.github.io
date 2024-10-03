<script setup lang="ts">
const projects = [
  {
    title: 'Error Analytics Framework 3.0',
    companyName: 'Wooga GmbH',
    features: 'User Research & Frontend Development',
    date: '2016',
    projectUrl:
      'https://www.behance.net/gallery/48088861/Wooga-Error-Analytics-30',
    image: '/images/ea/homepage2.png',
    backgroundColor: 'rgba(94, 179, 239, 0.8)',
  },
  {
    title: "Wooga's Games Portal",
    companyName: 'Wooga GmbH',
    features: 'User Experience & Frontend Development',
    date: '2016',
    projectUrl: 'https://www.behance.net/gallery/48111047/Wooga-SBS',
    image: '/images/mantool/games.wooga2.png',
    backgroundColor: 'rgba(234, 72, 62, 0.8)',
  },
  {
    title: 'Interactive Booths for ISTH Amsterdam',
    companyName: 'AS&K Digital',
    features: 'Frontend Development',
    date: '2014',
    projectUrl:
      'https://www.behance.net/gallery/48028911/ISTH-2014-Interactive-Booths',
    image: '/images/installations/booths.png',
    backgroundColor: 'rgba(155, 187, 134, 0.8)',
  },
  {
    title: 'Bayer Healthcare eDetailers',
    companyName: 'AS&K Digital',
    features: 'Frontend Development',
    date: '2013',
    projectUrl:
      'https://www.behance.net/gallery/48028625/Bayer-Healthcare-eDetailers',
    image: '/images/asandk/edetailers.png',
    backgroundColor: 'rgba(97, 110, 239, 0.7)',
  },
  {
    title: 'World Book Day Live Event',
    companyName: 'StreamAMG',
    features: 'Frontend Development',
    date: '2012',
    projectUrl:
      'https://www.behance.net/gallery/4344221/World-Book-Day-Live-Event',
    image: '/images/streamuk/wbday-framed.jpg',
    backgroundColor: 'rgba(41, 198, 205, 0.8)',
  },
]
</script>

<template>
  <section
    v-for="(project, index) in projects"
    :key="project.title"
    :style="{ backgroundColor: project.backgroundColor }"
  >
    <p class="mb-0 text-sm text-white">.0{{ index + 1 }}</p>
    <a
      class="item__img-link"
      target="_blank"
      aria-label="View project on Behance"
      :href="project.projectUrl"
    >
      <img :src="project.image" :alt="project.title + ' project image'" />
    </a>
    <h6 class="mb-1 mt-8 text-white">
      {{ project.companyName }} - {{ project.features }}
    </h6>
    <h4 class="text-xl font-bold text-white">
      {{ project.title }}, {{ project.date }}
    </h4>
  </section>
</template>

<style scoped lang="scss">
section {
  img {
    display: block;
    margin: 1rem auto;
    width: 100%;
  }

  .item__img-link {
    display: block;
    transition: all 300ms ease;
    overflow: hidden;
    img {
      transition: all 300ms ease;
    }

    &:hover {
      background: url(/images/social/behance.svg) center center no-repeat;

      img {
        opacity: 0.15;
      }
    }
  }
}
</style>
