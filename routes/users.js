var express = require('express');
var router = express.Router();
const citiesModel = require("./../model/citites")

/* GET users listing. */
router.get('/', function(req, res, next) {

citiesModel.find()
.then((dbRes) => {
  res.render('./../views/mycities.hbs', {mycities: dbRes});
})
.catch((dbError) => {
  next(dbError)
})
  
});

module.exports = router;
