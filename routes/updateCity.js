const express = require('express');

const citiesModel = require('./../model/citites');

const router = express.Router();

router.get("/:id", (req, res, next) => {
    citiesModel.findById(req.params.id)
        .then((city) => res.render("updateCity.hbs", city))
        .catch(next);
});

router.post("/:id", async (req, res, next) => {
    // console.log("toto");

    try{
        await citiesModel.findByIdAndUpdate(req.params.id, req.body)        
        res.redirect("/users")
    } catch (err) {
        next(err)
    }
});

router.get("/:id", async (req, res, next) => {
    try {
        await citiesModel.findByIdAndDelete(req.params.id);
        res.redirect('/users');

    } catch (err) {
        next (err);
    }
})


module.exports = router;