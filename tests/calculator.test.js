const calculator = require("../models/calculator");

test("sum 2 + 2 must return 4", () => {
    const result = calculator.sum(2, 2);
    expect(result).toBe(4);
});

test("sum 5 + 100 must return 105", () => {
    const result = calculator.sum(5, 100);
    expect(result).toBe(105);
});

test("sum 'banana' + 100 must return 'Error'", () => {
    const result = calculator.sum("banana", 100);
    expect(result).toBe("Error");
});

test("sum 5 + 'banana' must return 'Error'", () => {
    const result = calculator.sum(5, "banana");
    expect(result).toBe("Error");
});