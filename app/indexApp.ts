import {getCharacters} from './services/characters.js';
import { Character } from './types/indexTypes.js';

class AppContainer extends HTMLElement{
    constructor () {
        super();
        this.attachShadow({mode:'open'});
}   

/*async connectedCallback() {
    const characters= await getCharacters();
    this.render(characters);
}*/

async connectedCallback() {
    const characters: any = await getCharacters();
    const character: any []=[];
    for (let i = 0; i < 7; i++) {
        const elements = characters [i];
        character.push(elements);
    }
    this.render(character);
}

render (characters: Array<Character>){
    if (!this.shadowRoot) return;

   const components = characters?.map( ({fullName, family, imageUrl}) => `
   <link href="./card.css" rel="stylesheet">
   <section>
   <div class="card-trans">
    <div class="card">
    <div class="card-details">
    
    <p class="text-title"> ${fullName}</p>
    <p class="text-body"> ${family}</p>
    <img src = '${imageUrl}' alt = "img" class="image-body">

        </section>`
    );
    this.shadowRoot.innerHTML = `
    <section>
    ${components?.join('')}
     <section>`

}    

}
customElements.define('app-container', AppContainer);
