"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const diets = [
      "Vegan",
      "Vegetarian",
      "Pescatarian",
      "Paleo",
      "Fruitarian",
      "Ketogenic",
      "Gluten-Free",
      "Dairy-Free",
      "Egg-Free",
      "Soy-Free",
      "Grain-Free",
      "Sugar-Free",
      "Wheat-Free",
      "Nut-Free",
      "Carnivore",
      "Alkaline",
      "Pollotarian",
      "Shellfish-Free",
    ];

    const dietObjects = diets.map((diet) => ({
      name: diet,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));

    return queryInterface.bulkInsert("Diets", dietObjects, {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Diets", null, {});
  },
};
