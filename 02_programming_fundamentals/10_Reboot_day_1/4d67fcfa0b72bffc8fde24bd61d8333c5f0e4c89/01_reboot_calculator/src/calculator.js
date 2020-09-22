

let r;
const ask = (question, callback) => r.question (`${question} \n`, callback);

const parseNumber = (number) => {
    const modifiedNumber = number.replace(",", ".");
    return parseFloat(number);

}





export default function calculator (reader) {

    r = reader;

    console.log("Ready to compute operations! \n" + "****************************");

        ask("Enter the first number ? ", (firstInput) => {


            ask("Choose an operation: [ + - * / ] ", (operation) => {


                ask("Enter the second number ? ", (secondInput) => {
 

                    const firstNumber = parseNumber(firstInput);

                    const secondNumber = parseNumber(secondInput);
                    let result;

                    switch(operation) {
                        case "+":
                            result = firstNumber + secondNumber;
                            break;
                        case "-":
                            result = firstNumber - secondNumber;
                            break;
                        case "/":
                            result = firstNumber / secondNumber;
                            break;
                        case "*":
                            result = firstNumber * secondNumber;
                            break;
                        default:
                            console.log("wrong operation");
                            break;
                    }

                    console.log(`${firstNumber} + ${secondNumber} = ${result}`);

                    reader.close();
                });
            });
        });
             
};




