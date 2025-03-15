const userInput = document.querySelector("input");
const submit = document.querySelector("button");
let username = localStorage.getItem("username"); 
userInput.value = username ;

function checkInput (){
    if(userInput.value != ""){
        submit.setAttribute("disabled" , "disabled");
        }
}

checkInput();

submit.addEventListener("click" , ()=>{
    if(userInput.value != ""){
    username = userInput.value ;
    submit.setAttribute("disabled" , "disabled");
    localStorage.setItem("username" , username)
    }
})