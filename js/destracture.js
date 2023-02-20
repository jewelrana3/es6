const fish = {
    name:'juyel',
    color:'red',
    price:1222,
}
const {name} = fish;
console.log(name);

// arrow destracture
const [number,baba,haha,mama] = [23,44,56,34];
console.log(haha);

const noyok = ['sakib','dev','jeet'];
const [king,master,nana] = noyok;
console.log(master)

function getBaba(){
    return['alim','baba']
}

const [chacha,kaka] = getBaba();
console.log(kaka,chacha)