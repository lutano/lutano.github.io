<script setup lang="ts">
const educationExperience = [
  {
    title: 'Medialogy',
    dates: '2008 - 2010',
    link: 'http://www.en.aau.dk/education/master/medialogy',
    name: 'Aalborg University Copenhagen',
    type: 'Master of Science',
    location: 'Denmark',
    description:
      'Medialogy is based on studies of human and computational perception, audio-visual effects, animation and computer games, immersive systems and ubiquitous computing. This course features the “Problem-Based-Learning” pedagogical model, which focuses on project and team management features.',
    topics: [
      'Human-Computer Interaction',
      'Sensor Technology',
      'Interaction Design',
      'Media Technology',
      'Computer Graphics',
    ],
  },
  {
    title: 'Computer Science and Digital Communication',
    dates: '2004 - 2008',
    link: 'http://www.uniba.it/ricerca/dipartimenti/informatica/didattica/corsi-di-laurea/informatica-icd-bari-270/laurea-triennale-in-informatica-e-comunicazione-digitale-sede-di-taranto-d.m.-270',
    name: 'Università degli Studi di Bari',
    location: 'Italy',
    type: 'Bachelor of Science',
    description:
      'This course covered comprehensive theoretical and practical knowledge in Computer Science and Communication, focusing on: UX/UI design, web and mobile app development, and software engineering practices. Management aspects addressed project management methodologies (Agile, Scrum), IT governance, and resource management.',
    topics: [
      'Multimedia Design',
      'Databases',
      'Networking',
      'Programming Languages',
    ],
  },
]
</script>

<template>
  <section class="bg-[rgba(158,190,205,0.5)]">
    <hr />
    <h2>Education.</h2>
    <div
      v-for="education in educationExperience"
      :key="education.title"
      class="mb-12 border-b border-[rgba(0,0,0,0.2)] pb-12 last:mb-0 last:border-none"
    >
      <p class="my-0">
        {{ education.dates }} |
        <a
          class="animated-link"
          :href="education.link"
          :aria-label="`Visit ${education.name} Homepage`"
          target="_blank"
          rel="noopener noreferrer"
          >{{ education.name }}</a
        >
        ( {{ education.location }} )
      </p>
      <h5 class="text-lg font-bold">
        {{ education.title }} - <em>{{ education.type }}</em>
      </h5>
      <p class="my-4 italic">
        {{ education.description }}
      </p>
      <ul class="flex flex-wrap">
        <li v-for="topic in education.topics" :key="topic" class="w-1/2">
          {{ topic }}
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped lang="scss">
section {
  ul {
    list-style: disc;
  }
}
</style>
