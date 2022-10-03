import { Character } from '../types/indexTypes';

export const getCharacters = async (): Promise <Array<Character>> => {
    const response = await fetch ('https://thronesapi.com/api/v2/Characters');
    const data = await response.json();
    console.log(data);
    return data;
};

/*async function getCharacters() { 
    try {
    for (let i = 1; i < 6;i++) {
        async (): Promise<Array<Character>> => {
            const response = await fetch ('https://thronesapi.com/api/v2/Characters'+i);
                    const data = await response.json();
                    console.log(data);
                    return data;
                };
            }
    } catch (ERROR) {
        console.log(ERROR);
    }
}
export default getCharacters;*/