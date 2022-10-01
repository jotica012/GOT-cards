//import {CardEvents, CardSelectEvent} from './types.js';
export var CardAttributes;
(function (CardAttributes) {
    CardAttributes["fullName"] = "fullName";
    CardAttributes["family"] = "family";
    CardAttributes["imageUrl"] = "imageUrl";
})(CardAttributes || (CardAttributes = {}));
class Card extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
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
    static get observedAttributes() {
        const attrs = {
            fullName: null,
            family: null,
            imageUrl: null,
        };
        return Object.keys(attrs);
    }
    attributeChangedCallback(propName, oldValue, newValue) {
        if (this[propName] === newValue)
            return;
        this[propName] = newValue;
        this.mount();
    }
    connectedCallback() {
        this.mount();
    }
    mount() {
        this.render();
    }
    render() {
        if (!this.shadowRoot)
            return; //why !???
        this.shadowRoot.innerHTML += `
    <my-card ${this.fullName}"><my-card>
    <my-card ${this.family}"><my-card>
    <my-card ${this.imageUrl}"><my-card>`;
    }
}
customElements.define('my-card', Card);
export default Card;
