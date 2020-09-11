// ## Inverted Right triangle of size 5
//
// ```
// *****
//  ****
//   ***
//    **
//     *
// ```

/*const star = [];

for (let j = 0; j < 5; j++) {
  for (let i = 0; i < j; i++){
      if (j > i) {
        star.push("*");
        console.log("*");
      }
      else {
          console.log("1");
      }
}
}*/

const column = 5;
const height = 5;



const star = [];


for (let i = 1; i <= 5; i++) {
    star.push("*");
    //console.log(star.join(""));
}
console.log(star.join(""));







