//import {CardEvents, CardSelectEvent} from './types.js';
export enum CardAttributes {
    'fullName' = 'fullName',
    'family' = 'family',
    'imageUrl' = 'imageUrl',
}
class Card extends HTMLElement {
    fullName?: string;
    family?: string;
    imageUrl?: string;

   /* static get ObservedAttributes ():
        CardAttributes[] {
            return Object.keys(CardAttributes) as CardAttributes [];
        }*/
        /*attributeChangedCallback (
    propName: CardAttributes,
    oldValue: string,
    newValue: string ) { 
    if (this[propName] === newValue) return;
    this[propName] = newValue;
    this.mount();
    }*/

    static get observedAttributes(){
            const attrs: Record<CardAttributes,null> = {
                fullName: null,
                family: null,
                imageUrl: null,
            };
            return Object.keys(attrs);
         }

    constructor () {
            super ();
            this.attachShadow({mode: 'open'});
        }

attributeChangedCallback(
    propName: CardAttributes, 
    oldValue: string | undefined, 
    newValue: string | undefined) {
    
            if (this[propName] === newValue) return;
            this[propName] = newValue;  
            this.mount();  
        }

connectedCallback(): void {
    this.mount();
}

mount (): void {
    this.render();
    }

render(): void{
    if(!this.shadowRoot) return; //why !???
    this.shadowRoot.innerHTML += `
    <my-card ${this.fullName}"><my-card>
    <my-card ${this.family}"><my-card>
    <my-card ${this.imageUrl}"><my-card>`;
}
}

customElements.define('my-card', Card);
export default Card;