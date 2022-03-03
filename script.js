import {showData} from './fetch.js'
import {toggleTheme} from './toggler.js'
import {newInvoice} from './new-invoice.js'
document.querySelector('.switch img').addEventListener('click', toggleTheme)
document.querySelector('.button').addEventListener('click', newInvoice)

showData()

