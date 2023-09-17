//반복문

const colors = ["red", "green", "blue", "aqua", "pink"];
console.log(colors.length);

// 반복문 : for
for(let i=0; i<colors.length; i++){
  console.log(colors[i]);
}

const classA = [
  {
    name : "Andy",
    age : 20,
    adress : "seoul",
  },
  {
    name : "Emma",
    age : 30,
    adress : "busan"
  },
  {
    name : "David",
    age : 40,
    adress : "daegu"
  }
];

const student1 = {
    name : "Andy",
    age : 20,
    adress : "seoul",
  }

for(let num=0; num<classA.length; num++){
  console.log(classA[num].name);
}

// for of
// for(let color of colors) console.log(color);
for(let color of colors){
  console.log(color);
}

// for in
for(let key in student1){
  console.log(key);
  console.log(student1[key]);
}

// for
const cars = ["BMW", "VOLVO", "HYUNDAI"];

for(let i=0; i<cars.length; i++){
  console.log(cars[i]);
}

//while
let i=0;
while(cars[i]){
  console.log(cars[i]);
  i++;
}

// 17. 문자의 반복처리
const txt = "HELLO";
for(let letter of txt){
  console.log(letter);
}