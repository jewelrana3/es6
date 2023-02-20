// function add(first,second){
// console.log(first,second)
// second = second || 0;
// // if(second === undefined){
// //     second = 0;
// // }
// const total = first + second;
// return total;
// }

// function add(first,second =0){
//     const total = first + second;
//     return total;
// }
// const result = add(12,5);
// console.log(result)

function add(first,last='name'){
    const total = first + ' ' + last;
    return total
}
const ponit = add('juyel')
console.log(ponit)