const request = require('request');
require('dotenv').config()

const { URL, APIKEY } = process.env;

const createShipping = (n_packages, content_description, imported_id, order_price, weight, volume, type, warehouse_code, name, email, phone, place, full_address, carrier_code) => {
    return new Promise((resolve, reject) => {
        let options = {
            'method': 'POST',
            'url': `${URL}s2/v2/companies/401/deliveries`,
            'headers': {
                'Accept': 'application/json',
                'api-key': APIKEY,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "shipping_order": {
                    n_packages,
                    content_description,
                    imported_id,
                    order_price,
                    weight,
                    volume,
                    type
                },
                "shipping_origin": { warehouse_code },
                "shipping_destination": {
                    "customer": {
                        name,
                        email,
                        phone
                    },
                    "delivery_address": {
                        "home_address": {
                            place,
                            full_address
                        }
                    }
                },
                "carrier": {
                    carrier_code,
                    "tracking_number": ""
                }
            })

        };

        request(options, function(error, response) {
            if (error) {
                reject(error);
                return;
            }
            resolve(response.body);
            return;
        });
    });
}

module.exports = { createShipping };