import { FigureAttributes } from "../Figure/Figure";
import { getCategory } from "../../services/getData";

export enum CardAttributes {
    "category_name" = "category_name",
    "value" = "value"
}

export default class Card extends HTMLElement{
    category_name: string = "";
    value: string = "";

    static get observedAttributes(){
        const attrs: Record <CardAttributes, null> = {
            category_name: null,
            value: null
        }
        return Object.keys(attrs);
    }

    attributeChangedCallback(
        propName: CardAttributes,
        _: unknown,
        newValue: string
    ){
        switch (propName) {
            default:
                this[propName] = newValue;
                break;
        }
        this.render();
    }

    constructor(){
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback(){
        this.render();
    }

    render(){
        if(this.shadowRoot) this.shadowRoot.innerHTML = ``;

        const container = this.ownerDocument.createElement('section');

        const figure = this.ownerDocument.createElement('app-figure');
        figure.setAttribute(FigureAttributes.value, this.value);

        container.appendChild(figure);

        this.shadowRoot?.appendChild(container);
    }
}

customElements.define('app-card', Card);