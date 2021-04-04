const { Router } = require('express');
const { getAllCompany, createNewCompany, modifyNameCompany, deleteCompany, getCompanyById } = require('../controllers/company');

const router = Router();

router.get('/', getAllCompany);

router.get('/search/:id', getCompanyById);

router.post('/', createNewCompany);

router.put('/:id/:newName', modifyNameCompany);

router.delete('/:id', deleteCompany);

module.exports = router;