<script setup lang="ts">
const socialLinks = [
  {
    name: 'Github',
    url: 'https://github.com/lutano/',
    icon: 'github',
    class: 'github',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/lspilotros',
    icon: 'linkedin',
    class: 'linkedin',
  },
  {
    name: 'Behance',
    url: 'https://www.behance.net/lspilotros',
    icon: 'behance',
    class: 'behance',
  },
  {
    name: 'X',
    url: 'https://x.com/lspilotros',
    icon: 'x',
    class: 'x',
  },
]
</script>

<template>
  <header class="flex flex-col justify-center">
    <h1 class="anim__from-left font-bold uppercase">
      <span>
        Designer,<br />
        Developer &amp;<br />
        Curious.
      </span>
    </h1>
    <div class="anim__from-left">
      <p class="text-xl">
        Luciano Spilotros is a Sr. Frontend Developer and UX/UI Designer with a
        proven track record of success.
      </p>
      <p class="text-xl">
        With over 10 years of experience in the online technology domain,
        Luciano specializes in User Research, Experience Design, and Frontend
        Development, consistently delivering intuitive and impactful digital
        solutions.
      </p>
    </div>
    <div
      class="anim__from-bottom align-center mt-10 flex flex-wrap items-center justify-between"
    >
      <a
        href="mailto:&#108;&#117;&#099;&#105;&#097;&#110;&#111;&#046;&#115;&#112;&#105;&#108;&#111;&#116;&#114;&#111;&#115;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;?&#115;&#117;&#098;&#106;&#101;&#099;&#116;=&#072;&#101;&#108;&#108;&#111;,&#032;&#110;&#105;&#099;&#101;&#032;&#116;&#111;&#032;&#109;&#101;&#101;&#116;&#032;&#121;&#111;&#117;!"
        class="block w-full rounded-[1px] bg-[theme('colors.button')] px-[2.4rem] py-[1.2rem] text-center uppercase text-white transition-transform duration-300 hover:scale-110 hover:bg-[theme('colors.buttonHover')] hover:shadow-2xl hover:shadow-black/20 md:inline-block md:w-auto"
        >hire me!</a
      >
      <ul
        class="flex-0 mx-10 mt-8 flex w-full justify-between p-0 md:m-0 md:w-5/12"
      >
        <li
          v-for="link in socialLinks"
          :key="link.name"
          class="mb-0 inline-block"
        >
          <a
            :class="[
              link.class,
              'social transition-transform duration-300 hover:scale-125',
            ]"
            :href="link.url"
            :aria-label="`Visit my profile on ${link.name}`"
            target="_blank"
          ></a>
        </li>
      </ul>
    </div>
  </header>
</template>

<style scoped>
.social {
  display: inline-block;
  opacity: 0.66;
  background-size: cover;
  width: 32px;
  height: 32px;

  &:hover {
    opacity: 1;
  }
}

.github {
  position: relative;
  /* top: 2px; */
  scale: 1.2;
  background-image: url(/images/social/github.svg);
}

.behance {
  position: relative;
  top: 1px;
  scale: 1.35;
  background-image: url(/images/social/behance.svg);
}

.linkedin {
  scale: 1.05;
  background-image: url(/images/social/linkedin.svg);
}

.x {
  scale: 0.95;
  background-image: url(/images/social/x-logo.svg);
}

header {
  box-sizing: border-box;

  padding: 3.5em 2em;
  font-size: 1.125em;
  text-align: left;
}

.anim__from-left {
  -webkit-animation: from-the-left 1.2ms linear both;
  animation: from-the-left 1.2s linear both;
}

.anim__from-bottom {
  -webkit-animation: from-the-bottom 2.2s ease-out both;
  animation: from-the-bottom 2.2s ease-out both;
}

span {
  animation: hue 15s infinite;
  background-color: rgba(74, 74, 74, 1);
  color: rgba(255, 255, 255, 1);
}
</style>
