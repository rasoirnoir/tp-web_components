class JaimeLaPapayeElement extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback(){
        this.innerHTML = `<p>Comment ramasse t'on les papayes ?</p>`;
    }
}

customElements.define("jaime-la-papaye", JaimeLaPapayeElement);