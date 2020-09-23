
//const tel = "06 62 66 95 54";

export function checkPhoneNumber (phoneNumber) {


        const phoneregex = /([0-9]+) ([0-9]+) ([0-9]+) ([0-9]+) ([0-9]+)/gm;
        const match =phoneNumber.match(phoneregex);

        console.log( match ? true : false);
        return;
};

//console.log(checkPhoneNumber(tel));

