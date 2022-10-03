var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export const getCharacters = () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch('https://thronesapi.com/api/v2/Characters');
    const data = yield response.json();
    console.log(data);
    return data;
});
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
