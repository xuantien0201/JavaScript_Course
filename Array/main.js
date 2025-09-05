// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];

// console.log(arr1)

                 // //spread operator
// let arr3 = [1, "abc", ...arr1, ...arr2];
// console.log(arr3);

                // //array.prototype.fill
// let arr4 = new Array(5).fill(0);
// console.log(arr4);

                // //array length
// let arr5 = [1, 2, 3];
// console.log(arr5.length);

// let arr6 = ["a",
//      1,
//      true,
//      null,
//      undefined,
//      { key: "value" },
//      [1, 2, 3],
//      function() { return "hello"; }];
// console.log(arr6);

                    // //vòng lặp for
// for (let i = 0; i < arr6.length; i++) {
//     console.log(arr6[i]);
// }

                    // //vòng lặp for..of
// for (let item of arr6) {
//     console.log(item);
// }

                    // //for..in
// for (let index in arr6) {
//     console.log(index, arr6[index]);
// }

                    // 1 số phương thức cơ bản của array
        // arr.pop() : Lấy phần tử cuối cùng của mảng
// let arr1 = [1, 2, 3,];
// console.log(arr1.pop());
// console.log(arr1);

        // // arr.push() : Thêm phần tử vào cuối mảng
// let arr2 = [1, 2, 3];
// console.log(arr2.push(4));
// console.log(arr2);

        // // arr.shift() : Lấy phần tử đầu tiên của mảng
// let arr3 = [1, 2, 3];
// console.log(arr3.shift());
// console.log(arr3);

        // // arr.unshift() : Thêm phần tử vào đầu mảng
// let arr4 = [1, 2, 3];
// console.log(arr4.unshift(0));
// console.log(arr4);

                    // // length trong JS
// let arr1 = []

// arr1[1000] = "abc"
// // => giá trị của length bằng chỉ số lớn nhất trong mảng +1
// console.log(arr1)

// let arr2 = [1,2,3]

// arr2.length = 2 

// // => 1 cách xóa phần tử trong arr là gán độ dài cho length
// console.log(arr2)

                    // Matrix trong JS
// let matrix = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9],
// ]
// console.log(matrix)
// console.log(matrix[0],[0])

                // // cách để duyệt từng phần tử trong matrix
// for(let i = 0; i < matrix.length; i++){
//     for(let j = 0; j < matrix[i].length; j++){
//         console.log(matrix[i][j])
//     }
// } 
// console.log(matrix.toString)


                //splice trong JS
// let arr1 = [1,2,3,4,5]
// arr1.splice(1, 2, 6, 7) // xóa 2 phần tử bắt đầu từ vị trí 1 và thêm 6, 7 vào
// console.log(arr1.splice(1, 2, 6, 7) ) // in ra các phần tử bị xóa
// console.log(arr1)

                //slice trong JS
// let arr2 = [1, 2, 3, 4, 5]
// let newArr = arr2.slice(1, 4) // cắt từ vị trí 1 đến 4 (không bao gồm vị trí 4)
// console.log(newArr)
// console.log(arr2)

                //concat trong JS
        //concat dùng để nối 2 mảng
// let arr1 = [1, 2, 3]
// let arr2 = arr1.concat([4, 5, 6])
// console.log(arr2)

                //indexOf trong JS
        // dùng để tìm vị trí của phần tử trong mảng
// let arr1 = [1, 2, 44, false, null, "abc"]
// console.log(arr1.indexOf(false)) // trả về vị trí của phần tử trong mảng, nếu không tìm thấy trả về -1
// console.log(arr1.indexOf("abc"))
// console.log(arr1.indexOf(undefined))

                // //lastIndexOf trong JS
        // //tương tự indexOf nhưng tìm từ cuối mảng về đầu mảng
// let arr2 = [1, 2, 3, 1, 2, 3]
// console.log(arr2.lastIndexOf(2)) // trả về vị trí của phần tử trong mảng, nếu không tìm thấy trả về -1
// console.log(arr2.lastIndexOf(4))

                //includes trong JS
        //dùng để kiểm tra phần tử có trong mảng hay không, trả về true hoặc false
// let arr3 = [1, 2, 3, 4, 5]
// console.log(arr3.includes(3)) // true
// console.log(arr3.includes(6)) // false

                //find và findIndex trong JS
        //find trả về phần tử đầu tiên
// let users = [
//     {
//         id: 1,
//         name: "Nguyen Van A",
//         age: 16
//     },
//     {
//         id: 2,
//         name: "Tran Thi B",
//         age: 20
//     },
// ]
// const findUser = users.find(function(user){
//     return user.age > 18
// })
// console.log(findUser)

// //findIndex trả về vị trí của phần tử đầu tiên
// const findUserIndex = users.findIndex(function(user){
//     return user.age > 18
// })