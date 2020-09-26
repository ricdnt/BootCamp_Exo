import { greet } from "./index";

test("if no argument, the return is Hello world", () => {
    expect.assertions(2);

    expect(greet()).toBe("Hello WORLD!");
    expect(greet("Francis")).toBe("Hello FRANCIS!");
}


