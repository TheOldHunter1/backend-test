let km = Math.round(Math.random() * 2000);
let x = 1,
    y = 1,
    result = 0;

switch (true) {
    case km < 100:
        result = 0;
        break;
    case km < 300 && km > 100:
        result = 1;
        break;
    case km < 500 && km > 300:
        result = 2;
        break;
    default:

        let loop = Math.trunc(km / 100) - 2;
        for (let index = 0; index < loop; index++) {
            result = x + y;
            y = x;
            x = result;
        }

        break;
}

console.log('----------------------------------------------------------------------------------------');
console.log(`Segun nuestros sistemas, su envio deberia recorrer los ${km} Km en ${result} Dias`);
console.log('----------------------------------------------------------------------------------------');