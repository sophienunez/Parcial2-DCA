export enum ButtonAttributes {
    "category_name" = "category_name"
}

export default class Button extends HTMLElement {
    category_name?: string;

    static get observedAttributes(){
        const attrs: Record <ButtonAttributes, null> = {
            category_name: null
        }
        return Object.keys(attrs);
    }

    attributeChangedCallback(
        propName: ButtonAttributes,
        _: unknown,
        newValue: string
    ){
        switch (propName) {
            default:
                this[propName] = newValue;
                break;
        }
    }

    constructor(){
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback(){
        this.render();
    }

    render(){
        if(this.shadowRoot) this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="../src/components/Button/Button.css">
        <button class="btn">${this.category_name}</button>
        `;
    }
}

customElements.define('app-button', Button);