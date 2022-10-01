export enum CardAttributes {
    name = 'name',
    lastname = 'lastname',
}

export enum CardEvents {
    cardSelected = 'cardSelected',
}

export type CardSelectEvent = CustomEvent <{name: string}>

