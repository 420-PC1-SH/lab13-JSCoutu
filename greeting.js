function greet(name){
    if (name === undefined || name === null || name === ""){
        return "Hello there";
    }
    else if(Array.isArray(name)){
        if (name.length <= 2){
        return "Hello, " + name[0] + " and " + name[1];
        }
        else {
            let result = "Hello";
            for(i=0;i<name.length - 1;i++){
               result += ", " + name[i]
            }
            return result + " and " + name[name.length-1];
        }
    }
    else if(name === name.toUpperCase() ){
        return "HELLO " + name;
    }
    else {
        return "Hello, " + name;
    }
}
module.exports = greet;