const template = document.createElement('template')
template.innerHTML = `
    <style>
        div { width:100px;height:100px;background-color:var(--bg-color, orange)}
        ::slotted(img) { width:50px;height:50px;}
        #square {display:flex;align-items:center;justify-content:center;flex-direction: column;}
    </style>
    <div id="square">
        <span id="title">Default title</span>
        <slot></slot>
        <button id="btnLogin">login</button>
    </div>
`


class MySquare extends HTMLElement {
    static get observedAttributes() { return ['title']}

    constructor(){
        super();
        this._title = "title here.."
        this.attachShadow({mode:'open'})
        // square.shadowRoot.appendChild(document.importNode(content, true))
    }
    connectedCallback() {
        console.log("connected") 
        this.render()
    }
    attributeChangedCallback(attribute, oldvalue, newvalue) {
        console.log("data", attribute, oldvalue, newvalue)
        if (attribute == "title") {
            this["_" + attribute] = newvalue
            this.render(); 
        }
    }
    render() {
        console.log("rendering again..")
        let content = template.content
        this.shadowRoot.innerHTML = ''
        this.shadowRoot.appendChild(content.cloneNode(true))
        const btnLogin = this.shadowRoot.querySelector("#btnLogin")
        const title = this.shadowRoot.querySelector("#title")
        title.innerHTML = this._title
        btnLogin.addEventListener('click', () => {
            this.dispatchEvent(new CustomEvent('login-completed', {detail:{user:'john'}}))
        })
    }
    set title (v){
        if (this._title !== v) {
            this._title = v;
            this.setAttribute("title", v)
            this.render()
        }
    }
    get title() {
        return this._title
    }
    randomizeColor() {
        console.log("changing the color..");
    }
}

customElements.define('my-square', MySquare)

