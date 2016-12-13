/**
 * Created by kiku on 16/12/08.
 */
var express = require('express');
var router = express.Router();

//API
const api_new = "/new";
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
 * New one comment
 */
// validate the data
router.post(api_new, function (req, res, next) {

    var data = req.body;



});


module.exports = router;
