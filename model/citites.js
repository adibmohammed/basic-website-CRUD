const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const citiesSchema = new Schema({
    name: String,
    country: String,
    population: Number,
    subway: String,
    crimeRate: String,
    website: String
})

const CitiesModel = mongoose.model("cities", citiesSchema);

module.exports = CitiesModel;