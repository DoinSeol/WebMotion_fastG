//화살표함수
// : 기존의 익명함수를 좀 더 쓰기 편하게 축약한 형태

// step1
// function multiply(num1, num2){
//   const result = num1 * num2;
//   return result;
// }


// step2
// const multiply = function(num1, num2){
//   const result = num1 * num2;
//   return result;
// }

// step3
const multiply = (num1, num2) =>{
  const result = num1 * num2;
  return result;
}
console.log(multiply(3, 5));