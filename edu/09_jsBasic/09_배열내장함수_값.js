// 배열내장함수

/*
  toString() : 배열을 문자로 변환
  join() : 구분자를 활용해 문자열로 이어 붙이기
  pop() : 배열의 마지막 요소를 제거 (리턴 값으로 잘라낸 요소 반환)
  push() : 배열의 마지막에 새로운 요소 추가 (리턴 값으로 배열의 길이 반환)
  shift() : 배열의 첫 부분 요소 제거 (리턴 값으로 잘라낸 요소 반환)
  unshift() : 배열의 첫 부분에 새로운 요소 추가 (리턴 값으로 길이 반환)
  splice() : (삽입위치, 잘라낼 갯수, 추가할 내용) : 배열에 새로운 요소를 잘라서 붙임
  concat() : 두 개의 배열 합치기
  slice() : 배열 잘라내기
*/

const colBox = ["red", "green", "blue"];
const colBox2 = ["auqa", "pink", "violet"]
const colBox3 = ["hotpink", "orange"]
// const result1_colBox = colBox.toString();
// const result2_colBox = colBox.join(" ");
// const result3_colBox = colBox.pop();
// const result4_colBox = colBox.push("aqua");
// const result5_colBox = colBox.shift();
// const result6_colBox = colBox.unshift("aqua");

// colBox.splice(1, 1, "pink");
// const colBox_result = colBox.concat(colBox2, colBox3);

// console.log(colBox_result);

const result7_colBox = colBox.slice(1);

console.log(colBox);
console.log(result7_colBox);

