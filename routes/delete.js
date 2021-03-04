const express = require('express');

const citiesModel = require('./../model/citites');

const router = express.Router();

router.get("/:id", async (req, res, next) => {
    try {
        await citiesModel.findByIdAndDelete(req.params.id);
        res.redirect('/users');

    } catch (err) {
        next (err);
    }
})

module.exports = router;