// level {1/2/3}
//level 1

//1
let arr = [1, 2, 3];
console.log(arr.map((i)=>i+1));

//2
let arr1 = [1, 2, 3];
let sum = arr1.reduce((total, current) => {return total + current;}, 0);
console.log(sum);

//3

let obj = {name: 'Elie', rank: 'Pro'}

let nobj = Object.entries(obj).map(([key, value]) => key+":"+value)
console.log(nobj.join(", "));




