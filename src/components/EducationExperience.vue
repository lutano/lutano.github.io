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
  <section>
    <hr />
    <h2>Education.</h2>
    <div
      v-for="education in educationExperience"
      :key="education.title"
      class="education-item item"
    >
      <p class="item__subtitle">
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
      <h5 class="item__title">
        {{ education.title }} - <em>{{ education.type }}</em>
      </h5>
      <p class="item__desc">
        {{ education.description }}
      </p>
      <ul>
        <li v-for="topic in education.topics" :key="topic">{{ topic }}</li>
      </ul>
      <div class="clear"></div>
    </div>
  </section>
</template>

<style scoped lang="scss">
section {
  padding: 4rem 6rem;
  background-color: rgba(158, 190, 205, 0.5);

  li {
    float: left;
    min-width: 28rem;
    font-size: 1.4rem;
  }
}
</style>
