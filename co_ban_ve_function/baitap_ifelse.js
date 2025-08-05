//1
// let age;

// age = prompt("Nhap tuoi cua ban: ");

// if(age < 18) {
//     console.log("Ban con nho, khong du tuoi vao truong");
// } else {
//     console.log(age, " tuoi, ban da du tuoi vao truong");
// }

//2
// let number;
// number = parseFloat(prompt("Nhap so bat ky: "));
// if(isNaN(number)) {
//     console.log("Khong phai la so");
// }
// else if(number > 100){
//     console.log("lon hon 100");
// }else{
//     console.log("nho hon 100");
// }

//3
// let number1, number2, number3;
// number1 = parseFloat(prompt("Nhap so thu nhat: "));
// number2 = parseFloat(prompt("Nhap so thu hai: "));
// number3 = parseFloat(prompt("Nhap so thu ba: "));
// if(isNaN(number1) || isNaN(number2) || isNaN(number3)) {
//     console.log("Khong phai la so");
// }else{
//     console.log("So lon nhat la: " + Math.max(number1, number2, number3));
// }

//4
// let n1, n2, n3;
// n1 = parseFloat(prompt("Nhập điểm kiểm tra: "));
// n2 = parseFloat(prompt("Nhập điểm giữa kỳ: "));
// n3 = parseFloat(prompt("Nhập điểm cuối kỳ: "));

// if (n1 > 10 || n2 > 10 || n3 > 10 || n1 < 0 || n2 < 0 || n3 < 0) {
//   console.log("Điểm phải từ 0 đến 10");
// } else {
//   let sum3 = (n1 * 0.1) + (n2 * 0.3) + (n3 * 0.6);

//   // Xếp loại học lực
//   if (sum3 >= 8) {
//     console.log("Giỏi");
//   } else if (sum3 >= 6.5) {
//     console.log("Khá");
//   } else if (sum3 >= 5) {
//     console.log("Trung bình");
//   } else {
//     console.log("Kém");
//   }
// }

// //5
// function giaiPTB2(a, b, c) {
//     if (a === 0) {
//         if (b === 0) {
//             if (c === 0) {
//                 console.log("phuong trinh co vo so nghiem")
//             } else {
//                 console.log("phuong trinh vo nghiem")
//             }
//         } else {
//             console.log("phuong trinh co 1 nghiem duy nhat x = ", -c / b);
//         }
//     } else {
//         let delta = b * b - 4 * a * c;
//         if (delta < 0) {
//             console.log("pt vo nghiem")
//         } else if (delta === 0) {
//             console.log("pt co nghiem kep: x = ", - b / (2 * a))
//         } else {
//             console.log("pt co 2 nghiem pb: ")
//             console.log("x1 = ", (-b + Math.sqrt(delta)) / (2 * a));
//             console.log("x2 = ", (-b - Math.sqrt(delta)) / (2 * a));

//         }
//     }
// }
//     let a = parseFloat(prompt("Nhap so thu nhat: "));
//     let b = parseFloat(prompt("Nhap so thu hai: "));
//     let c = parseFloat(prompt("Nhap so thu ba: "));

// giaiPTB2(a,b,c);

//6: tinh hoa hong nhan duoc tu doanh so ban hang

