function filter(array, str) {

  const tabEven = [];
  const tabOdd = [];
  
  if (str === "even") {
    array.forEach(function test(x){
      if (x % 2 === 0) {
        tabEven.push(x);
      }
    });
    return tabEven;
  }

  else if (str === "odd") {
    array.forEach(function test(x){
      if (x % 2 !== 0 ) {
        tabOdd.push(x);
      }
    });
    return tabOdd;
  }

  else (str != "odd" || str !="even");
  return array;
  
}

const test = [- 1,2,-3,-4,-5,-6];
const string1 = "odd";

console.log(filter(test, string1));


// do not remove this line, it is for tests
module.exports = filter;
