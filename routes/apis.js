var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.writeHead(200);
    res.write('this is apis page');
    // res.render('index', { title: 'Express' });
});

/* GET home page. */
router.get('/add_comment', function(req, res, next) {
    var result = checkName(res.data.name);
    if(!result){
        return {response_code:1};
    }
    
    next();
    // res.render('index', { title: 'Express' });
});

/* GET home page. */
router.get('/add_comment', function(req, res, next) {
    var result = checkName(res.data.name);
    if(!result){
        return {response_code:1};
    }

    next();
    // res.render('index', { title: 'Express' });
});

module.exports = router;/**
 * Created by kiku on 16/12/08.
 */
