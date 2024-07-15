const greet = require('./greeting.js');

describe("return of function greet", function(){

    test("Enter a name and return 'Hello, + name'", function(){
        let name = "Luke";
        let result = greet(name);
        expect(result).toEqual("Hello, Luke")
    });
    test("name passed is undefined, must return 'Hello there'", function(){
        let name = undefined;
        let result = greet(name);
        expect(result).toEqual("Hello there")
    });
    test("name passed is null, must return 'Hello there'", function(){
        let name = null;
        let result = greet(name);
        expect(result).toEqual("Hello there")
    });
    test("name passed is an empty string, must return 'Hello there'", function(){
        let name = "";
        let result = greet(name);
        expect(result).toEqual("Hello there")
    });
})