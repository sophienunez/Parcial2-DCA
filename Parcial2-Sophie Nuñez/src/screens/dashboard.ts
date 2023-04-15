import { CardAttributes } from "../components/Card/Card";
import { getCategory, getData } from "../services/getData";
import "../components/export"

class Dashboard extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: 'open'});
    }

    async connectedCallback(){
        const data = await getData();
        this.render(data);
    }

    render(data:any){
        if(this.shadowRoot) this.shadowRoot.innerHTML = ``;

        data.forEach((elem: any) => {
            const button = this.ownerDocument.createElement('app-button');

            button.setAttribute(CardAttributes.category_name, elem);
            button.addEventListener('click', async () =>{
                const joke = await getCategory(elem);
                const card = this.ownerDocument.createElement('app-card');
                card.setAttribute(CardAttributes.value, joke.value);
                button.appendChild(card);
                this.shadowRoot?.appendChild(card);
            });
            
            this.shadowRoot?.appendChild(button);
        });
    }
}

customElements.define('app-dashboard', Dashboard);