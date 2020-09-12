

function tabCreate(n) {
   
  const tab = [];

  for (let i = n; i > 0; i--) {
    tab.push(i);
    
  }
  return tab;
}

function fact(n) {

  if (n > 0) {

    const tab = tabCreate(n);

    return tab.reduce((amount, prev) => amount * prev);
  }

  else if ( n === 0) {
    return 1;
  }

  else return null;

}

console.log(fact(0));


// do not remove this line, it is for tests
module.exports = fact;
