const { company } = require('faker');
const { queryFillDB } = require('./sql');


const fillDB = () => {

    var names = [];
    for (let index = 0; index < process.env.FakerNames; index++) {
        names.push(new Array(company.companyName()));
    }
    queryFillDB(names);
}

module.exports = fillDB;