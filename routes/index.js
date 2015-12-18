var express = require('express');
var router = express.Router();
var request = require('request');

var employees = {};

var jsonData={
  APIKey: "37ce2890-aa84-4997-b204-2bab98c954c0",
  Action: "GetAllEmployeeDetail",
  IncludeLeavers:"false"
}

request.post(
  'https://api.peoplehr.net/Employee',
  { json: jsonData },
  function (error, response, body) {
    if (!error && response.statusCode == 200) {
      employees = body.Result
    }
  }
);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { dave: employees });
});

module.exports = router;
