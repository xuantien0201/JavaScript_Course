let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

console.log(arr1)

//spread operator
let arr3 = [1, "abc", ...arr1, ...arr2];
console.log(arr3);

//array.prototype.fill
let arr4 = new Array(5).fill(0);
console.log(arr4);

//array length
let arr5 = [1, 2, 3];
console.log(arr5.length);

let arr6 = ["a",
     1,
     true,
     null,
     undefined,
     { key: "value" },
     [1, 2, 3],
     function() { return "hello"; }];
console.log(arr6);

//for
for (let i = 0; i < arr6.length; i++) {
    console.log(arr6[i]);
}

//for..of
for (let item of arr6) {
    console.log(item);
}

//for..in
for (let index in arr6) {
    console.log(index, arr6[index]);
}