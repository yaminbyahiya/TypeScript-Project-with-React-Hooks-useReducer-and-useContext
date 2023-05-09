//Type Aliases
type stringOrNumber = string | number;
type stringOrNumberArray = (string | number)[];
type Guitarist = {
    name?: string,
    active: boolean,
    albums:stringOrNumberArray
};
type UserId = stringOrNumber;

//Literal Types
let myName: "Dave";
let userName: "Dave" | "John" | "Amy";
userName = "Amy";

//functions
const add = (a:number ,b:number ): number => {
    return a + b;
}
const logMsg = (message:any) => {
    console.log(message);
}
logMsg("Hello!");
logMsg(add(2,3));

let subtract = function (c:number, d:number): number {
    return c-d;
}
type mathFunction = (a:number, b:number) => number;
let multiply:mathFunction = function(c,d){
    return c*d;
}
logMsg(multiply(2,2));
const addAll = (a:number, b:number, c?:number):number => {
    if(typeof c !== "undefined"){
        return a+b+c;
    }else{
        return a+b;
    }
}
const sumAll = (a:number=10, b:number, c:number = 2):number => {
    return a+b+c;
}
logMsg(addAll(2,3,2));
logMsg(addAll(2,3));
logMsg(sumAll(2,3));
logMsg(sumAll(undefined,3));

//Rest parameters
const total = (...nums: number[]): number => {
    return nums.reduce((prev, curr) => prev + curr);
};
logMsg(total(1,2,3,4));
const createError = (errMsg: string): never => {
    throw new Error(errMsg);
};
const infinite = () => {
    let i:number = 1;
    while(true){
        i++;
    }
}
const isNumber = (value:any):boolean => {
    return typeof value === "number" ? true : false;
}
const numberOrStrings = (value:number|string):string => {
    if(typeof value === "string"){
        return "string";
    }
    if(isNumber(value)){
        return "number";
    }
    else{
        return createError("This should not happen");
    }
}
