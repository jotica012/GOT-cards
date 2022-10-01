import {CardEvents, CardSelectEvent} from './types.js';

describe ('Card component', ()=> {
    test ('Render custom element tag', ()=> {
        document.body.innerHTML = '<my-card name= "arepas" lastname= "arepas"></my-card>';
        const card = document.body.querySelector('my-card');
        expect(card).not.toBeNull();
    });
});

test ('Render name', ()=> {
    const mockName = 'arepas';
    document.body.innerHTML = `<my-card name= "${mockName}" lastname= "arepas"></my-card>`;
    require('./Card.js');
    const card = document.body.querySelector('my-card');
    const nameTag = card?.shadowRoot.querySelector('h4');
    expect(nameTag?.textContent).toEqual(mockName);
});


test ('Click triggered', ()=> {
    const mockName = 'arepas';
    const mockedListener = jest.fn();

    document.body.innerHTML = `<my-card name= "${mockName}" lastname= "arepas"></my-card>`;
    require('./Card.js');

    const card = document.body.querySelector('my-card');
    card?.addEventListener(CardEvents.cardSelected,mockedListener);
    const button = card?.shadowRoot.querySelector('button');
    button?.click();
    expect(mockedListener).toHaveBeenCalled;
});





