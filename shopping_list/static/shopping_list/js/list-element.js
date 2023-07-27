class list_element extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({mode: 'open'})
    }

    connectedCallback(){
        const name = this.getAttribute('data-text') || 'def'
        const item_id = this.getAttribute('data-id')
        const marked = this.getAttribute('data-marked') === "true"
        this.shadowRoot.innerHTML = '<li>' +
            '<input type="checkbox"' + (marked ? " checked>" : ">") + name + '' +
            '<button onclick="remove_item(' + item_id + ');">delete</button>' +
            '</li>'
    }
}

customElements.define("list-element", list_element)