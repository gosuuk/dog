const form=document.querySelector(".js-form"),
    input=form.querySelector("input"),
    greeting=document.querySelector(".js-greetings");

const USER_LS="currentUser",
    SHOWING_CN="showing";

function paintGreeting(text){
    form.classList.remove(SHOWING_CN); //텍스트를 색칠하려면, 폼을 숨겨야 함 
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;
}

function loadName(){
    const currentUser=localStorage.getItem(USER_LS);
    if(currentUser===null){ 

    }else{ //현재 유저가 있으면 로컬스토리지에서 가져온 이름을 paint
        paintGreeting(currentUser);
    }
}
function init(){
    loadName();
}
init();