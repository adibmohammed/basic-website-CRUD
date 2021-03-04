require("../config/db.config");

const  mongoose  = require("mongoose")
const myCitiesModel = require("../model/citites")

const citiesArray = [{
    name: "Rabat",
    country: "Morocco",
    population: 577827,
    subway: "Tramways",
    crimeRate: "Low",
    website: ""
}

]

myCitiesModel.create(citiesArray)
    .then((citiesRes) => {
        console.log(citiesRes);
    })
    .catch((error) => {
        console.log(error);
    })

// mongoose.connection.close();
