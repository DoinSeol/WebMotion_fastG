// 문자를 숫자로 변환

/*
  parseInt(변환할값) : 해당 값을 정수로 변환 (소수점 아래 버림)
  parseFloat(변환할값) : 해당 값을 실수로 변환
*/

const num_char = "5.8";
const num_result1 = parseInt(num_char);
console.log(num_result1);
console.log(typeof num_result1);

const num_result2 = parseFloat(num_char);
console.log(num_result2);
console.log(typeof num_result2);