/**
 * Created by wangrunbo on 16/12/13.
 */
var express = require('express');
var router = express.Router();
var con = require('../consts.js');

router.get('/', function(req, res, next) {
    var a = con.c1;
    var b = con.c2;

    console.log(con);
    console.log(a);
    console.log(b);

    res.end();
});


module.exports = router;