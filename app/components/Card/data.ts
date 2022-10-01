const data: any []=[];
async function drawApi() {
    try {
        for (let i = 1; i < 6;i++) {
        const got = await fetch('https://thronesapi.com/api/v2/Characters'+ i).then(res => {return res.json();});
        data.push(got);
        console.log(data);
        console.log('funciona el try');
    }

    } catch (ERROR) {
        console.log(ERROR);
    }
    
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

