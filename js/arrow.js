// function declearation
function add(first,second){
    const total = first + second;
    return total;
}
// function expersion
const add1 = function add1(first,second){
    const total = first + second;
    return total;
}
// function expersion with anonymous function
const add2 = function (first,second){
    const total = first + second;
    return total;
}
const add3 = function (first,second){
    return first + second;
   
}
// arrow function
const add7 = (first,second) => first + second;

const result = add7(22,43);
console.log(result)