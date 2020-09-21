const faker = require ("faker");

module.exports = {

  identity: function identity () {

    let mail = faker.internet.domainName();

    let first = faker.name.firstName();

    let last = faker.name.lastName();

    let Id = {
      firstName: first,
      lastName: last,
      city: faker.address.city(),
      phoneNumber: faker.phone.phoneNumber(),
      email: first + "." + last + "@" + mail,
      avatar:faker.internet.avatar(),

    };
  
    return Id;
  },

};

