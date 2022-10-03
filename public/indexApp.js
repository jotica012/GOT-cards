var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { getCharacters } from './services/characters.js';
class AppContainer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
    /*async connectedCallback() {
        const characters= await getCharacters();
        this.render(characters);
    }*/
    connectedCallback() {
        return __awaiter(this, void 0, void 0, function* () {
            const characters = yield getCharacters();
            const character = [];
            for (let i = 0; i < 7; i++) {
                const elements = characters[i];
                character.push(elements);
            }
            this.render(character);
        });
    }
    render(characters) {
        if (!this.shadowRoot)
            return;
        const components = characters === null || characters === void 0 ? void 0 : characters.map(({ fullName, family, imageUrl }) => `
   <link href="./card.css" rel="stylesheet">
   <section>
   <div class="card-trans">
    <div class="card">
    <div class="card-details">
    
    <p class="text-title"> ${fullName}</p>
    <p class="text-body"> ${family}</p>
    <img src = '${imageUrl}' alt = "img" class="image-body">

        </section>`);
        this.shadowRoot.innerHTML = `
    <section>
    ${components === null || components === void 0 ? void 0 : components.join('')}
     <section>`;
    }
}
customElements.define('app-container', AppContainer);
