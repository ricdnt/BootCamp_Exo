const faker =  require ("faker");

module.exports = {
  currentJob: function currentJob() {

    let job = {
      companyName:faker.company.companyName(),
      jobDescriptor: faker.name.jobDescriptor(),
      jobTitle: faker.name.jobTitle(),
    };
    return job;
  },

};


