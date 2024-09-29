// && and || Operation
function getaName(name) {
    return name
}
let a = true;
let b = false;

console.log(a && b);
console.log(a && getaName("See"));
console.log(a || getaName("See"));

// Terrinary Operator
let showText = true;
function aName(argName) {
    return argName
}
function bName(argName) {
    return argName
}
if (showText) {
    console.log(aName('See')) 
} else {
    console.log(bName('C'))
}

showText ? aName('See') : bName('C')

// Object
const id = 1;
const proName = 'See';
const rating = 4;

const product = {
    id,
    proName,
    rating
};
console.log(product)
const product2 = {
    dec: "Pro",
    id,
    proName,
    rating
};
const getTwoDec = product2.dec;
console.log(getTwoDec);

const {dec} = product2 // Same above
console.log(dec)

// Array
const array = [1,2,3];

let getArST = array[0]
let getArCD = array[1]
console.log(getArST, getArCD);

const [getArSTB,  getArCDB] = array; // Same above
console.log(getArSTB, getArCDB);

// 
function mulNum(num1 = 1, num2 = 1) {
    console.log(num1, num2)
    return num1 * num2
}
console.log(mulNum(11));

const array2 = [2,3,4]
const array3 = [11,12,13]
console.log([99, ...array2, 90, ...array3, 1000])
// spread 
function getInfo(a, ...c) {
    console.log(a, c);
    return 'See';
}
console.log(getInfo(1,2,13,56,46,6,5));

// 
let getlistPro = document.querySelector('.list-name');
function renderProducts() {
    getlistPro.innerHTML = getProducts
    .map((singleProductItem) =>`<p></p>`)
    .join(" ");
}
async function fetchList() {
    try {
        const apiRes = await fetch('some http://', {
            method: 'GET'
        })
        const result = await apiRes.json();
        if (result?.products?.length > 0) renderProducts(result)
    } catch (e) {
        console.log(e)
    }
}
fetchList()