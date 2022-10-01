import { CardEvents } from './types.js';
describe('Card component', () => {
    test('Render custom element tag', () => {
        document.body.innerHTML = '<my-card name= "arepas" lastname= "arepas"></my-card>';
        const card = document.body.querySelector('my-card');
        expect(card).not.toBeNull();
    });
});
test('Render name', () => {
    const mockName = 'arepas';
    document.body.innerHTML = `<my-card name= "${mockName}" lastname= "arepas"></my-card>`;
    require('./Card.js');
    const card = document.body.querySelector('my-card');
    const nameTag = card === null || card === void 0 ? void 0 : card.shadowRoot.querySelector('h4');
    expect(nameTag === null || nameTag === void 0 ? void 0 : nameTag.textContent).toEqual(mockName);
});
test('Click triggered', () => {
    const mockName = 'arepas';
    const mockedListener = jest.fn();
    document.body.innerHTML = `<my-card name= "${mockName}" lastname= "arepas"></my-card>`;
    require('./Card.js');
    const card = document.body.querySelector('my-card');
    card === null || card === void 0 ? void 0 : card.addEventListener(CardEvents.cardSelected, mockedListener);
    const button = card === null || card === void 0 ? void 0 : card.shadowRoot.querySelector('button');
    button === null || button === void 0 ? void 0 : button.click();
    expect(mockedListener).toHaveBeenCalled;
});
