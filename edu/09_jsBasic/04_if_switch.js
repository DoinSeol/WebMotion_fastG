// 조건문
// : 특정 조건을 걸어서 해당 조건의 찹, 거짓 유무에 따라 코드의 분기를 생성

/*
  - 조건문 if
  - if ( 조건식1 ) {
    조건식1이 참이면 해당 코드 블록 실행
    거짓이면 해당 코드 블록을 무시하고 다음 조건식으로 이동
  }
  else if ( 조건식2 ) {
    조건식2가 참이면 해당 코드 블록을 실행
    거짓이면 해당 코드 블록을 무시하고 다음 조건식으로 이동
  }
  else {
    위의 모든 조건식이 거짓이면 이 곳의 코드를 실행하고 종료
  }
*/

function division (num1, num2) {
  if ( num1 === undefined || num2 === undefined ) {
    console.error("두 개의 인수값을 모두 넣어주세요");
  }

  if( typeof num1 !== "number" || typeof num2 !== "number") {
    console.error("두 개의 인수값을 모두 숫자로 넣어주세요")
  }

  const result = num1 / num2;
  console.log(result);
}

division(2, 5);


/*
  - 조건문 switch : 여러개의 코드블록 중에서 하나를 선택해야 할 때 사용
  - switch ( 표현식 ) {
    case A : 
      //실행코드블록
      break;
    case B :
      // 실행코드블록
      break;
    default : 
      // 실행코드블록
  }
*/

//console.log(new Date().getDay());  //숫자로 오늘 요일 출력 : 0(일요일)~6(토요일)

switch ( new Date().getDay() ) {
  case 0 :
    console.log("Sunday");
    break;
  case 1 :
    console.log("Monday");
    break;    
  case 2 :
    console.log("Tuesday");
    break; 
  case 3 :
    console.log("Wendesday");
    break; 
  case 4 :
    console.log("Tursday");
    break; 
  case 5 :
    console.log("Friday");
    break; 
  case 6 :
    console.log("Saturday");
    break; 
}
