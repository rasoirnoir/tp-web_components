class UserCardElement extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback(){

        this.attachShadow({mode: "open"});

        this.firstName = this.getAttribute("first-name");
        this.lastName = this.getAttribute("last-name");
        this.pictureURL = this.getAttribute("picture-url");

        console.log(`first name : ${this.firstName}, last name : ${this.lastName}, picture url : ${this.pictureURL}`);

        this.shadowRoot.innerHTML = `
        <style>h2{color: red;}</style>
        <img src="${this.pictureURL}" alt="profile picture"></img>
        <h2>${this.firstName}<h2>
        <h2>${this.lastName}</h2>`;

    }
}

customElements.define("user-card", UserCardElement);
