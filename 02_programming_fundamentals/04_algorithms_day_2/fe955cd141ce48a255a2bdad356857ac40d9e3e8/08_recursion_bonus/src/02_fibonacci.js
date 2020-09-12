

function creaBase(n) {
  const tab = [];

  for (let i= 0; i < 2; i++) {
    tab.push(i);
  }
  return tab;
}


function fibo(n) {

  if (n >= 0) {
    const tab = creaBase(n);

    for (let i = 1; i<= n; i++) {
      tab.push(tab[i-1] + tab[i]);
    }
    return tab[n];
  }
  else return null;

}


// do not remove this line, it is for tests
module.exports = fibo;
