<script setup lang="ts">
import IconVite from '@/components/icons/IconVite.vue'
import IconTypescript from '@/components/icons/IconTypescript.vue'
import IconVue from '@/components/icons/IconVue.vue'
</script>

<template>
  <footer class="py-8 px-5" role="contentinfo">
    <ul class="flex justify-center gap-2 p-0 m-0 mb-2">
      <li>
        <a
          href="https://vitejs.dev/"
          target="_blank"
          aria-label="Visit Vite homepage"
          rel="noopener noreferrer"
        >
          <IconVite class="dev-logo" />
        </a>
      </li>
      <li>
        <a
          href="https://www.typescriptlang.org/"
          aria-label="Visit Typescript page"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconTypescript class="dev-logo" />
        </a>
      </li>
      <li>
        <a
          href="https://vuejs.org/"
          aria-label="Visit Vue page"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconVue class="dev-logo" />
        </a>
      </li>
    </ul>
    <p class="m-0">{{ new Date().getFullYear() }} &copy; Luciano Spilotros</p>
  </footer>
</template>

<style scoped lang="scss">
footer {
  font-size: 0.875em;
  background-color: rgba(50, 50, 50, 0.9);

  ul {
    display: flex;
    gap: 1rem;
    justify-content: center;
    padding: 0;
    li {
      list-style: none;
    }
  }

  p {
    font-size: 1.2rem;
    font-weight: lighter;
    color: rgba(255, 255, 255, 0.9);
    text-align: center;
  }
  .how-i-made-it {
    font-size: 1rem;
    line-height: 0.5rem;
    > a {
      vertical-align: text-bottom;
      display: inline-block;
    }
  }
  .dev-logo {
    $sizing: 1.8rem;
    width: $sizing;
    height: $sizing;
    margin: 0 0.8rem;
    display: inline-block;
  }
}
</style>
