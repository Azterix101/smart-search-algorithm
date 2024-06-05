const { City, Brand, Diet, DishType } = require("./models");

async function extractEntities(searchTerm) {
    const entities = [];

    const cities = await City.findAll();
    const brands = await Brand.findAll();
    const diets = await Diet.findAll();
    const dishTypes = await DishType.findAll();

    const searchTerms = searchTerm.toLowerCase().split(" ");

    searchTerms.forEach((term) => {
    cities.forEach((city) => {
        if (term.includes(city.name.toLowerCase())) {
            entities.push({ city: { id: city.id, name: city.name } });
        }
    });
    brands.forEach((brand) => {
        if (term.includes(brand.name.toLowerCase())) {
            entities.push({ brand: { id: brand.id, name: brand.name } });
        }
    });
    diets.forEach((diet) => {
        if (term.includes(diet.name.toLowerCase())) {
            entities.push({ diet: { id: diet.id, name: diet.name } });
        }
    });
    dishTypes.forEach((dishType) => {
        if (term.includes(dishType.name.toLowerCase())) {
            entities.push({ dishType: { id: dishType.id, name: dishType.name } });
        }
    });
    });

    return entities;
}

module.exports = extractEntities;
