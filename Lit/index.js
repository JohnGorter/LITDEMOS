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

export class MyCounter extends LitElement {
    static properties = {
        cval: {},
      };

    constructor(){
        super(); 
        this.cval = '0'
        setInterval(() => {
            this.cval = this.cval + 1
        }, 1000); 
        
    }
    render(){
        return html`
        <div>${this.cval}</div>
        `
    }
}
customElements.define("my-counter", MyCounter); 