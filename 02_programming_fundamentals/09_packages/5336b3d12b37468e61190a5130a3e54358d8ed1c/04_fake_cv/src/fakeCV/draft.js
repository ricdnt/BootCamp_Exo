const faker = require("faker");

//const name = faker.name.firstName();

const mail = faker.internet.domainName();

const ident = "Ric" + "." + "dud" + "@" + faker.internet.domainName() ;


//console.log(name);
console.log (mail);

console.log(ident);




