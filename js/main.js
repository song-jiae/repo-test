let textElement  = document.querySelector('#text');
let textArr = [
  "Software Engineer",
  "Data Scientist",
  "UX Designer",
  "Product Manager",
  "Project Manager",
  "DevOps Engineer",
  "Data Engineer",
  "Business Analyst",
  "Systems Analyst",
  "Web Developer",
  "App Developer",
  "Network Engineer",
  "Frontend Developer",
  "Backend Developer",
  "Full Stack",
];
let line = true; //깜빡이는 커서
let idx = 0; //현재 타이핑된 글자의 인덱스
let speed = 100; //시간
let isTyping = true; //타이핑 중인지 여부
let textIdx = 0; // 배열의 선택된 문자의 인덱스
let timeoutId = null; // setTimeout 반환값 저장변수
let isStopped = false; // 타이핑이 멈췄는지 여부

//글자 한개씩 보여주기
function textEffect(){
  if(isStopped) return;//  멈춰 있으면 더이상 진행하지 않도록
  let text = textArr[textIdx];
  if (line){ text += "|"} //커서 깜빡이는 효과
  if(isTyping){ 
    if(idx < text.length){
    textElement.value += text[idx]
    idx++;}
    else{
      isTyping = false; //타이핑 끝
    }
  }else{
    //한개씩 삭제
    if(idx > 0){
      textElement.value = text.slice(0, idx-1);
      idx--;
    }else{
      isTyping = true;
      textIdx = (textIdx + 1) % textArr.length;
    }
  }
  timeoutId = setTimeout(textEffect, speed);
}

//클릭시 타이핑 멈추기
textElement.addEventListener('click', function(){
  isStopped = true;
  if(timeoutId){
    clearTimeout(timeoutId); //타이머 취소
  }
})
textEffect()