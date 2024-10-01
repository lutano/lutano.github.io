<script setup lang="ts">
import IconVite from '@/components/icons/IconVite.vue'
import IconTypescript from '@/components/icons/IconTypescript.vue'
import IconVue from '@/components/icons/IconVue.vue'
</script>

<template>
  <div id="footer" class="footer" role="contentinfo">
    <ul>
      <li>
        <a href="https://vitejs.dev/" title="Visit Vite homepage">
          <IconVite class="dev-logo" />
        </a>
      </li>
      <li>
        <a
          href="https://www.typescriptlang.org/"
          title="Visit Typescript page"
          target="_blank"
        >
          <IconTypescript class="dev-logo" />
        </a>
      </li>
      <li>
        <a href="https://vuejs.org/" title="Visit Vue page" target="_blank">
          <IconVue class="dev-logo" />
        </a>
      </li>
    </ul>
    <p>{{ new Date().getFullYear() }} &copy; Luciano Spilotros</p>
  </div>
</template>

<style scoped lang="scss">
ul {
  display: flex;
  gap: 1rem;
  justify-content: center;
  li {
    list-style: none;
  }
}
</style>
