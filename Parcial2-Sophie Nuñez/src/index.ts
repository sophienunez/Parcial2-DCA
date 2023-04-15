import "./components/export"
import "./screens/dashboard"

class AppContainer extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {
        const jokes = this.ownerDocument.createElement('app-dashboard');
        this.shadowRoot?.appendChild(jokes);
    }
}

customElements.define('app-container', AppContainer)