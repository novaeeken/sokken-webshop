import './style.css'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <h1>Sokken Webshop</h1>
    <h2>Sokken voor ieder mens en weertype</h2>
  </div>
`

setupCounter(document.querySelector('#counter'))
