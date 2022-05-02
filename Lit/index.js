// let johnTemplate = (fname) => john`<div>hello ${fname} how are you</div>`
// let fname = "john"
// let data = johnTemplate(fname)
// console.log(data)
// debugger;
// fname = "test"
// data = johnTemplate(fname)
// console.log(data)
// function john(stringsarray, ...args) {
//     let templateExists = john.template
//     if (!templateExists) {
//         john.template =  document.createElement("template")
//         john.template.innerHTML = `<div><!--name--></div>`
//     }
//     // john.template.innerHTML.replace("<!--name-->", args[0])
//     let node = john.template.cloneNode(true)
//     node.innerHTML = node.innerHTML.replace("<!--name-->", args[0])
//     return node
// }

import { LitElement, html } from 'lit'
import { when } from 'lit/directives/when.js'

export class AddressBook extends LitElement {
    render(){
        return html`
            <div>
            <h1>Addressbook</h1>
            <slot></slot>
            </div>
        `
    }
}
customElements.define("address-book", AddressBook); 

export class AddressBookEntry extends LitElement {
    render(){
        return html`
            <div><h1>${when(true, () => html`todo`, () => html`test`)}</h1>
            <span class='addressbookentry'><slot></slot></span>
            </div>
        `
    }
}
customElements.define("addressbook-entry", AddressBookEntry); 


export class AddressBookApp extends LitElement {

    constructor(){
        super(); 
        this.entries= ['a','b','c']
    }

    render(){
        return html`jgipejtpreijt
            <address-book>
                ${this.entries.map(e => html`<addressbook-entry>${e}</addressbook-entry>`)}
            </address-book>
        `
    }
}
customElements.define("addressbook-app", AddressBookApp); 


// <address-book>
//        <addres-entry></addres-entry>
// </address-book>
