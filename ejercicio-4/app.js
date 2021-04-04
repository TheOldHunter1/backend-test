const request = require('request');
require('dotenv').config()
const { createShipping } = require('./utils/api');
const { save } = require('./utils/save');

let n_packages = "1",
    content_description = "ORDEN 255826267",
    imported_id = "255826267",
    order_price = "24509.0",
    weight = "0.98",
    volume = "1.0",
    type = "delivery",
    warehouse_code = "401",
    name = "Bernardita Tapia Riquelme",
    email = "b.tapia@outlook.com",
    phone = "977623070",
    place = "Puente Alto",
    full_address = "SAN HUGO 01324, Puente Alto, Puente Alto",
    carrier_code = "CCH";



let result = createShipping(n_packages, content_description, imported_id, order_price, weight, volume, type, warehouse_code, name, email, phone, place, full_address, carrier_code);


result.then((resp) => {
        console.log('----------------');
        console.log('llamada API exitosa!');
        save(resp);

    })
    .catch((err) => {
        console.log('----------------');
        console.log('error en llamada API: ', err);
        console.log('----------------');

    })


// console.log(URL);