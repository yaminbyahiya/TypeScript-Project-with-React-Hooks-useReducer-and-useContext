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
const allAll = (a:number, b:number, c?:number):number => {
    if(typeof c !== "undefined"){
        return a+b+c;
    }else{
        return a+b;
    }
}
