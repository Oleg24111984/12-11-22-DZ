// function number(a = 5, n = 1) {
//     return for (let i = 2; i <= n; i++) {
//         a = a * a;
//     }
// }

function func1(a = 3) {
    return a * a;
}
console.log(`${func1()}`);

function func2(a = 3) {
    return a + a;
}
console.log(`${func2()}`);

function func3(a = 9, b = 5, c = 2) {
    return (a - b) / c;
}
console.log(`${func3()}`);

function func4(a = 1) {
   return if (a==1) {
    console.log('понедельник');
   } else if (a==2) {
    console.log('вторник');
   } else if (a==3) {
    console.log('среда');
   } else if (a==4) {
    console.log('четверг');
   } else if (a==5) {
    console.log('пятница');
   } else if (a==6) {
    console.log('суббота');
   } else {
    console.log('воскресенье');
   }
}