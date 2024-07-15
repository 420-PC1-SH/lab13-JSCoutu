const greet = require('./greeting.js');

describe("return of function greet", function(){

    test("Enter a name and return 'Hello, + name'", function(){
        let name = "Luke";
        let result = greet(name);
        expect(result).toEqual("Hello, Luke")
    });
})