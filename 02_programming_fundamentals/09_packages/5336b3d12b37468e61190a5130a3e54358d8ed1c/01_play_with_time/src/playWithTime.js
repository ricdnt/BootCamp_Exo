import moment from "moment";

const formatDate = (date) => {
  return moment(date).format("dddd Do MMMM YYYY");
};

const yearsSinceDate = (date) => {
  const year1 = moment(date).year();
  const year2 = moment().year();
  return year2 - year1 ;

};

const daysSinceDate = (date) => {
  const day1 = moment(date);
  const day2 = moment();
  return day2.diff(day1, "days") + 1 ;  //+1 car le test utilise un arrondi sup pour prendre en compte le jour en cours comme terminé.
};

const getDayFromDate = (date) => {
  return moment(date).format("dddd");
};

export {formatDate, yearsSinceDate, daysSinceDate, getDayFromDate};
