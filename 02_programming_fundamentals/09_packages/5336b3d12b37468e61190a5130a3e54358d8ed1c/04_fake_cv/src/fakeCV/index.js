const {currentJob} = require ("./currentJob.js");
const {identity} = require ("./identity.js");
const {motivation} = require ("./motivation.js");

module.exports = {

  fakeCv: function fakeCv () {

    let cv = {
      identity: identity(),
      motivation: motivation(),
      currentJob: currentJob(),
    };

    return cv;

  },

};







