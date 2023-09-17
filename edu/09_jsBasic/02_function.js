//함수

plus();
  // minus();

  // 선언적 함수 : 위치에 상관없이 호출구문보다 먼저 찾아 읽음
  function plus(){
    const num1 = 2;
    const num2 = 3;
    console.log(num1 + num2);
  }

  // 대입형 함수 : 호출위치가 자유롭지 않음
  const minus = function(){
    const num1 = 2;
    const num2 = 3;
    console.log(num1 - num2);
  }

  plus();
  minus();

  // 즉시 실행 함수
  (function(){
    const num1 = 2;
    const num2 = 3;
    console.log(num1 + num2);
  })();

// 매개변수 (parameter)
  function plus_para(num1, num2){
    const result = num1 + num2;
    // console.log(result);
    return result;
  }

  plus_para(3, 5);

  const total = plus_para(2.14, 3.15);
  console.log(total);


//ghktk