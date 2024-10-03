<script setup lang="ts">
const workExperience = [
  {
    title: 'Sr. Frontend Developer & UX Specialist',
    companyName: 'Doxee S.p.A.',
    date: 'Jan 2018 - Mar 2024',
    place: 'Modena, Italy',
    companyUrl: 'https://www.doxee.com/',
    description:
      'As a Frontend Developer & UX Designer, I was responsible for developing and maintaining React and Angular applications and led the design and prototyping process.',
    tasks: [
      'Developed and maintained React web applications by leveraging TypeScript, Redux, and RESTful APIs actively contributing to updating the tech stack of existing services. Utilised NPM and GIT for version control and team collaboration.',
      'Designed and prototyped user interaction solutions using Figma and Storybook, while creating wireframes and mockups based on user feedbacks to enhance the user experience while transitioning legacy services from Flash to HTML5.',
      'Led the development and enhancement of internal design systems ensuring a unified design language across all platform services, governed by Agile methodologies such as Scrum to optimise workflows with cross-functional teams.',
      'Managed development processes by overseeing PR approvals and integrating CI/CD, Docker, and PWA best practices to ensure the delivery of scalable products and guarantee 99.8% uptime.',
    ],
  },
  {
    title: 'Product Owner & Usability Consultant',
    companyName: 'Sitael S.p.A.',
    date: 'Jan 2017 - Jan 2018',
    place: 'Mola di Bari, Italy',
    companyUrl: 'https://www.sitael.com/',
    description:
      'At Sitael S.p.A., I was brought on board from top industry positions to modernize processes, enhance Agile methodologies and  travel to work directly with international clients as a Product Owner Consultant.',
    tasks: [
      'Collaborated with international bike industry clients on Design Sprints, generating innovative solutions and seeding new business opportunities facilitating clear and consistent communication about the progress with all collaborators.',
      "Developed and delivered training programs for product owners on User Research and Usability, enhancing a user-centric development approach that directly improved the e-bike management app's functionality and user experience.",
      'Conducted user research and led design thinking workshops to drive strategies and ensure smooth design implementation.',
    ],
  },
  {
    title: 'UX Designer & Product Owner',
    companyName: 'Wooga GmbH',
    date: 'Aug 2014 - Nov 2016',
    place: 'Berlin, Germany',
    companyUrl: 'https://www.wooga.com/',
    description:
      'Wooga is one of the most popular developers of mobile games in the world. At Wooga, I led the development of internal services, focusing on improving user experiences through React-based frontend solutions.',
    tasks: [
      'Led user research to deeply analyse needs and workflows focusing on uncovering better UX solutions that significantly enhanced the usability and efficiency of internal tools and the company intranet.',
      'Collaborated with the frontend team to implement new features in React, contributing to the enhancement of the internal dashboards. This improved the overall user experience for employees by making data retrieval 99.9% faster.',
      'Streamlined frontend development by planning features and managing the UX backlog in Agile using Trello and Jira.',
    ],
  },
  {
    title: 'Senior Frontend Developer',
    companyName: 'AS&K Communications',
    date: 'July 2012 - June 2014',
    place: 'London, United Kingdom',
    companyUrl: 'https://www.asandk.com/',
    description:
      'AS&K is a medical communications agency providing marketing services to the healthcare industry.',
    tasks: [
      'Collaborated with the UX team to create interaction designs using jQuery and VanillaJS that align with user needs.',
      'Enhanced performance through cross-browser testing and device compatibility, automating tasks with Grunt.js.',
      'Shared knowledge on latest frontend trends through tutoring and continuous research in emerging technologies.',
    ],
  },
  {
    title: 'Frontend Developer & 3Tier Support',
    companyName: 'StreamAMG',
    date: 'August 2010 - 2012',
    place: 'London, United Kingdom',
    companyUrl: 'https://www.streamamg.com/',
    description:
      'StreamAMG is a streaming solutions provider, helping owners maximise the value of their contents.',
    tasks: [
      'Designed landing pages for live events streaming, enhancing user engagement and conversion rates.',
      'Developed microsites for online-streaming platforms, improving accessibility and user experience.',
      'Maintained and optimized CMS for video streaming, ensuring smooth content delivery.',
      'Created and skinned video players using MS Silverlight, customizing interfaces for client needs.',
      'Designed Rich Internet Applications (RIA) for Samsung Smart TV, expanding platform reach.',
      'Performed cross-browser testing to ensure consistent functionality across different browsers.',
      'Provided 3rd Tier technical support for clients, resolving complex issues and improving customer satisfaction.',
    ],
  },
]
</script>

<template>
  <section class="bg-[rgba(234,200,39,1)]">
    <hr />
    <h2>WORK Experience.</h2>
    <div
      v-for="experience in workExperience"
      :key="experience.companyName"
      class="mb-12 border-b border-[rgba(0,0,0,0.2)] pb-12 last:mb-0 last:border-none"
    >
      <p class="my-0">
        {{ experience.date }} |
        <a
          :href="experience.companyUrl"
          class="animated-link"
          :aria-label="`Visit ${experience.companyName} Homepage`"
          target="_blank"
          rel="noopener noreferrer"
          >{{ experience.companyName }}</a
        >
        ({{ experience.place }})
      </p>
      <h5 class="text-lg font-bold">{{ experience.title }}</h5>
      <p class="mb-4 mt-4 italic">
        {{ experience.description }}
      </p>
      <ul>
        <li v-for="task in experience.tasks" :key="task">
          {{ task }}
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped></style>
