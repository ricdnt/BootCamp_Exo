import { toWords } from "./index";

describe ("Test hash", () => {

    test("the function hash sentence by signs ", () => {
    expect.assertions(1);

    const result = "the, world: is hype ipsum!!re!!";
    expect(toWords(result)).toEqual(["the", "world", "is", "hype", "ipsum", "re"]);

    });

    test("next testwhat if the user fill a sentence w/ regex", () => {
        expect.assertions(1);

    const result = " theworldischanging";
    expect(toWords(result)).toEqual(["theworldischanging"]);

    })

})
