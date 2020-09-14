

function getConfig(config = {}) {
  let defaultConfig = {
    user: {
      name: "root",
      password: "admin",
    },
    hardware: {
      CPUThreads: 4,
      memory: 2,
      diskSpace: 20,
    },
  };

  return {
    ...defaultConfig,
    ...config,

    user: {
      ...defaultConfig.user,
      ...config.user},

    hardware: {
      ...defaultConfig.hardware,
      ...config.hardware
    }
  };
};



function logInfos(user = {}) {
  const redactedUser = {
    firstName: "<REDACTED>",
    lastName: "<REDACTED>",
    address: {
      city: "<REDACTED>",
      country: "<REDACTED>"},
    
  };

  const userIdentity = {
    ...redactedUser,
    ...user,
    address: {
      ...redactedUser.address,
      ...user.address,
    }
  };

  const {firstName, lastName, address: {city, country},} = userIdentity;

  console.log(`${firstName || redactedUser.firstName} ${lastName || redactedUser.lastName} lives in ${city || redactedUser.address.city}, ${country || redactedUser.address.country}.`);
};


module.exports = {
  getConfig,
  logInfos,
};
