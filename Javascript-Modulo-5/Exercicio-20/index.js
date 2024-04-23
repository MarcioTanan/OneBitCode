import { Component } from "./Component.js"
import { Form } from "./Form.js"
import { Input } from "./Input.js"
import { Label } from "./Label.js"

const el = new Component('h1', 'body', { innerText: 'Olá, Mundo!' })
console.log(el)

el.tag = 'h2'
el.build().render()

const form = new Form('body')

form.render()

form.addChildren(  
  new Component('br'),
  new Label('Data de Nascimento:', { htmlFor: 'birthdayInput'}),
  new Input(form, { id: 'birthdayInput', name: 'birthday', type: 'date' }),
  new Component('br'),
  new Component('br'),  
  new Label('Nome:',{ htmlFor: 'nameInput' }),
  new Input(form, { id: 'nameInput', name: 'name' }),
  new Component('br'),
  new Component('br'),
  new Label('Sobrenome:',{ htmlFor: 'SobrenomeInput' }),
  new Input(form, { id: 'SobrenomeInput', name: 'number' }),
  new Component('br'),
  new Component('br'),
  new Label('Telefone:',{ htmlFor: 'TelefoneInput' }),
  new Input(form, { id: 'TelefoneInput', name: 'number' })
)