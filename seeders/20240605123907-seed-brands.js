"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const restaurants = [
      "Costa Coffee",
      "Greggs",
      "Subway",
      "McDonald's",
      "KFC",
      "Greene King",
      "Wetherspoon",
      "Caffé Nero",
      "Burger King",
      "Pizza Hut",
      "Pret A Manger",
      "PizzaExpress",
      "Hungry Horse",
      "Lounges",
      "Sushimania",
      "Five Guys",
      "Chef & Brewer Collection",
      "Gail's",
      "Zizzi",
      "Taco Bell",
      "Creams",
      "Coffee#1",
      "Prezzo",
      "Morley's",
      "Favorite",
      "Chaiiwala",
      "Cote",
      "Panku",
      "Itsu",
      "Kaspa's Desserts",
      "Fridays",
      "Poundbakery",
      "Kokoro",
      "Bella Italia",
      "Chopstix",
      "JOE & THE JUICE",
      "Tortilla",
      "Franco Manca",
      "Tops Pizza",
      "Ask Italian",
      "Farmhouse Inns",
      "Wimpy",
      "Muffin Break",
      "Black Sheep Coffee",
      "Turtle Bay",
      "Giggling Squid",
      "Heavenly Desserts",
      "Sam's Chicken",
      "Tim Hortons",
      "Wildwood",
    ];

    const restaurantObjects = restaurants.map((restaurant) => ({
      name: restaurant,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));

    return queryInterface.bulkInsert("Brands", restaurantObjects, {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Brands", null, {});
  },
};
