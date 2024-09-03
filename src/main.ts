import './style.scss'
import typescriptLogo from '/typescript.svg'
import viteLogo from '/vite.svg'


document.querySelector<HTMLDivElement>('#footer')!.innerHTML = `
    <p class="how-i-made-it">Made with love, <a href="https://vitejs.dev/" title="Visit Vite homepage"><img src="${viteLogo}" class="dev-logo" alt="Vite logo" /></a> and <a href="https://www.typescriptlang.org/" title="Visit Typescript page" target="_blank"><img src="${typescriptLogo}" class="dev-logo" alt="Typescript logo" /></a></p>
    <p>${new Date().getFullYear()} &copy; Luciano Spilotros</p>
`