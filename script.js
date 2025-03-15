const userInput = document.querySelector("input");
const submit = document.querySelector("button");
const heading = document.querySelector("h1");

let username = localStorage.getItem("username");
userInput.value = username;

function checkInput() {
  if (userInput.value != "") {
    submit.setAttribute("disabled", "disabled");
  }
}

checkInput();
hadleHeading()

submit.addEventListener("click", () => {
  if (userInput.value != "") {
    username = userInput.value;
    submit.setAttribute("disabled", "disabled");
    localStorage.setItem("username", username);
  }
  hadleHeading()
});


function hadleHeading(){
    if (username) {
        heading.innerHTML = `Welcome , ${username}`;
      } else {
        heading.innerHTML = `Welcome , Gueset`;
      }
      
}