export enum FigureAttributes {
    "value" = "value"
}

export default class Figure extends HTMLElement{
    value?: string;

    static get observedAttributes(){
        const attrs: Record <FigureAttributes, null> = {
            value: null
        }
        return Object.keys(attrs);
    }

    attributeChangedCallback(
        propName: FigureAttributes,
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
        if(this.shadowRoot) {
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="../src/components/Figure/Figure.css">
            <section class="joke">
            <h1>${this.value}</h1>
            </section>
            `;
        }
    }
}

customElements.define('app-figure', Figure);