import './components/indexComponents.js';
//import { CardSelectEvent, CardEvents }  from './components/Card/types.js';
import data from './components/Card/data.js';
import Card, {CardAttributes} from './components/Card/Card.js';

class AppContainer extends HTMLElement{
    fullName = '';
    family = '';
    imageUrl = '';

    constructor () {
        super();
        this.attachShadow({mode:'open'});

        data.forEach((card) => {
            const profileCard = this.ownerDocument.createElement('my-card') as Card;
            profileCard.setAttribute(CardAttributes.fullName, card.fullName); 
            profileCard.setAttribute(CardAttributes.family, card.family.name); 
            profileCard.setAttribute(CardAttributes.imageUrl, card.imageUrl); 
    });
}    
    connectedCallback(): void {
        this.mount();
    }

     mount () {
        this.render();
     }

     render() {
        if (!this.shadowRoot) {return;}
        this.shadowRoot.innerHTML = `
        <link href="./components/Card/card.css" rel="stylesheet">
       <section>
        <div class="card">
        <div class="card-details">
    
        <p class="text-title"> Name ${this.fullName}</p>
        <p class="text-body"> Family ${this.family}</p>

        <img src = 'https://thronesapi.com/assets/images/daenerys.jpg'  alt = "img" class="image-body">
        <img src = '${this.imageUrl} alt = "img" class="image-body">
        <div class = "bottom-box">
        </section>

        <section>

        <div class="card">
        <div class="card-details">
    
        <p class="text-title"> Name ${this.fullName}</p>
        <p class="text-body"> Family ${this.family}</p>

        <img src = 'https://thronesapi.com/assets/images/arya-stark.jpg'  alt = "img" class="image-body">
        <img src = '${this.imageUrl} alt = "img" class="image-body">
        <div class = "bottom-box">

        </section>

        <section>
        <div class="card">
        <div class="card-details">
    
        <p class="text-title"> Name ${this.fullName}</p>
        <p class="text-body"> Family ${this.family}</p>

        <img src = 'https://thronesapi.com/assets/images/tyrion-lannister.jpg'  alt = "img" class="image-body">
        <img src = '${this.imageUrl} alt = "img" class="image-body">
        <div class = "bottom-box">
        </section>

        <section>
        <div class="card">
        <div class="card-details">
    
        <p class="text-title"> Name ${this.fullName}</p>
        <p class="text-body"> Family ${this.family}</p>

        <img src = 'https://thronesapi.com/assets/images/cersei.jpg'  alt = "img" class="image-body">
        <img src = '${this.imageUrl} alt = "img" class="image-body">
        <div class = "bottom-box">
        </section>

        <section>
        <div class="card">
        <div class="card-details">
    
        <p class="text-title"> Name ${this.fullName}</p>
        <p class="text-body"> Family ${this.family}</p>

        <img src = 'https://thronesapi.com/assets/images/jon-snow.jpg'  alt = "img" class="image-body">
        <img src = '${this.imageUrl} alt = "img" class="image-body">
        <div class = "bottom-box">
        </section>

            `;
      }

}
customElements.define('app-container', AppContainer);
