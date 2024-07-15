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
    test("name passed is in capital letters only", function(){
        let name = "HAN";
        let result = greet(name);
        expect(result).toEqual("HELLO HAN")
    });
    test("parameter passed is a table with 2 components", function(){
        let name = ["Jango", "Boba"];
        let result = greet(name);
        expect(result).toEqual("Hello, Jango and Boba")
    });
})