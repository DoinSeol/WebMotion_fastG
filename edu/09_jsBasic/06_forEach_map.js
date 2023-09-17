// 배열전용 반복문 forEach, map

/*
  - 콜백함수 : 함수 호출 시 인수가 함수가 들어가는 형태 
*/


const colors = ["red", "green", "blue"];

colors.forEach((el, index, arr)=>{
  // ES5 
  // 반복처리 기능, 유사배열 (DOM반복 가능)
  console.log(el);
  console.log(index);
  console.log(arr);
});

colors.map((el, index, arr)=>{
  // ES6
  // 반복기능 외 추가로 반복되는 배열을 새로운 배열로 복사 (DOM반복 불가능)
  console.log(el);
  console.log(index);
  console.log(arr);  
})