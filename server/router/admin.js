const express = require('express');
const router = express.Router();
const AdminControler= require ('../controler/adminControler')

router.get('/getSellers',AdminControler.getAllseller );
router.get('/getclients',AdminControler.getAllclient );


router.get('/:id',  /*  middleware ,controller */);


router.put('/:id',  /*  middleware ,controller */);

module.exports = router;