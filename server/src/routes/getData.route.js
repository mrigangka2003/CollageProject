const express = require('express') ;
const { getData } = require('../controllers/getdata.controller');
const router = express.Router() ;

router.get('/getdata',getData) ;

module.exports = router ;