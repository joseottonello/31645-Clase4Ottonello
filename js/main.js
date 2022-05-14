const welcome = () => {
    let name = prompt(`¡Bienvenido/a! \n En esta pagina podras cotizar tu proximo departamento a alquilar. \n Para ello te pedimos que ingreses tu nombre asi podemos continuar.`)
    while (name === "") {
        name = prompt(`¡Bienvenido/a! \n En esta pagina podras cotizar tu proximo departamento a alquilar. \n Para ello te pedimos que ingreses tu nombre asi podemos continuar.`)
    }
    alert(`Bienvenido/a ${name}.`);
    console.log(`${name}, debajo iras viendo los detalles con mayor precisión, para que lleves un control de los datos que ingresaste:`);
}

welcome()

class Rent {
    //creamos un molde para las opciones
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = Number(price);
        this.contract = this.price / 12 * 2;
        this.fee = 4 * this.price / 100;
    }
}

//creamos las opciones
const opt1 = new Rent(1, "Avellaneda 24576", 25000);
const opt2 = new Rent(2, "Av. Colon 817", 32000);
const opt3 = new Rent(3, "Santamarina 11871", 40000);

//metemos las opciones en un arreglo
const rents = [opt1, opt2, opt3];

//mostramos las opciones
const viewRents = () => {
    let text = "";
    //+= en string, concatena
    rents.forEach((x) => text += `${x.id}) ${x.name}\n`);
    let select = parseInt(prompt(`Estas son las opciones disponibles al dia de hoy: \n${text}`));
    while (select < 1 || select > 3) {
        select = parseInt(prompt(`Estas son las opciones disponibles al dia de hoy: \n${text}`));
    }
    console.log(`Opcion seleccionada: ${select}`);
    if (select == 1) {
        alert(`La cual cuenta con los siguientes importes: 
        \n Precio mensual: ${opt1.price} 
        \n Valor de contrato: ${opt1.contract} 
        \n Honorarios: ${opt1.fee}`)
        console.log(`Precio mensual: ${opt1.price}\n Valor de contrato: ${opt1.contract} \n Honorarios: ${opt1.fee}`)
    } else if (select == 2) {
        alert(`La cual cuenta con los siguientes importes: 
        \n Precio mensual: ${opt2.price} 
        \n Valor de contrato: ${opt2.contract} 
        \n Honorarios: ${opt2.fee}`)
        console.log(`Precio mensual: ${opt2.price}\n Valor de contrato: ${opt2.contract} \n Honorarios: ${opt2.fee}`)
    } else if(select == 3){
        alert(`La cual cuenta con los siguientes importes: 
        \n Precio mensual: ${opt3.price} 
        \n Valor de contrato: ${opt3.contract} 
        \n Honorarios: ${opt3.fee}`)
        console.log(`Precio mensual: ${opt3.price}\n Valor de contrato: ${opt3.contract} \n Honorarios: ${opt3.fee}`)
    } else {
        alert(`Por favor, Recarga la pagina para comenzar de nuevo.`);
    }
}

viewRents()

alert("¡Esperamos que estes conforme con tu eleccion! \nPuedes visitar la inmobiliaria de 9hs a 17hs de Lunes a Viernes para visitar la propiedad. \n ¡Muchas Gracias!");
console.log("¡Esperamos que estes conforme con tu eleccion! \nPuedes visitar la inmobiliaria de 9hs a 17hs de Lunes a Viernes para visitar la propiedad. \n ¡Muchas Gracias!");
