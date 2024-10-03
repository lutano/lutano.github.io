<script setup lang="ts">
import IconVite from '@/components/icons/IconVite.vue'
import IconTypescript from '@/components/icons/IconTypescript.vue'
import IconVue from '@/components/icons/IconVue.vue'
</script>

<template>
  <footer class="bg-[rgba(50,50,50,0.9)] px-5 py-4" role="contentinfo">
    <ul class="m-0 mb-2 flex list-none justify-center gap-2 p-0">
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
    <p class="m-0 text-center text-xs text-white">
      {{ new Date().getFullYear() }} &copy; Luciano Spilotros
    </p>
  </footer>
</template>

<style scoped lang="scss">
.dev-logo {
  $sizing: 1.2rem;
  display: inline-block;
  margin: 0 0.8rem;
  width: $sizing;
  height: $sizing;
}
</style>
