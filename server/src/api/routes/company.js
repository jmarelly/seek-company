const express = require('express');
const companyCtrl = require('../components/company/companyController');

const router = express.Router();

const use = (func) => (req, res, next) => Promise.resolve(func(req, res, next)).catch(next);
    
router.get('/company/:name', use(companyCtrl.getCompanies));

module.exports = router;