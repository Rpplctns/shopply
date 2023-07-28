class list_element extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({mode: 'open'})
    }

    connectedCallback() {
        const name = this.getAttribute('data-text')
        const item_id = this.getAttribute('data-id')
        const marked = this.getAttribute('data-marked') === "True"
        this.shadowRoot.innerHTML = '<li>' +
            '<input onclick="mark_item(' + item_id + ', this)" ' +
            'type="checkbox"' + (marked ? " checked" : "") + "><p>" + name + '</p>' +
            '<button onclick="remove_item(' + item_id + ');"><slot></slot></button>' +
            '</li>'
        const style = document.createElement("style")

        style.textContent =
            'li {' +
                'display: flex;' +
                'flex-direction: row;' +
                'gap: 20px;' +
                'margin: 10px' +
            '}' +

            'p {' +
                'margin: 0;' +
                'align-self: center' +
            '}' +

            'input {' +
                'accent-color: blueviolet;' +
                'width: 20px;' +
                'height: 20px;' +
                'align-self: center' +
            '}' +

            'button {' +
                'width: 40px;' +
                'height: 40px;' +
                'background-color: transparent;' +
                'border: 3px blueviolet solid;' +
                'border-radius: 10px;' +
                'outline: none;' +
                'right: 0;' +
            '}'

        this.shadowRoot.append(style)
    }
}

customElements.define("list-element", list_element)