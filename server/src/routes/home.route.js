const express = require('express') ;
const { saveStudent } = require('../controllers/input.controller');
const router = express.Router() ;

router.post('/',saveStudent) ;

module.exports = router ;