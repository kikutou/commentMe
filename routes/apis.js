/**
 * Created by kiku on 16/12/08.
 */
var express = require('express');
var router = express.Router();

//API
const api_new = "/add_comment";
const api_edit = "/edit";
const api_delete = "/delete";


router.get('/', function(req, res, next) {
    console.log(req.url);
    res.writeHead(200);
    res.write('this is apis page');
    // return 'hello';
    // res.render('index', { title: 'Express' });
});

/**
 * Add one comment
*/
router.get('/add_comment', function(req, res, next) {
    var result = checkName(res.data.name);
    if(!result){
        return {response_code:1};
    }
    
    next();
    // res.render('index', { title: 'Express' });
});


router.get('/add_comment', function(req, res, next) {
    var result = checkName(res.data.name);
    if(!result){
        return {response_code:1};
    }

    next();
    // res.render('index', { title: 'Express' });
});

module.exports = router;
