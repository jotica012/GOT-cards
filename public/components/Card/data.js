var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const data = [];
function drawApi() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            for (let i = 1; i < 6; i++) {
                const got = yield fetch('https://thronesapi.com/api/v2/Characters' + i).then(res => { return res.json(); });
                data.push(got);
                console.log(data);
                console.log('funciona el try');
            }
        }
        catch (ERROR) {
            console.log(ERROR);
        }
    });
}
drawApi();
export default data;
/*interface DataShape {
    name: string;
    lastname: string;
  }
  
  const data: DataShape[] = [
    {
      name: 'Jon',
      lastname: 'Snow',

    },
    {
        name: 'Denerys',
        lastname: 'Targeryen',
    },
  ];

  
  export default data;


const gotCharacters = fetch('LINK.API.GOT');

//Promesa

const respuesta = gotCharacters.then(res => {
    return res.json();
});

//Usar la data que tenemso en la respuesta

respuesta.then(data => {
    console.log (data.name);
});*/
