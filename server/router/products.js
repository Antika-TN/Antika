const express = require('express');
const router = express.Router();
const SellerController = require('../controler/SellerControler')

// router.get('/',  /*  middleware ,controller */);

// router.get('/:id',/*  middleware ,controller */);

router.post('/',SellerController.createProduct) ; /*  middleware ,controller */

// router.put('/:id', /*  middleware ,controller */);

// router.delete('/:id',/*  middleware ,controller */)

module.exports = router;
