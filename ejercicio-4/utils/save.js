const fs = require('fs');

const save = (data) => {
    let date = new Date();

    const file = './responses/response.json';
    // fs.writeFileSync(file, data);
    fs.writeFile(file, data, function(err) {
        if (err) {
            return console.log(err);
        } else {
            console.log('Archivo Creado!');

        }
        console.log('----------------');

    });
}

module.exports = { save };