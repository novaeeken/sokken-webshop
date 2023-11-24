import './style.css'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <h1>Sokken Webshop</h1>
    <p>Jij wil er toch ook warmpjes bij zitten?</p>
  </div>
`

setupCounter(document.querySelector('#counter'))
