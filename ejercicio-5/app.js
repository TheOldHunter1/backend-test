let n1 = 0,
    n2 = 1,
    nextTerm,
    number = 2;

let divisores = (num) => {
    let tmpDiv = 0,
        tmp;

    for (let index = num; index > 0; index--) {
        if (num % index == 0) {
            tmpDiv++;
        }
    }
    return tmpDiv;
}

for (let i = 1; i <= number; i++) {
    console.log('------------------');
    console.log('numero: ', n1);

    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;

    let result = divisores(n1);
    console.log('numeros de divisores: ', result);
    console.log('------------------');

    if (result > 1000) {
        console.log('el primer numero que tiene mas de 1000 divisores es: ', n1);
        break
    }
    number++;

}