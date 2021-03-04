const express = require('express');

const citiesModel = require('./../model/citites');

 const router = express.Router();

 router.get('/', (req, res, next) => {
     res.render('./../views/addCity.hbs')
 });



 router.post('/', async (req, res, next) => {
     const {name, country, population, subway, crimeRate, website} = req.body;

     try{
         await citiesModel.create({
             name,
             country,
             population,
             subway,
             crimeRate,
             website
         });
         res.redirect("/users")
     } catch (err) {
         next(err)
     }
 })

 module.exports = router;