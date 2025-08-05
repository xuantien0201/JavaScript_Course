// 1, 2: viet ctr nhan vao 2 so roi tinh tong, hieu, tich
// let n1 = parseFloat(prompt("nhap so thu nhat"));
// let n2 = parseFloat(prompt("nhap so thu hai"));

// let tong = n1 + n2 
// let hieu = n1 - n2
// let tich = n1 * n2
// console.log(tong)
// console.log(hieu)
// console.log(tich)

// 3: kiem tra chan le
// let n = parseInt(prompt("Nhap vao so nguyen bat ky"));

// if(isNaN(n)){
//   console.log("Nhap so hop le")
// }
// else if(n % 2 === 0){
//   console.log("Day la so chan")
// }else{
//   console.log("Day la so le")
// }

// 4: min max
// let input = prompt("nhap vao ds so nguyen, cach nhau bang dau phay")
// let number = input.split(",").map(Number)
// if(number.some(isNaN)){
//   console.log("DS chi chua so nguyen")
// }else{
//   let min = Math.min(...number)
//   let max = Math.max(...number)
//   console.log("Max: " + max)
//   console.log("Min: " + min)
// }

//5: TBC
// let input = prompt("nhap vao ds so nguyen, cach nhau bang dau phay")
// let number = input.split(",").map(Number)
// if(number.some(isNaN)){
//   console.log("DS chi chua so nguyen")
// }else{
//   let sum = 0;
//   for(let i = 0; i < number.length; i++){
//     sum = sum + number[i];
//   }
//   let tbc = sum/number.length;
//   console.log(tbc)
// }

//6 so nguyen to 

// function isPrime(n){
//   if(n < 2){// nhỏ hơn 2 không phải snt
//     console.log("khong phai so nguyen to")
//     return false;
//   }
//   for(let i = 2; i <= Math.sqrt(n); i++){
//     if(n % i == 0){//nếu chia hết cho 1 số khác 1 hay chính nó thì không phải snt
//       return false;
//     }
//   }
//   return true;
// }

// let input = prompt("Nhap 1 so nguyen bat ky: ")
// let number = parseInt(input)

// if(isNaN(number)){
//   console.log("Vui long nhap lai")
// }else if(isPrime(number)){
//   console.log("Day la so nguyen to")
// }else{
//   console.log("Khong phai so nguyen to")
// }

//7

// //8 tra ve phan du cua 2 so
// let n1 = parseFloat(prompt("nhap so thu 1: "))
// let n2 = parseFloat(prompt("nhap so thu 2: "))

// function layPhanDu(){
//   let chiadu = n1 % n2
//   console.log(chiadu)
// }

// layPhanDu()

//9: tinh giai thua 
// let input = parseInt(prompt("nhap so nguyen bat ky: "))

// function giaiThua(n){
//   let giaithua = 1;
//   for(let i = 2; i <= n; i++){
//     giaithua = giaithua *i
//   }
//   return giaithua
// }

// let ketqua = giaiThua(input)
// console.log(ketqua)