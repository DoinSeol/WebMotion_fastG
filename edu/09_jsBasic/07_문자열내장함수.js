// 문자열 내장합수

/*
  문자열.length : 문자열의 길이를 반환
  문자열.indexOf : 찾고자 하는 문자열의 위치 반환 (포함하지 않을 경우 -1의 값을 출력해줌)
  문자열.slice() : 문자열에서 특정 부분을 추출해서 새로운 문자열로 반환
  문자열.replace() : 문자열에서 특정 문자값을 바꿔줌
  문자열.split() : 문자열을 배열로 변환
*/

const txt1 = "Hello World";
console.log(txt1.length);
console.log(txt1.indexOf("Wo"));

const txt2 = txt1.slice(0, 5);
console.log(txt2);

const txt3 = txt1.substr(6, 3);
console.log(txt3);


// ----- 일정 문자 수 초과 시 … 출력

const origin_txt = "학교종이 땡땡땡 어서 모이자 선생님이 우리를 기다리신다.";
let origin_result = '';

/*
if (origin_txt.length > 15) {
  origin_result = origin_txt.substr(0, 15) + "...";
} else {
  origin_result = origin_txt;
}
*/

// 위 조건문 축약 가능 
// 삼항연산자 : ? 앞의 조건식이 참이면 ?뒤의 코드가 실행, 거짓이면, :뒤의 코드 실행
(origin_txt.length > 15) ? result = origin_result = origin_txt.substr(0, 15) + "..." : origin_result = origin_txt;

console.log(origin_result);



// ------ replace
let introduce = "우리 ABC 회사는 높은 품질의 제품을 만들고 있으며, ABC 라는 회사 브래드 가치를 높이기 위해서 노력하고 있습니다. 앞으로 우리 Abc 회사 제품을 많이 애용해주세요."
console.log(introduce);

// replace의 단점 : 첫 번째로 나오는 단어만 바뀜
const intro2 = introduce.replace("ABC", "BBC"); 
console.log(intro2);

// 모든 단어 교체 (대소문자 구분됨) -> g : global
const intro3 = introduce.replace(/ABC/g, "BBC");
console.log(intro3);

// 대소문자 통합하여 교체 -> i
const intro4 = introduce.replace(/ABC/ig, "BBC");
console.log(intro4);


// ----- split
colors = "red,green,blue";
const arr = colors.split(",");
console.log(arr);

