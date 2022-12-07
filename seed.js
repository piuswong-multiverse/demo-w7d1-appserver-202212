const {Animals} = require("./models/Animals.js")
const seedData = require("./seedData");
const {sequelize} = require("./db")

const syncSeed = async () => {
    await sequelize.sync({force: true});
    await Animals.bulkCreate(seedData)
}

syncSeed()

