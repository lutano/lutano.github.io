<script setup lang="ts">
const socialLinks = [
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
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/lspilotros',
    icon: 'linkedin',
    class: 'linkedin',
  },
  {
    name: 'Github',
    url: 'https://github.com/lutano/',
    icon: 'github',
    class: 'github',
  },
]
</script>

<template>
  <header>
    <h1 class="anim__from-left">
      <span>
        Designer,<br />
        Developer &amp;<br />
        Curious.
      </span>
    </h1>
    <div class="anim__from-left">
      <p>
        Luciano Spilotros is a Sr. Frontend Developer and UX/UI Designer with a
        proven track record of success.
      </p>
      <p>
        With over 10 years of experience in the online technology domain,
        Luciano specializes in User Research, Experience Design, and Frontend
        Development, consistently delivering intuitive and impactful digital
        solutions.
      </p>
    </div>
    <div class="actions anim__from-bottom justify-between flex">
      <a
        href="mailto:&#108;&#117;&#099;&#105;&#097;&#110;&#111;&#046;&#115;&#112;&#105;&#108;&#111;&#116;&#114;&#111;&#115;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;?&#115;&#117;&#098;&#106;&#101;&#099;&#116;=&#072;&#101;&#108;&#108;&#111;,&#032;&#110;&#105;&#099;&#101;&#032;&#116;&#111;&#032;&#109;&#101;&#101;&#116;&#032;&#121;&#111;&#117;!"
        class="call-to-action button"
        >hire me!</a
      >
      <ul class="flex justify-center flex-0 p-0 m-0">
        <li v-for="link in socialLinks" :key="link.name" class="inline-block">
          <a
            :class="[link.class, 'social']"
            :href="link.url"
            :aria-label="`Visit my profile on ${link.name}`"
            target="_blank"
          ></a>
        </li>
      </ul>
    </div>
  </header>
</template>

<style scoped lang="scss">
.call-to-action {
  display: inline-block;
  padding: 1.8rem 2.4rem;

  background: theme('colors.button');
  color: rgba(255, 255, 255, 1);

  text-decoration: none;
  text-transform: uppercase;

  &:hover {
    background-color: theme('colors.buttonHover');
    box-shadow: 0 16px 32px -6px rgba(0, 0, 0, 0.2);
  }
}

.actions {
  display: flex;
  align-items: center;
  margin-top: 4rem;

  > a {
    transition: all 300ms ease;
  }
}

.social {
  margin-left: 1.8rem;
  display: inline-block;
  width: 30px;
  height: 30px;
  background-size: cover;
  opacity: 0.66;

  &:hover {
    opacity: 1;
  }
}

.github {
  background-image: url(/images/social/github.svg);
  -webkit-transform: scale(1.1); /* Chrome, Opera 15+, Safari 3.1+ */
  -ms-transform: scale(1.1); /* IE 9 */
  transform: scale(1.1);
}

.behance {
  background-image: url(/images/social/behance.svg);
  -webkit-transform: scale(1.2); /* Chrome, Opera 15+, Safari 3.1+ */
  -ms-transform: scale(1.2); /* IE 9 */
  transform: scale(1.2);
}

.linkedin {
  background-image: url(/images/social/linkedin.svg);
}

.x {
  background-image: url(/images/social/x-logo.svg);
  -webkit-transform: scale(0.9); /* Chrome, Opera 15+, Safari 3.1+ */
  -ms-transform: scale(0.9); /* IE 9 */
  transform: scale(0.9);
}

header {
  box-sizing: border-box;

  padding: 3.5em 2em;
  font-size: 1.125em;
  text-align: left;
}
.anim__from-left {
  -webkit-animation: from-the-left 1100ms linear both;
  animation: from-the-left 1100ms linear both;
}

.anim__from-bottom {
  -webkit-animation: from-the-bottom 2000ms linear both;
  animation: from-the-bottom 2000ms linear both;
}

h1 span {
  color: rgba(255, 255, 255, 1);
  background-color: rgba(74, 74, 74, 1);
  animation: hue 15s infinite;
}

@keyframes hue {
  0%,
  100% {
    background-color: rgba(74, 74, 74, 0.8);
  }

  12.5% {
    background-color: rgba(94, 179, 239, 0.8);
  }

  25% {
    background-color: rgba(234, 72, 62, 0.8);
  }

  37.5% {
    background-color: rgba(155, 187, 134, 0.8);
  }

  50% {
    background-color: rgba(97, 110, 239, 0.7);
  }
  62.5% {
    background-color: rgba(41, 198, 205, 0.8);
  }
  75% {
    background-color: rgba(234, 200, 39, 1);
  }
  87.5% {
    background-color: rgba(158, 190, 205, 1);
  }
}
</style>
