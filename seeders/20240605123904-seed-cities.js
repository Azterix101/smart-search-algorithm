"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const cities = [
      "London",
      "Birmingham",
      "Glasgow",
      "Liverpool",
      "Bristol",
      "Manchester",
      "Sheffield",
      "Leeds",
      "Edinburgh",
      "Leicester",
      "Coventry",
      "Bradford",
      "Cardiff",
      "Belfast",
      "Nottingham",
      "Derby",
      "Southampton",
      "Portsmouth",
      "Wolverhampton",
      "Plymouth",
      "Reading",
      "Swansea",
      "Aberdeen",
      "Bournemouth",
      "Middlesbrough",
      "Norwich",
      "Brighton and Hove",
      "Northampton",
      "York",
      "Blackpool",
      "Cambridge",
      "Dundee",
      "Ipswich",
      "Wolverhampton",
      "Luton",
      "Bolton",
      "Swindon",
      "Preston",
      "Milton Keynes",
      "Rotherham",
      "Peterborough",
      "Newport",
      "Sunderland",
      "Walsall",
      "Bury",
      "Crawley",
      "Stockport",
      "Dudley",
      "Teesside",
      "Brighton",
    ];

    const cityObjects = cities.map((city) => ({
      name: city,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));

    return queryInterface.bulkInsert("Cities", cityObjects, {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Cities", null, {});
  },
};
