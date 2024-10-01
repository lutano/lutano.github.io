import path from 'path'
import { fileURLToPath } from 'url'    
import fs from 'fs/promises'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const componentName = process.argv[2];

if (!componentName) {
    console.error('Please provide a component name!');
    process.exit(1);
}

const componentDir = path.join(__dirname, 'src/components');
const filePath = path.join(componentDir, `${componentName}.vue`);

const template = `<script setup lang="ts">
// Component logic goes here
</script>

<template>
  <div>
    <!-- Component template goes here -->
  </div>
</template>

<style scoped lang="scss">
// Component styles go here
</style>
`;

fs.writeFile(filePath, template)
    .then(() => {
        console.log(`Component ${componentName} created at ${filePath} successfully!`)
    })
    .catch((error) => {
        console.error(`Error creating component: ${error}`)
    })