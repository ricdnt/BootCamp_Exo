function arrayCrusher(firstArray, secondArray) {
  return [...firstArray, ...secondArray];
}

function recursiveBouncer(list) {
  /*
  const tabInter = array;

  const [first] = tabInter;

  console.log(first);

  for (let i = 1; i < array.length; i++) {
    const tab = array.slice(i);
    const [first] =tab;
    console.log(first);
  }
    
}*/



  if (list.length === 0) {
    return;
  };

  const [head, ...tail] = list;

  console.log(head);

  recursiveBouncer(tail);


}



module.exports = {
  arrayCrusher,
  recursiveBouncer,
};
