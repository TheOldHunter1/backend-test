const { response, request } = require('express');
const { getAll, queryInsert, queryUpdate, queryDelete, getOneCompany } = require('../libs/sql');


const getAllCompany = async(req = request, res = response) => {

    let { page = 1 } = req.query;

    let result = await getAll(Number(page) - 1);

    res.json({
        'records': 10,
        page,
        result
    });
}

const getCompanyById = async(req = request, res = response) => {

    let { id } = req.params;

    let result = await getOneCompany(id);

    res.json({
        result
    });
}

const createNewCompany = async(req, res = response) => {

    const { name = 'undefined' } = req.body;

    // console.log(body);

    if (name === 'undefined') {
        res.status(400).json({
            'msg': 'El nombre de la nueva compañia es obligatorio'
        });
        return;
    }

    let result = await queryInsert(name);
    if (result.affectedRows < 0) {
        res.status(502).json({
            'msg': 'Error, favor intente mas tarde'
        });
    };

    res.status(201).json({
        'msg': 'Empresa creada!',
        name
    });
}

const modifyNameCompany = async(req, res = response) => {
    const { id, newName } = req.params;
    let result = await queryUpdate(newName, id);

    if (result <= 0) {
        res.status(502).json({
            'msg': 'Error, favor intente mas tarde'
        });
        return;
    }

    res.json({
        'msg': 'Actualizacion de nombre completa'
    });
    return;
}

const deleteCompany = async(req, res = response) => {

    const { id } = req.params;
    let result = await queryDelete(id);

    if (result <= 0) {
        res.status(502).json({
            'msg': 'Error, favor intente mas tarde'
        });
        return;
    }

    res.json({
        'msg': 'Registro eliminado'
    });
    return;

}

module.exports = {
    getAllCompany,
    createNewCompany,
    modifyNameCompany,
    deleteCompany,
    getCompanyById
}