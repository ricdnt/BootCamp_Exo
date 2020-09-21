const faker = require ("faker");

module.exports = {

  motivation: function motivation() {

    let motiv = {
      catchPhrase: faker.company.catchPhrase(),
      description: faker.lorem.paragraph(),
    };

    return motiv;
  },

};
