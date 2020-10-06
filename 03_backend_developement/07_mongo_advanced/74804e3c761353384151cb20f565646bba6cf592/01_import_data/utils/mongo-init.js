/* global db */

db.createUser({
  user: "mongo-advanced-app",
  pwd: "password",
  roles: [{ role: "readWrite", db: "mongo-advanced" }],
});

//mongo mongo-advanced -u mongo-advanced-app -p password