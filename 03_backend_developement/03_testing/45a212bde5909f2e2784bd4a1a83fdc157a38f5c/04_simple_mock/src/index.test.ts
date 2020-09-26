import { helloSailor} from "./index";

describe("testing logging", () => {

    test("test the 1st branch", () => {
   expect.assertions(2);

    const spy = jest.spyOn(console, "log");

    let who: string = "Pierre";

    helloSailor(who);

    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledWith(`Howdy ${who}!`);

    spy.mockRestore();

    })
    
    test("test the 2nd branch", () => {
    expect.assertions(2);
         
    const spy = jest.spyOn(console, "log");
    
    helloSailor();
         
    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledWith("Howdy Sailor! Good day to you!");
         
    spy.mockRestore();
    })

})


