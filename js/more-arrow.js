const add = (first,second) => first + second;
const getElement = (first,last) => first + ' ' + last;
const number = (a,b) => a*b;
const numberSide = number(7,8)
// console.log(numberSide)
// console.log('kfkf')
 const allOne = () => 3.23;
 console.log(allOne)

 const ponitAll = (num) => num *2;
 const numberS = ponitAll(3);
//  console.log(numberS)
const addNumber = (a,b,c) => {
    const first = a + b;
    const second = b + c;
    const allAdd = first * second;
    const dividNumber = allAdd / 2;
    console.log(dividNumber)
    return dividNumber;
}
addNumber(2,3,4)